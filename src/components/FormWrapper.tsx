import {RegisterOptions, useFormContext} from "react-hook-form"

type FormInputProps = {
    label: string,
    name: string,
    placeholder?: string;
    type?: string;
    options?: string[];
    validation?: RegisterOptions;
    value?: string
}

export const FormInput = ({label,name,type="text",options = [],placeholder,validation,value}: FormInputProps) =>{

    const {
        register,
        formState: {errors}
    } = useFormContext();

    return (
        <div className="p-2">
            <label className="text-sm text-slate-700 block">{label}</label>

            {type === "select" ?(
                    <select {...register(name)} className="border rounded-md p-1 mt-1 w-105">
                        <option value="">Select {label}</option>
                        {options.map((opt,idx)=>(
                            <option key={idx} value={opt}>{opt}</option>
                        ))}
                    </select>
            ):(
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    {...register(name,validation)}
                    value={value}
                    className=" border rounded-md p-0.5 mt-1 text-md placeholder:text-sm placeholder:px-2 "
                />
            )}

            {errors[name] && (
                <p className="text-red-600 text-sm">{(errors[name] as any)?.message}</p>
            )}
            
        </div>
    )
}
