import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getPostQuery} from '../queries/queries';

class PostDetails extends Component {
    displayPostDetails() {
        console.log(this.props.data);
        const {post} = this.props.data;
        if (post) {
            return (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.details}</p>
                    <p>{post.user.name}</p>
                    <p>All posts by this author:</p>
                    <ul className="posts">
                        {post.user.posts.map(item => {
                            return <li key={item.id}>{item.title}</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return (<div>No post selected...</div>);
        }
    }

    render() {
        return (
            <div id="post-details">
                {this.displayPostDetails()}
            </div>
        );
    }
}

export default graphql(getPostQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.postId
            }
        }
    }
})(PostDetails);
