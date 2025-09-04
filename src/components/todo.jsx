import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
export default function Todo() {
  const[isOpen,setIsOpen] = useState(false)
  

  function handleIsopen(){
    setIsOpen(true)
  }
   function handleIsClose(){
    setIsOpen(false)
  }
  return (
    <>
      <div className="bg-white rounded-t-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4">
          {/* Create Task button */}
          <button onClick={handleIsopen} className="rounded-2xl bg-[#05243e] p-2 sm:p-3 md:p-4 text-white w-full sm:w-auto">
            Create Task
          </button>

          {/* Form */}
          {isOpen && <AddTask onClose={handleIsClose}/>}
        </div>
      </div>
    </>
  );
}

function AddTask({onClose}){
  return(
     <form className="w-full max-w-md mx-auto p-4 sm:p-6">
            {/* Label */}
            <label
              htmlFor="message"
              className="block mb-2 text-sm sm:text-base font-medium text-gray-700"
            >
              Description
            </label>

            {/* Textarea */}
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message..."
              className="w-full rounded-lg border  border-[#05243e] p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mt-3 sm:mt-0 w-full bg-[#05243e] text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                 <SlCalender/>Date
              </button>
              <button
                type="submit"
                className="mt-3 sm:mt-0 w-full bg-[#05243e] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                 <FaRegClock />Time
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mt-3 sm:mt-0 border border-[#0ea5e9] text-black px-4 py-2  rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-3 sm:mt-0 bg-[#0EA5E9] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div></div>
          </form>
  )
}
