import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {client} from './system/GraphClient';

// components
//import BookList from './components/BookList';
//import PostList from './components/PostList';
import PostListCustom from './components/post/PostListCustom';
//import PostDetails from "./components/PostDetails";
//import AddBook from './components/AddBook';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <PostListCustom post_type={"f"}/>
            </ApolloProvider>
        );
    }
}

export default App;