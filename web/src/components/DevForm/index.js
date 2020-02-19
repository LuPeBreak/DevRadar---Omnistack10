import React, {useState,useEffect} from 'react';

import './style.css';


function DevForm({onSubmit}){
    const [latitude, setLatitude] = useState('');
    const [longitude,setLongitude] = useState('');
    const [githubUsername,setGithubUsername] = useState('');
    const [tecnologias,setTecnologias] = useState('');   
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          const { latitude, longitude } = position.coords;
    
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (err)=>{
          console.log(err);
        },
        {
          timeout:30000
        }
        );
      },[]);

      async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username: githubUsername,
            techs: tecnologias,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTecnologias('');

      };

    return (
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="github_username">Usuario do Github</label>
                <input required name="github_username" id="github_username"
                onChange={e => setGithubUsername(e.target.value)}
                ></input>
              </div>

              <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input required name="techs" id="techs"
                onChange={e => setTecnologias(e.target.value)}
                ></input>
              </div>
                
              <div className="input-group">
                <div className="input-block">
                  <label htmlFor="latitude">Latitude</label>
                  <input 
                  required
                  type="number" 
                  name="latitude" 
                  id="latitude" 
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                  ></input>
                </div>

                <div className="input-block">
                  <label htmlFor="longitude">Longitude</label>
                  <input 
                  required
                  type="number" 
                  name="longitude" 
                  id="longitude" 
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                  ></input>
                </div>
              </div>
              
              <button type="submit">Salvar</button>
            </form>
    );
}

export default DevForm;