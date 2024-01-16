import { StyleSheet, Text, View } from "react-native"
import { BORDERRADIUS } from "../theme/border_radius"
import { COLORS } from "../theme/color"
import { SPACING } from "../theme/spacing"
import { FONTSIZE } from "../theme/text_style"

interface BadgeProps {
    title: string,
    backgroundColor: string,
}

const Badge = (props: BadgeProps) => {
    return <View
        style={[
            styles.container,
            { backgroundColor: props.backgroundColor }]
        }>
        <Text style={[styles.title]}>
            {props.title}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: BORDERRADIUS.radius_20,
        color: COLORS.White,
        paddingHorizontal: SPACING.space_12,
        paddingVertical: SPACING.space_6,
    },
    title: {
        color: COLORS.White,
        fontSize: FONTSIZE.size_12,
    }
})
export default Badge;