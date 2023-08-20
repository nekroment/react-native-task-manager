import { View, Text } from 'react-native';
import { FC } from 'react';

import { NavigationNames, NavigationParamList } from '../../resources/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import styles from "./style";

type Props = NativeStackScreenProps<NavigationParamList, NavigationNames.START>;

export const StartPage: FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Text>Start Page</Text>
        </View>
    )
}
