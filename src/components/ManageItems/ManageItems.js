import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageItemsTR from './ManageItemsTR';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const [deleted, setDeletd] = useState(true);

    useEffect(() => {
      fetch("https://bazaar-shodai.herokuapp.com/allItems")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, [deleted]);

    const handleDeleteBtn = (e, id) => {
      fetch('https://bazaar-shodai.herokuapp.com/deleteItem/'+id, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => setDeletd(id));
    }
    return (
        
        <Table striped hover className="shadow rounded-lg border-0">
          <thead>
            <tr>
              <th>Description</th>
              <th>Weight</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(
              item =>
                <ManageItemsTR itmInfo={item} handleDeleteBtn={handleDeleteBtn}></ManageItemsTR>
            )}
          </tbody>
        </Table>
    );
};

export default ManageItems;