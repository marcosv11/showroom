import React from "react";
import "./NovoCard.css";
import { useHistory } from 'react-router-dom';


const NovoCard = (props) => {

    const history = useHistory();

  const handle = () => {
    history.push('./modal')
  }
  return (
    <div>
      <div onClick={handle} className="mt-5 ">
        <div class="t">
          <div class="row">
            <div class="col-sm-3">
              <img
                class="d-block "
                src={props.img}
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

export default NovoCard;
