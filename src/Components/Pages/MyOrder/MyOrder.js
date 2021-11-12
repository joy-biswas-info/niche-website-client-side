import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/UseAuth";

const MyOrder = () => {
  const { email } = useParams();
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();
  const history= useHistory()

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`, {
      headers: {
        "authorization": `Bearer ${localStorage.getItem('idToken')}`
      }
    })
      .then((res) =>res.json())
      .then((data) => {
        setMyOrder(data);
      });
  }, []);

  const handelCancel = (_id) => {
    const url = `https://ancient-hollows-54145.herokuapp.com/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainOrder = myOrder.filter((order) => order._id !== _id);
          setMyOrder(remainOrder);
          alert("Canceled");
        }
      });
  };

  return (
    <Container className="p-2">
      <h2 className="text-center">My Orders</h2>
      <table className="table table-dark table-striped bg-dark p-2">
        <th className="p-2">Product</th>
        <th className="p-2">Quantity</th>
        <th className="p-2">Manage</th>
        {myOrder.map((order) => (
          <tbody order={order} key={order._id}>
            <tr>
            <th className="p-2">{order.name}</th>
            <th className="p-2">{order.quantity}</th>
            <td>
              <button
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
