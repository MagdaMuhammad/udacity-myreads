import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, CardBody, Card, CardTitle, CardImg, CardSubtitle, CustomInput, FormGroup } from 'reactstrap';



class Section extends Component {

    static propTypes = {
        sectionName: PropTypes.string.isRequired,
        books:  PropTypes.array.isRequired,
        filter: PropTypes.string
    }

    render() {
        const books = this.props.filter ? this.props.books.filter((book)=>(book.shelf === this.props.filter)) : this.props.books;
        return(
            <div className="sec-container">
                <Card className="paper-bg">
                    <CardBody>
                        <Container>
                            <h2>{this.props.sectionName}</h2>
                            <Row>

                                { books.map((book)=>(
                                    <Col xs="6" sm="4" lg="3" className="bookCard"  key={book.id}>
                                        <Card className="h-100" >
                                            <CardImg top width="100%" src={book.imageLinks.thumbnail} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle tag="h5">{book.title}</CardTitle>
                                                {book.authors.map(author => (
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted" key={author}>{author}</CardSubtitle>
                                                ))}

                                                <FormGroup>
                                                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                                        <option value="" disabled>Move To</option>
                                                        <option value="currentlyReading">Currently Reading { book.shelf === 'currentlyReading' ? '✔' : '' }</option>
                                                        <option value="wantToRead"> Want To Read { book.shelf === 'wantToRead' ? '✔' : '' }</option>
                                                        <option value="read">Read { book.shelf === 'read' ? '✔' : '' }</option>
                                                        {book.shelf !== '' ? <option value="">none</option> : ''}
                                                    </CustomInput>
                                                </FormGroup>

                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}

                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Section;