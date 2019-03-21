import React from 'react'
import { View } from 'react-native'
import { 
  Icon,
  Logo
} from '../../components'

import { StackNavigator } from 'react-navigation'

import colors from '../../values/colors'
import sizes from '../../values/sizes'

import Login from '../../containers/Login'
import ParticipanteLista from '../../containers/participantes/ParticipanteLista'
import ParticipanteForm from '../../containers/participantes/ParticipanteForm'
import SorteioLista from '../../containers/sorteios/SorteioLista'

const BackButton = ({ navigation }) => (
  <View style={stylesLocal.containerBackButton}>
    <Icon 
      icon='arrow-back' 
      color={colors.headerItems} 
      onClick={() => navigation.goBack(null)} 
    />
  </View>
)

const LogoutButton = ({ navigation }) => (
  <View style={stylesLocal.containerBackButton}>
    <Icon 
      icon='exit-to-app' 
      color={colors.headerItems} 
      onClick={() => navigation.goBack(null)} 
    />
  </View>
)

const Stack = StackNavigator(
  {
    Login: { screen: Login, navigationOptions: { header: null } },
    SorteioLista: { 
      screen: SorteioLista, 
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Sorteios',
        headerTitleStyle: {
          fontWeight: 'normal'
        },
        headerRight: <LogoutButton navigation={navigation} />
      })
    },
    ParticipanteLista: { 
      screen: ParticipanteLista, 
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Participantes',
        headerTitleStyle: {
          fontWeight: 'normal'
        },
        headerLeft: <BackButton navigation={navigation} />
      })
    },
    ParticipanteForm: {
      screen: ParticipanteForm, 
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Novo Participante',
        headerTitleStyle: {
          fontWeight: 'normal'
        },
        headerLeft: <BackButton navigation={navigation} />
      })
    }
  },
  { 
    initialRouteName: 'Login',
    headerBackTitleVisible: false,

    navigationOptions: {
      swipeEnabled: false,
      tabBarVisible: true,

      headerLeft: null,
      headerRight: null,
      headerStyle: {
        backgroundColor: colors.header,
      },
      headerTintColor: colors.headerItems,
      headerTitleStyle: { 
        fontSize: sizes.font.navbar, 
        fontWeight: 'bold'
      },
    },
  }
)

const stylesLocal = {
  containerBackButton: {
    marginLeft: 8,
    marginRight: 8
  }
}

export default Stack
