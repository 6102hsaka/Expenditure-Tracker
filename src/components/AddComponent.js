import React from 'react';
import { Col, Card, CardTitle, CardBody,
    Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Animated} from 'react-animated-css';

const AddView = () => {
    return (
        <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
            <div className='container'>
                <Col md={8} className='mx-auto'>
                    <Card className='shadow'>
                        <CardBody>
                            <CardTitle><h2>Enter Data</h2></CardTitle>
                            <hr />
                            <Form>
                                <FormGroup>
                                    <Label>Amount Spent</Label>
                                    <Input type='text' id='amount' name='amount' />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Used for</Label>
                                    <Input type='text' id='detail' name='detail' />
                                </FormGroup>
                                <FormGroup>
                                    <Button className='my-btn' color='primary'>Save</Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        </Animated>
    )
}

export default AddView;