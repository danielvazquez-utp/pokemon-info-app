import { ActivityIndicator, Text } from 'react-native-paper';

export const LoadingMessage = () => {
    return (
        <>
            <Text
                style={{
                    margin: 5,
                    fontWeight: "bold"
                }}
            >
                Cargando
            </Text>
            <ActivityIndicator
                animating={true}
                size='large'
            />
        </>
    )
}