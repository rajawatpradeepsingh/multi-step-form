import { useNavigate } from "react-router-dom";
export default function Complete() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-around items-center w-full text-lg h-[50%] py-[20px] px-[60px] self-center">
      <h1>Thank you!</h1>
      <button
        className={
          "text-[#715ACD] text-[14px] font-bold hover:bg-violet-50 h-[40px] w-[80px] self-center rounded-md"
        }
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
