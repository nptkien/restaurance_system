import {Image, StyleSheet, Text, View} from "react-native"
import {BORDERRADIUS} from "../theme/border_radius";
import {SPACING} from "../theme/spacing";
import {COLORS} from "../theme/color";
import Icon from 'react-native-vector-icons/FontAwesome';

interface CatergoryPorps {
    icon?: string,
    name?: string
}
const Category=(props: CatergoryPorps) => {
    return <View style={[
        styles.conatiner,
        {
            borderRadius: !props.name? 1000:BORDERRADIUS.radius_40,
            paddingHorizontal: props.name? SPACING.space_16:SPACING.space_8,
        }
    ]}>
        <View style={[ styles.childConatiner ]}>
            {props.icon? <Image
                style={[ styles.image, ]}
                source={{uri: props.icon}} />:<Icon name={'rocket'} size={24} color="white" />
            }
            <Text style={[ styles.title, {marginLeft: !props.name? 0:SPACING.space_12} ]}>
                {props.name}
            </Text>
        </View>
    </View>
}
const styles=StyleSheet.create({
    conatiner: {
        backgroundColor: COLORS.Primary,
        borderRadius: BORDERRADIUS.radius_40,
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_16,
    },
    childConatiner: {
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
    },
    image: {
        width: 24,
        height: 24,
    },
    title: {
        color: COLORS.White,
    }
});
export default Category;