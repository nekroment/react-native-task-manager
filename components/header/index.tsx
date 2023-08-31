import { useRoute } from "@react-navigation/native";
import { Image, View } from "react-native";
import { FC } from "react";

export const Header: FC = () => {
    const route = useRoute();
    
    return (
        <View>
            <Image source={{
                uri: "assets/logo.png",
            }} />
        </View>
    )
}