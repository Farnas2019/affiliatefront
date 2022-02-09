import { Link } from "react-router-dom";
import { useState } from "react";
const Transaction = () => {
  const [Modal, setModal] = useState(false);
    return ( <>

<div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
    <div className="flex flex-col my-3"><h1 className=" font-bold text-primary">Transactions</h1> <h3 className=" font-medium text-lprimary text-sm">Updated Every Several Minutes</h3></div>
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex  items-center justify-between border-b">
        <div class=" px-4  justify-between flex items-center">
        <div className=" flex justify-between items-center space-x-4">
              <h3 class="font-semibold text-base text-blueGray-700 border-b-2 border-primary">Latest</h3>
              <h3 class="font-semibold text-base text-blueGray-700  border-primary">Upcoming</h3>
        </div>
        </div>
        <div class="px-4  flex ">
       <Link to={"/transactions"}>  <button class=" animate-pulse flex  text-primary items-center active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View All <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg> </button></Link> 
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5 border-b hover:bg-dprimary hover:text-vlprimary text-dprimary" onClick= {()=> setModal(true)}>
     <div className={"flex flex-col "}><h1 className=" font-semibold">28 Jan</h1> <h4>2022</h4> </div>
     <div className=" font-semibold">www.avengers.com</div>
     <div className=" text-vlprimary">Completed</div>
     <div>-0.075c2</div>
     <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg></div>
    </div>
    <div class="flex flex-row justify-between items-centercontent-start py-2 px-5 space-x-5 border-b hover:bg-dprimary hover:text-vlprimary text-dprimary">
     <div className="flex flex-col "><h1 className=" font-semibold">28 Jan</h1> <h4>2022</h4> </div>
     <div className=" font-semibold">www.olasco.com</div>
     <div className=" text-dprimary">Failed</div>
     <div>-0.075c2</div>
     <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg></div>
    </div>
  </div>
</div>
<footer class="relative pt-8 pb-6 mt-16">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
     
    </div>
  </div>
</footer>


{Modal ? <div  class=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-dprimary lg:text-xl dark:text-white">
                    Transaction Details
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=> setModal(false)} >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="mb-6 space-y-6 flex items-center justify-between">
                <div class=" px-5 py-10 flex items-center justify-between">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
                </div>
                <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400 flex flex-col  ">
                <div className=" flex flex-col pb-10">
                    <h1 className=" font-bold  ">Edit Profile</h1> 
                    <h3 className=" font-medium ">3 Nov | NGN BAL</h3>
                </div>
                  <p>Your Details Has Been Updated As Requested</p>  
                </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-primary hover:bg-lprimary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mark As Read</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Delete</button>
            </div>
        </div>
    </div>
</div> : null }
    </>)
}
 
export default Transaction;