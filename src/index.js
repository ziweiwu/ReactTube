import Lodash from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Title from './components/title';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list.js';

//style, note webpack needs to read the css file by importing it
import './index.css';

//API key is access through special react app prefix REACT_APP 
//Regular process.env.API will not work for create react app
const youtube_api = process.env.REACT_APP_API;

// Create a new component. This component should produce 
// some html 

// Take this component's generate HTML and put it on the page (in the DOM)

// const means the App component will never re-assign
// old syntax: const App = function(){}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Learn react');
    }
    videoSearch(term) {
        YTSearch({ key: youtube_api, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //equavilent to 
            //this.setState({videos:videos});
        });
    }

    render() {
        const videoSearchThrottle = Lodash.debounce((term) => { this.videoSearch(term); }, 100);


        return (
            <div>
                <Title title="ReactTube" />
                <SearchBar onSearchTermChange={videoSearchThrottle} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
