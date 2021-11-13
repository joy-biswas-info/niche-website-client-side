import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../Hooks/UseAuth";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://vast-escarpment-72434.herokuapp.com/orders?email=${user.email}`, {
      headers: {
        "authorization": `Bearer ${localStorage.getItem('idToken')}`
      }
    })
      .then((res) =>res.json())
      .then((data) => {
        setMyOrder(data);
      });
  }, [user.email]);

  const handelCancel = (_id) => {
    const url = `https://vast-escarpment-72434.herokuapp.com/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainOrder = myOrder.filter((order) => order._id !== _id);
          setMyOrder(remainOrder);
          alert("Your order has canceled");
        }
      });
  };

  return (
    <Container className="p-2">
      <h2 className="text-center">My Orders</h2>
      <table className="table table-success table-striped p-2">
        <thead>
          <tr>
          <th className="p-2">Product</th>
        <th className="p-2">Quantity</th>
        <th className="p-2">Manage</th>
        </tr>
        </thead>
        {myOrder.map((order) => (
          <tbody order={order} key={order._id}>
            <tr>
            <th className="p-2">{order.name}</th>
            <th className="p-2">{order.quantity}</th>
            <td>
                <button
                  className="bg-danger"
                  style={{ fontSize: "10px", padding: "0px 2px",margin:'0 5px' }}
                onClick={() => {
                  handelCancel(order._id);
                }}
              >
                Cancel{" "}
              </button>
            </td>
          </tr>
          </tbody>
        ))}
      </table>
    </Container>
  );
};

export default MyOrder;
