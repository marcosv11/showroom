import React from 'react'
import './Pessoa.css'

const Pessoa = (props) => {
  return (
    <>
    <div className="imagemPessoa">
      <img src={props.urlImg} alt="" />
        <p>{props.name}</p>
    </div>


  

    </>
  )
}

export default Pessoa
