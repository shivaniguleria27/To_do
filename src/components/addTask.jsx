

import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export function AddTask({ onClose,onSubmit}) {
   const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim()) {
      onSubmit(description);
      setDescription("");
      onClose();
    }
  }

 
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 sm:p-6">
      {/* Label */}
      <label
        htmlFor="message"
        required
        rows={3}
        className="block mb-2 text-sm sm:text-base font-medium text-gray-700"
      >
        Description
      </label>

      {/* Textarea */}
      <textarea
        id="message"
        name="message"
        value={description}
        rows="5"
       onChange={(e) => setDescription(e.target.value)}
        placeholder="Type your message..."
        className="w-full rounded-lg border  border-[#05243e] p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
       
      </textarea>
     
      <div className="flex flex-col sm:flex-row gap-5 mt-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mt-3 sm:mt-0 w-full bg-[#05243e] text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            <SlCalender />
            Date
          </button>
          <button
            type="submit"
           
          
            className="mt-3 sm:mt-0 w-full bg-[#05243e] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            <FaRegClock />
            Time
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
        </div>
      </div>
    </form>
  );
}
