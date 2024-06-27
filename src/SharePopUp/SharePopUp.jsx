// import { useEffect, useState } from 'react'
// import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
// import { HiOutlineArrowUturnRight } from 'react-icons/hi2'
// import { LuCopyCheck } from "react-icons/lu";
// import { GrShareOption } from "react-icons/gr";
// import whatsappImage from "./whatsappImage.png";
// import facebook from "./facebook.png";
// import twitter from "./twitter.png";
// import mail from "./mail.png";
// import linkedIn from "./linkedIn.png";



// export default function SharePopUp() {
//   const [open, setOpen] = useState(false)
//   const [currentUrl, setCurrentUrl] = useState(window.location.href);

//   useEffect(() => {
//     if (open) {
//       setCurrentUrl('');
//       setTimeout(() => setCurrentUrl(window.location.href), 0);
//     } else {
//       setCurrentUrl('');
//     }
//   }, [open]);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(currentUrl)
//       .then(() => {
//         alert('Link copied to clipboard');
//       })
//       .catch((err) => {
//         console.error('Failed to copy: ', err);
//       });
//   };

//   return (
//     <>
//       <button
//         className=" text-black py-2 px-4 rounded shadow"
//         onClick={() => setOpen(true)}
//         style={{
//           backgroundColor: "white",
//           width: "270px",
//           height: "40px",
//           display: "flex",
//         }}
//       >
//         <HiOutlineArrowUturnRight />
//         <span style={{ marginLeft: "10px" }}> Share</span>
//       </button>

//       <Transition show={open}>
//         <Dialog className="relative z-10" onClose={() => setOpen(false)}>
//           <TransitionChild
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//           </TransitionChild>

//           <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//             <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//               <TransitionChild
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//                 enterTo="opacity-100 translate-y-0 sm:scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               >
//                 <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//                   <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                     <div className="sm:flex sm:items-start">
//                       <div>
//                         <p className='font-bold'>Share</p>
//                         <div className=' flex items-stretch '
//                           style={{ paddingTop: '15px' }}
//                         >
//                           <p className='pl-4 border-dashed border-2 border-gray-500 rounded-md @'
//                             style={{ width: "300px", height: "30px" }}> Link:{currentUrl}</p>
//                           <div className=' flex items-stretch'>

//                             <span className='text-[29px] pl-8 pr-8'>
//                               <button
//                                 onClick={copyToClipboard}
//                               >
//                                 <LuCopyCheck />
//                               </button>
//                             </span>


//                             <div >
//                               <span className='text-[29px] '>
//                                 <GrShareOption />
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-around'>
//                     <button style={{
//                       width: "30px",
//                     }}>
//                       <span className='pl-10'>
//                         <img src={facebook} />
//                       </span>
//                     </button>
//                     <button style={{
//                       width: "30px"
//                     }}>
//                       <span className='pl-10'>
//                         <img src={linkedIn} />
//                       </span>
//                     </button>
//                     <button style={{
//                       width: "30px"
//                     }}>
//                       <span className='pl-10'>
//                         <img src={whatsappImage} />
//                       </span>
//                     </button>
//                     <button style={{
//                       width: "30px"
//                     }}>
//                       <span className='pl-10'>
//                         <img src={twitter} />
//                       </span>
//                     </button>
//                     <button style={{
//                       width: "30px"
//                     }}>
//                       <span className='pl-10'>
//                         <img src={mail} />
//                       </span>
//                     </button>
//                   </div>
//                   <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                     <button
//                       type="button"
//                       className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                       onClick={() => setOpen(false)}
//                       data-autofocus
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </DialogPanel>
//               </TransitionChild>
//             </div>
//           </div>
//         </Dialog>
//       </Transition> </>
//   )
// }





import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { HiOutlineArrowUturnRight } from 'react-icons/hi2';
import { LuCopyCheck } from 'react-icons/lu';
import { GrShareOption } from 'react-icons/gr';
import whatsappImage from './whatsappImage.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import mail from './mail.png';
import linkedIn from './linkedIn.png';

export default function SharePopUp() {
  const [open, setOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (open) {
      setCurrentUrl('');
      const timer = setTimeout(() => {
        setCurrentUrl(window.location.href);
      }, 100); // Using a timeout to ensure it clears first and then updates
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or if the effect runs again
    } else {
      setCurrentUrl('');
    }
  }, [open]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        alert('Link copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <>
      <button
        className="text-black py-2 px-4 rounded shadow"
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: 'white',
          width: '270px',
          height: '40px',
          display: 'flex',
        }}
      >
        <HiOutlineArrowUturnRight />
        <span style={{ marginLeft: '10px' }}> Share</span>
      </button>

      <Transition show={open}>
        <Dialog className="relative z-10" onClose={() => setOpen(false)}>
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div>
                        <p className="font-bold">Share</p>
                        <div className="flex items-stretch" style={{ paddingTop: '15px' }}>
                          <p className="pl-4 border-dashed border-2 border-gray-500 rounded-md" style={{ width: '300px', height: '30px' }}>
                            Link: {currentUrl}
                          </p>
                          <div className="flex items-stretch">
                            <span className="text-[29px] pl-8 pr-8">
                              <button onClick={copyToClipboard}>
                                <LuCopyCheck />
                              </button>
                            </span>
                            <div>
                              <span className="text-[29px]">
                                <GrShareOption />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <button style={{ width: '30px' }}>
                      <span className="pl-10">
                        <img src={facebook} alt="Facebook" />
                      </span>
                    </button>
                    <button style={{ width: '30px' }}>
                      <span className="pl-10">
                        <img src={linkedIn} alt="LinkedIn" />
                      </span>
                    </button>
                    <button style={{ width: '30px' }}>
                      <span className="pl-10">
                        <img src={whatsappImage} alt="WhatsApp" />
                      </span>
                    </button>
                    <button style={{ width: '30px' }}>
                      <span className="pl-10">
                        <img src={twitter} alt="Twitter" />
                      </span>
                    </button>
                    <button style={{ width: '30px' }}>
                      <span className="pl-10">
                        <img src={mail} alt="Mail" />
                      </span>
                    </button>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      data-autofocus
                    >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
