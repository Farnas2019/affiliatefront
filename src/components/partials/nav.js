import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [Drop, setDrop] = useState(false);
  const [DropHelp, setDropHelp] = useState(false);
  return (
    <div className=" bg-lprimary flex-row  flex  items-center md:sticky  font-popins text-white  justify-between md:px-40 font-thin md:font-normal">
      <div className="flex font-popins  h-full">
        <ul
          className={
            "  items-center font-popins  justify-between flex-row space-x-2 flex "
          }
        >
          <Link
            to={"/"}
            className=" md:border-l md:py-1 border-gray-50  md:h-full md:px-4   flex"
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/transactions"}
            className=" md:border-l md:py-1 border-gray-50  md:px-4  md:h-full flex "
          >
            <li>Transaction</li>
          </Link>

          <Link
            to={"/report"}
            className=" md:border-l md:py-1 border-gray-50   md:px-4  md:h-full flex "
          >
            <li>Report</li>
          </Link>
          <Link
            to={"/refer"}
            className=" md:border-l md:py-1 border-gray-50   md:px-4  md:h-full flex "
          >
            <li>Refer a friend</li>
          </Link>

          <Link
            to={"/withdrawal"}
            className=" md:border-l md:py-1 border-gray-50  md:border-r   md:px-4 md:h-full flex "
          >
            <li>Withdraw</li>
          </Link>
        </ul>
      </div>
      <div className="flex font-popins  h-full">
        <ul
          className={
            "  items-center font-popins  justify-between flex-row flex space-x-2 "
          }
        >
        
            <li>  <li>
              <button
                class="text-white  hover:lprimary text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0"
                type="button" onClick={()=> setDropHelp(!DropHelp)}
              >
                Help{" "}
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

      {DropHelp ? 
            <ul className="absolute bg-lprimary  md:-ml-4 px-4 py-4 ">
              <li className=" border-b py-1 w-full  hover:text-primary">Pricing and Fees</li>
              <li className=" border-b py-1 w-full hover:text-primary">How to Videos</li>
              <li className=" border-b py-1 w-full hover:text-primary">Support Center</li>
              
            </ul>
              : null}
            </li></li>
       
         
            <li>
              <button
                class="text-white  hover:lprimary text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0"
                type="button" onClick={()=> setDrop(!Drop)}
              >
                Settings{" "}
                <svg
                  class="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

      {Drop ? 
            <ul className="absolute bg-lprimary  md:-ml-4 px-4 py-4 ">
              <li className=" border-b py-1 w-full  hover:text-primary">Bank Accounts</li>
              <li className=" border-b py-1 w-full hover:text-primary">Profile Settings</li>
              <li className=" border-b py-1 w-full hover:text-primary">Security Settings</li>
              <li className=" border-b py-1 w-full hover:text-primary">Verification Center</li>
            </ul>
              : null}
            </li>
        

          <Link
            to={"/affiliate"}
            className=" md:border-l md:py-1 border-gray-50 md:border-r   md:px-4  md:h-full flex "
          >
            <li>Sign Out</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
