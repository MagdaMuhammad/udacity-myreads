import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Section from './Section.js';
import Search from './Search.js';

class App extends Component {

    state = {
        showSearchPage: false
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
                                    <Search />
                                </Col>
                            :
                                <Col>

                                    <Section sectionName="Currently Reading"/>
                                    <Section sectionName="Want To Read"/>
                                    <Section sectionName="Read"/>
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
