import React, { useState, useEffect } from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';


const Profile = ({navigation}) => {
    useEffect(() => {
      const getUsername=async()=>{
        const username = await AsyncStorage.getItem('username');
        setUsername(username);
      }
    }, []);
    
  
  const [value, setValue] = useState(18);
  const [height, setHeight] = useState(120);
  const [weight, setWeight] = useState(40);
  const[maleselect,setMaleSelect]=useState(false);
  const[felmaleselect,setFemaleSelect]=useState(false);
  const[username,setUsername]=useState('');
 
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.header}>Welcome{username} !</Text>
        <Text style={styles.header1}>
          Please provide the following details:
        </Text>
      </View>
      <View style={styles.col}>
        <View style={maleselect?{...styles.container2, backgroundColor:'#FB008B'}:styles.container2}>
          <TouchableOpacity onPress={()=>{setMaleSelect(true);
          setFemaleSelect(false);}}>
            <Image
              source={require('../assets/male1.png')}
              style={styles.image1}
            />
          </TouchableOpacity>
          <Text style={styles.label}>MALE</Text>
        </View>
        <View style={felmaleselect?{...styles.container2, backgroundColor:'#FB008B'}:styles.container2}>
          <TouchableOpacity onPress={()=>{setFemaleSelect(true);
          setMaleSelect(false);}}>
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

          <Text style={{ color: '#FB008B', marginLeft: 48, marginTop: 15, fontSize: 25, fontWeight:'600' }}>{height}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 23, marginTop: 10 }}>
            <TouchableOpacity onPress={()=>setHeight(height+1)}>
              <View style={{
                height: 40,
                width: 40,
                borderRadius: 40, backgroundColor: '#FCC13F', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
              }}>
                <Ionicons
                  name='add'
                  size={30}
                  color='black'
                >
                </Ionicons>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setHeight(height-1)}>
              <View style={{
                height: 40,
                width: 40,
                marginLeft: 20,
                borderRadius: 40, backgroundColor: '#FCC13F', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
              }}>
                <Ionicons
                  name='remove'
                  size={30}
                  color='black'
                >
                </Ionicons>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>HEIGHT (cm)</Text>
        </View>
        <View style={styles.container2}>

          <Text style={{ color: '#FB008B', marginLeft: 58, marginTop: 15, fontSize: 25, fontWeight:'600' }}>{weight}</Text>
          <View style={{ flexDirection: 'row', marginLeft: 23, marginTop: 10 }}>
            <TouchableOpacity onPress={()=>setWeight(weight+1)}>
              <View style={{
                height: 40,
                width: 40,
                borderRadius: 40, backgroundColor: '#FCC13F', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
              }}>
                <Ionicons
                  name='add'
                  size={30}
                  color='black'
                >
                </Ionicons>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setWeight(weight-1)}>
              <View style={{
                height: 40,
                width: 40,
                marginLeft: 20,
                borderRadius: 40, backgroundColor: '#FCC13F', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'
              }}>
                <Ionicons
                  name='remove'
                  size={30}
                  color='black'
                >
                </Ionicons>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>WEIGHT (kg)</Text>
        </View>
      </View>
      <View style={{marginTop:40}}>
        <Text style={styles.label}>ENTER YOUR AGE : {value}</Text>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={slideValue => setValue(slideValue)}
          minimumTrackTintColor="#FB008B"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#FB008B"
        />
      </View>
      <View style={styles.buttonview}>
        <TouchableOpacity onPress={() => {navigation.navigate('BottomTab')}}>
          <Text style={styles.button}>GET STARTED</Text>
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
    width: 150,
    height: 150,
    backgroundColor: '#FFFFFF',
    marginLeft: 29,
    marginTop: 20,
    borderRadius: 8,
    elevation: 10
  },
  col: {
    flexDirection: 'row',
    marginTop: 50,
  },
  header: {
    color: '#FB008B',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Source Sans Pro',
  },
  header1: {
    color: '#FB008B',
    fontWeight: 'bold',
    fontSize: 17,
    opacity: 0.5,
    fontFamily: 'Source Sans Pro',
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    marginTop: 11,
  },
  buttonview: {
    width: 150,
    height: 40,
    backgroundColor: '#FCC13F',
    // borderColor: '#FB008B',
    // borderWidth: 2,
    marginLeft: 110,
    marginTop: 40,
    borderRadius:12
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: 50,
    marginTop: 15,
    alignSelf: 'center',
  },
  button: {
    color: '#FB008B',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    fontWeight:'700'
  },
  image: {
    marginTop: 30,
    alignSelf: 'center',
    height: 63,
    width: 45,
    resize: 'center',
  },
  image1: {
    marginTop: 30,
    alignSelf: 'center',
    height: 60,
    width: 60,
    resize: 'center',
  },
});