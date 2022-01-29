import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View, Text, StyleSheet} from 'react-native';

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: 19.1075,
          longitude: 72.8365,
        }}
        title="Birdsong Organic Café, Mumbai"
        image={require('../assets/marker.png')}></Marker>
      <Marker
        coordinate={{
          latitude: 28.5457,
          longitude: 77.1928,
        }}
        title="GoGourmet"
        image={require('../assets/marker.png')}></Marker>
      <Marker
        coordinate={{
          latitude: 19.1334,
          longitude: 72.9133,
        }}
        title="Healthie"
        image={require('../assets/marker.png')}></Marker>
      <Marker
        coordinate={{
          latitude: 26.1878,
          longitude: 91.6916,
        }}
        title="Nutrilets"
        image={require('../assets/marker.png')}></Marker>
      <Marker
        coordinate={{
          latitude: 12.9915,
          longitude: 80.2337,
        }}
        title="The Good Life Eatery - Madras"
        image={require('../assets/marker.png')}></Marker>
        <Marker
        coordinate={{
          latitude: 12.9716,
          longitude: 77.5946,
        }}
        title="Empire Restaurant"
        image={require('../assets/marker.png')}></Marker>
        <Marker
        coordinate={{
          latitude: 22.5726,
          longitude: 88.3639,
        }}
        title="Fresh Aisle"
        image={require('../assets/marker.png')}></Marker>
    </MapView>
  );
};

export default Map;
const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
