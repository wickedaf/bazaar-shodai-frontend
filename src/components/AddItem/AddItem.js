import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data, e ) => {
      const {name,price, weight } = data;

      const itemData = {
          name: name,
          price: parseInt(price),
          weight: parseInt(weight),
          quantity: 1,
          image: imageUrl
      }

      fetch('https://bazaar-shodai.herokuapp.com/addItem', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      e.target.reset();

    };

    const imageUploadToBB = (e) => {

        const imageData = new FormData();
        imageData.set('key', 'a89f2be130457c34af7b1e3c26f7b012');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
    <div className="container overflow-hidden">
      <h1 className="text-center">Add Component</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="row">
        <div className="col-6 my-3">
            <input className="form-control" name="name" placeholder="Name" ref={register({ required: true })} />
        </div>
        <div className="col-6 my-3">
            <input className="form-control" type="Number" name="price" placeholder="Price" ref={register({ required: true })} />
        </div>
        <div className="col-6 my-3">
            <input className="form-control" type="Number" name="weight" placeholder="Weight" ref={register({ required: true })} />
        </div>
        <div className="col-6 my-3">
            <input onChange={(event) => imageUploadToBB(event)} className="form-control border-0" type="File" name="image" ref={register({ required: true })} />
        </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="form-control btn btn-danger w-50 mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
