import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Animated, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';
import { Video, ResizeMode } from 'expo-av';

const Arm2 = () => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  // console.log(current, "first excersise");
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
  } = useContext(FitnessItems);
  console.log(completed, "completed excersice")



  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.exer} source={{ uri: 'https://media1.popsugar-assets.com/files/thumbor/Ul_bfhkwQhWeWRifwnRk9pP_07k/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/07/08/854/n/1922729/a3229906d5cd57b7_row/i/Dumbbell-Exercise-For-Shoulders-Upright-Row.jpg' }} />

      <Text style={styles.name}>UPRIGHT DUMBBELL</Text>
      <Text style={styles.set}>2 SET | 10 REPS</Text>

      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/audio/Deadlift-Upright-Row.mp3")}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <Animated.View View style={{
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, alignItems: 'center',
        opacity: this.spinValue
      }}>
        <TouchableOpacity onPress={() => {
            video.current.pauseAsync()
            navigation.navigate("Arms");
        }}>
          <MaterialIcons name="skip-previous" size={100} style={styles.iconControlLeft} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }>
          {status.isPlaying ? (
            <MaterialIcons name="pause-circle-filled" size={100} color="#7AEEBA" style={styles.outerCircle} />
          ) : (
            <MaterialIcons name="play-circle-filled" size={100} color="#7AEEBA" style={styles.outerCircle} />
          )}
        </TouchableOpacity>



        

          <TouchableOpacity onPress={() => {
            video.current.pauseAsync()
            navigation.navigate("Arm3");

            setWorkout(workout + 1)
            setMinutes(minutes + 3)
            setCalories(calories + 4)
          }}>
            <MaterialIcons name="skip-next" size={100} color="#a3b4fd" style={styles.iconControlRight} />
          </TouchableOpacity>


      </Animated.View>

      <Pressable onPress={() => navigation.navigate("Stats")}
        style={styles.press}>
        <Text style={styles.click}>DONE</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Arm2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424949",

  },

  exer: {
    width: "100%",
    height: 400,
  },

  name: {
    marginLeft: 10,
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  set: {
    marginLeft: 10,
    fontSize: 15,
    color: "white",
  },

  press: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
    borderRadius: 20,
    padding: 10,
    width: 150,
  },

  click: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  iconControlLeft: {
    paddingRight: 20,
    color: '#a3b4fd'
  },

  iconControlRight: {
    paddingLeft: 20,
    color: '#a3b4fd'
  },

  outerCircle: {
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderColor: '#efefef',
    borderWidth: 2
  },


})