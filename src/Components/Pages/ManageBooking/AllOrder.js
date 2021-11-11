import React, { useEffect } from 'react';

const AllOrder = (props) => {
    const { name, email, phoneNumber, quantity, _id } = props.order;
     
    const manageOrder = (_id) =>{
      console.log("clicked on",_id);
    }


    return (
        <tr>
            <td className="p-2">{name}</td>
            <td className="p-2">{quantity}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">{phoneNumber}</td>
            <td className="p-2">{
                props.order?.status||"proessing"
                }</td>
            <td>
                <button onClick={() => { manageOrder(_id) }}>Manage</button>
            </td>
        </tr>
    );
};

export default AllOrder;