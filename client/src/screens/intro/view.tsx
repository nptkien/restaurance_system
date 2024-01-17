import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppImage from '../../values/app_images';
import { COLORS } from '../../theme/color';
import { SPACING } from '../../theme/spacing';
import { FONTSIZE } from '../../theme/text_style';
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonPrimary } from '../../components';
import RouterNames from '../../navigation/router_names';

interface IntroScreenProps {
    navigation: NativeStackNavigationProp<any, 'Splash'>;
}

type Slide = {
    key: number,
    title: string,
    text: string,
    des: string,
    image: any,// require('./assets/1.jpg'),
    backgroundColor: string,
    last?: boolean | false,
}
const slides: Slide[] = [
    {
        key: 1,
        title: 'Mua hàng',
        text: 'Nhanh chóng',
        image: AppImage.intro1,
        des: "Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus",
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Giao hàng',
        text: 'Miễn phí',
        image: AppImage.intro2,
        des: "Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus",
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Dịch vụ',
        text: 'Chuyên nghiệp',
        image: AppImage.intro3,
        des: "Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus",
        backgroundColor: '#22bcb5',
        last: true,
    }
];



const IntroScreen = (props: IntroScreenProps) => {
    const _renderItem = (args: { item: Slide }) => {
        const { item } = args;
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.desConatiner}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.des}>{item.des}</Text>
                </View>
                {item.last && <ButtonPrimary
                    title={'Bắt đầu sử dụng'}
                    onPress={() => {
                        props.navigation.replace(RouterNames.HOME);
                    }}
                    width={'80%'}
                    margin={40}
                />}
            </View>
        );
    }
    return <AppIntroSlider
        activeDotStyle={styles.activePaginationDots}
        dotStyle={styles.dot}
        renderItem={_renderItem}
        data={slides} onDone={_onDone}
        showNextButton={false}
        showDoneButton={false}
    />;
}


const _onDone = () => {

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: COLORS.Background,
    },
    dot: {
        color: COLORS.White,
        // backgroundColor: 'COLORS.White',
        borderWidth: 1,
        borderColor: COLORS.Primary,
    },
    paginationDots: {
        width: 10,
        height: 3,
        borderRadius: 5,
        marginRight: 3,
        backgroundColor: 'red'
    },

    activePaginationDots: {
        width: 20,
        backgroundColor: COLORS.Primary,
    },
    slide: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: COLORS.Error,
    },
    desConatiner: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
    },
    title: {
        fontWeight: '900',
        fontSize: FONTSIZE.size_30,
        marginBottom: SPACING.space_6,
    },
    text: {
        fontWeight: '900',
        fontSize: FONTSIZE.size_24,
        color: COLORS.Primary,
        marginBottom: SPACING.space_24,
    },
    des: {
        justifyContent: 'center',
        marginHorizontal: SPACING.space_32,
        fontSize: FONTSIZE.size_16,
        lineHeight: 24,
        textAlign: 'center',
        color: COLORS.Grey,
    },
    startButton: {
        width: "80%"
    }
});

export default IntroScreen;