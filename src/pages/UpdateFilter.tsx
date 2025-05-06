import { FormProvider, useForm } from "react-hook-form"
import { FormInput } from "../components/FormWrapper";
import CustomOptionsField from "../components/CustomOptionsField";
import { CreateFilterData } from "../utils/FilterSchema";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateFilter = () => {

  const navigate = useNavigate();
  const {id} = useParams();
  const methods = useForm<CreateFilterData>();

  useEffect(()=>{
    console.log('re-render');
    const getFilterData = async() =>{
        try{
            const fetchedData = await axios.get(`http://localhost:3000/filters/${id}`);
            methods.reset(fetchedData.data);
        }
        catch(error){
            alert("failed to fetch data")
        }
    }
    getFilterData();
  },[])

  const onSubmit = async(data: CreateFilterData) =>{
    console.log("Form Data",data)
    try{
      const updatedFilterData = await axios.put(`http://localhost:3000/filters/${id}`,data);
      console.log(updatedFilterData);
      alert("filter updated successfully");
      navigate("/")
    }
    catch(error){
      alert("Failed to add filter")
    }
  }


  return (
    <>
      <div className="bg-[#F7F9FB] w-full min-h-screen flex items-center justify-center ">
        <div className="w-30 w-140 h-230 m-10">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-800">Update Filter</h1>
            </div>

            <div className="w-full mt-2 border border-gray-400 rounded-md h-auto bg-[#FFFFFF] flex flex-wrap gap-10 px-10" >
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} >
                  <div className="flex flex-wrap gap-4 mt-5 mx-5">
                    <FormInput label="Entity" name="entity" type="select" options={["ACCOUNT", "BUYING_CENTER", "CONTACT", "OPPORTUNITY, ENGAGEMENT", "USER", "PICKLIST_OPTION", "OFFERING"]} validation = {{required: "Entity is required"}} />
                    <FormInput label="Display Name" name="displayName" placeholder="eg. Status" validation={{required:"display Name is required",minLength:{value:3,message:"display Name must contain atleast 3 charcters"}}}/>
                    <FormInput label="Display Name Code" name="displayNameCode" placeholder="eg. FILTERS.CONTACT.STATUS" validation={{required:"display name code  is required"}}/>
                    <FormInput label="Column" name="column" placeholder="eg. Status" validation={{required:"column is required"}}/>
                    <FormInput label="Picklist Name" name="picklistName" placeholder="eg. contact_statuses"/>
                    <FormInput label="Filter Type" name="filterType" type="select" options={["Lookup","Boolean","Date Range"]}/>
                    <FormInput label="Multi-Select" name="multiselect" type="select" options={["Yes","No"]}/>
                    <FormInput label="Horizontal Layout" name="horizontalLayout" type="select" options={["Yes","No"]}/>
                    <FormInput label="Range Filter" name="rangeFilter" type="select" options={["Yes","No"]}/>
                    <CustomOptionsField/>
                  </div>

                  <div className="flex items-center justify-center gap-20 mt-5 pb-10">
                    <button className="border border-slate-400 rounded-md p-2 w-30" onClick={()=>navigate('/')}>Cancel</button>
                    <button type="submit" className="border border-slate-100 rounded-md p-2 text-white bg-blue-500 w-30 hover:bg-blue-600">Save</button>
                  </div>
                  
                </form>
              </FormProvider>
              
            </div>
            
    
        </div>
      </div>
    </>
  )
}

export default UpdateFilter
