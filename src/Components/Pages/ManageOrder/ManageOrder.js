import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch(`https://vast-escarpment-72434.herokuapp.com/orders/manage`)
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);
  const handelCancel = (_id) => {
    const url = `https://vast-escarpment-72434.herokuapp.com/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainOrder = manageOrder.filter((order) => order._id !== _id);
          setManageOrder(remainOrder);
          alert("Canceled");
        }
      });
  };

  const handelAprove = (_id) => {
    const url = `https://vast-escarpment-72434.herokuapp.com/order/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Order Approved");
          fetch(`https://vast-escarpment-72434.herokuapp.com/orders/manage`)
            .then((res) => res.json())
            .then((data) => setManageOrder(data));
        }
      });
  };

  return (
    <Container className="p-2">
      <h2 className="text-center">Manage Order</h2>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th className="p-2">Spot</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Email </th>
            <th className="p-2">Phone </th>
            <th className="p-2">Status </th>
            <th className="p-2">Change</th>
          </tr>
        </thead>
        <tbody>
          {manageOrder.map((order) => (
            <tr order={order} key={order._id}>
              <td className="p-2" style={{ fontSize: "10px", padding: "0px" }}>{order.name}</td>
              <td className="p-2">{order.quantity}</td>
              <td className="p-2" style={{ fontSize: "10px", padding: "0px" }}>{order.email}</td>
              <td className="p-2" style={{ fontSize: "10px", padding: "0px" }}>{order.phoneNumber}</td>
              <td className="p-2">{order?.status || "proessing"}</td>
              <td>
                <button
                  onClick={() => {
                    handelCancel(order._id);
                  }}
                  className="bg-danger"
                  style={{ fontSize: "10px", padding: "0px 2px",margin:'0 5px' }}
                >
                  Cancel
                </button>
                {!order?.status &&
                <button
                onClick={() => {
                  handelAprove(order._id);
                }}
                className="bg-success"
                style={{ fontSize: "10px", padding: "0px" }}
              >
                Aprove
              </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManageOrder;
