import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';


const Home = () => {
    const [isModalOpen, setModalOpen ] = useState(false)
    const[firstname,setFirstname] = useState('')
    const[lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const toggleModal = () => setModalOpen(!isModalOpen)
    const handleSubmit = (event) => {
        toggleModal();
        alert(`firstname:${firstname} lastname:${lastname} email:${email} password:${password}`)
        event.preventDefault();
    }

    return (
        <div className='container'>
            <h1>Welcome to Our Site</h1>
            <h3>We are here to help you in tracking your expenses.</h3>
            <div className='row'>
                <div className='col-12 col-md-6 pt-5 pl-4'>
                    <br />
                    Our Site offers following list of features
                    <ul>
                        <li>Add Expenditure Details</li>
                        <li>Browse Expenditure Details</li>
                        <li>Provides a graphical representation of Expenditure</li>
                    </ul> 
                    <br /><br /><br />
                    <Modal isOpen={isModalOpen} toggle={toggleModal}>
                        <ModalHeader toggle={toggleModal}> 
                            Enter Valid Credential for Registration 
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>First Name: </Label>
                                    <Input type='text' id='firstname' name='firstname' value={firstname} 
                                        onChange={event=>setFirstname(event.target.value)} 
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name:</Label>
                                    <Input type='text' id='lastname' name='lastname' value={lastname}
                                        onChange={event => setLastname(event.target.value)}
                                     />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type='email' id='email' name='email' value={email} 
                                        onChange={ event => setEmail(event.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type='password' id='password' name='password' value={password}
                                        onChange={ event => setPassword(event.target.value)} 
                                    />
                                </FormGroup>
                                <Button type='submit' className='my-btn' color='primary'>Register</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                    <Button className='btn-block my-btn' color='primary' onClick={toggleModal}>Register</Button>
                    <br /><br />
                </div>
                <div className='col-12 col-md-6'>
                    <img src='/asserts/images/img1.jpg' alt='budget' width='100%'/>
                </div>
            </div>
            
          
        </div>
    );
}

export default Home;