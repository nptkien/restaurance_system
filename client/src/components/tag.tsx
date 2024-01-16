import {StyleSheet, Text, View} from "react-native"
import {BORDERRADIUS} from "../theme/border_radius"
import {SPACING} from "../theme/spacing";
import {COLORS} from "../theme/color";

interface TagProps {
    name: string,
    backgoundColor?: string,
}
const Tag=(props: TagProps) => {
    return <View style={[ styles.conatiner, {backgroundColor: props.backgoundColor??COLORS.Primary} ]}>
        <Text style={styles.title}>
            {props.name}
        </Text>
    </View>
}

const styles=StyleSheet.create({
    conatiner: {
        borderRadius: BORDERRADIUS.radius_40,
        paddingVertical: SPACING.space_8,
        paddingHorizontal: SPACING.space_16,
    },
    title: {
        color: COLORS.White,
    }
});
export default Tag;