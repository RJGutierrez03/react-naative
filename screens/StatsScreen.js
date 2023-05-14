import { SafeAreaView, StyleSheet, Text, View, Pressable, Image} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FitnessItems } from '../Context';

const StatsScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    const {  
      calories, 
      minutes, 
      workout, 
    } = useContext(FitnessItems);
  return (
    <SafeAreaView style = {styles.container}>
      <Image
      source={{
        uri: "https://cdn.muscleandstrength.com/sites/default/files/field/feature-wide-image/workout/at-home-workout-wide.jpg",
      }}
      style={{ width: "100%", height: 150,}}
    />
    
    <Text style = {styles.title}>FITNESS STATS</Text>

    <View style={{flexDirection:"row", marginTop: 50, marginLeft: 20}}>

      <View style={{justifyContent: "space-between"}}>
        <View style = {styles.align}>
          <Text style = {styles.text}>{workout}</Text>
          <Text style = {styles.stat}>WORKOUTS</Text>
        </View>

        <View style = {styles.align}>
          <Text style = {styles.text}>{calories}</Text>
          <Text style = {styles.stat}>CALORIES</Text>
        </View>

        <View style = {styles.align}>
          <Text style = {styles.text}>{ minutes}</Text>
          <Text style = {styles.stat}>MINUTES</Text>
        </View>
      </View>

      <Image
      source={{
        uri: "https://pngimg.com/d/muscle_PNG53.png",
      }}
      style={{ width: 200, height: 300, marginLeft: "10%",}}
    />
    </View>

      <Pressable onPress={() => navigation.navigate("Home")}
      style = {styles.press}>
        <Text style = {styles.click}>HOME</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default StatsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#424949",

    },

    press: {
        backgroundColor: "blue",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 60,
        borderRadius: 20,
        padding: 10,
        width:150,
    },

    click: {
        textAlign:"center",
        fontWeight: "bold",
        color: "white",
    },

    title: {
      marginLeft: 10,
      marginTop: 30,
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },

    text: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20
    },

    align: {
      alignItems: "center"
    },

    stat: {
      color: "white",
      fontSize: 20
    },

})