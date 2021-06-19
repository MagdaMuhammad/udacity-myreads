import React, {Component} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Section from './Section.js';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="header">
                    <h1> My Reads </h1>
                </header>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Section sectionName="Currently Reading"/>
                                <Section sectionName="Want To Read"/>
                                <Section sectionName="Read"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;
