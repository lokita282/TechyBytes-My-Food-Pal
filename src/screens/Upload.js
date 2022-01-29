import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ButtonComponent from '../components/ButtonComponent'
import ImagePicker from 'react-native-image-crop-picker';
import { Dimensions } from "react-native";
import {
  BarChart
} from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';



// import {
//   Avatar,
//   Title,
//   Caption,
//   Text,
//   TouchableRipple
// } from 'react-native'
const Upload = () => {
  const [image, setimage] = useState('https://previews.123rf.com/images/denisfilm/denisfilm1801/denisfilm180101581/94321197-%EC%A0%91%EC%8B%9C%EC%97%90-%ED%8A%80%EA%B8%B4-%EC%9C%A1%EC%A6%99-%EC%95%84%EC%B9%A8-%ED%95%98%EC%96%80-%EC%A0%91%EC%8B%9C%EC%97%90-%EB%8B%A4%EC%96%91-%ED%95%9C-%EC%9D%8C%EC%8B%9D%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%A0%91%EC%8B%9C%EC%97%90-%EC%95%84%EB%A6%84-%EB%8B%A4%EC%9A%B4-%EC%B0%BE%EA%B3%A0-%EC%9D%8C%EC%8B%9D%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg');
  const [show, setshow] = useState(false);
  // const [food, setfood] = useState('');
  const [k_cal, setk_Cal] = useState('');
  const [protein, setprotein] = useState('');
  const [fat, setfat] = useState('');
  const [carbs, setcarbs] = useState('');
  const [fibre, setfibre] = useState('');


  const photofromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setimage(image.path);
      console.log("selectedImage:", image.path);
      ImageUpload(image.path);
    });
  }
  const photofromGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true
    }).then(image => {
      setimage(image.path);
      console.log("selectedImage:", image.path);
      ImageUpload(image.path);
    });
  }

  const ImageUpload = async (imagePath) => {
    const imageData = new FormData();
    imageData.append("image", {
      uri: imagePath,
      name: 'image.jpg',
      fileName: 'image',
      type: 'image/jpg'
    })
    console.log("form data", imageData);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 72eb7da6a784e0fba921cc29d31553758354ccbe");

    // var formdata = new FormData();
    // formdata.append("image", fileInput.files[0], `${imageData}`);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: imageData,
      redirect: 'follow'
    };

    var myHeaders1 = new Headers();
    myHeaders1.append("Cookie", "route=222fc2df52ebc04b5a35043498fc068c");

    var requestOptions1 = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };


    const token = await AsyncStorage.getItem('access_token')
    console.log(token);
    var myHeaders3 = new Headers();
    myHeaders3.append("Authorization", `Bearer ${token}`);
    myHeaders3.append("Content-Type", "application/json");

    var raw3;

    var requestOptions3 = {
      method: 'POST',
      headers: myHeaders3,
      body: raw3,
      redirect: 'follow'
    };

    fetch("https://api.logmeal.es/v2/image/recognition/complete/v0.9?language=eng", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result.recognition_results[0].name);
        fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=89b3616d&app_key=6d52253d899440f5256b26d8b7a46e8a&ingr=${result.recognition_results[0].name}`, requestOptions1)
          .then(r => r.json())
          .then((res) => {
            console.log(parseInt(res.hints[0].food.nutrients.ENERC_KCAL));
            setk_Cal(parseInt(res.hints[0].food.nutrients.ENERC_KCAL));
            setprotein(parseInt(res.hints[0].food.nutrients.PROCNT));
            setfat(parseInt(res.hints[0].food.nutrients.FAT));
            setcarbs(parseInt(res.hints[0].food.nutrients.CHOCDF));
            setfibre(parseInt(res.hints[0].food.nutrients.FIBTG));
            // setk_Cal(result.hints[0].food.nutrients.ENERC_KCAL);
            // setprotein(result.hints[0].food.nutrients.ENERC_KCAL)
            var raw3 = JSON.stringify({
              "name": result.recognition_results[0].name,
              "calories": parseInt(res.hints[0].food.nutrients.ENERC_KCAL),
              "protein": parseInt(res.hints[0].food.nutrients.PROCNT),
              "fat": parseInt(res.hints[0].food.nutrients.FAT),
              "carbs": parseInt(res.hints[0].food.nutrients.CHOCDF),
              "fibres": parseInt(res.hints[0].food.nutrients.FIBTG),
            });

            var requestOptions3 = {
              method: "POST",
              headers: myHeaders3,
              body: raw3,
              redirect: "follow",
            };

            fetch(
              "https://fast-mesa-43934.herokuapp.com/api/food/createLog",
              requestOptions3
            )
              .then(ans => ans.text())
              .then(d => console.log(d))
              .catch(error => console.log('error', error)
              );
            setshow(true);
          })
          .catch(error => console.log('error', error));
      })
      .catch(error => console.log('error', error));
  }
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(251, 0, 139, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: [`${k_cal}k_cal`, `Proteins ${protein}g`, `Fats ${fat}g`, `Carbs ${carbs}g`, `Fibre ${fibre}g`],
    datasets: [
      {
        data: [parseInt(k_cal), parseInt(protein), parseInt(fat), parseInt(carbs), parseInt(fibre)]
      }
    ]
  };

  return (
    <ScrollView>
      <Text style={styles.textStyle}>Scan Your Food</Text>
      <View style={{ marginTop: 20, flex: 0.6, justifyContent: 'flex-start', alignItems: 'center', }}>

        <ImageBackground style={styles.imagebackground}
          source={{ uri: image }}
          imageStyle={{ borderRadius: 20 }}>
        </ImageBackground>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ ...styles.button, backgroundColor: "#FB008B", justifyContent: 'flex-start' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={photofromCamera}>
              <Text style={{ fontSize: 17, color: 'white', fontWeight: '600' }}>
                Upload photo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.button, backgroundColor: "#FB008B", justifyContent: 'flex-start' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={photofromGallery}>
              <Text style={{ fontSize: 17, color: 'white', fontWeight: '600', textAlign: 'center' }}>
                Choose from Gallery
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={{ ...styles.button, backgroundColor: "#FB008B"}}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => console.log('Kya haal hai')}>
              <Text style={{ fontSize: 22, color: 'white', fontWeight:'600' }}>
                Choose from Gallery
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
        {
          show ? (
            
              <View style={styles.chart}>
                <BarChart
                  style={styles.graphStyle}
                  data={data}
                  width={screenWidth}
                  height={320}
                  marginLeft={200}
                  yAxisLabel="Nutrition Level"
                  chartConfig={chartConfig}
                verticalLabelRotation={40}
                />
              </View>
          ) : (
            <ImageBackground style={styles.imagebackground2}
              source={require('../assets/girl.png')}
              imageStyle={{ borderRadius: 20 }}>
            </ImageBackground>
          )
        }

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagebackground: {
    marginTop: 10,
    //marginLeft: 20,
    height: 225,
    width: 225,
    // backgroundColor:'white',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    width: 160,
    height: 50,
    marginLeft: 10,
    // textAlign:'center'
    borderRadius: 15,
  },
  chart: {
    marginTop: 20,
    // alignSelf: 'center',
    marginLeft: 2,
    // alignItems: 'center'
  },
  textStyle: {
    fontSize: 30,
    marginTop: 70,
    color: '#FB008B',
    textAlign:'center',
    fontWeight: '600',
  },
  imagebackground2: {
    marginTop: 50,
    marginLeft: 20,
    height: 250,
    width: 250
  },

  graphStyle: {
    flex: 1,
    paddingRight: 25,
  },
});

export default Upload;