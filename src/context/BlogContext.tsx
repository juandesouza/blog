import createDataContext from './createDataContext';
import uuid from 'uuid';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state, 
                { 
                    id: uuid(), 
                    title: `Blog Post #${state.length + 1}`
                }
            ];
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

const deleteBlogPost = dispatch => {
    return id => dispatch({ type: 'delete_blogpost', payload: id });
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);