import { Field, ErrorMessage } from "formik";
import Errors from "../formik/Errors";

export default function NameInput(props) {
  const { label, name, formik, ...rest } = props;
  return (
    <div className="flex flex-col my-[10px] justify-around w-full">
      <div className="py-[5px] font-bold text-[13px] flex flex-row justify-between">
        <label htmlFor={name}>{label}</label>
        <ErrorMessage name={name} component={Errors} />
      </div>
      <Field
        id={name}
        name={name}
        className="flex flex-col justify-around w-full p-[6px] font-semibold border rounded-md shadow-input focus:outline-none focus:border-[#715ACD] focus:border-[3px]"
        style={
          formik.errors.name &&
          formik.touched.name && { border: "2px solid hsl(354, 84%, 57%)" }
        }
        {...rest}
      />
    </div>
  );
}
