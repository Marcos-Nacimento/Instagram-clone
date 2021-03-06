import React from 'react'

import 
{
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native'

import { users } from '../data'

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        backgroundColor: '#f8f8ff',
        paddingTop: 10,
    },
    content: {
        margin: 8,
    },
    label: {
        textAlign: 'center',
        paddingTop: 6,
    }
})

export default () => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {users.map((item) => (
                    <TouchableOpacity style={styles.content}>
                        <Image style={{width: 60, height: 60, borderRadius: 33}} source={{uri: item.user}} key={item.id} />
                        <Text style={styles.label}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}