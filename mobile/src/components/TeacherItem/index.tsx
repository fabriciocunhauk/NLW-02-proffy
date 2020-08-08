import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://avatars2.githubusercontent.com/u/60474481?s=460&u=22fb64d149aedf17e5e6955e1954693e1d86edd2&v=4'
                    }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Fabricio Cunha</Text>
                    <Text style={styles.subject}>Programming</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Best technologies enthusiast.
                {'\n'}{'\n'}
                In love with Programming.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Ph {'  '}
                    <Text style={styles.priceValue}>£ 50</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Get in touch</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
