import React from 'react'
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

function SelectionFrom(props) {
    return (
        <div>
            <Container>
                <Form>
                <Form.Row>
                    <h1>{props.route} on 10/23/20</h1>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="James' Trip" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Number of Kayaks</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridtime">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control placeholder="8:30 AM" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="I agree to sign my life away" />
                </Form.Group>

                <Row>
                    <Col>
                        <Button href="./ecwids.html#!/Salt-Fork-Trip/p/225787416/category=0" variant="primary" onClick={props.ecwids} >
                            Continue
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={props.ecwids} >
                            Back
                        </Button>
                    </Col>
                </Row>
                </Form>
            </Container>
        </div>
    )
}

export default SelectionFrom;