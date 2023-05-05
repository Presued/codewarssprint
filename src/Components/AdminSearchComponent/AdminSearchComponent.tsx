import { Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap'
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AdminSearchComponent;