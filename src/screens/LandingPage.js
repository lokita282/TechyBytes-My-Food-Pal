import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

function LandingPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Landing Page</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        color: 'black'
    }
});
export default LandingPage;
