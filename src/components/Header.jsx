import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-2">
        <h1 className="font-bold text-sm sm:text-xl p-2">
          <span className="text-[#715ACD]">AWS Amplify</span>
        </h1>
        <ul className="flex gap-4 p-2">
          <li className="flex items-center gap-1 font-bold text-sm text-[#715ACD] hover:underline">
           <Link to='https://github.com/aws-amplify/amplify-backend/'> Support</Link>
            <FaExternalLinkAlt />
          </li>
          <li className="flex items-center gap-1 font-bold text-sm text-[#715ACD] hover:underline">
           <Link to='https://docs.amplify.aws/'>Docs</Link> 
            <FaExternalLinkAlt />
          </li>
        </ul>
      </div>
    </header>
  );
}
