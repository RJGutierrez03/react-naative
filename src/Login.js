import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            // login user
            const auth = firebase.auth();
            const userCredential = await auth.signInWithEmailAndPassword(
                email,
                password
            );
            // redirect user to home screen
            navigation.replace('Home');

        } catch (error) {
            Alert.alert("Error", error.message);
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={{
                    uri: 'https://cdn.dribbble.com/users/2358228/screenshots/4711206/image.png',
                }}
                style={{
                    width: 200,
                    height: 200,
                    marginTop: 100,
                    marginBottom: 100,
                    justifyContent: 'center'
                }}
            />

                <Text style={{ fontWeight: 'bold', fontSize: 26, textAlign: 'center', marginBottom: 30, color: 'white',  }}>
                    Login
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity onPress={handleLogin}>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.still}>Dont Have An Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <View style={styles.signupButton}>

                        <Text style={styles.signupButtonText}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#353740',
    },

    input: {
        width: 300,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    loginButton: {
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 15,
        padding: 10,
        width: 150,
    },
    loginButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    still: {
        textAlign: 'center',
        color: 'white',
        marginTop: 50,
        marginBottom: -30
    },
    signupButton: {
        marginTop: 19,
        //backgroundColor: '#ef4146',
        borderRadius: 15,
        padding: 15,
        width: 100,
    },
    signupButtonText: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    logo: {
        marginBottom: 30,
        width: 400, // Specify a width for the logo
        height: 400, // Specify a height for the logo
        resizeMode: 'contain', // Resize the logo within its container
        marginBottom: -40
    },
});