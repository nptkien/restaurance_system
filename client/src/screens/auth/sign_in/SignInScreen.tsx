import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { appStyles } from '../../../theme/app_styles'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'

export const SignInScreen = () => {
    const appDispatch = useAppDispatch();
    const { } = useAppSelector(appState => appState.authState)
    return <>
        <View style={{ ...appStyles.container, ...styles.container }}>
            <Text>Sign in screen</Text>
            <Text>Logo</Text>
            <TextInput />
            <TextInput />
            <TouchableOpacity

            >
                <View style={{ ...appStyles.centerView, backgroundColor: 'red', height: 70 }}><Text style={{ color: 'white' }}>Sign In</Text></View>
            </TouchableOpacity>
        </View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})