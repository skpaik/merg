import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {gClient} from '../../system/GraphClient';

// components
//import BookList from './components/BookList';
//import PostList from './components/PostList';
import PostListCustom from '../post/PostListCustom';
//import PostDetails from "./components/PostDetails";
//import AddBook from './components/AddBook';

class AppIndex extends Component {
    render() {
        return (
            <ApolloProvider client={gClient}>
                <PostListCustom post_type={"f"}/>
            </ApolloProvider>
        );
    }
}

export default AppIndex;