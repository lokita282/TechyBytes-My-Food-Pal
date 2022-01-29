import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TextInputComponent = (props) => {
    return (
        <View style={{...styles.inputContainer,marginTop:props.marginTop}}>
            <Ionicons name={props.iconShape} size={20} color="#393E46"  style={{paddingLeft:10}}/>
            <TextInput style={styles.textInput}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                keyboardType={props.keyboardType}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholderTextColor={props.placeholderTextColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        width: wp('85%'),
        borderRadius: 10,
        height: 60,
        // marginTop: 15
    },

    textInput: {
        marginLeft: 5,
        backgroundColor: 'white',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        fontWeight:'600'
    },

})

export default TextInputComponent;