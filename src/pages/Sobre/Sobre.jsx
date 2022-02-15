import React from 'react'
import './Sobre.css'
import { useHistory } from 'react-router-dom';



const Sobre = () => {

  const history = useHistory();

  const handle = () => {
    history.push('./projetos')
  }


  return (
    <div className="row mt-5 hero">
      <div className="col-6">
        <h1 className="overlay__title">DIGX TUTUTATATA</h1>

          <p className="mt-5 overlay__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </p>
          
          <button onClick={handle} type="button" class="btn btn-outline-dark">Ver projetos</button>
   
      </div>
      <div className="col-6 img">
        <img src="https://i.ibb.co/WzsTNp9/hero-img.png" alt="aa" className="img-fluid"/>
      </div>


      </div>

    
  )
}

export default Sobre
