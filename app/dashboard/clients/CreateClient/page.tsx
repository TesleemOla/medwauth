import React from 'react'

const CreateClient = () => {
  return (
    <div>
      <form className="mb-6" action="/" method="post">
        <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-gray-700" htmlFor="medicine_name">Medicine Name</label>
          <input className="border py-2 px-3 text-gray-900" type="text" name="medicine_name" id="medicine_name" required />
        </div>
        {/* Add more input fields for other details (e.g., dosage, side effects, etc.) */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold" for="medicine_name">Medicine Name</label>
          <input className="border py-2 px-3 w-full" type="text" name="medicine_name" id="medicine_name" required />
        </div>
        <button className="block bg-purple-700 hover:bg-purple-800 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateClient