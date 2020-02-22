import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

interface Props { navigation: any}
const ShowScreens: React.FC<Props> = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})


export default ShowScreens
