import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = {
        searchQuery: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        const {filter} = this.props;

        this.setState({
            [name]: value
        }, () => filter(this.state.searchQuery))
    }

    render() {
        const {searchQuery} = this.state;
        return (
            <div className="control">
                <input className="input" onChange={this.handleChange} name='searchQuery' type="text" value={searchQuery} />
            </div>
        )
    }
}
