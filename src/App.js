import React, {Component} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI.js';
import { Container, Row, Col } from 'reactstrap';
import Section from './Section.js';
import Search from './Search.js';

class App extends Component {

    state = {
        showSearchPage: false,
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

    showSearchPage = () => {
        this.setState(()=>({
            showSearchPage: true
        }))
    }

    backToHomePage = () => {
        this.setState(()=>({
            showSearchPage: false
        }))
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
                            { this.state.showSearchPage ?
                                <Col>
                                    <Search books={this.state.Books}/>
                                </Col>
                            :
                                <Col>

                                    <Section sectionName="Currently Reading" filter="currentlyReading" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                    <Section sectionName="Want To Read" filter="wantToRead" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                    <Section sectionName="Read" filter="read" books={this.state.Books} onHandleChange={this.handleShelfChange} />
                                </Col>
                           }
                        </Row>
                    </Container>
                </div>
                <button id="addBookBtn" title="Add New Book" onClick={this.state.showSearchPage? this.backToHomePage:this.showSearchPage}>{this.state.showSearchPage? 'Back To Homepage':'Add New Book'}</button>
            </div>
        );
    }
}

export default App;
