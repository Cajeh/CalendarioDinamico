import * as React from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity,StyleSheet,Platform} from 'react-native';
import { List} from 'react-native-paper';
import EsteticaMes from './EsteticaMes';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

class MyComponent extends React.Component {
  state = {
    expanded: true,
    recept:0,
    recept2:0,
    recept3:true,
  }
  _scrollDay = () => {

  }
  _handlePress4 = (recepClick,opa) =>
    this.setState({
      recept:1,
      recept2:recepClick,
      recept3:opa
    });
  _handlePress = () =>
    this.setState({
      recept:0,
      recept3:true
    });
  _extensao = () => {
    this.setState({
      expanded: false,
    });
    this.props.ponteCS(this.props.textoSemestre,this.props.recep);
  }
  _comprimir = () => {
    this.setState({
      expanded:true,
      recept:0,
    })
    this.props.fechadorCS();
  }
  scrollResp = (aux) =>{
    this.setState({
      recept:1,
      recept2: aux,
    })
  }
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
    var position = this.props.imag ? -1 : -3
    var texto = this.props.imag? 1 : -12
    var setinha = this.props.imag ? -35 : 15
    var fsize = this.props.imag ? responsiveFontSize(2.1) : responsiveFontSize(2.3)
    var position2 = this.props.imag ? -3 : -5
    var pdtop = this.props.imag ? 9 : 9
    var hi = this.props.imag ? this._extensao : this._comprimir
    if(this.state.recept == 0){
    return (

      <View>
      <View style={styles.viewUp1}>
              </View>
      <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5} }>
      <View style = {{backgroundColor:this.props.color, width:responsiveWidth(85),height:responsiveHeight(7),paddingTop:pdtop,marginBottom:10,borderRightWidth:5,borderLeftWidth:5,
borderBottomWidth:4,
borderTopWidth:4,
    borderRadius: 10,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}}>
        <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
          style={{position:'absolute', top:0,width:0}}
        >
        <View>
        <EsteticaMes textoMes='Mês 1 - 24 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={1} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
        <EsteticaMes textoMes='Mês 2 - 10 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={2} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
        <EsteticaMes textoMes='Mês 3 - 15 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={3} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
        <EsteticaMes textoMes='Mês 4 - 23 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={4} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
        <EsteticaMes textoMes='Mês 5 - 26 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={5} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
        <EsteticaMes textoMes='Mês 6 – 19 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={6} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={true} toScroll={this.state.recept3}/>
          </View>
        </List.Accordion>
        </View>
        
    );
      }
      if(this.state.recept == 1 && this.state.recept2 == 1){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
           <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:0}}
            >
            <View>
            <EsteticaMes textoMes='Mês 1 - 24 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={1} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
      if(this.state.recept == 1 && this.state.recept2 == 2){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
           <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:0}}
            >
            <View>
            <View></View>
            <EsteticaMes textoMes='Mês 2 - 10 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={2} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
      if(this.state.recept == 1 && this.state.recept2 == 3){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
           <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:0}}
            >
            <View>
            <View></View>
            <View></View>
            <EsteticaMes textoMes='Mês 3 - 15 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={3} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
      if(this.state.recept == 1 && this.state.recept2 == 4){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
            <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:0}}
            >
            <View>
            <View></View>
            <View></View>
            <View></View>
            <EsteticaMes textoMes='Mês 4 - 23 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={4} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
      if(this.state.recept == 1 && this.state.recept2 == 5){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
      <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
            <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:0}}
            >
            <View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <EsteticaMes textoMes='Mês 5 - 26 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={5} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
      if(this.state.recept == 1 && this.state.recept2 == 6){
        return (

          <View>
          <View style={styles.viewUp1}>
              </View>
          <TouchableOpacity onPress={hi} style={{zIndex:3}}>
          <View style={{left:25, top:5 } }>
          <View style = {[styles.semestreStyle, {backgroundColor:this.props.color, paddingTop:pdtop,
    borderColor: this.props.color2,borderRightColor:this.props.color2, borderLeftColor:this.props.color2, borderBottomColor:this.props.color2}]}>
            <View style={{flex: 1, flexDirection: 'column', width:responsiveWidth(85)}}>
        <View style={{flex:1}}>
  </View>
        <View style={styles.ajustVert}>
        {this.renderSelected2(position, icon,setinha,position2)}
        <View style={{flex:25, height:responsiveHeight(7), left:texto}}>
        <Text style={[styles.fonte, {color:this.props.color3, fontSize:fsize}]}>{this.props.textoSemestre}</Text>
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
              style={{position:'absolute', top:0,width:5}}
            >
            <View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <EsteticaMes textoMes='Mês 6 - 19 Dias Letivos' hey={this._handlePress} hey3={this._handlePress4} recep={6} color = '#025cbb' color2 = '#ddd' color3='#fff' imag={false} toScroll={this.state.recept3}/>
              </View>
            </List.Accordion>
            </View>
            
        );

      }
  }
}
const styles = StyleSheet.create({
  viewUp1: {
    position:'absolute',
    width:375,
     height:55,
    backgroundColor:'#FFF',
    opacity:1,
     paddingLeft:0,
    zIndex:2,
  },
  fonte: {
    textAlign:'center',
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'Gurmukhi MN'
  },
  ajustVert: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    top: Platform.OS === 'android' ? -9 : -7,
     width:responsiveWidth(85)},
     semestreStyle:{
      width:responsiveWidth(85),
       height:responsiveHeight(7),
      borderRightWidth:5,
      borderLeftWidth:5,
  borderBottomWidth:4,
  borderTopWidth:4,
      borderRadius: 10,
      marginBottom:2
  
    }
  },
  
);

export default MyComponent;