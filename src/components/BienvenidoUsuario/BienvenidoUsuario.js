import React from 'react';
import {View, Text} from 'react-native';

const bienvenidoUsuario = (props) => (
    <View>
        <Text>
            Bienvenido {props.username}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    textContainer: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    }
});

