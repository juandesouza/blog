import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

interface Props {
    navigation: any
}

const IndexScreen: React.FC<Props> = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button title="Add Post" onPress={
                addBlogPost} />
            <FlatList 
                data={state} 
                keyExtractor={blogPost => blogPost.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />            
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather style={{ marginRight: 20 }} name="plus" size={30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 22,
        color: 'red'
    }
});

export default IndexScreen;
