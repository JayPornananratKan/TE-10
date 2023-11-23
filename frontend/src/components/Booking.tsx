import React from 'react';

function Booking() {
  return (
    <div>
      <nav className="bg bg-red-600 p-5">
        {/* เนื้อหา Navbar ของคุณ */}
      </nav>

      <div className="p-3">
        <div className="flow-root ...">
          <div className="text-black text-2xl font-normal font-['Roboto']">Reserve a Fitness Machine</div>
        </div>
      </div>
      <div className='flex justify-between'>
      <div className="overflow-y-auto max-h-60 ml-8">
        <table className=" border-separate border border-slate-400">
          <thead  >
            <tr >
              <th className="px-4 py-2  "></th>
              <select className="border rounded p-1 w-32 h-8 ">
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  {/* Add more days here */}
                </select>
            </tr>
          </thead>
          <tbody>
            {/* Repeat this row for more data */}
            <tr className='overflow-auto '>
              <td className="border px-4 py-2">7:00 - 8:00</td>
                <td className="border px-4 py-2">
                 <select className="border rounded p-1 w-60"  >
                  <option className='text-red-600/10' value="" disabled selected>Select The Fitness Machine</option>
                  <option value="value1">jjj</option>
                  <option value="value2">Option 2</option>
                  <option value="value3">Option 3</option>
                  {/* Add more options here */}
                </select>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4">
                  Reserve
                </button>
              </td>
              
            </tr>
            <tr>
              <td className="border px-4 py-2">8:00 - 9:00</td>
              <td className="border px-4 py-2">
              <select className="border rounded p-1 w-60">
                <option className='text-red-600/10' value="" disabled selected>Select The Fitness Machine</option>
                  <option value="value1">Option 1</option>
                  <option value="value2">Option 2</option>
                  <option value="value3">Option 3</option>
                  {/* Add more options here */}
                </select>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4">
                  Reserve
                </button>
              </td>
              
          
            </tr>
        
          </tbody>
        </table>
      </div>
      <div className='bg-red-500 w-80 h-80 mr-40'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4">
                  Reserve
                </button>
      </div>
      </div>
      
    </div>
  );
}

export default Booking;
