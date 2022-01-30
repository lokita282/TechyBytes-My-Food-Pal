import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import FlipCard from 'react-native-flip-card';
import {ProgressChart, LineChart} from 'react-native-chart-kit';

const MonthReport = () => {
  const data1 = {
    labels: ['Proteins', 'Fibres', 'Carbs', 'Vitamins'], // optional
    data: [0.4, 0.6, 0.8, 0.3],
  };
  const calories = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [26, 45, 28, 50, 5],
        color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`, // optional
        strokeWidth: 6, // optional
      },
    ],
    legend: ['CALORIES'], // optional
  };
  const carbs = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 6, 28, 17, 5],
        color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`, // optional
        strokeWidth: 6, // optional
      },
    ],
    legend: ['CARBOHYDRATES'], // optional
  };
  const proteins = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 45, 20, 50, 52],
        color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`, // optional
        strokeWidth: 6, // optional
      },
    ],
    legend: ['PROTEINS'], // optional
  };
  const fibre = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [50, 45, 30, 50, 35],
        color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`, // optional
        strokeWidth: 6, // optional
      },
    ],
    legend: ['FIBRE CONTENT'], // optional
  };
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    //backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    //backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    // barPercentage: 10,
    // useShadowColorFromDataset: false, // optional
  };
  const chartConfig1 = {
    backgroundGradientFrom: '#FFFFFF',
    //backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FCC13F',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`,
    // strokeWidth: 2, // optional, default 3
    // barPercentage: 10,
    // useShadowColorFromDataset: false, // optional
  };
  return (
    <ScrollView>
      <View style={styles.appbar}>
          <Text style={styles.header1}>MyFoodPal</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>JANUARY'S STATISTICS</Text>
        <ProgressChart
          data={data1}
          width={screenWidth}
          height={220}
          strokeWidth={10}
          radius={25}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <Text style={styles.header}>MONTHLY STATISTICS</Text>
        <View style={styles.line}>
          <LineChart
            data={calories}
            width={screenWidth}
            height={256}
            verticalLabelRotation={15}
            chartConfig={chartConfig1}
            bezier
          />
        </View>
        <View style={styles.line}>
          <LineChart
            data={carbs}
            width={screenWidth}
            height={256}
            verticalLabelRotation={15}
            chartConfig={chartConfig1}
            bezier
          />
        </View>
        <View style={styles.line}>
          <LineChart
            data={proteins}
            width={screenWidth}
            height={256}
            verticalLabelRotation={15}
            chartConfig={chartConfig1}
            bezier
          />
        </View>
        <View style={styles.line}>
          <LineChart
            data={fibre}
            width={screenWidth}
            height={256}
            verticalLabelRotation={15}
            chartConfig={chartConfig1}
            bezier
          />
        </View>
        <Text style={{...styles.header, marginLeft:130}}>HEALTH TIPS</Text>
        <View style={styles.col}>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Image
                  source={require('../assets/health.jpg')}
                  style={styles.image}
                />
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>
                  An Apple a day keeps the doctor away!
                </Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard >
              <View style={styles.face}>
                <Image
                  source={require('../assets/health1.jpg')}
                  style={styles.image}
                />
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>
                  Health is not valued till sickness comes.
                </Text>
              </View>
            </FlipCard>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Image
                  source={require('../assets/health2.jpg')}
                  style={styles.image}
                />
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>
                  Physical fitness is the first requisite of happiness.
                </Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.container2}>
            <FlipCard>
              <View style={styles.face}>
                <Image
                  source={require('../assets/health3.jpg')}
                  style={styles.image}
                />
              </View>

              <View style={styles.back}>
                <Text style={styles.quote}>
                  A good laugh and a long sleep are the best cures in the
                  doctor's book.
                </Text>
              </View>
            </FlipCard>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MonthReport;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    marginLeft:10,
  },
  container2: {
    width: 130,
    height: 130,
    backgroundColor: '#FCC13F',
    marginLeft: 40,
    marginTop: 15,
    elevation:7,
    borderRadius:10,
  },
  col: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom:15
  },
  image: {
    alignSelf: 'center',
    height: 130,
    width: 130,
    borderRadius:10,
  },
  quote: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    color: 'white',
    fontWeight:'700'
  },
  line:{
    marginBottom:10,
  },
  appbar:{
    backgroundColor:'#FCC13F',
    elevation:25
  },
  header1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    paddingTop: 10
  },
});