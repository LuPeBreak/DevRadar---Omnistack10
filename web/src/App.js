//react
import React, {useState,useEffect} from 'react';
//api
import api from './services/api';
//styles
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
//components
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs',data);
    setDevs([...devs,response.data])
  }

  async function handleDeleteDev(github_username){
    await api.delete('/devs',{data:{github_username}}).then(
      (sucess)=>{
        console.log(sucess);
        setDevs(devs.filter(dev => dev.github_username !== github_username));
      }).catch((err)=>{
        alert(err);
      });
  }

  return (
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
            <DevForm onSubmit={handleAddDev}></DevForm>
        </aside>

        <main>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} onSubmit={handleDeleteDev}></DevItem>
            ))}
            
          </ul>
        </main>
      </div>
  ); 
}

export default App;
