import { ImageBackground, View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-paper';
import { useCounter } from '@/hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { useFetch } from '@/hooks/useFetch';
import { PokemonCard } from './PokemonCard';

export const PokemonInfo = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/' + counter);

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

            {
                isLoading
                ? <LoadingMessage />
                : <PokemonCard
                    ide={ counter }
                    name={ data?.name }
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.back_default,
                        data.sprites.front_shiny,
                        data.sprites.back_shiny,
                    ]}
                    />
            }

            
            <View 
                style={{ 
                    flexDirection: "row-reverse",
                    width: "100%",
                    justifyContent: "space-evenly",
                    marginTop: 15,
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
                    onPress={ () => counter>1 ? decrement() : null }
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