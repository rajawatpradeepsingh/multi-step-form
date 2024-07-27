import FormControl from "../components/formik/FormControl";

export default function RepositoryConfiguration({ formik }) {
  return (
    <div className="flex flex-col mt-[20px] lg:mt-[0px] mb-[20px] justify-between gap-2 w-full">
      <FormControl
        control="repourl"
        type="text"
        name="repourl"
        label="Repository url"
        placeholder="e.g. code-app/accunai"
        formik={formik}
      />
      <FormControl
        control="branch"
        type="text"
        name="branch"
        label="Branch name"
        placeholder="e.g. main"
        formik={formik}
      />
    </div>
  );
}
