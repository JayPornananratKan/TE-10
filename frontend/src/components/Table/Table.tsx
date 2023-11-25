import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import "./style.css";

import { FaUserPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

interface Row {
  id: number;
  username: string;
  email: string;
  password: string;
  status: string;
}

function createData(
  id: number,
  username: string,
  email: string,
  password: string,
  status: string
): Row {
  return { id, username, email, password, status };
}

const makeStyle = (status: string) => {
  if (status === "pass") {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
      padding: '3px',
      borderRadius: '10px',
    }
  } else if (status === "Didn't pass") {
    return {
      background: '#ffadad8f',
      color: 'red',
      padding: '3px',
      borderRadius: '10px',
    }
  }
}

const BasicTable: React.FC = () => {
  
  const [rows, setRows] = useState<Row[]>([
    createData(1, "JohnDoe", "john@example.com", "password123", "Didn't pass"),
    createData(2, "JaneSmith", "jane@example.com", "securepass", "Didn't pass"),
    // ... (other initial rows)
  ]);

  const [newRow, setNewRow] = useState<Row>({
    id: rows.length + 1, // automatically assign the next available ID
    username: "",
    email: "",
    password: "",
    status: "Didn't pass", // Set the default status to "Didn't pass"
  });

  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isDetailModalOpen, setDetailModalOpen] = useState(false);

  const handleAddRow = () => {
    const maxId = Math.max(...rows.map((row) => row.id), 0);
    const newRowWithId = { ...newRow, id: maxId + 1 };
    setRows([...rows, newRowWithId]);

    setNewRow({
      id: maxId + 2, // Assign a new id for the next row
      username: "",
      email: "",
      password: "",
      status: "Didn't pass", // Set the default status to "Didn't pass"
    });

    setAddModalOpen(false);
  };

  const handleViewDetails = (row: Row) => {
    setSelectedRow(row);
    setDetailModalOpen(true);
  };

  const handleToggleStatus = (row: Row) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((r) =>
        r.id === row.id ? { ...r, status: r.status === "pass" ? "Didn't pass" : "pass" } : r
      );

      return updatedRows;
    });
  };

  const handleDeleteRow = (row: Row) => {
    // Implement your logic for deleting the row
    setRows((prevRows) => {
      const updatedRows = prevRows.filter((r) => r.id !== row.id);

      // Update IDs based on the current order
      const updatedRowsWithIds = updatedRows.map((r, index) => ({
        ...r,
        id: index + 1,
      }));

      return updatedRowsWithIds;
    });
  };

  return (
    <div className="Table">
      <div className="headadd">
        <h3>Create an account</h3>
        <Button
          className="add"
          variant="contained"
          onClick={() => setAddModalOpen(true)}
        >
          New User <FaUserPlus />
        </Button>
      </div>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", marginTop: "20px" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NO.</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.password}</TableCell>
                <TableCell align="left" style={{ textAlign: 'center' }}>
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell className="actionbutton" align="left">
                  <Button className="view" onClick={() => handleViewDetails(row)}><FaEye /></Button>
                  <i className="space"></i>
                  <Button className="enable" onClick={() => handleToggleStatus(row)}>
                    enable
                  </Button>
                  <i></i>
                  <Button className="delete" onClick={() => handleDeleteRow(row)}><ImBin /></Button>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal for adding new row */}
      <Modal open={isAddModalOpen} onClose={() => setAddModalOpen(false)}>
        <div className="modal-container">
            <form className="body">
              <h2>Add a new user account
                <span className="cross" onClick={() => setAddModalOpen(false)}><RxCross2 /></span>
              </h2>
              <div className="content"></div>
              <div className="fillin">
                <TextField
                  label="Username"
                  value={newRow.username}
                  onChange={(e) => setNewRow({ ...newRow, username: e.target.value })}
                />
                <TextField
                  label="Email"
                  value={newRow.email}
                  onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                />
                <TextField
                  label="Password"
                  value={newRow.password}
                  onChange={(e) => setNewRow({ ...newRow, password: e.target.value })}
                />
                <TextField
                  label="Status"
                  value={newRow.status}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Button className="adduser" variant="contained" color="primary" onClick={handleAddRow}>
                  Add<FaUserPlus />
                </Button>
              </div>
            </form>
        </div>
      </Modal>

      {/* Modal for viewing details */}
      <Modal open={isDetailModalOpen} onClose={() => setDetailModalOpen(false)}>
        <div className="modal-container">
          <h2>User Details</h2>
          {selectedRow && (
            <>
              <p>ID: {selectedRow.id}</p>
              <p>Username: {selectedRow.username}</p>
              <p>Email: {selectedRow.email}</p>
              <p>Password: {selectedRow.password}</p>
              <p>Status: {selectedRow.status}</p>
            </>
          )}
          <Button onClick={() => setDetailModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default BasicTable;
