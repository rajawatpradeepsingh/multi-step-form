export default function LastStep(props) {
  const {formik} = props;
  return (
    <div className="my-[15px] mt-[30px] lg:mt-[0px]flex flex-col justify-between">
      <div className="flex flex-col p-[15px] rounded-sm shadow-review mb-4">
        <div>
          <h3 className="font-bold mb-3">App Details</h3>
          <p className="flex flex-col font-semibold text-gray-400">
            Name
            <span className="text-black font-semibold">
              {formik.values.name}
            </span>
          </p>
          <p className="flex flex-col font-semibold text-gray-400">
            Description:{" "}
            <span className="text-black font-semibold mb-3">
              {formik.values.description}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col p-[15px] rounded-sm shadow-review mb-4">
        <div>
          <h3 className="font-bold mb-3">Repository Configuration</h3>
          <p className="flex flex-col font-semibold text-gray-400">
            Repository Url:{" "}
            <span className="text-black font-semibold">
              {formik.values.repourl}
            </span>
          </p>
          <p className="flex flex-col font-semibold text-gray-400">
            Branch:{" "}
            <span className="text-black font-semibold mb-3">
              {formik.values.branch}
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col p-[15px] rounded-sm shadow-review mb-4">
        <div>
          <h3 className="font-bold mb-3">Build Settings</h3>
          <p className="flex flex-col font-semibold text-gray-400">
            Build Commands:{" "}
            <span className="text-black font-semibold">
              {formik.values.buildcommands}
            </span>
          </p>
          <p className="flex flex-col font-semibold text-gray-400">
            Environment Variables:{" "}
            <span className="text-black font-semibold mb-3">
              {formik.values.environmentvariables}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
