import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomInput from '../../components/CustomInput';
import OpenURLButton from '../../components/OpenURLButton';
import BackArrowButton from '../../components/BackArrowButton';

import GoogleIcon from '../../assets/Icons/google.png';
import FacebookIcon from '../../assets/Icons/facebook.png';
import TwitterIcon from '../../assets/Icons/twitter.png';

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
                    <CustomInput placeholder="Enter your email" />
                </View>

                <View style={styles.inputContainer}>
                    <CustomInput placeholder="Enter your password" />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                {/* Add 'or sign in with' text */}
                <Text style={styles.signInText}>or sign in with</Text>

                {/* Social Media Login Buttons */}
                <View style={styles.socialMediaContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={GoogleIcon} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={FacebookIcon} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={TwitterIcon} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
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
        fontSize: 32,
        fontWeight: 'bold',
        color: '#383B50',
        fontFamily: 'Bebas Neue',
        paddingTop: 16,
        paddingBottom: 16,
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
    signInText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    socialButton: {
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#fff', // Change as necessary
    },
    iconStyle: {
        width: 30,
        height: 30,
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
