import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI.js';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Section from './Section.js';
import Search from './Search.js';
import { Route } from 'react-router-dom'

class App extends Component {

    state = {
        Books: [],
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then((books)=>{
            this.setState(()=>({
                Books: books
            }))
        })
    }

    handleShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf);
    }

    render() {

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
                                        <Section sectionName="Currently Reading" filter="currentlyReading" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                        <Section sectionName="Want To Read" filter="wantToRead" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                        <Section sectionName="Read" filter="read" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                    </Col>
                                    <button id="addBookBtn" title="Add New Book">
                                        <Link to='/search'>Add New Book</Link>
                                    </button>
                                </div>
                            )} />
                            <Route path='/search' render={()=>(
                                <div>
                                    <Col>
                                        <Search books={this.state.Books}/>
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
