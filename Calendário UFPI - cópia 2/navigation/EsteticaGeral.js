import * as React from 'react';
import {ScrollView,View,Animated,Alert} from 'react-native';
import EsteticaCalendario from './EsteticaCalendario';



class MyComponent extends React.Component {
  state = {
    receptor: 0,
    receptor2: 0,
    texto1: 'Calendário Acadêmico',
    texto2: 'Pós Graduação',
    texto3: 'Calendário Medicina',
    texto:'',
  }
    _comunicaCajeCalendario = (nomeRenderizado, recepClick) =>
    this.setState({
      receptor:1,
      receptor2: recepClick,
      texto: nomeRenderizado,
    });
    _reinicio = () =>
    this.setState({
      receptor:0,
    });
  //Receptor predefinido 0 acarreta a renderização de todos os calendarios, com o click em algum item renderizado no calendario, a props de 'ponteCC' se comunica com o estetica Calendario e muda receptor e o receptor 2, renderizando apenas o clicado
  render() {
    if(this.state.receptor == 0){
    return (
        <View>
        <EsteticaCalendario textoCalendario = {this.state.texto2} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {1} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        <EsteticaCalendario textoCalendario = {this.state.texto1} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {2} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        <EsteticaCalendario textoCalendario = {this.state.texto3} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {3} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        <EsteticaCalendario textoCalendario = 'Odontologia' ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {4} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        <EsteticaCalendario textoCalendario = 'Calendário Comp' ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {5} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        <EsteticaCalendario textoCalendario = 'Calendário 2019' ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {6} color = '#025cbb' color2 = '#ddd' color3 = '#FFF' imag={true}></EsteticaCalendario>
        </View>
        
    );}
    if(this.state.receptor == 1 && this.state.receptor2 == 1){
      return (
        <View>
        <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {1} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
        </View>
    );}
      if(this.state.receptor == 1 && this.state.receptor2 == 2){
        return (
          <View>
          <View>
          </View>
          <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {2} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
          </View>
      );
        }
        if(this.state.receptor == 1 && this.state.receptor2 == 3){
          return (
            <View>
            <View>
            </View>
            <View></View>
            <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {3} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
            </View>
        );
          }
          if(this.state.receptor == 1 && this.state.receptor2 == 4){
            return (
              <View>
              <View></View>
              <View></View>
              <View></View>
              <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {4} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
              </View>
          );}
            if(this.state.receptor == 1 && this.state.receptor2 == 5){
              return (
                <View>
                <View>
                </View>
                <View></View>
                <View></View>
                <View></View>
                <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {5} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
                </View>
            );
              }
              if(this.state.receptor == 1 && this.state.receptor2 == 6){
                return (
                  <View>
                  <View>
                  </View>
                  <View></View>
                  <View></View>
                  <View></View>
                  <View></View>
                  <EsteticaCalendario textoCalendario = {this.state.texto} ponteCC = {this._comunicaCajeCalendario} reinicioCC={this._reinicio} recep = {6} color = '#fff' color2 = '#ddd' color3 = '#025cbb' imag={false}></EsteticaCalendario>
                  </View>
              );
                }
    }
  }


export default MyComponent;