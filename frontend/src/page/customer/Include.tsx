import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { CreateEquip ,GetAllTime,GetAllType} from '../../services/https'; // แก้ไขให้เรียกใช้งาน service ของคุณ
import { TypeForEquipInterface } from '../../interface/ITypeEquip';
import { TimeForEquipInterface } from '../../interface/ITimeForEquip';
function Include() {
  const [formData, setFormData] = useState({
    
    E_name: '',
    Pic: '',
    Date: new Date(),
    AdminID: 1,
    equipmentType: '', 
    timeEquip: '',// เพิ่ม field สำหรับเก็บประเภทของอุปกรณ์
    // เพิ่ม state สำหรับข้อมูลอื่น ๆ ตาม entity ที่กำหนดไว้
  });

  const [typeforequip, setTypeforequip] = React.useState<TypeForEquipInterface[]>([]);
  const [timeEquip, setTimeEquip] = React.useState<TimeForEquipInterface[]>([]);
  useEffect(() => {
    // เรียกใช้ API Endpoint เพื่อดึงข้อมูลประเภทอุปกรณ์
    GetAllType() // Assuming getEquipmentTypes is a function that returns a promise with the fetched data
      .then((data) => {
        setTypeforequip(data);
         // Update the state with the fetched equipment types
      })
    .catch((error: any) => {
      console.error('Error fetching equipment types:', error);
    });
    GetAllTime() // Assuming getEquipmentTypes is a function that returns a promise with the fetched data
      .then((t) => {
        console.log(t); 
        setTimeEquip(t);
         // Update the state with the fetched equipment types
      })
    .catch((error: any) => {
      console.error('Error fetching equipment time:', error);
    });
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (name === 'Pic' && e.target instanceof HTMLInputElement && e.target.files) {
      const file = e.target.files[0]; // Get the first file from the FileList
      const reader = new FileReader();
  
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData({
            ...formData,
            Pic: reader.result, // Store the Base64 data in state
          });
        }
      };
  
      reader.readAsDataURL(file); // Read the file and convert it to Base64
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

 
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // ดึง AdminID จาก Local Storage
    const adminIDString = localStorage.getItem('AdminID');

    // ตรวจสอบว่า AdminID มีค่าหรือไม่
    if (!adminIDString) {
      console.error('AdminID not found in Local Storage');
      alert('AdminID not found');
      return;
    }
    const adminID = adminIDString ? parseInt(adminIDString, 10) : 0; // หรือ Number(adminIDString)
    // เพิ่ม AdminID เข้าไปใน formData
    setFormData({
      ...formData,
      AdminID: adminID, // สมมติว่า key ของ AdminID คือ AdminID และค่าที่ได้มาจาก Local Storage คือ adminID
    });

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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
                วันที่
           </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Date"
            name="Date"
            type="date" // แก้ type เป็น "date"
            placeholder="วันที่"
            value={formData.Date instanceof Date ? formData.Date.toISOString().split('T')[0] : formData.Date}
            onChange={handleChange}
            
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="equipmentType">
              ประเภทของอุปกรณ์
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="equipmentType"
              name="equipmentType"
              value={formData.equipmentType}
              onChange={handleChange}
            >
              <option value="">โปรดเลือกประเภท</option>
              {typeforequip.map((item:TypeForEquipInterface) => (
                <option value={item.ID} >{item.TypeEquip_name}

                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeEquip">
              เวลาที่สามารถยืมได้
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="timeEquip"
              name="timeEquip"
              value={formData.timeEquip}
              onChange={handleChange}
            >
              <option value="">โปรดเลือกเวลา</option>
              {timeEquip.map((item:TimeForEquipInterface) => (
                <option value={item.ID} >{item.TimeEquip} 

                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Pic" className="block text-gray-700 text-sm font-bold mb-2">
              อัพโหลดรูปภาพ
            </label>
            <input
              type="file"
              id="Pic"
              name="Pic"
              accept="image/*"
              onChange={handleChange}
              className="mt-2"
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
