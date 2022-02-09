import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../landing/greetings";
// import {useState} from "react"
const Transaction = () => {
    //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
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
          <button class=" animate-pulse flex  text-primary items-center active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View All <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg> </button>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5 border-b hover:bg-dprimary hover:text-vlprimary text-dprimary">
     <div className="flex flex-col "><h1 className=" font-semibold">28 Jan</h1> <h4>2022</h4> </div>
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

    </>)
}
 
export default Transaction;