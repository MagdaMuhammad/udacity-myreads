import React, { Component } from 'react';
import Section from './Section.js';
import { Input } from 'reactstrap';

class Search extends Component {

	state={
		searchQuery: ''
	}

	handleSearchQuery = query => {

		this.setState(()=>({
			searchQuery: query.trim()
		}))
	}

	render() {
		return (
            <div className="sec-container">
            	<Input type="text" name="searchQuery" placeholder="Search By Title Or Author.." bsSize="lg" onChange={event=>this.handleSearchQuery(event.target.value)} value={this.state.searchQuery}/>

            	<Section sectionName="Search Results"/>
            </div>
		)
	}
}

export default Search;
