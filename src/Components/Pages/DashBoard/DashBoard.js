import React from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrder from '../MyOrder/MyOrder';

const DashBoard = () => {
    return (
        <div>
            <MyOrder></MyOrder>

            {/* For Admin  */}
            <ManageOrder></ManageOrder>
        </div>
    );
};

export default DashBoard;