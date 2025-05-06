import { useState } from "react"
import { data } from "../utils/dataTest"
import { SquarePen } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { CirclePlus } from 'lucide-react';

const HomePage = () => {

    const [FilterData,setFilterData] = useState(data)


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
                    <button className="border border-slate-100 rounded-md p-2 text-white text-xl bg-blue-500 hover:bg-blue-600 flex items-center gap-3">
                        <CirclePlus />
                        Create New Filter
                    </button>
                </div>
            </div>

            <div className="w-full h-auto border border-slate-400 rounded-md mt-10 overflow-x-auto">
                <div className="min-w-max">
                    <table className="table-auto w-full">
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
                                                <SquarePen className="text-slate-600"/>
                                                <Trash2 className="text-slate-600"/>
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
