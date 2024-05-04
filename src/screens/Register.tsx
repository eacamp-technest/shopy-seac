// RegisterComponent.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Input from '../components/Input'; // Adjust the import path as needed
import OpenURLButton from '../components/OpenURLButton';

const RegisterComponent = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>CREATE ACCOUNT</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <Input placeholder="Juiinal William" />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <Input placeholder="Enter your email" />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <Input placeholder="Enter your password" />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create an account</Text>
            </TouchableOpacity>

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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    inputContainer: {
        width: 327,
        marginBottom: 10,
        alignItems: 'center',
    },
    header: {
        width: 327,
        marginBottom: 10,
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#383B50',
        fontFamily: 'Bebas Neue'
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