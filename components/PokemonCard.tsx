import { Text, Avatar, Divider } from "react-native-paper";
import { View } from "react-native";
import { useFonts } from 'expo-font';

interface pokeProps {
    ide: number,
    name: string,
    sprites: any,
}

export const PokemonCard = ({ ide, name, sprites }:pokeProps) => {

    const [ isLoaded ] = useFonts({
        'Psilograph-Black': require('../assets/fonts/Psilograph-Black.ttf'),
        'Psilograph-Regular': require('../assets/fonts/Psilograph-Regular.ttf'),
    });

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
                fontFamily: 'Psilograph-Regular'
            }}
        >
            {  name }
        </Text>

        <Divider />

        <View 
            style={{
                flexDirection: "row"
            }}
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
                        fontFamily: 'Psilograph-Regular'
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