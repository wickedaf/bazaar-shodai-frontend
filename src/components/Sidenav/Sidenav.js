import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEdit,
  faHome,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import { Button } from "react-bootstrap";
import './Sidenav.scss';
import { Link } from "react-router-dom";

const Sidenav = (props) => { 
  return (
    <div className="sidebar">
      <ProSidebar>
        <SidebarHeader>
          <Link className="text-link" to="/"><h3 className="text-center my-4">Bazaar Shodai</h3></Link>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem onClick={(event) => props.getSidbarMenuItem(event)}>
              <FontAwesomeIcon className="mx-2" icon={faPlusSquare} /> Add
              Item
            </MenuItem>
            <MenuItem onClick={(event) => props.getSidbarMenuItem(event)}>
              <FontAwesomeIcon className="mx-2" icon={faBars} /> Manage Item
            </MenuItem>
            <MenuItem>
              <FontAwesomeIcon className="mx-2" icon={faEdit} /> Edit Product
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="text-center my-3">
            <Button
              className=" rounded-pill shadow"
              variant="outline-light px-4"
            >
              <FontAwesomeIcon className="mx-2" icon={faHome} />
              <Link className="text-link" to="/">HOME</Link>
            </Button>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidenav;
