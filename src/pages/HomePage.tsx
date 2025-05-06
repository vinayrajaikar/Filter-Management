import { useEffect, useState } from "react"
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {

    type FilterSchema = {
        id: string;
        entity: string;
        displayName: string;
        type: string;
        column: string;
        displayNameCode: string;
        picklistName: string;
    };

    const [FilterData,setFilterData] = useState<FilterSchema[]>([])
    const navigate = useNavigate();

    const deleteFilter = async(id:string)=>{
        try{
            await axios.delete(`http://localhost:3000/filters/${id}`)
            alert(`filter having id ${id} deleted`)
        } catch (error) { 
            alert(`failed to delete filter`)
        }
    }

    useEffect(()=>{
        console.log('re-render');
        const getFilterData = async() =>{
            try{
                const fetchedData = await axios.get(`http://localhost:3000/filters`);
                setFilterData(fetchedData.data)
            }
            catch(error){
                alert("failed to fetch data")
            }
        }
        getFilterData();
    },[])

  return (
    <>
      <div className="bg-[#F8FAFC] w-full min-h-screen flex justify-center" >
        <div className="w-[90vw] h-[90vh] m-10  p-8 ">
            <div className="flex items-center justify-between ">
                <div>
                    <h1 className="text-4xl font-bold text-slate-800">Filter Management</h1>
                    <p className="text-xl text-slate-600 pt-3"> View and Manage Your filter configurations</p>
                </div>
                <div>
                    <button className="border border-slate-100 rounded-md p-2 text-white text-xl bg-blue-500 hover:bg-blue-600 flex items-center gap-3" onClick={()=>{navigate("/create_filter")}}>
                        <CirclePlus />
                        Create New Filter
                    </button>
                </div>
            </div>

            <div className="w-full h-auto border border-slate-400 rounded-md mt-10 overflow-x-auto">
                <div className="min-w-max">
                    <table className="w-full">
                        <thead className="h-12 border-b border-slate-400 bg-slate-200">
                            <tr >
                                <th className="text-xl text-slate-700 font-normal">Entity</th>
                                <th className="text-xl text-slate-700 font-normal">Display Name</th>
                                <th className="text-xl text-slate-700 font-normal">Type</th>
                                <th className="text-xl text-slate-700 font-normal">Column</th>
                                <th className="text-xl text-slate-700 font-normal">DisplayNameCode</th>
                                <th className="text-xl text-slate-700 font-normal">PicklistName</th>
                                <th className="text-xl text-slate-700 font-normal">Actions</th>          
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                            {
                                FilterData.map((data,index)=>(
                                    <tr key={index} className="">
                                        <td className="text-center p-2">{data.entity}</td>
                                        <td className="text-center p-2">{data.displayName}</td>
                                        <td className="text-center p-2">{data.type}</td>
                                        <td className="text-center p-2">{data.column}</td>
                                        <td className="text-center p-2">{data.displayNameCode}</td>
                                        <td className="text-center p-2">{data.picklistName}</td>
                                        <td>
                                            <div className="flex items-center justify-center gap-3">
                                                <SquarePen className="text-slate-600" onClick={()=>{navigate(`/update_filter/${data.id}`)}}/>
                                                <Trash2 className="text-slate-600" onClick={()=>{ deleteFilter(data.id) }}/>
                                            </div>
                                        </td>
                                    </tr>
                        
                                ))
                        
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
