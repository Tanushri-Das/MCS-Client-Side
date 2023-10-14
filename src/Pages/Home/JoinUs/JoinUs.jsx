import React from "react";
import "./JoinUs.css";

const JoinUs = () => {

  return (
    <div className="px-4 xl:px-32 joinus-bg">
      <div className="text-center">
        <h2 className="join-text mb-4">
          Want to <span className="partners pl-[10px]">Join</span> Us?
        </h2>
        <p className="joinus-paragraph text-center mb-[84px]">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mb-8 joinus-cards">
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                1<sup>st</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">Commencement of business</h4>
          <p className="mb-4 days text-center">
            Invested shareholders must confirm payment and office address
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-10">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days whitespace-nowrap">
                Within 180 <br /> days{" "}
              </p>
              <p className="days ps-[42px]">
                <span className="money">₹50,000</span> for the company <br />{" "}
                <span className="money">₹1,000</span> /day for directors
              </p>
            </div>
          </div>
        </div>
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                2<sup>nd</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">Auditor Appointment</h4>
          <p className="mb-4 days text-center">
            Company informs new auditor and submits ADT.1 form to ROC.
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-10">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days whitespace-nowrap">
                Within 30 <br /> days{" "}
              </p>
              <p className="days pl-[52px]">
                <span className="money">₹300</span> per month.
              </p>
            </div>
          </div>
        </div>
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                3<sup>rd</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">DIN eKYC</h4>
          <p className="mb-4 days text-center">
            Directors share personal information for identification &
            verification
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-10">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days">Every Year</p>
              <p className="days pl-[46px]">
                <span className="money">₹5000</span> one time
              </p>
            </div>
          </div>
        </div>
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                4<sup>th</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">DPT-3</h4>
          <p className="mb-4 days text-center">
            Companies report money taken from people to ROC; auditors confirm
            details.
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-10">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days whitespace-nowrap">
                Within 30 <br /> days{" "}
              </p>
              <p className="days pl-[52px]">
                <span className="money">₹300</span> per month.
              </p>
            </div>
          </div>
        </div>
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                5<sup>th</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">MCA Form AOC-4</h4>
          <p className="mb-4 days text-center">
            It's like an official report card for a company's documents
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-10">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days whitespace-nowrap">
                Within 30 <br /> days{" "}
              </p>
              <p className="days pl-[52px]">
                <span className="money">₹300</span> per month. <br /> (No upper
                limit)*
              </p>
            </div>
          </div>
        </div>
        <div className="join-card">
          <div className="first-number-div">
            <p className="first">
              <div>
                6<sup>th</sup>
              </div>
            </p>
          </div>
          <h4 className="mb-[5px] business-text">MCA Form MGT-7</h4>
          <p className="mb-4 days text-center">
            Companies must annually report activities and finances to the
            registrar.
          </p>
          <div className="card-detail-info py-3 ps-4">
            <div className="flex">
              <p className="due-date">Due date</p>
              <p className="fees ps-[84px]">Penalty fees</p>
            </div>
            <div className="flex">
              <p className="days whitespace-nowrap">
                On or Before <br />
                31st December
              </p>
              <p className="days pl-[52px]">
                <span className="money">₹300</span> per month.
                <br /> (No upper limit)*
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="forms-aoc mt-[31px]">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className="font-bold">every day</span> until you file the form .
        There is no maximum penalty amount. So, if you don't file the form for a
        year, you will owe ₹73,000 per form
      </p>
    </div>
  );
};

export default JoinUs;


// import React from "react";
// import joinCurveImage from "../../../assets/join curve.svg";
// import "./JoinUs.css";

// const JoinUs = () => {
//   const joinUsStyle = {
//     backgroundImage: `url(${joinCurveImage})`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "bottom", // You can adjust this as needed
//     backgroundSize: "cover", // You can adjust this as needed
//   };
//   return (
//     <div className="px-4 xl:px-32 joinus-bg">
//       <div className="text-center z-10">
//         <h2 className="join-text mb-4">
//           Want to <span className="partners pl-[10px]">Join</span> Us?
//         </h2>
//         <p className="joinus-paragraph text-center mb-[84px]">
//           To remain with us, it is essential that you diligently follow the
//           steps provided
//         </p>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 mb-8 joinus-cards z-10">
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 1<sup>st</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">Commencement of business</h4>
//           <p className="mb-4 days text-center">
//             Invested shareholders must confirm payment and office address
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-10">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days whitespace-nowrap">
//                 Within 180 <br /> days{" "}
//               </p>
//               <p className="days ps-[42px]">
//                 <span className="money">₹50,000</span> for the company <br />{" "}
//                 <span className="money">₹1,000</span> /day for directors
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 2<sup>nd</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">Auditor Appointment</h4>
//           <p className="mb-4 days text-center">
//             Company informs new auditor and submits ADT.1 form to ROC.
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-10">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days whitespace-nowrap">
//                 Within 30 <br /> days{" "}
//               </p>
//               <p className="days pl-[52px]">
//                 <span className="money">₹300</span> per month.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 3<sup>rd</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">DIN eKYC</h4>
//           <p className="mb-4 days text-center">
//             Directors share personal information for identification &
//             verification
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-10">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days">Every Year</p>
//               <p className="days pl-[46px]">
//                 <span className="money">₹5000</span> one time
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 4<sup>th</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">DPT-3</h4>
//           <p className="mb-4 days text-center">
//             Companies report money taken from people to ROC; auditors confirm
//             details.
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-10">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days whitespace-nowrap">
//                 Within 30 <br /> days{" "}
//               </p>
//               <p className="days pl-[52px]">
//                 <span className="money">₹300</span> per month.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 5<sup>th</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">MCA Form AOC-4</h4>
//           <p className="mb-4 days text-center">
//             It's like an official report card for a company's documents
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-10">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days whitespace-nowrap">
//                 Within 30 <br /> days{" "}
//               </p>
//               <p className="days pl-[52px]">
//                 <span className="money">₹300</span> per month. <br /> (No upper
//                 limit)*
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="join-card">
//           <div className="first-number-div">
//             <p className="first">
//               <div>
//                 6<sup>th</sup>
//               </div>
//             </p>
//           </div>
//           <h4 className="mb-[5px] business-text">MCA Form MGT-7</h4>
//           <p className="mb-4 days text-center">
//             Companies must annually report activities and finances to the
//             registrar.
//           </p>
//           <div className="card-detail-info py-3 ps-4">
//             <div className="flex">
//               <p className="due-date">Due date</p>
//               <p className="fees ps-[84px]">Penalty fees</p>
//             </div>
//             <div className="flex">
//               <p className="days whitespace-nowrap">
//                 On or Before <br />
//                 31st December
//               </p>
//               <p className="days pl-[52px]">
//                 <span className="money">₹300</span> per month.
//                 <br /> (No upper limit)*
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img src={joinCurveImage}className="mt-[-700px]" alt="" />
//       <p className="forms-aoc mt-20">
//         * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
//         <span className="font-bold">every day</span> until you file the form .
//         There is no maximum penalty amount. So, if you don't file the form for a
//         year, you will owe ₹73,000 per form
//       </p>
//     </div>
//   );
// };

// export default JoinUs;
