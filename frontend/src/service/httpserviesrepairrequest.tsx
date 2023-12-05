import { RepairrequestInterface } from "../interface/Irepair";

const apiUrl = "http://localhost:8080";

async function GetRepairrequest() {
  const requestOptions = {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/repairrequests`, requestOptions)
    .then((response) => response.json())

    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}
async function DeleteRepairrequest(id: Number | undefined) {
  const requestOptions = {
    method: "DELETE"
  };

  let res = await fetch(`${apiUrl}/repairrequests/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}
async function CreateRepairrequest(data: RepairrequestInterface) {
  const requestOptions = {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/repairrepuests`, requestOptions)
    .then((response) => response.json())

    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}
async function UpdateRepairrequest(data: RepairrequestInterface) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/repairrequests`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        localStorage.setItem("lid", JSON.stringify(res.data));
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });

  return res;
}


async function GetRepairrequestById(id: Number | undefined) {
  const requestOptions = {
    method: "GET"
  };

  let res = await fetch(`${apiUrl}/repairrequests/${id}`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export{
    GetRepairrequest,
    CreateRepairrequest,
    DeleteRepairrequest,
    GetRepairrequestById,
    UpdateRepairrequest
};