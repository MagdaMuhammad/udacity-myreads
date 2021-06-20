import React, { Component } from 'react';
import Section from './Section.js';
import { Input, Alert } from 'reactstrap';
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
				const userBooks = this.props.books;

				let newBookList = books.map((book)=>{
					let bookFound = userBooks.find(b => b.id === book.id)
					book.shelf = (bookFound !== undefined ?  bookFound.shelf : 'none');
					return book;
				})

				this.setState(()=>({
					searchResults: newBookList
				}))
			})
		else
			this.setState(()=>({
				searchResults: []
			}))
	}


	render() {

		const books = this.state.searchResults;


		return (
            <div className="sec-container">
	            <Input type="text" name="searchQuery" placeholder="Search By Title Or Author.." bsSize="lg" onChange={event=>this.updateQuery(event.target.value)} value={this.state.searchQuery}/>
            	{ books.length > 0 ?
            		<Section
            			sectionName="Search Results"
            			books={books}
            			onHandleShelfChange={this.props.onHandleShelfChange}
            			flag="true"
            		/>
            		: this.state.searchQuery.length > 0 ? <Alert color="primary"> No Search Results For "{this.state.searchQuery}".</Alert>
            		: ''
            	}
            </div>
		)
	}
}

export default Search;
