import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';

const Profile = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <Text style={styles.header}>Welcome Priyambi !</Text>
      <Text style={styles.header1}>Please provide the following details:</Text>
    </View>
    <View style={styles.col}>
      <View style={styles.container2}>
        <TouchableOpacity >
          <Image
            source={require('../assets/male1.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.label}>MALE</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity>
          <Image
            source={require('../assets/female1.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.label}>FEMALE</Text>
      </View>
     
    </View>
    <View style={styles.col}>
      <View style={styles.container2}>
        {/* <TouchableOpacity>
          <Image
            source={require('../assets/capacity.png')}
            style={styles.image}
          />
        </TouchableOpacity> */}
        <TextInput/>
        <Text style={styles.label}>HEIGHT (cm)</Text>
      </View>
      <View style={styles.container2}>
        {/* <TouchableOpacity>
          <Image
            source={require('../assets/amount.png')}
            style={styles.image}
          />
        </TouchableOpacity> */}
        <Text style={styles.label}>WEIGHT (Kg) </Text>
      </View>
    </View>
    <View style={styles.age}>
    <Text style={styles.label}>Enter your Age : {value}</Text>
    <Slider
              step={1}
              minimumValue={0}
              maximumValue={100}
              value={value}
              onValueChange={slideValue => setValue(slideValue)}
              minimumTrackTintColor="#FB008B"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#FB008B"
            /></View>
    <View style={styles.buttonview}>
      <TouchableOpacity onPress={() =>{} }> 
      <Text style={styles.button}>PROCEED</Text>
      </TouchableOpacity>
    </View>
    
  </View>
);
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
    marginTop: 40,
  },
  container2: {
    width: 130,
    height: 100,
    backgroundColor: '#FCC13F',
    marginLeft: 35,
    marginTop: 20,
  },
  col: {
    flexDirection: 'row',
    marginTop: 50,
  
  },
  header: {
    color: '#FB008B',
    fontWeight: 'bold',
    fontSize:25,
    fontFamily: 'Source Sans Pro',
  },
  header1: {
    color: '#FB008B',
    fontWeight: 'bold',
    fontSize:17,
    opacity:0.5,
    fontFamily: 'Source Sans Pro',
  },
  label: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 15,
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#FCC13F',
    borderColor: '#FB008B',
    borderWidth: 2,
    marginLeft: 100,
    marginTop: 40,
  },
  button: {
    color: '#FB008B',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 8,
  },
  image: {
    marginTop: 20,
    alignSelf: 'center',
    height:35,
    width:25,
    resize:'center'
  },
});