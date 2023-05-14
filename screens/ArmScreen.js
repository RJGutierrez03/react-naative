import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation, useRoute, } from '@react-navigation/native';
import { FitnessItems } from '../Context';
import { AntDesign } from '@expo/vector-icons';

const ArmScreen = () => {
    const route = useRoute();
    //    console.log(route.params);
    const navigation = useNavigation();
    const {
        completed,
        setCompleted,
    } = useContext(FitnessItems);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image style={styles.top} source={{ uri: route.params.image }} />

                {route.params.excersises.map((item, index) => (
                    <Pressable style={styles.press} key={index}>
                        <Image style={styles.list} source={{ uri: item.image }} />

                        <View style={styles.line}>
                            <Text style={styles.name}>{item.name}</Text>

                            <Text style={styles.set}>{item.sets}</Text>
                        </View>






                    </Pressable>
                ))}



            </ScrollView>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Arms", {
                        excersises: route.params.excersises,
                    })
                    setCompleted([]);
                }}
                style={styles.floatingButton}>
                <AntDesign name="play" size={60} color="#74f40a" />
            </TouchableOpacity>

        </SafeAreaView>


    );
};

export default ArmScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#424949",

    },
    top: {
        width: "100%",
        height: 170,
    },

    list: {
        width: 90,
        height: 90,
    },

    press: {
        margin: 5,
        flexDirection: "row",
        alignItems: "center",
    },

    line: {
        margin: 10,
    },

    name: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        width: 200,
    },

    set: {
        color: "white",
        fontSize: 15,
    },

    floatingButton: {
        position: "absolute",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        right: 30,
        bottom: 30,
    },

})