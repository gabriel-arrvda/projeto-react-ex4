import './App.css';
import Header from './componentes/Header'
import Exibir from './componentes/Exibir'
import { useState } from 'react'
import {toast} from 'react-toastify' 

export default function App() {

  const [nome, setNome] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [telefone, setTelefone] = useState();
  const [clientes, setClientes] = useState([]);

  function nomeAlterar(e) {
    setNome(e.target.value);
  }

  function enderecoAlterar(e) {
    setEndereco(e.target.value);
  }

  function cidadeAlterar(e) {
    setCidade(e.target.value);
  }

  function estadoAlterar(e) {
    setEstado(e.target.value);
  }

  function telefoneAlterar(e) {
    setTelefone(e.target.value);
  }

  function enviarValidar(e) {
    e.preventDefault()

    if(!nome) toast.error("Erro. Nome não pode estar vazio") 
    else{
      let novo = { nome, endereco, cidade, estado, telefone }
      setClientes([...clientes, novo]);
      toast.success("Dados Cadastrados! ") 
    }
  }

  return (
    <div className="App">
      <Header />

      <form onSubmit={enviarValidar}>
        <div className="formGroup">
          <div class="row">
            <input class='boxInput' type='text' placeholder='Nome' value={nome} onChange={nomeAlterar} ></input>
            <input class='boxInput' type='text' placeholder='Telefone' value={telefone} onChange={telefoneAlterar} ></input>
          </div>

          <div class="row">
            <input class='boxInput' type='text' placeholder='Endereço' value={endereco} onChange={enderecoAlterar} ></input>
            <input class='boxInput' type='text' placeholder='Cidade' value={cidade} onChange={cidadeAlterar} ></input>
            <input class='boxInput' type='text' placeholder='Estado' value={estado} onChange={estadoAlterar} ></input>
          </div>
        </div>

        <input class='btnSend' type={'submit'}></input>
      </form>

      <br></br>
      
      <Exibir conteudo={clientes}/> 
    </div>
  );
}





