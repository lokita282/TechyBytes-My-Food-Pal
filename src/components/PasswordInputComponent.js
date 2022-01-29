import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PasswordInputComponent = (props) => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity  style={{paddingLeft:10}} activeOpacity={0.5} onPress={() => {
                setVisible(!visible);
            }}>
                <Ionicons name={visible ? "lock-open" : "lock-closed"} size={20} color= "#393E46"/>
            </TouchableOpacity>
            <TextInput style={styles.textInput}
                placeholder={props.placeholder}
                autoComplete={props.autoComplete}
                value={props.value}
                onChangeText={props.onChangeText}
                secureTextEntry={!visible}
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
        marginTop:25,
        height: 60,
    },

    textInput: {
        marginLeft: 5,
        backgroundColor:'white',
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        fontWeight:'600'
    },

})

export default PasswordInputComponent;