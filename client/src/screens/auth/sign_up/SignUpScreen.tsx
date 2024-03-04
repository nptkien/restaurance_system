import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

export const SignUpScreen = () => {
    return <>
    <View style={styles.container}>
        <Text>Sign up screen</Text>
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