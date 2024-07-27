import FormControl from "../components/formik/FormControl";

export default function BuildSettings({ formik }) {
  return (
    <div className="flex flex-row mt-[20px] lg:mt-[0px] mb-[20px] justify-between gap-2 w-full">
      <FormControl
        control="buildcommands"
        type="text"
        name="buildcommands"
        label="Frontend build command"
        placeholder="e.g. npm run build"
        formik={formik}
      />
      <FormControl
        control="environmentvariables"
        type="text"
        name="environmentvariables"
        label="Environment variables"
        placeholder="e.g. env"
        formik={formik}
      />
    </div>
  );
}
