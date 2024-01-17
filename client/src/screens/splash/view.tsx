import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RouterNames from "../../navigation/router_names";
import AppImage from "../../values/app_images";
import { COLORS } from "../../theme/color";
import { appName, appVersion } from '../../constants/index';
import { SPACING } from "../../theme/spacing";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeyStorage from "../../constants/key_storage";

interface SplashProps {
    navigation: NativeStackNavigationProp<any, 'Splash'>;
}
const SplashScreen = (props: SplashProps) => {

    const pushNamedScreen = async () => {
        const introShown = await AsyncStorage.getItem(KeyStorage.showIntro);
        if (introShown) {
            // Nếu đã hiển thị, chuyển đến màn hình Home
            props.navigation.replace(RouterNames.HOME);
        } else {
            // Nếu chưa hiển thị, chuyển đến màn hình Intro và lưu trạng thái
            props.navigation.replace(RouterNames.INTRO);
            await AsyncStorage.setItem(KeyStorage.showIntro, 'true');
        }
    }
    useEffect(() => {
        const timer = setTimeout(
            () => {
                pushNamedScreen();
            },
            1000
        );
        return () => clearTimeout(timer);
    }, [props.navigation]);

    return <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={AppImage.logo} />
                <Text style={styles.name}>S3 SOLUTIONS</Text>
            </View>
            <Text style={styles.appVersion}>{appVersion}</Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: COLORS.Background,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: COLORS.Black,
    },
    image: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginBottom: SPACING.space_10,
        // backgroundColor: COLORS.Black,
    },
    name: {
        letterSpacing: 6,
        justifyContent: 'center',
        fontWeight: '300',
    },
    appVersion: {
        alignSelf: 'center',
        marginBottom: SPACING.space_10,
    }
});
export default SplashScreen;