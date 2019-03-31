import * as React from 'react';
import {View,Text,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


class MyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
      }
  render() {
    return (
        <View style={{maxWidth:responsiveWidth(100), height:responsiveHeight(17), borderWidth:2,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,backgroundColor:'white', width:responsiveWidth(100)} }>
    <View style={{backgroundColor:'#025cbb',borderWidth:2,borderColor:'white',borderRadius:10}}>
        <Text style={{color:'#FFF', fontSize:responsiveFontSize(2.8), textAlign:'center'}}>
        {this.props.textoData}
        </Text>
        </View>
        <Text style={{textAlign:'center',fontSize:responsiveFontSize(1.8)}}>
        {this.props.textoAta}
         </Text>
        </View>
    );
  }
}

export default MyComponent;