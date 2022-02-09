import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../landing/greetings";
import Footer from "../partials/footer";
// import {useState} from "react"
const Withdrawal = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <form action="">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-10 px-4 mx-auto mt-24 border rounded-lg  my-4 font-popins">
        <div className="flex flex-row my-5 justify-between ">
          <div className=" flex space-x-5 items-center self-center"></div>
          <div className=" flex space-x-5 items-center self-center">
            {" "}
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
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <h1 className=" font-bold text-primary items-center">
              Withdraw to bank
            </h1>
          </div>
          <div className="flex">
            <div className="border-r-2 mx-2 border-primary"></div>
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
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div class=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded border-l-4 border-primary md:mx-32 ">
          <div class="flex flex-row  content-start items-center py-2 px-5 space-x-5 border-b  text-dprimary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h1 className=" text-lg font-popins font-bold">
              {" "}
              Withdrawal Details
            </h1>
          </div>
          <div className=" px-10 mx-10 py-5">
            Withdraw to your personal account or Company{" "}
            <span className=" text-primary"> Add new Account</span>
          </div>
          <div>
            
            <div className=" border border-lprimary mx-20 my-2  rounded-sm px-5 py-6 flex justify-between space-x-6">
              <div className="flex-grow flex flex-col space-y-2">
               <label > From</label>
                <select name="Balance" id="balance" className=" border-b border-primary  " placeholder="Select Balance">
                  <option value="GT Bank"> GT Bank</option>
                  <option value="FCMB"> FCMB Bank</option>
                  <option value="ECO Bank"> ECO Bank</option>
                  <option value="WEMA Bank"> WEMA Bank</option>
                  <option value="Jaiz Bank"> Jaiz Bank</option>
                </select>
               </div>
              <div className=" flex-grow flex flex-col space-y-2">
               <label > To</label>
                <select name="Balance" id="balance" className=" border-b border-primary  " placeholder="Select Balance">
                  <option value="GT Bank"> GT Bank</option>
                  <option value="FCMB"> FCMB Bank</option>
                  <option value="ECO Bank"> ECO Bank</option>
                  <option value="WEMA Bank"> WEMA Bank</option>
                  <option value="Jaiz Bank"> Jaiz Bank</option>
                </select>
               </div>
              </div>
            
              <div className=" border border-lprimary flex rounded-sm  py-6 justify-between items-center mt-3 mb-5 px-5 mx-20 space-x-2">
               <div className=" flex flex-col ">
               <label className=" text-sm text-vlprimary" > Amount to withdraw</label>
                <input type="text" className=" border-b border-primary  " placeholder="0.00"/>
               </div>
              <div className="   flex flex-col  ">
               <label className=" text-sm text-vlprimary" > Amount to Deposit (NGN)</label>
                <input type="text" className=" border-b border-primary   " placeholder="0.00"/>
               </div>
              </div>
              <div className="border-b border-lprimary mx-20 mb-10  " ></div>
              <div className="flex flex-grow mx-20 mb-5 flex-col">
              <input type="text"  className="  border-b border-primary  w-full  " placeholder="Discription (Optional)"/>
              <div className=" text-sm">This Discription will appear In Transactions</div>
              </div>
          
          </div>
        </div>
        <footer class=" py-4 flex flex-col justify-between items-centercontent-start ">
          <div class="container mx-auto px-4">
            <div class="flex  flex-col items-center md:justify-between justify-center ">
             <div className="bg-lprimary py-2 px-5 text-white font-popins font-medium ">Review</div> 
            </div>
          </div>
        </footer>
      </div>
      </form>
      <Footer />
    </>
  );
};

export default Withdrawal;
