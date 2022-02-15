import React from "react";
import "./NovoCard.css";

const CardMotor = (props) => {
  return (
    <div>
      <div className="mt-5 ">
        <div class="bordaVerde">
          <div class="row">
            <div class="col-sm-3 space">
          
              <img
                class="d-block "
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt=""
              />
             
            </div>
            <div class="col-sm-9">
              <div class="card-block">
                <h5 class="up">{props.title}</h5>
                <p>{props.subTitle}</p>
                <p>00/00/00</p>
               
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMotor;
