import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useFetch } from '@/hooks/useFetch';
import { PokemonCard } from './PokemonCard';

export const PokemonInfo = () => {

    const { counter, increment, decrement } = useCounter();
    const { data, isLoading, hasError } = useFetch( 'https://pokeapi.co/api/v2/pokemon/' + counter );

    console.log({data: data, url: 'https://pokeapi.co/api/v2/pokemon/' + counter});

    

    return (
        <View 
            style={{ 
                flex:1, 
                justifyContent:"center", alignItems:"center" 
            }}
        >
            

            <PokemonCard
                id={ data.id }
                name={ data.name }
                sprites={[
                    data.sprites.back_default,
                    data.sprites.front_default,
                    data.sprites.back_shiny,
                    data.sprites.front_shiny,
                ]}
            />

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