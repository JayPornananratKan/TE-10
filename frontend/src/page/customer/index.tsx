import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import { EquipmentInterface } from '../../interface/IEquip';
import { GetEquip, DeleteEquip } from '../../services/https';

function Index() {
  const [equip, setEquip] = useState<EquipmentInterface[]>([]);
  const [message, setAlertMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getEquipData = async () => {
    let res = await GetEquip();
    if (res) {
      setEquip(res);
    }
  };

  useEffect(() => {
    getEquipData();
  }, []);

  const handleDeleteEquip = async (id: number | undefined) => {
    let res = await DeleteEquip(id);
    if (res.status) {
      setSuccess(true);
      setAlertMessage("Equipment deleted successfully");
      setEquip(res);
      setTimeout(function () {
        window.location.reload();
      }, 500);

    } else {
      setError(true);
      setAlertMessage(`Error: ${res.message}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">จัดการข้อมูล</h2>
        <div className="flex justify-end items-center mt-4">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            +สร้างข้อมูล
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {equip.map((item, index) => (
            <div key={item.ID} className="border border-gray-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{item.E_name}</h3>
              <img src={item.Pic} alt={`pic-${item.ID}`} className="w-full h-auto mt-4" />
              <button onClick={() => handleDeleteEquip(item.ID)} className="bg-red-500 text-white font-semibold py-1 px-2 mt-2 rounded">
                ลบ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
