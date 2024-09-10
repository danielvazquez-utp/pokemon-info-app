import { Text, Avatar, Divider } from "react-native-paper";
import { View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

interface pokeProps {
    ide: number,
    name: string,
    sprites: any,
}

SplashScreen.preventAutoHideAsync();

export const PokemonCard = ({ ide, name, sprites }:pokeProps) => {

    const [ isLoaded ] = useFonts({
        'PsilographBlack': require('../assets/fonts/Psilograph-Black.ttf'),
        'PsilographRegular': require('../assets/fonts/Psilograph-Regular.ttf'),
    });

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync(); //hide the splashscreen
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

  return (
    <>
        <Text
            variant='displayMedium'
            style={{
                color: "darkred",
                fontWeight: "heavy",
                fontSize: 180,
                textTransform: "capitalize",               
                marginBottom: 35,
                fontFamily: 'PsilographRegular'
            }}
        >
            {  name }
        </Text>

        <Divider />

        <View 
            style={{
                flexDirection: "row"
            }}
            onLayout={ handleOnLayout }
        >
            <View style={{
                flex: 3,
                justifyContent: "center",
                alignItems: "flex-end",
                paddingTop: 80
            }}>
                <Text
                    variant='displayLarge'
                    style={{
                        color: "gray",
                        fontWeight: "heavy",
                        fontSize: 550,
                        fontFamily: 'PsilographRegular'
                    }}
                >
                    {ide}
                </Text>
            </View>
            <View style={{
                flex: 3,
                alignItems: "center"
            }}>
                {
                    sprites.map( (sprite: string, index: any) => {
                        return (
                            <Avatar.Image
                                key={ index }
                                size={100}
                                source={{ uri: sprite }}
                                style={{ 
                                    backgroundColor: "darkorange",
                                    margin: 2,
                                }}
                            />
                        )
                    })
                }
            </View>
        </View>


    </>
  )
}