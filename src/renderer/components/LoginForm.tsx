// Componente para o formulario do Login
import React from 'react';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';

import styles from '../styles/Login.module.css';


function AcessarNovoCadastro(){
  const history = useHistory();

  function redirectNovoCadastro() {
    history.push('/cadastro');
  }

  return (
    <button type="button" onClick={redirectNovoCadastro}>
      📝 Criar Acesso
    </button>
  );

}

function ValidateLogin(props) {
  const history = useHistory();

  const userDefaultName = 'admin';
  const userDefaultPassword = '1234';

  const validateLogin = (event) => {

    if(props.user === userDefaultName && props.password === userDefaultPassword){
      history.push('/triagem');
    }else{
      alert('Login inválido!');
      event.preventDefault();
    }

  };

  return (
    <button type="button" onClick={validateLogin}>
      🔒Entrar
    </button>
  );
}

function LoginForm () {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.FormLogin}>
      <h1>Autenticação</h1>
      <div>
        <label>Nome</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Senha</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <ValidateLogin user={name} password={password} />
        <AcessarNovoCadastro />
      </div>
    </div>
  );

}

export default LoginForm;
