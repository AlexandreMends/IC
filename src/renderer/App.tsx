import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styles from './styles/Login.module.css';
import icon from '../../assets/imagens/logo.png';

import LoginForm from './components/LoginForm';
import CadastroForm from './components/CadastroForm';
import SucessoPagina from './components/SucessoPagina';
import SobrePagina from './components/SobrePagina';
import Triagem from './components/Triagem';
import TriagemFem from './components/TriagemFem';
import BarChartD3 from './components/BarChartD3';
import TriagemMasc from './components/TriagemMasc';

// componente que representa a tela inicial
function TelaInicialPagina() {
  return (
    <div className={styles.LoginScreen}>
      <div>
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Bem vindo ao HAMC</h1>
      <div className={styles.Card}>
        <LoginForm />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div className={styles.navbar}>
        <Link to="/" className={styles.navLinks}>
          Tela Inicial
        </Link>
        <Link to="/sobre" className={styles.navLinks}>
          Sobre
        </Link>
        <Link to="/bar-chart" className={styles.navLinks}>
          BarChart
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={TelaInicialPagina} />
        <Route exact path="/cadastro" component={CadastroForm} />
        <Route exact path="/sucesso" component={SucessoPagina} />
        <Route exact path="/sobre" component={SobrePagina} />
        <Route exact path="/triagem" component={Triagem} />
        <Route exact path="/triagem-fem" component={TriagemFem} />
        <Route exact path="/triagem-masc" component={TriagemMasc} />
        <Route exact path="/bar-chart" component={BarChartD3} />
      </Switch>
    </Router>
  );
};

export default App;
