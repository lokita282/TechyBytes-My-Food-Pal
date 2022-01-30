import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  ImageBackground
} from 'react-native';
import CalendarStrip from 'react-native-scrollable-calendar-strip';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';

const Dashboard = () => {

  useEffect(() => {
    const token = AsyncStorage.getItem('access_token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY1YjhmM2IyNDM1ODliYTgxODJlZWEiLCJpYXQiOjE2NDM0OTM2MTksImV4cCI6MTY3NTAyOTYxOX0.90PswktvpkhUCSgU-PZ8kBfKQzQTa43Tz10a4eolFXs`);

    var raw = "";

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://fast-mesa-43934.herokuapp.com/api/food/get/${value}`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result.data.totalCalories);
        setTotalCalorie(result.data.totalCalories);
        setTotalProteins(result.data.totalProteins);
        setTotalCarbs(result.data.totalCarbs);
        setTotalFibres(result.data.totalFibres);
      })
      .catch(error => console.log('error', error));
  }, [setValue]);


  const [value, setValue] = useState('2022-01-30');
  const [totalCalorie, setTotalCalorie] = useState(0);
  const [totalProteins, setTotalProteins] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFibres, setTotalFibres] = useState(0);
  const [water, setWater] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [steps, setSteps] = useState(0);

  const selectedDate = date => {
    const d = new Date(date);
    console.log(
      d.getFullYear() + '-0' + (d.getMonth() + 1) + '-' + d.getDate(),
    );
    setValue(d.getFullYear() + '-0' + (d.getMonth() + 1) + '-' + d.getDate());



  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.header}>MyFoodPal</Text>
        </View>

        <View style={styles.calendar}>
          <CalendarStrip
            scrollable
            style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
            calendarColor={'#FB008B'}
            calendarHeaderStyle={{ color: 'white' }}
            dateNumberStyle={{ color: 'white' }}
            dateNameStyle={{ color: 'white' }}
            iconContainer={{ flex: 0.1 }}
            onDateSelected={selectedDate}
          />
        </View>
        <Text style={styles.title}>Daily Analysis</Text>

        <View style={styles.col}>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={totalCalorie}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>ENERGY:{totalCalorie}kcal</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={totalCarbs}
                duration={1500}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>CARBOHYDRATES:{totalCarbs}g</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={totalProteins}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>PROTEINS:{totalProteins}g</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={totalFibres}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
                lineCap="square"
              />
            </View>
            <Text style={styles.label}>FIBRE CONTENT:{totalFibres}g</Text>
          </View>
        </View>
        <Text style={styles.title1}>Goals</Text>
        <View style={styles.bar}>
          <Text style={styles.text}>Water Intake: {water} litres</Text>
          {/* <Progress.Bar progress={0.5} width={300} color="#FCC13F" /> */}
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={12}
            value={water}
            onValueChange={slideValue => setWater(slideValue)}
            minimumTrackTintColor="#FCC13F"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FCC13F"
            width={300}
          />
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Steps Walked: {steps}</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={10000}
            value={steps}
            onValueChange={slideValue => setSteps(slideValue)}
            minimumTrackTintColor="#FCC13F"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FCC13F"
            width={300}
          />
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Sleep Hours:{sleep} hours</Text>
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={8}
            value={sleep}
            onValueChange={slideValue => setSleep(slideValue)}
            minimumTrackTintColor="#FCC13F"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#FCC13F"
            width={300}
          />
        </View>
        <Text style={styles.title1}>Blogs</Text>
        <View style={styles.container3}>
          <ImageBackground source={require('../assets/blog1.jpg')} style={styles.image} imageStyle={{ borderRadius: 10 }} />
          <View style={styles.content}>
            <Text
              onPress={() => {
                Linking.openURL('https://damndelicious.net/');
              }}
              style={styles.main}>
              Damn Delicious
            </Text>
            <Text style={styles.data}>
              How did we ever manage to cook before the arrival of the internet?
              I suppose we had to rely on cookbooks, cooking tv shows, and
              knowledge handed down from our grandmothers.
            </Text>
          </View>
        </View>
        <View style={styles.container3}>
          <ImageBackground source={require('../assets/blog2.jpg')} style={styles.image} imageStyle={{ borderRadius: 10 }} />
          <View style={styles.content}>
            <Text
              onPress={() => {
                Linking.openURL('https://www.wealthyhealth.com.au/');
              }}
              style={styles.main}
              style={styles.main}>
              Wealthy Health
            </Text>
            <Text style={styles.data}>
              The more daring would experiment in the kitchen, remembering the
              successes, and mercifully forgetting any culinary
              disasters.Turning your passion takes a lot of effort and
              confidence.
            </Text>
          </View>
        </View>
        <View style={styles.container3}>
          <ImageBackground source={require('../assets/blog3.jpg')} style={styles.image} imageStyle={{ borderRadius: 10 }} />
          <View style={styles.content}>
            <Text
              onPress={() => {
                Linking.openURL(
                  'https://thrivecuisine.com/fruits/juicy-fruits-list/',
                );
              }}
              style={styles.main}>
              Juicy Fruits
            </Text>
            <Text style={styles.data}>
              A group of 8 crazy bloggers who see the world through hungry
              eyes!"-that's how they describe themselves. Undoubtedly, they have
              got the best dishes covered on their blog without compromising on
              food photography skills.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 10
  },
  calendar: {
    marginTop: 2,
  },
  text: {
    color: 'black',
    marginBottom: 5,
  },
  container2: {
    width: 150,
    height: 100,
    backgroundColor: 'white',
    marginLeft: 27,
    elevation: 20,
    marginTop: 10,
  },
  main: {
    fontWeight: '700',
    fontSize: 17,
    color: 'white',
    textDecorationLine: 'underline',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    fontWeight: '700',
  },
  title1: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    color: 'black',
    fontWeight: '700',
  },
  data: {
    fontSize: 13,
    color: 'white',
    marginTop: 3,
  },
  container3: {
    width: 300,
    height: 230,
    backgroundColor: '#FB008B',
    marginLeft: 40,
    marginTop: 30,
    borderRadius:10
  },
  bar: {
    alignSelf: 'center',
    marginTop: 10,
  },
  col: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
  },
  content: {
    marginTop: 8,
    marginRight: 10,
    marginLeft: 20,
  },

  progress: {
    alignSelf: 'center',
    marginTop: 20,
  },
  image: {
    height: 100,
    width: 300,
  },
  appbar:{
    backgroundColor:'#FCC13F',
    elevation:25
  }
});
