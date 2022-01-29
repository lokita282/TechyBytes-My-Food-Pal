import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import CalendarStrip from 'react-native-scrollable-calendar-strip';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const selectedDate = date => {
    const d = new Date(date);
    console.log(
      d.getFullYear() + '-0' + (d.getMonth() + 1) + '-' + d.getDate(),
    );
    setValue(d.getFullYear() + '-0' + (d.getMonth() + 1) + '-' + d.getDate());
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>MyFoodPal</Text>
        <View style={styles.calendar}>
          <CalendarStrip
            scrollable
            style={{height: 100,paddingTop: 20, paddingBottom: 10}}
            calendarColor={'#FB008B'}
            calendarHeaderStyle={{color: 'white'}}
            dateNumberStyle={{color: 'white'}}
            dateNameStyle={{color: 'white'}}
            iconContainer={{flex: 0.1}}
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
                fill={60}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>ENERGY:60 kcal</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={30}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>CARBOHYDRATES:30g</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={80}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
              />
            </View>
            <Text style={styles.label}>PROTEINS:80g</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.progress}>
              <AnimatedCircularProgress
                size={100}
                width={13}
                fill={20}
                duration={1000}
                tintColor="#FB008B"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875"
                arcSweepAngle={180}
                rotation={270}
                lineCap="square"
              />
            </View>
            <Text style={styles.label}>FIBRE CONTENT:20g</Text>
          </View>
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Water Intake:</Text>
          <Progress.Bar progress={0.5} width={300} color="#FCC13F" />
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Steps Walked:</Text>
          <Progress.Bar progress={0.7} width={300} color="#FCC13F" />
        </View>
        <View style={styles.bar}>
          <Text style={styles.text}>Sleep Hours:</Text>
          <Progress.Bar progress={0.2} width={300} color="#FCC13F" />
        </View>
        <View style={styles.container3}>
          <Image source={require('../assets/blog1.jpg')} style={styles.image} />
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
          <Image source={require('../assets/blog2.jpg')} style={styles.image} />
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
          <Image source={require('../assets/blog3.jpg')} style={styles.image} />
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
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    textAlign: 'center',
    color: '#FCC13F',
    fontSize: 40,
    fontWeight: '700',
    marginTop: 15,
  },
  calendar: {
    marginTop: 20,
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
    marginTop: 50,
  },
  bar: {
    alignSelf: 'center',
    marginTop: 40,
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
    marginTop: 15,
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
});
