import React, { useState } from 'react';
import avatar_fem from '../../../assets/imagens/avatar-feminino-frente.png'
import BarChartD3 from './BarChartD3';

import styles from '../styles/Triagem.module.css';

// function TrocaTipoDor(props){
//
//   if(props.target == undefined)
//     return <DorLeve />
//   else{
//     console.log(props.target.alt);
//     if(props.target.alt == "avatar-feminino-dor-leve"){
//       return <DorModerada />
//     }else{
//       return <DorForte />
//     }
//   }
//
//
// }
//
// function DorLeve(props){
//   return  (
//     <div>
//       <h1>Informe onde doi um cadin</h1>
//       <img src={avatar_fem} alt="avatar-feminino-dor-leve" onClick={TrocaTipoDor} />
//     </div>
//
//   );
// }
//
// function DorModerada(props){
//
//   return  (
//     <div>
//       <h1>Informe onde doi mais ou menos</h1>
//       <img src={avatar_fem} alt="avatar-feminino-dor-moderada" onClick={TrocaTipoDor} />
//     </div>
//
//   );
// }
//
// function DorForte(props){
//
//   return  (
//     <div>
//       <h1>Informe onde doi muito demais da conta</h1>
//       <img src={avatar_fem} alt="avatar-feminino-dor-forte" onClick={TrocaTipoDor} />
//     </div>
//
//   );
// }
//
// class TriagemFem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div>
//         <TrocaTipoDor />
//       </div>
//     );
//   }
// }
//
// export default TriagemFem;



function TriagemFem() {
  return (
    <div>
      <h1>Selecione o lugar com dor</h1>
      <img src={avatar_fem} useMap="#image-map" alt="avatar-feminino" />
      <map name="image-map">
        <area alt="cabeca" title="cabeca" coords="96,74,49,5" shape="rect" onClick={() => console.log('cabeca')} />
        <area alt="tronco" title="tronco" coords="99,80,43,194" shape="rect" onClick={() => console.log('Clicou no tronco')} />
        <area alt="pernas" title="pernas" coords="38,201,102,417" shape="rect" onClick={() => console.log('Clicou nas pernas')} />
      </map>
    </div>
  );
}
export default TriagemFem;
