import React, { useState } from "react";
import { Modal, Button } from "react";

function Room({ data }) {
  console.log("object")
  console.log(data.name)
  
  return (
    <div className="row-bs">
      {/* <div className="col-md-4">
        <img src='' className="smalling" />
      </div> */}
      <div className="col-md-7">
        <h1>{data.name}</h1>
        <b>
          {" "}
          <p>Max Count : {data.maxcount}</p>
          <p>Phone Number: {data.phonenumber}</p>
          <p>Type: {data.type}</p>
        </b>
        <div style={{ float: "right" }}>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>

     
    </div>
  );
}

export default Room;
