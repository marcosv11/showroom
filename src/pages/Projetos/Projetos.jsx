import React from "react";
import CardAnomalia from "./CardAnomalia";
import CardMotor from "./CardMotor";
import CardProjeto from "./CardProjeto";
import NovoCard from "./NovoCard";
import "./Projetos.css";

const Projetos = () => {
  return (
    <div className="container">
      <div className="row titulo-principal container">
        <div className="">
          <h1>PROJETOS</h1>
        </div>
      </div>

      <div className="mb-5">
        <div className="container row ">
          <div className="input-group">
            
              <input className="form-control" type="search" />
            
              <span className="input-group-append">
                <button className="btn btn-outline-secondary ver " type="button">
                  PROCURAR
                </button>
              </span>
           
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardMotor
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardAnomalia
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>
          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardMotor
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardAnomalia
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardMotor
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardAnomalia
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardMotor
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <CardAnomalia
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>

          <div className="col-4">
            <NovoCard
              img="https://cdn-icons-png.flaticon.com/512/1067/1067256.png"
              title="Digx ANALYTICS Experience"
              subTitle="Jornada Digital do Cliente"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
