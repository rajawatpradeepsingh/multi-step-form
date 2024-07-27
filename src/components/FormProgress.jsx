import { FaCheck } from "react-icons/fa";

export default function Progress({ formStep }) {
  return (
    <div className="flex flex-col px-7 py-5 text-sm shadow-right md:w-[500px] lg:w-[500px] ">
      <div className="flex">
        <div
          className={
            formStep === 0
              ? "mx-[5px] w-[40px] h-[40px] font-bold text-[#715ACD] flex justify-center items-center border-2 rounded-full border-[#715ACD]"
              : "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center rounded-full bg-[#B6E1BF]"
          }
        >
          {formStep === 0 ? (
            <div className="m-[5px] w-[20px] h-[20px] bg-[#715ACD] font-bold text-slate-500 flex justify-center items-center rounded-full"></div>
          ) : (
            <div className="mx-[5px] text-[#037F0C] ">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="pl-2.5 hidden md:block">
          <h4
            className={
              formStep === 0
                ? "text-slate-600 font-bold mt-[10px]"
                : "text-[#034807] font-semibold mt-[10px]"
            }
          >
            App details
          </h4>
        </div>
      </div>
      <div className="border-l border-gray-300 h-4 ml-[24px]"></div>
      <div className="flex">
        <div
          className={
            formStep === 1
              ? "mx-[5px] w-[40px] h-[40px] font-bold text-[#715ACD] flex justify-center items-center border-2 rounded-full border-[#715ACD]"
              : formStep === 0
              ? "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center border-2 rounded-full border-slate-400"
              : "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center rounded-full bg-[#B6E1BF]"
          }
        >
          {formStep === 1 ? (
            <div className="m-[5px] w-[20px] h-[20px] bg-[#715ACD] font-bold text-slate-500 flex justify-center items-center rounded-full"></div>
          ) : formStep === 0 ? (
            <div>2</div>
          ) : (
            <div className="mx-[5px] text-[#037F0C] ">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="pl-2.5 hidden md:block">
          <h4
            className={
              formStep === 1
                ? "text-slate-600 font-bold mt-[10px]"
                : formStep === 0
                ? "text-slate-500 font-semibold mt-[10px]"
                : "text-[#034807] font-semibold mt-[10px]"
            }
          >
            Add repository and branch
          </h4>
        </div>
      </div>
      <div className="border-l border-gray-300 h-4 ml-[24px]"></div>
      <div className="flex">
        <div
          className={
            formStep === 2
              ? "mx-[5px] w-[40px] h-[40px] font-bold text-[#715ACD] flex justify-center items-center border-2 rounded-full border-[#715ACD]"
              : formStep === 1 || formStep === 0
              ? "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center border-2 rounded-full border-slate-400"
              : "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center rounded-full bg-[#B6E1BF]"
          }
        >
          {formStep === 2 ? (
            <div className="m-[5px] w-[20px] h-[20px] bg-[#715ACD] font-bold text-slate-500 flex justify-center items-center rounded-full"></div>
          ) : formStep === 1 || formStep === 0 ? (
            <div>3</div>
          ) : (
            <div className="mx-[5px] text-[#037F0C] ">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="pl-2.5 hidden md:block">
          <h4
            className={
              formStep === 2
                ? "text-slate-600 font-bold mt-[10px]"
                : formStep === 1 || formStep === 0
                ? "text-slate-500 font-semibold mt-[10px]"
                : "text-[#034807] font-semibold mt-[10px]"
            }
          >
            Build settings
          </h4>
        </div>
      </div>
      <div className="border-l border-gray-300 h-4 ml-[24px]"></div>
      <div className="flex">
        <div
          className={
            formStep === 3
              ? "mx-[5px] w-[40px] h-[40px] font-bold text-[#715ACD] flex justify-center items-center border-2 rounded-full border-[#715ACD]"
              : formStep === 2 || formStep === 1 || formStep === 0
              ? "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center border-2 rounded-full border-slate-400"
              : "mx-[5px] w-[38px] h-[38px] font-bold text-slate-600 flex justify-center items-center rounded-full bg-[#B6E1BF]"
          }
        >
          {formStep === 3 ? (
            <div className="m-[5px] w-[20px] h-[20px] bg-[#715ACD] font-bold text-slate-500 flex justify-center items-center rounded-full"></div>
          ) : formStep === 2 || formStep === 1 || formStep === 0 ? (
            <div>4</div>
          ) : (
            <div className="mx-[5px] text-[#037F0C] ">
              <FaCheck />
            </div>
          )}
        </div>
        <div className="pl-2.5 hidden md:block">
          <h4
            className={
              formStep === 3
                ? "text-slate-600 font-bold mt-[10px]"
                : formStep === 2 || formStep === 1 || formStep === 0
                ? "text-slate-500 font-semibold mt-[10px]"
                : "text-[#034807] font-semibold mt-[10px]"
            }
          >
            Review
          </h4>
        </div>
      </div>
    </div>
  );
}
