import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-[20px] lg:p-[0px] border-t-2">
      <h1 className="text-5xl text-center mt-5">Build fullstack apps fast</h1>
      <h2 className="text-sm text-center mt-5">
        A new Fullstack TypeScript based developer experience for building cloud
        backends
      </h2>
      <div className="flex flex-row flex-wrap self-center gap-3 mt-5">
        <button
          className="text-sm px-3.5 py-2 hover:bg-violet-600 delay-200 duration-200 br items-center text-center bg-[#715ACD]  text-violet-50 font-bold rounded-md shadow-button"
          onClick={() => {
            navigate("/form");
          }}
        >
          Create new app
        </button>
        <Link className="text-sm text-center underline px-3.5 py-2 text-black border border-gray-200 rounded-md flex gap-1 items-center font-bold hover:border-violet-500 hover:bg-violet-50 duration-200 delay-200" to='https://docs.amplify.aws/react/how-amplify-works/'>
          See how it works
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
}

export default Home;
