import React from 'react'

import 
{
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,

} from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'

import { database } from '../../components/data'

export default () => {
    
    return(
        <View>
            {database.map((ps) => (
                <>
                    <View>
                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <Image style={styles.avatar} source={{uri: 'https://amofamilia.com.br/wp-content/uploads/2019/05/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg'}} key={String(Math.random())}/>
                                <Text style={styles.username}>{ps.name}</Text>              
                            </View>
                            <TouchableOpacity>
                                <Icon name="more-horizontal" size={24} />
                            </TouchableOpacity>
                        </View>
                        <Image style={{width: '100%', height: 400}} source={{uri: ps.post}} key={ps.id} />
                    </View>
                    <View style={styles.foolter}>
                        <TouchableOpacity>
                            <Icon name="heart" size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="message-circle" size={24}  />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="send" size={24}  />
                        </TouchableOpacity>          
                    </View>
                </>        
            ))}
         </View>
    )
}

const styles = StyleSheet.create({
    username: {
      fontWeight: "500",
      fontSize: 16,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    header: {
      flexDirection: "row",
      padding: 8,
      paddingTop: 15,
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerLeft: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-around',
    },
    caption: {
        marginLeft: 16,
        marginBottom: 8,
    },
    likes: {
        marginLeft: 16,
        marginBottom: 16,
        fontWeight: "500",
    },
    foolter: {
        flexDirection: "row",
        marginLeft: 15,
    },  
});
