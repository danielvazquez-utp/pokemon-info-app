import { View } from 'react-native';
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
        console.log(response);
    }

    useEffect(() => {
        getPokemonInfo( counter );
    }, []);
    

    return (
        <View 
            style={{ 
                flex:1, 
                justifyContent:"center", alignItems:"center" 
            }}
        >
            <Text variant='displayMedium'>
                { ide } - { name }
            </Text>
            <Avatar.Image size={100} source={{ uri:front }} />
            <View style={{ flexDirection: "row-reverse" }}>
                <Button 
                    mode="contained"
                    onPress={ () => increment() }
                >
                    Siguiente
                </Button>
                <Button 
                    mode="contained"
                    onPress={ () => decrement() }
                >
                    Anterior
                </Button>
            </View>
        </View>
    )
}