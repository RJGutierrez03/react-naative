import { StatusBar } from "expo-status-bar"
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./navigate/StackNavigator"
import { FitnessContext } from "./Context";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBdJTtS4Sv4LLLR7-XcWMxjWjLz8eq_eqs",
    authDomain: "test-30456.firebaseapp.com",
    projectId: "test-30456",
    storageBucket: "test-30456.appspot.com",
    messagingSenderId: "753049936368",
    appId: "1:753049936368:web:a2cc973a14f9eee06c7d35",
    measurementId: "G-30YS4K63HH"
  }

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(); // Initialize the firestore module

  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create({});