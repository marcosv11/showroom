import React from 'react'
import './CardProjeto.css'
import { useHistory } from 'react-router-dom';


const CardProjeto = () => {


  const history = useHistory();

  const handle = () => {
    history.push('./modalProjeto')
  }


  return (
    <div onClick={handle} className="user-card mb-5">
      <div className="user-profile">
        <div className="profile"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHgA2Dd1rrTmA/profile-displayphoto-shrink_800_800/0/1628168741523?e=1648080000&v=beta&t=Z2dedg9fNzMuRHbIJq1dYIaKgxWAXCGTy159VKyGY-E" alt="" /></div>
        <div className="last-submit">Teste</div>
        <div className="last-submit">2017/11/18 19:45:00</div>
      </div>
      <div className="user-stats">
        <div className="w-clearfix">
          <h1 className="name">Teste</h1>
          <div className="score w-clearfix">
            <h1 className="my-score">100%</h1>
          </div>
        </div>
     
        <div className="meta-stats">
          <div className="meta-stat">
            <h4 className="meta-stat-label">Teste</h4>
            <div className="meta-stat-block">
              <h3 className="meta-stat-num">10</h3>
              <h1 className="meta-stat-total">10/10/10</h1>
            </div>
          </div>
        
          <div className="meta-stat">
            <h4 className="meta-stat-label">Teste</h4>
            <div className="meta-stat-block">
              <button onClick={handle} className="meta-stat-num">Teste</button>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProjeto
