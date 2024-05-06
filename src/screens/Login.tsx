// LoginComponent.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Input from '../components/Input';
import OpenURLButton from '../components/OpenURLButton';
import BackArrowButton from '../components/BackArrowButton';

const LoginComponent = () => {
    const handleBack = () => {
        console.log('Back button pressed'); // Replace with your navigation logic
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <BackArrowButton onPress={handleBack} />

            <View style={styles.formContainer}>

                <Text style={styles.header}>LOGIN</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Input placeholder="Enter your email" />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <Input placeholder="Enter your password" />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    By logging in you agree to our
                    {' '}
                    <OpenURLButton url="https://example.com/terms">Terms</OpenURLButton>
                    {' and '}
                    <OpenURLButton url="https://example.com/terms">Conditions of Use</OpenURLButton>
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Montserrat',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
    },
    formContainer: {
        marginTop: 70,
    },
    inputContainer: {
        width: 327,
        marginBottom: 20,
        alignItems: 'center',
    },
    header: {
        width: 327,
        marginBottom: 10,
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#383B50',
        fontFamily: 'Bebas Neue',
        paddingTop: 16,
        paddingBottom: 16,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#DE6053',
        width: 327,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    footerContainer: {
        position: 'absolute',
        width: 327,
        bottom: 30,
    },
    footerText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    }
});

export default LoginComponent;
