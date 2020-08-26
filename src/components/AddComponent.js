import React from 'react';
import { Col, Card, CardTitle, CardBody,
    Form, FormGroup, Label, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {Animated} from 'react-animated-css';

const AddView = () => {

    const { register, handleSubmit, errors } = useForm();
    const submiForm = data => alert(data.amount+" "+data.detail);
        
    return (
        <Animated animationIn="zoomIn" animationInDuration={1200} isVisible={true}>
            <div className='container'>
                <Col md={8} className='mx-auto'>
                    <Card className='shadow'>
                        <CardBody>
                            <CardTitle><h2>Enter Data</h2></CardTitle>
                            <hr />
                            <Form onSubmit={handleSubmit(submiForm)}>
                                <FormGroup>
                                    <Label>Amount Spent</Label>
                                    <input type='text' id='amount' name='amount' className='form-control'
                                        ref={register({
                                            required:true,
                                            validate: { isNumber : num => parseInt(num,10)>0 } 
                                            })} />
                                    {errors.amount?.type==='required' && <div className='error'>Field cannot be empty</div>}
                                    {errors.amount?.type==='isNumber' && <div className='error'>Must be a positive number</div>}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Used for</Label>
                                    <input type='text' id='detail' name='detail' className='form-control'
                                        ref={register({required:true, minLength:5, maxLength:30})} />
                                    {errors.detail?.type==='required' && <div className='error'>Field cannot be empty</div>}
                                    {errors.detail?.type==='minLength' && <div className='error'>Field should contanins atleast 5 characters</div>}
                                    {errors.detail?.type==='maxLength' && <div className='error'>Field should contanins atmost 30 characters</div>}
                                </FormGroup>
                                <FormGroup>
                                    <Button className='my-btn' color='primary' type='submit'>Save</Button>
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