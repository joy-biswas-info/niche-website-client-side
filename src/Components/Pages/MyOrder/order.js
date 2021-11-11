import React, { useState } from 'react';

const Order = (props) => {
    const { phoneNumber, _id } = props.order;
    
    const handelCancel = (_id) => {
        const url = `https://ancient-hollows-54145.herokuapp.com/order/${_id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("Canceled");
                
                };
                    
            });
        }
    
    return (
        <tr>
            <th className="p-2">{phoneNumber }</th>
            <th className="p-2">{phoneNumber}</th>
            <td><button onClick={()=>{handelCancel(_id)}}>Cancel </button></td>
        </tr>
    );
};

export default Order;