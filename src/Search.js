import React, { Component } from 'react';
import Section from './Section.js';
import { Input } from 'reactstrap';
import * as BooksAPI from './BooksAPI.js';


class Search extends Component {

	state={
		searchQuery: '',
		searchResults: []
	}

	updateQuery = query => {
		this.setState(()=>({
			searchQuery: query
		}));

		if( query.length > 0 )
			BooksAPI.search(query)
			.then(books=>{
				this.setState(()=>({
					searchResults: books
				}))
			})
	}

	render() {
		const books = this.state.searchResults;
		return (
            <div className="sec-container">
	            <Input type="text" name="searchQuery" placeholder="Search By Title Or Author.." bsSize="lg" onChange={event=>this.updateQuery(event.target.value)} value={this.state.searchQuery}/>
            	{ books.length > 0 && <Section sectionName="Search Results" books={books} onHandleShelfChange={this.props.onHandleShelfChange} /> }
            </div>
		)
	}
}

export default Search;
