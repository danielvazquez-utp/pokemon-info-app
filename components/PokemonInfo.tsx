import { ImageBackground, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';

export const PokemonInfo = () => {

    const [name, setName] = useState('');
    const [ide, setIde] = useState('');
    const [front, setFront] = useState('');

    const { counter, increment, decrement } = useCounter();

    const getPokemonInfo = async( id=1 ) => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
        const request = await fetch(url);
        const response = await request.json();
        setName( response.name );
        setIde( response.id );
        setFront( response.sprites.front_default );
    }

    useEffect(() => {
        getPokemonInfo( counter );
    }, [counter]);
    

    return (
        <ImageBackground
            style={{ 
                flex:1, 
                justifyContent:"center", 
                alignItems:"center",
            }}
            source={{
                uri:'https://img.freepik.com/free-vector/comic-style-background_23-2148827393.jpg'
            }}
        >
            <Text 
                variant='displayMedium'
                style={{
                    color: "indigo"
                }}
            >
                { ide } - { name }
            </Text>
            <Avatar.Image 
                size={120} 
                source={{ uri:front }} 
                style={{ backgroundColor:"darkorange" }}
            />
            <View 
                style={{ 
                    flexDirection: "row-reverse",
                    width: "100%",
                    justifyContent: "space-evenly"
                }}
            >
                <Button 
                    mode="contained"
                    onPress={ () => increment() }
                    icon="arrow-right"
                    style={{
                        backgroundColor: "darkblue",
                    }}
                    contentStyle={{
                        flexDirection: "row-reverse"
                    }}
                >
                    Siguiente
                </Button>
                <Button 
                    mode="contained"
                    onPress={ () => decrement() }
                    icon="arrow-left"
                    style={{
                        backgroundColor: "darkblue"
                    }}
                >
                    Anterior
                </Button>
            </View>
        </ImageBackground>
    )
}