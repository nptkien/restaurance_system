import { DimensionValue, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { COLORS } from "../theme/color";
import { FONTSIZE, TEXT_STYLE } from "../theme/text_style";
import { SPACING } from "../theme/spacing";
import { BORDERRADIUS } from "../theme/border_radius";

interface ButtonProps {
  title: string,
  onPress: Function,
  background?: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  width?: DimensionValue | undefined,
}

const ButtonPrimary = (props: ButtonProps) => {
  return <TouchableOpacity
    style={[styles.buttonContainer, { width: props?.width }]}
    onPress={() => {
      props.onPress();
    }}
  >
    <View
    >
      <Text style={[
        TEXT_STYLE.mediumLabel,
        {
          color: COLORS.White,
          fontSize: FONTSIZE.size_14,
          fontWeight: 600,
        },
        props.textStyle,
      ]}>
        {props.title}
      </Text>
    </View>
  </TouchableOpacity >;
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingLeft: SPACING.space_32,
    paddingRight: SPACING.space_32,
    paddingTop: SPACING.space_16,
    paddingBottom: SPACING.space_16,
    width: "100%",
    borderRadius: BORDERRADIUS.radius_12,
    backgroundColor: COLORS.Primary,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
export default ButtonPrimary;