import React from "react";
import "./NovoCard.css";

const CardAnomalia = (props) => {
  return (
    <div>
      <div className="mt-5 ">
        <div class="bordaAmarela">
          <div class="row">
            <div class="col-sm-3 space">
          
              <img
                class="d-block "
                src="https://cdn-icons-png.flaticon.com/512/900/900772.png"
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

export default CardAnomalia;
