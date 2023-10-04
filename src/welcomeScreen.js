import React from "react";
import { View, Text, TouchableOpacity, ImageBackground} from "react-native";


export default function welcomeScreen({navigation}){
    return(
        <View >
            
            <ImageBackground
                source={require('../assets/imagens/livroempilhado.png')}
                style ={{
                    width:'100vw',
                    height:'100vh',
                    objectFit:"cover",
                    opacity:'0.95',
                   
                }}
            />
            <Text style ={{
                    marginLeft:14,
                    zIndex: 1,
                    bottom:'30%',
                    color: '#ffffff',
                    fontSize:24,
                    fontWeight:"bold"
                }}>
                    Biblioteca CG
            </Text>
            <Text style ={{
                    marginLeft:14,
                    zIndex: 1,
                    bottom:'30%',
                    color: '#ffffff',
                    fontSize:12,
                }}>A leitura é um pilar fundamental na educação e no enriquecimento cultural e social.</Text>
            <TouchableOpacity  style ={{
                   position: 'absolute',
                   backgroundColor: '#821001',
                   

                   bottom: "10%",
                   left: 14,
                   right: 14,
                   elevation: 0,
                   borderRadius: 14,
                   height: 60,
                    
                    
                
                }}
                
                onPress={ () => navigation.navigate('routes')}>
                    <Text style ={{
                        display:"flex",
                        zIndex:1,
                        color:'#000000',
                        fontSize:24,
                        padding:10,
                        alignItems:"center",
                        justifyContent:"center",
                        
                    }}> Vamos lá</Text>
            </TouchableOpacity>
        </View>
    )
}