import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, Text, ViewStyle, DimensionValue} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../theme/color';
import {Control, FieldValues, FieldError, Controller, useController} from 'react-hook-form';
import {FONTSIZE} from '../theme/text_style';
import {BORDERRADIUS} from '../theme/border_radius';
import {SPACING} from '../theme/spacing';


interface PrimaryTextFieldProps {
    control: Control<FieldValues>;
    name: string;
    rules: Record<string, unknown>; // Thay bằng kiểu dữ liệu xác thực của bạn
    errors: any;
    styleInput?: ViewStyle,
    width?: DimensionValue|"100%",
    placeholder: string,
    secureTextEntry?: boolean|true,
    title?: string,
    showSuffixIcon?: boolean,
}


const PrimaryTextField=(props: PrimaryTextFieldProps) => {
    const [ isFocused, setIsFocused ]=useState(false);
    const [ secureTextEntry, setSecureTextEntry ]=useState(props.secureTextEntry??false);

    const handleBlur=() => {
        setIsFocused(false);
    };

    const handleFocus=() => {
        setIsFocused(true);
    };

    return (
        <View style={[
            styles.parent,
            props.styleInput,
            {
                width: props.width??"100%"
            }
        ]
        }>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={[
                styles.container,
                {borderColor: props.errors.fieldName? 'red':isFocused? COLORS.Primary:COLORS.Border} ]
            }>
                <Controller
                    control={props.control}
                    name={props.name}
                    rules={props.rules}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            style={styles.input}
                            placeholder={props.placeholder}
                            value={value}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            onChangeText={(text) => {
                                onChange(text);
                            }}
                            secureTextEntry={secureTextEntry}
                        />
                    )}

                />
                {props.showSuffixIcon&&<TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)} style={styles.iconContainer}>
                    <Icon name={secureTextEntry? 'eye':'eye-slash'} size={24} color="gray" />
                </TouchableOpacity>}
            </View>
            {props.errors[ props.name ]&&<Text style={styles.errorText}>{props.errors[ props.name ].message}</Text>}

        </View>

    );
};

const styles=StyleSheet.create({
    parent: {
        width: "100%",
        flexDirection: 'column',
    },
    container: {
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: BORDERRADIUS.radius_12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        padding: 0,
        paddingHorizontal: SPACING.space_16,
        paddingVertical: SPACING.space_24,
    },
    iconContainer: {
        padding: 8,
    },
    title: {
        fontWeight: "500",
    },
    errorText: {
        color: 'red',
        fontSize: FONTSIZE.size_12,
    },
});

export default PrimaryTextField;