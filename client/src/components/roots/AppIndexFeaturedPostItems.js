import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import {gClient} from '../../system/GraphClient';

// components
import PostListByTags from '../post/PostListByTags';

class AppIndexFeaturedPostItems extends Component {
    render() {
        return (
            <ApolloProvider client={gClient}>
                <PostListByTags tags={["featured"]} view_type={"featured"} />
            </ApolloProvider>
        );
    }
}

export default AppIndexFeaturedPostItems;