import React from 'react';

import './style.css';

function DevItem({ dev, onSubmit }){
    async function deleteDev(e){
        e.preventDefault();
        onSubmit(
          dev.github_username,
        );
    }
    return (
        <li className="dev-item">
              <header>
                <img src={dev.avatar_url} alt=""/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a><br/>
              <div className="options">
                <form onSubmit={deleteDev}><button type="submit">Deletar</button></form>
              </div>
        </li>
    );
}

export default DevItem;