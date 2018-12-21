import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import AppIndexFeaturedPostItems from './components/roots/AppIndexFeaturedPostItems';
import AppIndexAllStoriesPostItems from './components/roots/AppIndexAllStoriesPostItems';

ReactDOM.render(<AppIndexFeaturedPostItems />, document.getElementById('featured_post_items'));
ReactDOM.render(<AppIndexAllStoriesPostItems />, document.getElementById('all_stories_post_items'));