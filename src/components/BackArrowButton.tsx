import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

interface BackArrowButtonProps {
    onPress: () => void;
}

const BackArrowButton: React.FC<BackArrowButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <Image
                source={require('../../assets/Icons/left-arrow.png')} // Adjust the path as necessary
                style={{ width: 24, height: 24 }} // Set the size as needed
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 12, // Adjust the position as needed
        left: 32, // Adjust the position as needed
        padding: 10,
        width: '100%',
    },
});

export default BackArrowButton;
