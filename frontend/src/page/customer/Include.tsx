import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { CreateEquip } from '../../services/https'; // แก้ไขให้เรียกใช้งาน service ของคุณ

function Include() {
  const [formData, setFormData] = useState({
    E_name: '',
    Pic: '',
    // สร้าง state สำหรับข้อมูลอื่น ๆ ตาม entity ที่กำหนดไว้
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await CreateEquip(formData); // ส่งข้อมูลไปยัง API เพื่อเพิ่มข้อมูล
      if (res.status) {
        // Assuming a boolean status indicating success 
        alert('Equipment added successfully');
      } else {
        // Assuming a boolean status indicating failure
        alert('Failed to add equipment');
      }
      
    } catch (error) {
      console.error('Error adding equipment:', error);
      // จัดการข้อผิดพลาดที่เกิดขึ้นในการส่งข้อมูลไปยัง API ได้ที่นี่
      alert('Error adding equipment');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">เพิ่มข้อมูล</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="E_name">
              ชื่ออุปกรณ์
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="E_name"
              name="E_name"
              type="text"
              placeholder="ชื่ออุปกรณ์"
              value={formData.E_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="E_name">
              วันที่
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="E_name"
              name="E_name"
              type="text"
              placeholder="ชื่ออุปกรณ์"
              value={formData.Date}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              เพิ่มข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Include;
