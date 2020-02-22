import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

interface Props { navigation: any}
const CreateScreen: React.FC<Props> = ({ navigation }) => {
    
    
    return (
        <View>
            <Text>Enter Title:</Text>
            <TextInput />
            <Text>Enter Content:</Text>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    
})


export default CreateScreen;
