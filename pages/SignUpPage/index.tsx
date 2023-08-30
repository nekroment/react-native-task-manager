import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { FC } from 'react';

import { NavigationNames, NavigationParamList } from '../../resources/types';


import styles from "./style";

type Props = NativeStackScreenProps<NavigationParamList, NavigationNames.START>;

export const SignUpPage: FC<Props> = ({ navigation }) => {
    const scheme = useTheme();

    return (
        <View style={styles.wrapper}>
            <Text style={{
                color: scheme.colors.text,
            }}>Sign Up Page</Text>
        </View>
    )
}
