import { useState } from "react";
import gitLogo from "../assets/github.png"
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from '../services/api'

import { Container } from "./styles"

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try{
      const {data} = await api.get(`repos/${currentRepo}`)

      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);

        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return
        }
        alert('Repositório já está na lista');
          setCurrentRepo('');
          return
      }
    }
    catch(e){
      alert('Repositório não encontrado');
    }
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id)
    setRepos(newRepos)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Git Hub Logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
