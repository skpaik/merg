import React from "react";

export function create_featured_view(post, this_obj) {

    var thumbnailBgImageStyle = {
        color: 'blue',
        backgroundImage: 'url(' + post.banner_image_url + ')',
    };

    return <div className="card" key={post.id}>
        <div className="row">
            <div className="col-md-5 wrapthumbnail">
                <a href="post.html">
                    <div className="thumbnail" style={thumbnailBgImageStyle}/>
                </a>
            </div>
            <div className="col-md-7">
                <div className="card-block">
                    <h2 className="card-title" key={post.id}
                        onClick={(e) => this_obj.setState({selected: post.id})}>
                        {post.title}
                    </h2>
                    <h4 className="card-text">
                        {post.details.substr(0, 64)}
                    </h4>
                    <div className="metafooter">
                        <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                    <a href="author.html">
                                        <img className="author-thumb" src={post.user.pro_pic_url}
                                             alt={"logo"}/>
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
                                        <a href="post_bookmark.html" title="Read Story">
                                            <img src="/assets/img/bookmark-outline-24.png"
                                                 alt="Bookmark"/>
                                        </a>
                                    </span>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export function create_stories_view(post) {
    return <div className="card" key={post.id}>All Tags Stories</div>;
}