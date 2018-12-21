import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {gClient} from '../../system/GraphClient';

// components
import PostListByTags from '../post/PostListByTags';

class AppIndexAllStoriesPostItems extends Component {
    render() {
        return (
            <ApolloProvider client={gClient}>
                <PostListByTags tags={["linux"]} view_type={"all_stories"}/>
            </ApolloProvider>
        );
    }
}

export default AppIndexAllStoriesPostItems;