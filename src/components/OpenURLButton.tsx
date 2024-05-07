// OpenURLButton.tsx
import React, { useCallback } from 'react';
import { Alert, Text, StyleSheet, Linking } from 'react-native';

interface OpenURLButtonProps {
    url: string;
    children: React.ReactNode;
}

const OpenURLButton: React.FC<OpenURLButtonProps> = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <Text onPress={handlePress} style={styles.linkText}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    linkText: {
        color: 'red', 
        fontSize: 14,
    }
});

export default OpenURLButton;
