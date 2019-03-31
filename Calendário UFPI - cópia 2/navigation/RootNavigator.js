
import * as React from 'react';
import {createDrawerNavigator } from 'react-navigation';
import { Appbar } from 'react-native-paper';
import EsteticaGeral from './EsteticaGeral';
export default createDrawerNavigator(
  {
    home:  EsteticaGeral,
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header style={{backgroundColor:'#025cbb'}}>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Calendário" />
        </Appbar.Header>
      ),
    }),
  }
);
