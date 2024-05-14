import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomTextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Navbar } from '../../components/Navbar';
import { colors } from 'theme/colors';

const PasswordResetScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showPasswordError, setShowPasswordError] = useState<boolean>(false);
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState<boolean>(false);

    const validatePassword = () => {
        if (password.length < 12) {
            setShowPasswordError(true);
        } else {
            setShowPasswordError(false);
        }
    };

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
            setShowConfirmPasswordError(true);
        } else {
            setShowConfirmPasswordError(false);
        }
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        validatePassword();
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
        validateConfirmPassword();
    };

    return (
        <View style={styles.container}>
            <Navbar type="standard" leftActionType="icon" left={vectors.arrow_left} />
            <Navbar type="large" title="CREATE NEW PASSWORD!" />

            <Text style={styles.infoText}>Your new password must be different from previous used passwords.</Text>

            <CustomTextInput
                placeholder="************"
                labelText='Password'
                value={password}
                setValue={handlePasswordChange}
                secureText={true}
                style={styles.input}
            />
            {showPasswordError && <Text style={styles.errorText}>Must be at least 12 characters</Text>}

            <CustomTextInput
                labelText='Confirm Password'
                placeholder="************"
                value={confirmPassword}
                setValue={handleConfirmPasswordChange}
                secureText={true}
                style={styles.input}
            />
            {showConfirmPasswordError && <Text style={styles.errorText}>Both passwords must match</Text>}

            <Button
                text="Reset password"
                type="primary"
                size="large"
                style={styles.button}
                onPress={() => {
                    validatePassword();
                    validateConfirmPassword();
                    if (!showPasswordError && !showConfirmPasswordError) {
                        console.log('Password reset!');
                    }
                }}
            />
        </View>
    );
};

const vectors = {
    arrow_left: {
        icon: require('../../assets/vectors/chevron-left.svg'),
        color: colors.ink.base,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
    },
    infoText: {
        color: colors.ink.light,
        marginBottom: 20,
    },
    input: {
        marginVertical: 10,
    },
    errorText: {
        color: colors.red.base,
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
});

export default PasswordResetScreen;
