import React, { useState } from "react";
import { copyrightData } from "../data";
const { icon } = copyrightData;
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="-order-1 md:order-1 m-10 relative">
        <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-accent-primary/20 cursor-pointer group absolute bottom-5 right-0">
          <button
            onClick={() => setShowModal(true)}
            className="btn-modal text-3xl text-accent-primary group-hover:scale-110 transition-all"
          >
            {icon}
          </button>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="right-5 bottom-20 mt-10 flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-9 max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-gray-200 flex text-center  p-5 border-b border-solid border-slate-200 rounded-t">
                  <h2 className=" font-semibold ">How can we help?</h2>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <form
                    className=""
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="mb-5">
                      <label>Name</label>
                      <input
                        id="firstName"
                        placeholder="John"
                        name="firstName"
                        className="form-control w-full mt-2"
                      />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="">Email</label>
                      <input
                        id="firstName"
                        placeholder="you@company.com"
                        name="firstName"
                        className="form-control w-full mt-2"
                      />
                    </div>

                    <div className="">
                      {" "}
                      <label>Your Message</label>{" "}
                      <textarea
                        id="comment"
                        placeholder="Your Message"
                        name="comment"
                        className="form-control w-full mt-2 py-5 h-[165px] "
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary self-start"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
