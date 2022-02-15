import React from 'react';
import Sobre from './pages/Sobre/Sobre'
import Integrantes from './pages/Integrantes/Integrantes'
import Projetos from './pages/Projetos/Projetos'




const Home = () => {
  return <div>
    <div className="container">
        
        <div className="row">
          <Sobre/>
        </div>

        <div className="row">
          <Integrantes/>
        </div>

        <div className="row">
          <Projetos/>
        </div>

        <div className="mt-5"></div>
      
      </div>
  </div>;
};

export default Home;
