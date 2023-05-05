import { Row, Col, Card, Form, Button, ListGroup, Accordion } from 'react-bootstrap'
import '../../App.css'

const AdminSearchComponent = (): JSX.Element => {
    return (
        <>
            <Row>
                <Col lg={3} className='pt-5 carD'>
                    <Card className='searchCardCuz opacity-20'>
                        <Card.Body>
                            <h4 className='text-white'>Filters</h4>

                            <Row>
                                <Col lg={12} className='pt-4'>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder=""
                                            className="me-2 seCuz"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </Col>
                            </Row>

                            <Row>
                                <Col className='pt-3'>
                                    <h6 className='text-white'>Sort By</h6>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AdminSearchComponent;