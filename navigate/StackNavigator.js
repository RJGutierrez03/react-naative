import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from '../config';
import HomeScreen from '../screens/HomeScreen';
// WorkOut Screen
import BodyScreen from '../screens/BodyScreen';
import AbsScreen from '../screens/AbsScreen';
import ArmScreen from '../screens/ArmScreen';
import ChestScreen from '../screens/ChestScreen';
import LegScreen from '../screens/LegScreen';
//Fitness Screen
import FitScreen from '../fitness/FitScreen';
import Body from '../fitness/Body';
import Body2 from '../fitness/Body2';
import Body3 from '../fitness/Body3';
import Body4 from '../fitness/Body4';
import Body5 from '../fitness/Body5';
import Body6 from '../fitness/Body6';

import Abss from '../fitness/Abs';
import Abs2 from '../fitness/Abs2';
import Abs3 from '../fitness/Abs3';
import Abs4 from '../fitness/Abs4';
import Abs5 from '../fitness/Abs5';
import Abs6 from '../fitness/Abs6';

import Arms from '../fitness/Arm';
import Arm2 from '../fitness/Arm2';
import Arm3 from '../fitness/Arm3';
import Arm4 from '../fitness/Arm4';
import Arm5 from '../fitness/Arm5';
import Arm6 from '../fitness/Arm6';

import Chests from '../fitness/Chests';
import Chests2 from '../fitness/Chests2';
import Chests3 from '../fitness/Chests3';
import Chests4 from '../fitness/Chests4';
import Chests5 from '../fitness/Chests5';
import Chests6 from '../fitness/Chests6';

import Legs from '../fitness/Legs';
import Legs2 from '../fitness/Legs2';
import Legs3 from '../fitness/Legs3';
import Legs4 from '../fitness/Legs4';
import Legs5 from '../fitness/Legs5';
import Legs6 from '../fitness/Legs6';

import StatsScreen from '../screens/StatsScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Login from "../src/Login";
import Registration from "../src/Registration";


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen} />

                <Stack.Screen name="FullBody" component={BodyScreen} />
                <Stack.Screen name="Abs" component={AbsScreen} />
                <Stack.Screen name="Arm" component={ArmScreen} />
                <Stack.Screen name="Chest" component={ChestScreen} />
                <Stack.Screen name="Leg" component={LegScreen} />

                <Stack.Screen name="Fit" component={FitScreen} />
                <Stack.Screen name="Body" component={Body} options={{ headerShown: false }} />
                <Stack.Screen name="Body2" component={Body2} options={{ headerShown: false }} />
                <Stack.Screen name="Body3" component={Body3} options={{ headerShown: false }} />
                <Stack.Screen name="Body4" component={Body4} options={{ headerShown: false }} />
                <Stack.Screen name="Body5" component={Body5} options={{ headerShown: false }} />
                <Stack.Screen name="Body6" component={Body6} options={{ headerShown: false }} />

                <Stack.Screen name="Abss" component={Abss} options={{ headerShown: false }} />
                <Stack.Screen name="Abs2" component={Abs2} options={{ headerShown: false }} />
                <Stack.Screen name="Abs3" component={Abs3} options={{ headerShown: false }} />
                <Stack.Screen name="Abs4" component={Abs4} options={{ headerShown: false }} />
                <Stack.Screen name="Abs5" component={Abs5} options={{ headerShown: false }} />
                <Stack.Screen name="Abs6" component={Abs6} options={{ headerShown: false }} />

                <Stack.Screen name="Arms" component={Arms} options={{ headerShown: false }} />
                <Stack.Screen name="Arm2" component={Arm2} options={{ headerShown: false }} />
                <Stack.Screen name="Arm3" component={Arm3} options={{ headerShown: false }} />
                <Stack.Screen name="Arm4" component={Arm4} options={{ headerShown: false }} />
                <Stack.Screen name="Arm5" component={Arm5} options={{ headerShown: false }} />
                <Stack.Screen name="Arm6" component={Arm6} options={{ headerShown: false }} />

                <Stack.Screen name="Chests" component={Chests} options={{ headerShown: false }} />
                <Stack.Screen name="Chests2" component={Chests2} options={{ headerShown: false }} />
                <Stack.Screen name="Chests3" component={Chests3} options={{ headerShown: false }} />
                <Stack.Screen name="Chests4" component={Chests4} options={{ headerShown: false }} />
                <Stack.Screen name="Chests5" component={Chests5} options={{ headerShown: false }} />
                <Stack.Screen name="Chests6" component={Chests6} options={{ headerShown: false }} />

                <Stack.Screen name="Legs" component={Legs} options={{ headerShown: false }} />
                <Stack.Screen name="Legs2" component={Legs2} options={{ headerShown: false }} />
                <Stack.Screen name="Legs3" component={Legs3} options={{ headerShown: false }} />
                <Stack.Screen name="Legs4" component={Legs4} options={{ headerShown: false }} />
                <Stack.Screen name="Legs5" component={Legs5} options={{ headerShown: false }} />
                <Stack.Screen name="Legs6" component={Legs6} options={{ headerShown: false }} />

                <Stack.Screen name="Stats" component={StatsScreen} />
                <Stack.Screen name="Loading" component={LoadingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})