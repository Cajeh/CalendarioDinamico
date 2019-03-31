import * as React from 'react';
import {View,Text,ScrollView,Alert,Image,Animated,TouchableOpacity,TouchableWithoutFeedback,StyleSheet,Platform} from 'react-native';
import { List} from 'react-native-paper';
import EsteticaSemestre from './EsteticaSemestre';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


class MyComponent extends React.Component {
  state = {
    expanded: true,
    recept:0,
    recept2:0,
  }  
  _handlePress = () =>{
    this.setState({
      expanded: true,
      recept:0,
    });
    this.props.reinicioCC();
  }
    _handlePress2 = () =>{
    this.setState({
      expanded:false,
    });
    this.props.ponteCC(this.props.textoCalendario,this.props.recep);
  }
    _comunicaCalendarioSemestre = (nomeRenderizado, recepClick) =>
    this.setState({
      recept:1,
      recept2:recepClick,
      texto: nomeRenderizado,
    });
    _fechador = () =>
    this.setState({
      recept:0,
    });
    renderSelected(position, icon,setinha,position2){
      if(this.props.imag){
        return <View style={{flex:1, top:Platform.OS === 'android' ? position : position2,left:setinha}}>
        <Image
          style={{width: 25, height: 25}}
          source={icon}
        />
        </View>
      }
  }
  renderSelected2(position, icon,setinha, position2){
    if(this.props.imag === false){
      return <View style={{flex:1, top:Platform.OS === 'android' ? position : position2, left:setinha}}>
      <Image
        style={{width: 25, height: 25}}
        source={icon}
      />
      </View>
    }
}
  render() {
    var icon = this.props.imag ? require('./botdownddd.png') : require('./botupbackwhite.png')
    var texto = this.props.imag? 0 : -14
    var fsize = this.props.imag ? responsiveFontSize(2.2) : responsiveFontSize(2.7)
    var setinha = this.props.imag ? -35 : 10
    var position = this.props.imag ? -1 : -3
    var position2 = this.props.imag ? -3 : -5

    if(this.state.recept == 0){
      let hi = this.props.imag ? this._handlePress2 : this._handlePress
    return (
      <View >
      <View style={styles.viewUp1}>
              </View>
      <TouchableOpacity onPress={hi} style={{zIndex:1}}>
     
      <View >
 <View style = {[styles.calendarioStyle, {backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(100)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7.5), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoCalendario}</Text>
        </View>
        {this.renderSelected(position, icon,setinha,position2)}
        </View>

        <View style={{flex:1}}>
  </View>

      </View>
        </View>
              </View>
              </TouchableOpacity>
        <List.Accordion
          expanded={!this.state.expanded}
          style={{position:'absolute', top:0, width:0,height:0}}
        >
        <EsteticaSemestre textoSemestre="2019.1" ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {1} color = '#025cbb' color2 = '#ddd' color3="#fff" imag={true}></EsteticaSemestre>
        <EsteticaSemestre textoSemestre="2019.2" ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {2} color = '#025cbb' color2 = '#ddd' color3="#fff" imag={true}></EsteticaSemestre>
        <EsteticaSemestre textoSemestre="2020.1" ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {3} color = '#025cbb' color2 = '#ddd' color3="#fff" imag={true}></EsteticaSemestre>
        <EsteticaSemestre textoSemestre="2020.2" ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {4} color = '#025cbb' color2 = '#ddd' color3="#fff" imag={true}></EsteticaSemestre>
        </List.Accordion>
        </View>
    );}
    if(this.state.recept == 1 && this.state.recept2 == 1){
      let hi = this.props.imag ? this._handlePress2 : this._handlePress

      return (
        <View>
        <View style={styles.viewUp1}>
              </View>
        <TouchableOpacity onPress={hi} style={{zIndex:1}}>
        <View >
 <View style = {[styles.calendarioStyle, {backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(100)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7.5), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoCalendario}</Text>
        </View>
        {this.renderSelected(position, icon,setinha,position2)}
        </View>

        <View style={{flex:1}}>
  </View>

      </View>
        </View>
              </View>
                </TouchableOpacity>
          <List.Accordion
            expanded={!this.state.expanded}
            style={{position:'absolute', top:0, width:0,height:0}}
          >
          <EsteticaSemestre textoSemestre={this.state.texto} ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {1} color = '#fff' color2 = '#025cbb' color3 = '#000' imag={false}></EsteticaSemestre>
          </List.Accordion>
          </View>
      );
    }
    if(this.state.recept == 1 && this.state.recept2 == 2){
      let hi = this.props.imag ? this._handlePress2 : this._handlePress

      return (
        <View >
        <View style={styles.viewUp1}>
              </View>
              <TouchableOpacity onPress={hi} style={{zIndex:1}}>
        <View >
        <View style = {[styles.calendarioStyle, {backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(100)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7.5), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoCalendario}</Text>
        </View>
        {this.renderSelected(position, icon,setinha,position2)}
        </View>

        <View style={{flex:1}}>
  </View>

      </View>
        </View>
              </View>
                </TouchableOpacity>
          <List.Accordion
            expanded={!this.state.expanded}
            style={{position:'absolute', top:0, width:0,height:0}}
          >
          <View></View>
          <EsteticaSemestre textoSemestre={this.state.texto} ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {2} color = '#fff' color2 = '#025cbb' color3 = '#000' imag={false}></EsteticaSemestre>
          </List.Accordion>
          </View>
      );
    }
    if(this.state.recept == 1 && this.state.recept2 == 3){
      let hi = this.props.imag ? this._handlePress2 : this._handlePress

      return (
        <View >
        <View style={styles.viewUp1}>
              </View>
              <TouchableOpacity onPress={hi} style={{zIndex:1}}>
        <View >
        <View style = {[styles.calendarioStyle, {backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(100)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7.5), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoCalendario}</Text>
        </View>
        {this.renderSelected(position, icon,setinha,position2)}
        </View>

        <View style={{flex:1}}>
  </View>

      </View>
        </View>
              </View>
                </TouchableOpacity>
          <List.Accordion
            expanded={!this.state.expanded}
            style={{position:'absolute', top:0, width:0,height:0}}
          >
          <View></View>
          <View></View>
          <EsteticaSemestre textoSemestre={this.state.texto} ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {3} color = '#fff' color2 = '#025cbb' color3 = '#000' imag={false}></EsteticaSemestre>
          </List.Accordion>
          </View>
      );
    }
    if(this.state.recept == 1 && this.state.recept2 == 4){
      let hi = this.props.imag ? this._handlePress2 : this._handlePress

      return (
        <View >
        <View style={styles.viewUp1}>
              </View>
              <TouchableOpacity onPress={hi} style={{zIndex:1}}>
        <View >
        <View style = {[styles.calendarioStyle, {backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(100)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7.5), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoCalendario}</Text>
        </View>
        {this.renderSelected(position, icon,setinha,position2)}
        </View>

        <View style={{flex:1}}>
  </View>

      </View>
        </View>
              </View>
                </TouchableOpacity>
          <List.Accordion
            expanded={!this.state.expanded}
            style={{position:'absolute', top:0, width:0,height:0}}
          >
          <View></View>
          <View></View>
          <View></View>
          <EsteticaSemestre textoSemestre={this.state.texto} ponteCS={this._comunicaCalendarioSemestre} fechadorCS={this._fechador} recep = {4} color = '#fff' color2 = '#025cbb' color3 = '#000' imag={false}></EsteticaSemestre>
          </List.Accordion>
          </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  viewUp1: {
    position:'absolute',
    width:responsiveWidth(1000),
     height:responsiveHeight(7.5),
    backgroundColor:'#FFF',
    opacity:1,
     paddingLeft:0,
    zIndex:1,
  },
  fonte: {
    textAlign:'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Gurmukhi MN'
  },
  ajustVert: {
    flex:1, flexDirection:'row',
    alignItems:'flex-start',
     width:responsiveWidth(100),
    top: Platform.OS === 'android' ? -3 : 0,
  },
  calendarioStyle:{
    width:responsiveWidth(100),
     height:responsiveHeight(7.5),
    borderRightWidth:5,
    borderLeftWidth:5,
borderBottomWidth:4,
borderTopWidth:4,
    borderRadius: 10,
    marginBottom:2

  }
});

export default MyComponent;