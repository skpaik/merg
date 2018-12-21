import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getPostsCustomQuery} from '../../queries/queries';

// components
import PostDetails from '../PostDetails';

class PostListCustom extends Component {
    constructor(props) {
        super(props);
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
            return data.posts_custom.map(post => {

                const thumbnailBgImageStyle = {
                    color: 'blue',
                    backgroundImage: 'url(' + post.banner_image_url + ')',
                };

                return (
                    <div className="card">
                        <div className="row">
                            <div className="col-md-5 wrapthumbnail">
                                <a href="post.html">
                                    <div className="thumbnail" style={thumbnailBgImageStyle}/>
                                </a>
                            </div>
                            <div className="col-md-7">
                                <div className="card-block">
                                    <h2 className="card-title"><a href="post.html">
                                        {post.title}
                                    </a>
                                    </h2>
                                    <h4 className="card-text">
                                        {post.details}
                                    </h4>
                                    <div className="metafooter">
                                        <div className="wrapfooter">
                                            <span className="meta-footer-thumb">
                                                <a href="author.html">
                                                    <img className="author-thumb"
                                                         src={post.user.pro_pic_url} alt={"logo"}/>
                                                </a>
                                            </span>
                                            <span className="author-meta">
                                                <span className="post-name">
                                                    <a href="author.html">Steve</a>
                                                </span>
                                                <br/>
                                                    <span className="post-date">22 July 2017</span>
                                                    <span className="dot"></span>
                                                    <span className="post-read">6 min read</span>
                                                    <span className="post-read-more">
                                                        <a href="post.html" title="Read Story">
                                                            <svg className="svgIcon-use" width="25"
                                                                 height="25" viewBox="0 0 25 25">
                                                                <path
                                                                    d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                                                    fill-rule="evenodd"></path>
                                                            </svg>
                                                        </a>
                                                    </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
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

export default graphql(getPostsCustomQuery, {
    options: (props) => {
        return {
            variables: {
                post_type: props.post_type
            }
        }
    }
})(PostListCustom);
