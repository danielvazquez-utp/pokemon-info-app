import { Text, Avatar, Divider } from "react-native-paper";
import { View } from "react-native";

interface pokeProps {
    ide: number,
    name: string,
    sprites: any,
}

export const PokemonCard = ({ ide, name, sprites }:pokeProps) => {
  return (
    <>
        
        <Text
            variant='displayMedium'
            style={{
                color: "darkred",
                fontWeight: "heavy",
                fontSize: 80,
                textTransform: "capitalize",               
                marginBottom: 15
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
                alignItems: "flex-end"
            }}>
                <Text
                    variant='displayLarge'
                    style={{
                        color: "darkred",
                        fontWeight: "heavy",
                        fontSize: 150
                    }}
                >
                    {ide}
                </Text>
            </View>
            <View style={{
                flex: 3,
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