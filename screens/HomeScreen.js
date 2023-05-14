import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FitnessCards from '../components/FitnessCards';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const HomeScreen = () => {
  const navigation = useNavigation();

  const auth = firebase.auth();

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flex}>
          <Text style={styles.title}>Workout Library</Text>
          <View style={styles.line}>
            <Text style={styles.name}>{auth.currentUser?.email}</Text>
            <TouchableOpacity 
            onPress={handleSignOut}
            style={styles.logout}>
              <Text style={styles.logoutext}>SignOut</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View>
          <FitnessCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424949",
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },

  name: {
    color: "white",
    fontSize: 10,
    textAlign: "right",

  },

  flex: {
    margin: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  logout: {
    backgroundColor: "#0782F9",
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  logoutext: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 10,
  },

  line: {
    marginLeft: 50,
    marginTop: 15,
  },

});