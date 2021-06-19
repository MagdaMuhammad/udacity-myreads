import React, { Component } from 'react';
import { Container, Row, Col, Button, CardBody, Card, CardTitle, CardImg, CardSubtitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Section extends Component {

    state ={
        dropdownOpen: false,
    }

    toggle = () => {
        this.setState((prevState)=>({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }


    render() {
        return(
            <div className="sec-container">
                <Card className="paper-bg">
                    <CardBody>
                        <Container>
                            <h2>Currently Reading</h2>
                            <Row>
                                <Col xs="6" sm="4" md="3" lg="2">
                                    <Card>
                                        <CardImg top width="100%" src="https://th.bing.com/th/id/OIP.AirxOQvjchFvEZTtHD0IwQHaKe?pid=ImgDet&rs=1" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                                <DropdownToggle caret> Move To </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </CardBody>
                                    </Card>
                                </Col>


                                <Col xs="6" sm="4" md="3" lg="2">
                                    <Card>
                                        <CardImg top width="100%" src="https://th.bing.com/th/id/OIP.AirxOQvjchFvEZTtHD0IwQHaKe?pid=ImgDet&rs=1" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                                <DropdownToggle caret> Move To </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col xs="6" sm="4" md="3" lg="2">
                                    <Card>
                                        <CardImg top width="100%" src="https://th.bing.com/th/id/OIP.AirxOQvjchFvEZTtHD0IwQHaKe?pid=ImgDet&rs=1" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <Dropdown group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                                <DropdownToggle caret> Move To </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                    <DropdownItem>Header</DropdownItem>
                                                    <DropdownItem>Some Action</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </CardBody>
                                    </Card>
                                </Col>



                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Section;