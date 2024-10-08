// RegisterComponent.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import OpenURLButton from '../../components/OpenURLButton';
import CustomInput from '../../components/CustomInput';

const RegisterComponent = () => {
    const handleBack = () => {
        console.log('Back button pressed'); // Replace with your navigation logic
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.formContainer}>
                
                <Text style={styles.header}>CREATE ACCOUNT</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <CustomInput placeholder="Juiinal William" />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <CustomInput placeholder="Enter your email" />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <CustomInput placeholder="Enter your password" />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create an account</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    By signing up you agree to our
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

export default RegisterComponent;