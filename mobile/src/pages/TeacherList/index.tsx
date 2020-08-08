import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';

import styles from './styles';

function TeachersList() {
    return (
        <View style={styles.container} >
            <PageHeader title="Proffys Available" />
        </View>
    );
}

export default TeachersList;