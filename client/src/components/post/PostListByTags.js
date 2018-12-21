import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import {getPostsTagsQuery} from '../../queries/queries';

// components
import PostDetails from '../PostDetails';

import {create_featured_view, create_stories_view} from './view_post'

class PostListByTags extends Component {

    constructor(props) {
        super(props);

        this.view_type = props.view_type;

        this.state = {
            selected: null
        }
    }

    displayPosts() {
        var data = this.props.data;
        console.log(data);
        if (data.loading) {
            return (<div>Loading Posts...</div>);
        } else {
            return data.posts_by_tags.map(post => {

                if (this.view_type === "featured")
                    return (create_featured_view(post, this));
                else if (this.view_type === "all_stories")
                    return (create_stories_view(post));
            })
        }
    }

    render() {
        return (
            <div>
                {this.displayPosts()}
                <PostDetails postId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getPostsTagsQuery, {
    options: (props) => {
        console.log(props.tags);
        return {
            variables: {
                tags: props.tags
            }
        }
    }
})(PostListByTags);