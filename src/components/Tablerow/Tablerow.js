import React from 'react';

const Tablerow = (props) => {
    const {name, quantity, price} = props.itmInfo;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{quantity*price}</td>
        </tr>
    );
};

export default Tablerow;