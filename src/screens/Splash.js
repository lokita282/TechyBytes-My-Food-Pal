import React, { useEffect } from 'react';
import { StyleSheet, Text ,View} from 'react-native';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Slidingup')
    }, 2200);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/hello.json')}
        autoPlay={true}
        loop
        style={styles.lottieview}
      />

      <Text style={styles.header}>MyFoodPal</Text>
      <Text style={{...styles.header,opacity:0.6, fontSize:20, marginTop:7}}>"Your personal Food Logger"</Text>
      </View>


  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  lottieview: {
    height: 400,
    width: 300,
    marginTop: hp('10%'),
    alignSelf: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#FB008B',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 30,
  },
});