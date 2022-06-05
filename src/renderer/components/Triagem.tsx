import React from 'react';
import styles from '../styles/Login.module.css';
import avatarFem from '../../../assets/imagens/avatar-feminino-frente.png';
import avatarMasc from '../../../assets/imagens/avatar-masculino-frente.png';
import {Link} from 'react-router-dom';
import { container } from 'webpack';

class Triagem extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    maleAvatarSelected: false,
    femaleAvatarSelected: false,
  };


  handleSelectedImage = (props) => {
    if(props.target.alt === 'Avatar Masculino'){
      this.setState({ maleAvatarSelected: true });
      this.setState({ femaleAvatarSelected: false });
    }else if(props.target.alt === 'Avatar Feminino'){
      this.setState({ maleAvatarSelected: false });
      this.setState({ femaleAvatarSelected: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Selecione o Avatar</h1>
        <div>
          <Link to="/triagem-fem" onMouseEnter={this.handleSelectedImage} className={ this.state.femaleAvatarSelected === true ? styles.container : '' }>
            <img src={avatarFem} alt="Avatar Feminino" />
          </Link>
          <Link to="/triagem-masc" onMouseEnter={this.handleSelectedImage} className={ this.state.maleAvatarSelected === true ? styles.container : '' }>
            <img src={avatarMasc} alt="Avatar Masculino" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Triagem;
