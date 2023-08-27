import { useState } from "react";
import searchKeys from "../data/capsulesKeys.json";

interface CapsuleKey{
  id:string;
  name:string;
}

export default function FilterDropDown({
  onSelected,
  selectedValue,
}: {
  onSelected: (input:CapsuleKey ) => void;
  selectedValue: string;
}) {
  const [expand, setExpanded] = useState(false);

  return (
    <div className="z-50 group relative">
      <button
        id="dropdownHoverButton"
        data-testid="filter_dropdown_button"
        data-dropdown-toggle="dropdownHover"
        onClick={(e) => setExpanded(!expand)}
        data-dropdown-trigger="hover"
        className="outline-none border text-grey-200 border-grey-200 group-hover:bg-[#24293D]/70 bg-grey-800 px-[10px] py-[6px] md:px-[20px] md:py-[13px] rounded-md md:rounded-lg font-medium  text-sm text-center inline-flex items-center"
        type="button"
      >
        {selectedValue}
        <svg
          className={`w-2.5 h-2.5 transition-all ea duration-500 ml-2.5 ${
            expand ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdownHover"
        data-testid="filter_dropdown_div"
        className={`z-10 ${
          expand === true ? "block" : "hidden"
        } absolute top-[130%] bg-[#24293D] divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {searchKeys.map((name, index) => (
            <li
              key={index}
              onClick={(e) => {
                setExpanded(false);
                onSelected(name);
              }}
            >
              <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {name.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
