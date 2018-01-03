import React, { Component } from 'react';

//only class based component can have state
class SearchBar extends Component {

    //constructor gets called first always
    constructor(props) {
        //parent method super is called
        super(props);

        //intial state is set
        //new object is assigned an empty string
        this.state = { term: '' };
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        //onChange is react property
        //if input is changed, a function is called 
        //state can only be changed by setState

        //the value is set by state, it's a controlled element
        //if the state changes the value changes
        //when user types something, they trigger the event to change
        //the state
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
