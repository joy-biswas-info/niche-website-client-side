import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ManageBooking.css";

const ManageBooking = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch(`https://ancient-hollows-54145.herokuapp.com/manageorder`)
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);
  const handelCancel = (_id) => {
    const url = `https://ancient-hollows-54145.herokuapp.com/order/${_id}`;
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
    const url = `https://ancient-hollows-54145.herokuapp.com/order/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
        },
        body: JSON.stringify()
    })
          .then(res =>res.json())
        .then(data => {
            if (data.modifiedCount === 1) {
                alert("updated");
                fetch(`https://ancient-hollows-54145.herokuapp.com/manageorder`)
                .then((res) => res.json())
                .then((data) => setManageOrder(data));

            }
      })
  };

  return (
    <Container className="p-2">
      <h2 className="text-center">Manage Order</h2>
      <table className="table table-dark table-striped bg-dark p-2">
        <th className="p-2">Spot</th>
        <th className="p-2">Quantity</th>
        <th className="p-2">Email </th>
        <th className="p-2">Phone </th>
        <th className="p-2">Status </th>
        <th className="p-2">Change</th>
        {manageOrder.map((order) => (
          <tr order={order} key={order._id}>
            <td className="p-2">{order.name}</td>
            <td className="p-2">{order.quantity}</td>
            <td className="p-2">{order.email}</td>
            <td className="p-2">{order.phoneNumber}</td>
            <td className="p-2">{order?.status || "proessing"}</td>
                <td>
              <button
                onClick={() => {
                  handelCancel(order._id);
                }}
                className="bg-danger"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handelAprove(order._id);
                }}
                className="bg-success"
              >
                Aprove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default ManageBooking;
