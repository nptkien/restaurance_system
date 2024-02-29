import {useState} from "react";
import {StyleSheet, Switch, View} from "react-native";
import {COLORS} from "../theme/color";

interface SwitchProps {
    onValueChange: (value: boolean) => void;
    initValue: boolean,
}
const SwitchPrimary=(props: SwitchProps) => {
    const [ isEnabled, setIsEnabled ]=useState(props.initValue);


    const toggleSwitch=() => {
        const newState=!isEnabled;
        setIsEnabled(newState);
        props.onValueChange(newState);
    };
    return <View style={styles.container}>
        <Switch
            trackColor={{true: COLORS.Primary}}
            thumbColor={COLORS.White}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>;
}

const styles=StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: COLORS.Error

    },
});

export default SwitchPrimary;