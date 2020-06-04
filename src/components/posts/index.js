import React from 'react'

import 
{
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,

} from 'react-native'

import { posts } from '../data'


export default () => {
    return(
        <View>
            <View>
                {posts.map( item => (
                    <Image style={{width: '100%', height: 400}} source={{uri: item.picture}} key={item.id} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {

    },
    avatar: {

    },
    optionPost: {

    },

})