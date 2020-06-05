import React from 'react'

import 
{ 
    StyleSheet, 
    View, 
    SafeAreaView,
    ScrollView,

} from 'react-native'

import Header from '../../components/header'
import Stories from '../../components/stories'
import Feed from '../feed'

export default () => {
    return(
        <SafeAreaView style={style.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stories />
                <Feed />
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
    }
})