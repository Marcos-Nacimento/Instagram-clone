import React from 'react'

import 
{
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,

} from 'react-native'

const USER = 'Marcos Nacimento'

const POSTS = 1.535
const FOLLOWERS = 621
const FOLLOWING = 839

export default () => {
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={{fontWeight: 'bold'}}>{USER}</Text>
            </View>
            <View style={styles.user}>
                <Image style={{width: 69, height: 69, borderRadius: 39}} source={{uri: 'https://http2.mlstatic.com/foto-desenho-para-o-seu-perfil-das-redes-sociais-D_NQ_NP_614041-MLB27185740295_042018-O.jpg'}} />
                    {/* information */}
                    <Text style={styles.information}>
                        <Text style={styles.values}>{POSTS} <br/></Text>
                        <Text style={{color: '#a9a9a9'}}>posts</Text>
                    </Text>
                    <Text style={styles.information}>
                        <Text style={styles.values}>{FOLLOWERS} <br/></Text>
                        <Text style={{color: '#a9a9a9'}}>followers</Text>
                    </Text>
                    <Text style={styles.information}>
                        <Text style={styles.values}>{FOLLOWING} <br/></Text>
                        <Text style={{color: '#a9a9a9'}}>following</Text>
                    </Text>
            </View>
            <View style={styles.description}>
                <Text>
                    I LOVE REACT NATIVE 💜
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            </View>
            {/* gallery */}
            <View style={styles.content}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        paddingTop: 15,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 30,
    },
    information : {
        paddingTop: 20,
        textAlign: 'center',
    },
    values: {
        fontWeight: 'bold',
    },
    description: {
        paddingTop: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    button: {
        width: 280,
        height: 30,
        borderRadius: 8,
        backgroundColor: '#dcdcdc',
        marginTop: 20,
        padding: 5,
        fontWeight: 'bold',
    },
    content: {
        
    }

})