import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNnavigationGoBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='contain'
                source={giveClassesBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>What to be a Proffy?
                </Text>
                <Text style={styles.description}>First, you'l need to register on our webpage!
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNnavigationGoBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Ok
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;