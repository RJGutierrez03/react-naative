import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
    const navigation = useNavigation();
    let timer = 0;
    const [timeLeft,setTimeLeft] = useState(3);

    const startTime = () => {
        setTimeout(()=>{
            if(timeLeft <= 0){
                navigation.goBack();

            }
            setTimeLeft(timeLeft - 1)
        },1000)
    }
    useEffect(()=>{
        startTime();
        return () => clearTimeout(timer);
    },)

  return (
    <SafeAreaView style = {styles.container}>
            <Image
        // resizeMode="contain"
        source={{
          uri: "https://cdn.dribbble.com/users/2170220/screenshots/6377763/man.gif",
        }}
        style={{ width: "90%", height: 420, marginLeft: "auto",
        marginRight: "auto", marginTop: 80 }}
      />

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          textAlign: "center",
          color: "white",
        }}
      >
        LOADING!!!
      </Text>


    </SafeAreaView>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#424949",
    },
})