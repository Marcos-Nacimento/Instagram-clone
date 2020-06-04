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
import Posts from '../../components/posts'

export default () => {
    return(
        <SafeAreaView style={style.container}>
            <Header />
            <View>
                <ScrollView>
                    <Stories />
                    <Posts />
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
    }
})