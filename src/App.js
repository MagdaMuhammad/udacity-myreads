import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI.js';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Section from './Section.js';
import Search from './Search.js';

class App extends Component {

    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(()=>({
                books: {
                    currentlyReading: books.filter((book)=>(book.shelf === 'currentlyReading')),
                    wantToRead: books.filter((book)=>(book.shelf === 'wantToRead')),
                    read: books.filter((book)=>(book.shelf === 'read')),
                    none: books.filter((book)=>(book.shelf === 'none'))
                }
            }))
        })
    }


    handleShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then((date)=>{
            this.setState((currState)=>({
                books: {
                    ...currState.books,
                    [shelf]: currState.books.[shelf].concat([book])
                }
            }))
        });
    }

    render() {
        const books = this.state.books;
        return (
            <div className="App">
                <header className="header">
                    <h1> My Reads </h1>
                </header>
                <div>
                    <Container>
                        <Row>
                            <Route exact path='/' render={()=>(
                                <div>
                                    <Col>
                                        <Section
                                            sectionName="Currently Reading"
                                            books={books.currentlyReading}
                                            onHandleShelfChange={this.handleShelfChange}
                                        />
                                        <Section
                                            sectionName="Want To Read"
                                            books={books.wantToRead}
                                            onHandleShelfChange={this.handleShelfChange}
                                        />
                                        <Section
                                            sectionName="Read"
                                            books={books.read}
                                            onHandleShelfChange={this.handleShelfChange}
                                        />
                                    </Col>
                                    <button id="addBookBtn" title="Add New Book">
                                        <Link to='/search'>Add New Book</Link>
                                    </button>
                                </div>
                            )} />
                            <Route path='/search' render={()=>(
                                <div>
                                    <Col>
                                        <Search onHandleShelfChange={this.handleShelfChange} />
                                    </Col>
                                    <button id="addBookBtn" title="Add New Book">
                                        <Link to='/'>Back To Homepage</Link>
                                    </button>
                                </div>
                            )}/>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
