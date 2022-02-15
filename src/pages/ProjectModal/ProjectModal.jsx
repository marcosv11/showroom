import React from "react";
import CardTwo from "./CardTwo";
import "./ProjectModal.css";

const ProjectModal = () => {
  return (
    <div className="container">
    

      <div className="container">
        <div className="row">
            <div className="todoModal">
        <div className="row partOne">
          <div className="col-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              alt=""
            />
          </div>
          <div className="col-8 mt-3 container d-flex">
            <h1>DIGX ANALYTICS EXPERIENCE</h1>
          
          </div>

          
        </div>
      </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <CardTwo />
          </div>
          <div className="col-6">
            <CardTwo />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-4">
            <CardTwo />
          </div>
          <div className="col-4">
            <CardTwo />
          </div>
          <div className="col-4">
            <CardTwo />
          </div>

        </div>

        <div className="row">
          <div className="col-12">
            <CardTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
