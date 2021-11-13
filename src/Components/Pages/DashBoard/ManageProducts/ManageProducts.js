import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://vast-escarpment-72434.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handelCancel = (_id) => {
    const url = `https://vast-escarpment-72434.herokuapp.com/products/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainOrder = products.filter((order) => order._id !== _id);
          setProducts(remainOrder);
          alert("Products Has Deleted");
        }
      });
  };
  return (
    <Container className="p-2">
      <h2 className="text-center">Manage Order</h2>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Description</th>
            <th className="p-2">Manage</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr order={product} key={product._id}>
              <td className="p-2" style={{ fontSize: "10px", padding: "0px" }}>
                {product?.name}
              </td>
              <td className="p-2" style={{ fontSize: "10px", padding: "0px" }}>
                {product?.decription}
              </td>
              <td>
                <button
                  onClick={() => {
                    handelCancel(product._id);
                  }}
                  className="bg-danger"
                  style={{
                    fontSize: "10px",
                    padding: "0px 2px",
                    margin: "0 5px",
                  }}
                >
                  Delete Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManageProducts;
