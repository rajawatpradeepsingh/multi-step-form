import FormControl from "../components/formik/FormControl";

export default function AppDetails({ formik }) {
  return (
    <div className="flex flex-col mt-[20px] lg:mt-[0px] mb-[20px] justify-between gap-2 w-full">
      <FormControl
        control="name"
        type="text"
        name="name"
        label="Name"
        placeholder="e.g. Accunai"
        formik={formik}
      />
      <FormControl
        control="description"
        type="text"
        name="description"
        label="Description"
        placeholder="e.g. Helping companies implement AI faster with accuracy"
        formik={formik}
      />
    </div>
  );
}
