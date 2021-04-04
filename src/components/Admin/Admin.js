import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import ManageItems from "../ManageItems/ManageItems";
import Sidenav from "../Sidenav/Sidenav";

const Admin = () => {
  const [ comp, setComp] = useState("");
  const getSidbarMenuItem = (e) => {
    if( e.target.innerText === " Add Item" ){
      setComp(e.target.innerText);
    }else if (e.target.innerText === " Manage Item" ){
      setComp(e.target.innerText);
      
    }
  }

  let component = null;
  switch(comp){
    case " Add Item":
      component = <AddItem></AddItem>;
      break;
    case " Manage Item":
      component = <ManageItems></ManageItems>;
      break;
    default:
      component = <ManageItems></ManageItems>;
  }
  
  return (
    <div className="d-flex flex-wrap">
      <div className="row">
        <Sidenav getSidbarMenuItem={getSidbarMenuItem}></Sidenav>
      </div>
      <div className="row m-5 px-5 w-75">
        {component}
      </div>
    </div>
  );
};

export default Admin;
