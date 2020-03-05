import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

interface Props { navigation: any}
const CreateScreen: React.FC<Props> = ({ navigation }) => {
    
    const { addBlogPost } = useContext(Context)
    
    return <BlogPostForm onSubmit={(title: string, content: string) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
    }} />
}

const styles = StyleSheet.create({});


export default CreateScreen;
