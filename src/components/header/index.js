import React from 'react'

import 
{  
    View, 
    StyleSheet, 
    Image,
    TouchableOpacity,

} from 'react-native'

import logo from '../../img/logo.png'
import camera from '../../img/camera.png'
import send from '../../img/send.png'

export default () => {
    return(
        <View styled={style.container}>
            <View style={style.content}>
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={camera} />
                </TouchableOpacity>
                <Image style={{width: 120, height: 35}} source={logo} />
                <TouchableOpacity>
                    <Image style={{width: 20, height: 20}} source={send} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        
    },
    content: {
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
    }
})