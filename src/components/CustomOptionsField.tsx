import { Trash } from "lucide-react";
import { useFormContext, useFieldArray } from "react-hook-form";

const CustomOptionsField = () => {
  // useFormContext gives access to form methods like control and register
  const { control, register } = useFormContext();

  // useFieldArray manages an array of inputs under the "customOptions" key in the form
  const { fields, append, remove } = useFieldArray({
    control,                // tells useFieldArray how to connect to the form
    name: "customOptions",  // the key where your array of objects will be stored in form data// must match your form field name
  });

  return (
    <div className="p-2">
      <label className="text-sm text-slate-700 block mb-1">Custom Options</label>

      {fields.length === 0 ? (
        <div className="border border-dashed border-slate-600 rounded-md p-1 px-2 mt-1 w-105">
          No custom options defined
        </div>
      ) : (
        <div className="border w-105 mt-1 rounded-md bg-[#F7F9FB]">
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center justify-between p-2">
              <input
                type="text"
                placeholder="Label"
                {...register(`customOptions.${index}.label`)}
                className="border rounded-md p-0.5 px-2 border-gray-400 w-40"
              />
              <input
                type="text"
                placeholder="Value"
                {...register(`customOptions.${index}.value`)}
                className="border rounded-md p-0.5 px-2 border-gray-400 w-40"
              />
              <div onClick={() => remove(index)} className="cursor-pointer">
                <Trash className="w-5 h-5 text-slate-600" />
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="border p-1 mt-5 rounded-md w-30 text-blue-500"
        onClick={() => append({ label: "", value: "" })} // adds a new object to the array
      >
        Add Option
      </button>
    </div>
  );
};

export default CustomOptionsField;
