import * as React from 'react';
import {View,Text,Alert,FlatList,Dimensions,ScrollView,Image} from 'react-native';
import ComponenteDia from './ComponenteDia'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';




class MyComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          data:[1]
        }
      }
  render() {
    if(this.props.recep == 6){
      icon= require('./botupbackwhite.png')
    }else{
      icon = require('./botdownbackwhite.png')
    }
    if(this.props.recep == 1){
      icon2= require('./botdownbackwhite.png')
    }else{
      icon2 = require('./botupbackwhite.png')
    }
    if(this.props.toScroll === true){
    return (
      <View>
      <ScrollView style={{marginTop:10,height:responsiveHeight(100)}} onScroll={(e)=>{
        var windowHeight = Dimensions.get('window').height,
            height = e.nativeEvent.contentSize.height,
            offset = e.nativeEvent.contentOffset.y;
        if( windowHeight + offset >= height - 50 ){
          if(this.props.recep === 6){

          }else{
            this.props.hey()
          }
        }
        if( offset <= 0 ){
          if(this.props.recep === 1){

          }else{
            this.props.hey2()

          }
        }
    }} scrollEventThrottle={0} ref={ref => this._scrollView = ref}
      onContentSizeChange={(contentWidth, contentHeight)=>{        
        this._scrollView.scrollTo({x:0, y:70, animated: true});
    }}>
    <View style={{height:70, backgroundColor:'#fff',flex:1,flexDirection:'row'}}>
      <View style={{flex:1}}></View>
      <View style={{flex:1,left:40}}>
      <Image
          style={{width: 50, height: 50}}
          source={icon2}
        />
        </View>
       <View style={{flex:1}}></View>
      </View>
      <ComponenteDia textoData = '01 a 05' textoAta = 'Proposta de Matrícula Curricular para o Período Letivo 2019.1 nas Coordenações de Curso e on line via portal do discente para alunos com ingresso em 2019.1 e para alunos veteranos.' ></ComponenteDia>
      <ComponenteDia textoData = '06 e 07 ' textoAta = 'Ajuste das turmas ofertadas – Alterações da Oferta de Disciplinas pelos Departamentos de Ensino / Chefias/Coordenações de Curso para o período letivo 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '08 e 11 ' textoAta = 'Processamento das Propostas de Matrícula do Período Letivo 2019.1.' ></ComponenteDia>
      <ComponenteDia textoData = '12 e 13' textoAta = 'Ajuste de Matrícula: Cancelamento / Acréscimo de Disciplina / Aproveitamento de vagas disponíveis para o período 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '14 e 15' textoAta = 'Reuniões Pedagógicas' ></ComponenteDia>
      <ComponenteDia textoData = '15 - Junho' textoAta = 'Divulgação do resultado do processamento das solicitações de acréscimo e cancelamento de disciplina para o período 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '15' textoAta = 'Matrícula para o Período Letivo 2019.1, por meio de Matrícula para Aluno Especial, Aluno em Trânsito e Aluno do Programa de Mobilidade Estudantil na DAA/DPM' ></ComponenteDia>
      <ComponenteDia textoData = '18' textoAta = 'INÍCIO DAS AULAS DO PERÍODO LETIVO 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '18' textoAta = 'Publicação do cronograma de cadastro de estágio obrigatório no módulo Estágio/SIGGA dos cursos de graduação, ensino presencial e à distância, período 2019.1, pela Coordenadoria Geral de Estágios/PREG' ></ComponenteDia>
      <ComponenteDia textoData = '18 a 20' textoAta = 'Solicitação de Disciplina em Caráter Especial – Exclusivamente para os Possíveis Formandos no Período Letivo 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '18 a 22' textoAta = 'Inscrição de Candidatos a Monitoria para o período letivo 2019.1, através do SIGAA, via portal do discente' ></ComponenteDia>
      <ComponenteDia textoData = '18 a 22' textoAta = 'Matrícula em caráter extraordinário em vagas remanescentes, período 2019.1' ></ComponenteDia>
      <ComponenteDia textoData = '18.02 a 22.03' textoAta = 'Solicitação de Aproveitamento de Estudos (Dispensa de Disciplina)' ></ComponenteDia>
      <ComponenteDia textoData = '18.02 a 03.05' textoAta = 'Trancamento de Matrícula no Curso / Trancamento de Disciplina, período 2019.1' ></ComponenteDia>
      <View style={{height:400, backgroundColor:'#fff',flex:1,flexDirection:'row'}}>
      <View style={{flex:1}}></View>
      <View style={{flex:1,left:40,top:20}}>
      <Image
          style={{width: 50, height: 50}}
          source={icon}
        />
        </View>
       <View style={{flex:1}}></View>
      </View>
      </ScrollView>
      </View>
    );}
    if(this.props.toScroll === false){
      return (
        <View>
        
        <ScrollView style={{marginTop:10,height:responsiveHeight(100)}}
        
        onScroll={(e)=>{
          var windowHeight = Dimensions.get('window').height,
              height = e.nativeEvent.contentSize.height,
              offset = e.nativeEvent.contentOffset.y;
          if( windowHeight + offset >= height - 50 ){
            if(this.props.recep === 6){
  
            }else{
              this.props.hey()
            }
          }
          if( offset == 0 ){
            if(this.props.recep === 1){
  
            }else{
              this.props.hey2()  
            }
          }
      }
      } scrollEventThrottle={0} ref={ref => this.scrollView = ref}
      onContentSizeChange={(contentWidth, contentHeight)=>{        
        this.scrollView.scrollTo({x:0, y:contentHeight-730, animated: false});
        this.scrollView.scrollTo({x:0, y:contentHeight-800, animated: true});

    }}
     >
       <View style={{height:70, backgroundColor:'#fff',flex:1,flexDirection:'row'}}>
      <View style={{flex:1}}></View>
      <View style={{flex:1,left:40}}>
      <Image
          style={{width: 50, height: 50}}
          source={icon2}
        />
        </View>
       <View style={{flex:1}}></View>
      </View>

        <ComponenteDia textoData = '01 a 05' textoAta = 'Proposta de Matrícula Curricular para o Período Letivo 2019.1 nas Coordenações de Curso e on line via portal do discente para alunos com ingresso em 2019.1 e para alunos veteranos.' ></ComponenteDia>
        <ComponenteDia textoData = '06 e 07 ' textoAta = 'Ajuste das turmas ofertadas – Alterações da Oferta de Disciplinas pelos Departamentos de Ensino / Chefias/Coordenações de Curso para o período letivo 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '08 e 11 ' textoAta = 'Processamento das Propostas de Matrícula do Período Letivo 2019.1.' ></ComponenteDia>
        <ComponenteDia textoData = '12 e 13' textoAta = 'Ajuste de Matrícula: Cancelamento / Acréscimo de Disciplina / Aproveitamento de vagas disponíveis para o período 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '14 e 15' textoAta = 'Reuniões Pedagógicas' ></ComponenteDia>
        <ComponenteDia textoData = '15 - Junho' textoAta = 'Divulgação do resultado do processamento das solicitações de acréscimo e cancelamento de disciplina para o período 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '15' textoAta = 'Matrícula para o Período Letivo 2019.1, por meio de Matrícula para Aluno Especial, Aluno em Trânsito e Aluno do Programa de Mobilidade Estudantil na DAA/DPM' ></ComponenteDia>
        <ComponenteDia textoData = '18' textoAta = 'INÍCIO DAS AULAS DO PERÍODO LETIVO 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '18' textoAta = 'Publicação do cronograma de cadastro de estágio obrigatório no módulo Estágio/SIGGA dos cursos de graduação, ensino presencial e à distância, período 2019.1, pela Coordenadoria Geral de Estágios/PREG' ></ComponenteDia>
        <ComponenteDia textoData = '18 a 20' textoAta = 'Solicitação de Disciplina em Caráter Especial – Exclusivamente para os Possíveis Formandos no Período Letivo 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '18 a 22' textoAta = 'Inscrição de Candidatos a Monitoria para o período letivo 2019.1, através do SIGAA, via portal do discente' ></ComponenteDia>
        <ComponenteDia textoData = '18 a 22' textoAta = 'Matrícula em caráter extraordinário em vagas remanescentes, período 2019.1' ></ComponenteDia>
        <ComponenteDia textoData = '18.02 a 22.03' textoAta = 'Solicitação de Aproveitamento de Estudos (Dispensa de Disciplina)' ></ComponenteDia>
        <ComponenteDia textoData = '18.02 a 03.05' textoAta = 'Trancamento de Matrícula no Curso / Trancamento de Disciplina, período 2019.1' ></ComponenteDia>
        <View style={{height:400, backgroundColor:'#fff',flex:1,flexDirection:'row'}}>
        <View style={{flex:1}}></View>
        <View style={{flex:1,left:40, top:20}}>
        <Image
            style={{width: 50, height: 50}}
            source={icon}
          />
          </View>
         <View style={{flex:1}}></View>
        </View>
        </ScrollView>
        </View>
      );
    }
  }
}

export default MyComponent;