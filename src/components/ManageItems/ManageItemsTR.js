import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageItemsTR = (props) => {
  const { name, _id, price, weight } = props.itmInfo;
  return (
    <tr>
      <td>{name}</td>
      <td>{weight}</td>
      <td>{price}</td>
      <td>
        <button onClick={(event) =>  props.handleDeleteBtn(event, _id)} className="btn btn-danger mx-1">
          <FontAwesomeIcon className="" icon={faTrashAlt} />
        </button>
        <button className="btn btn-danger mx-1">
          <FontAwesomeIcon className="" icon={faEdit} />
        </button>
      </td>
    </tr>
  );
};

export default ManageItemsTR;
