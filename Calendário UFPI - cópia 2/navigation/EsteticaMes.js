import * as React from 'react';
import { List} from 'react-native-paper';
import EsteticaDia from './EsteticaDia';
import {View,Text,Image,TouchableOpacity,StyleSheet,Platform} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';



class MyComponent extends React.Component {
  state = {
    expanded: true,
    toScroll: this.props.toScroll,
  }
  _handlePress = () =>{
    this.props.hey3(this.props.recep+1,true)
   }
   _handlePress2 = () =>{
    this.props.hey3(this.props.recep-1,false)
   }
    _extensao = () => {
      this.setState({
        expanded: false,
      });
      this.props.hey3(this.props.recep,true);
    }
    _comprimir = () => {
      this.setState({
        expanded:true,
        toScroll:true
      })
      this.props.hey(true);
    }
  render() {
    var icon = this.props.imag ? require('./botdownddd.png') : require('./botupbackwhite.png')
    var setinha = this.props.imag ? 20 : 20
    var position = this.props.imag ? -1 : -3
    var topi = this.props.imag ? 0 : 10
    var hi = this.props.imag ? this._extensao : this._comprimir
    var position2 = this.props.imag ? -3 : -5
    var rpz = this.props.imag ? false : true
    return (
      <View>
      <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:50,top:topi,height:responsiveHeight(8)}}>
<View style = {[styles.mesStyle,{backgroundColor:this.props.color,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
       <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(70)}}>
        <View style={{height:45, flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        <View style={{flex:25, height:responsiveHeight(6.5), left:2.5}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:responsiveFontSize(2.0)}]}>{this.props.textoMes}</Text>
        </View>
        <View style={{flex:1, top:Platform.OS === 'android' ? position : position2,left:setinha}}>
        <Image
          style={{width: 25, height: 25}}
          source={icon}
        />
        </View>
        </View>

        <View style={{height:45, flex:1}}>
  </View>

      </View>
        </View>
        </View>
        </TouchableOpacity>
        <List.Accordion
          expanded={rpz}
          style={{position:'absolute', top:3,width:0}}
        >
         <EsteticaDia hey={this._handlePress} hey2 ={this._handlePress2} recep = {this.props.recep} texto={this.props.textoMes} toScroll={this.state.toScroll}/>
        </List.Accordion>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  viewUp1: {
    
    left:50,
    paddingBottom:0,
    height:55
  },
  fonte: {
    textAlign:'center',
    fontSize:15,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Gurmukhi MN'
  },
  ajustVert: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    top: Platform.OS === 'android' ? -9 : -7,
     width:responsiveWidth(70)},
     mesStyle:{
      width:responsiveWidth(70),
       height:responsiveHeight(6.5),
       paddingTop: 7,
      borderRightWidth:5,
      borderLeftWidth:5,
  borderBottomWidth:4,
  borderTopWidth:4,
      borderRadius: 10,
      marginBottom:2
  
    }
});

export default MyComponent;