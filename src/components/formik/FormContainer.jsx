import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AppDetails from "../../pages/AppDetails";
import RepositoryConfiguration from "../../pages/RepositoryConfiguration";
import BuildSettings from "../../pages/BuildSettings";
import Review from "../../pages/Review";
import Complete from "../../pages/Complete";
import FormProgress from "../FormProgress";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function FormContainer() {
  const [formStep, setFormStep] = useState(0);

  const navigate = useNavigate();

  const formTitles = [
    "App Details",
    "Add repository and branch",
    "Build Settings",
    "Review & Submit",
  ];

  const formSubHeadings = [
    "Please provide name and description of the application.",
    "Please provide repository url and branch name.",
    "Please enter your 'Frontend build command' and 'Environment variables'.",
    "Double-check everything looks OK before confirming.",
  ];

  function pageDisplay(formik) {
    switch (formStep) {
      case 0:
        return <AppDetails formik={formik} />;
      case 1:
        return <RepositoryConfiguration formik={formik} />;
      case 2:
        return <BuildSettings formik={formik} />;
      case 3:
        return <Review formik={formik} setFormStep={setFormStep} />;
      default:
        return null;
    }
  }

  function handleNextStep(formik) {
    const { values, validateField, setTouched, errors } = formik;
    if ((formStep === 0 && !values.name, !values.description)) {
      validateField("name", "description");
      setTouched({
        name: true,
        description: true,
      });
    } else if (formStep === 0 && !errors.name && !errors.description) {
      setFormStep(1);
    }
    if (formStep === 1 && !values.repourl && !values.branch) {
      validateField("repourl", "branch");
      setTouched({
        repourl: true,
        branch: true,
      });
    } else if (formStep === 1 && !errors.repourl && !errors.branch) {
      setFormStep(2);
    }
    if (
      formStep === 2 &&
      !values.buildcommands &&
      !values.environmentvariables
    ) {
      validateField("repourl", "branch");
      setTouched({
        buildcommands: true,
        environmentvariables: true,
      });
    } else if (
      formStep === 2 &&
      !errors.buildcommands &&
      !errors.environmentvariables
    ) {
      setFormStep(3);
    }

    if (formStep === 3) {
      setFormStep(4);
    }
  }

  const initialValues = {
    name: "",
    description: "",
    repourl: "",
    branch: "",
    buildcommands: "",
    environmentvariables: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    description: Yup.string().required("This field is required"),
    branch: Yup.string().required("This field is required"),
    environmentvariables: Yup.string().required("This field is required"),
    buildcommands: Yup.string().required("This field is required"),
    repourl: Yup.string().required("This field is required"),
  });

  async function onSubmit(values) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormStep(4);
    console.log("Submitted the following values:", values);
    navigate("/form/complete");
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form className="h-full w-full flex flex-row">
                    <FormProgress formStep={formStep} setFormStep={setFormStep} handleNextStep={handleNextStep} formik={formik}/>
                    <div className="flex flex-col py-[20px] px-[30px] w-full max-h-screen overflow-y-auto mb-[200px] lg:mb-[100px]">
                    <div className="flex flex-col justify-around h-[80px] ">
                <h1 className="text-black font-bold">{formTitles[formStep]}</h1>
                <p className="text-gray-400">{formSubHeadings[formStep]}</p>
              </div>
                    {pageDisplay(formik)}
                    <hr />
                    <div className="flex flex-col lg:flex-row w-[200px] fixed bottom-10 lg:gap-0 gap-3 lg:w-[300px] justify-between self-end pt-[20px]">
                      <button
                        className={
                          formStep === 4
                            ? "hidden"
                            : "text-[#715ACD] text-[14px] font-bold hover:bg-violet-50 h-[40px] w-[80px] self-center rounded-md"
                        }
                        type="button"
                        disabled={formik.isSubmitting}
                        onClick={() => {
                          navigate("/");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className={
                          formStep === 0
                            ? "disabled disabled:cursor-not-allowed border-gray-200 border text-gray-500 h-[40px] w-[100px] self-center font-bold rounded-md"
                            : "'text-sm text-black border border-gray-200 rounded-md h-[40px] w-[100px] self-center font-bold hover:border-[#715ACD] hover:bg-violet-50 duration-200 delay-200'"
                        }
                        type="button"
                        disabled={formStep === 0 || formik.isSubmitting}
                        onClick={() => {
                          setFormStep((currentPage) => currentPage - 1);
                        }}
                      >
                        Previous
                      </button>
                      {formStep < 3 && (
                        <button
                          className="text-[14px] font-bold text-violet-50 bg-[#715ACD] shadow-button h-[40px] w-[80px] self-center rounded-md"
                          type="button"
                          onClick={() => {
                            handleNextStep(formik);
                          }}
                        >
                          Next
                        </button>
                      )}
                      {formStep === 3 && (
                        <button
                          className="text-[14px] font-bold text-violet-50 bg-[#715ACD] shadow-button h-[40px] w-[80px] self-center rounded-md"
                          type="submit"
                          disabled={formik.isSubmitting}
                          onClick={() => {
                            onSubmit();
                          }}
                        >
                          {formik.isSubmitting ? "Loading..." : "Submit"}
                        </button>
                      )}
                    </div> </div>
                  </Form>
                )}
              </Formik>
           
          }
        />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </>
  );
}
