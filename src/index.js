import React from 'react'
import { StatusBar, Image, TouchableOpacity, } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const icons = 
{
    home: {
        name: 'home-outline'
    },
    search: {
        name: 'magnify'
    },
    add: {
        name: 'tooltip-plus-outline'
    },
    favorite: {
        name: 'heart-outline'
    },
    profile: {
        name: 'account-outline'
    }

}

import HomeScreen from './pages/home'
import ProfileScreen from './components/profile'

const Tabs = createBottomTabNavigator()

export default () => {
    return(
        <NavigationContainer>
            <StatusBar barStyle='light-content' />
            <Tabs.Navigator
                initialRouteName='home'
                screenOptions={({route}) => ({

                    tabBarIcon: ({ size, color }) => {
                        
                        const { name } = icons[route.name]
                        return <MaterialCommunityIcons name={name} size={size} color={color} />;
                    }
                })}
                tabBarOptions={{
                    style: {

                    },
                    activeTintColor: '#000',
                    showLabel: false
                }}
                    
            >
                <Tabs.Screen name='home' component={HomeScreen} />
                <Tabs.Screen name='search' component={HomeScreen} />
                <Tabs.Screen name='add' component={HomeScreen} />
                <Tabs.Screen name='favorite' component={HomeScreen} />
                <Tabs.Screen name='profile' component={ProfileScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}