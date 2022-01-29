import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ButtonComponent = (props) => {
    return (
        <View style={{ ...styles.button, backgroundColor: props.buttonColor }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={props.onPress}>
                <Text style={{ fontSize: 22, color: props.buttonTitleColor, fontWeight: '600' }}>
                    {props.buttonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        width: wp('85%'),
        height: 50,
        borderRadius: 50,
    }
});

export default ButtonComponent