// Componente para o cadastro
import React from 'react';
import styles from '../styles/Login.module.css';
import { useHistory } from 'react-router-dom';



function ValidarCadastro(props) {
    const history = useHistory();

    const userDefaultName = 'admin';
    const userDefaultPassword = 1234;

    const validateLogin = (event) => {
        history.push('/sucesso')
    };

    return (
        <button type="button" onClick={validateLogin}>
            📝 Cadastrar
        </button>
    );
}


class CadastroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }



  handleSubmit(event){
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.FormLogin}>
          <div className={styles.CardGroup}>
            <label>
              Nome Completo:
              <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            </label>
          </div>
          <div className={styles.CardGroup}>
            <label>
              Setor:
              <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            </label>
          </div>
          <div className={styles.CardGroup}>
            <label>
              E-mail:
              <input type="text" value={(this.state.password)} onChange={this.handleChangePassword} />
            </label>
          </div>
          <div className={styles.CardGroup}>
            <label>
              Usuário:
              <input type="text" value={(this.state.password)} onChange={this.handleChangePassword} />
            </label>
          </div>
          <div className={styles.CardGroup}>
            <label>
              Senha:
              <input type="text" value={(this.state.password)} onChange={this.handleChangePassword} />
            </label>
          </div>
        </form>
        <ValidarCadastro />
      </div>
    );
  }
}

export default CadastroForm;
