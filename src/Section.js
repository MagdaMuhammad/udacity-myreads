import React from 'react';
import { Container, Row, Col, Button, CardBody, Card, CardTitle, CardImg, CardSubtitle } from 'reactstrap';

const Section = props => (
    <div className="sec-container">
        <Card>
            <CardBody>
                <Container>
                  <Row>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Card>
                            <CardImg top width="100%" src="https://s-i.huffpost.com/gen/989163/images/o-NEW-HARRY-POTTER-COVER-facebook.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Card>
                            <CardImg top width="100%" src="https://th.bing.com/th/id/OIP.AirxOQvjchFvEZTtHD0IwQHaKe?pid=ImgDet&rs=1" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Card>
                            <CardImg top width="100%" src="https://th.bing.com/th/id/R0f47f997da0883f5c5471e7df6168abd?rik=87nANvCH4OnlZg&pid=ImgRaw" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                  </Row>
                </Container>
            </CardBody>
        </Card>
    </div>
);

export default Section;