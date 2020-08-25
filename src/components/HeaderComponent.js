import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const mystyle = {
    header : {
        padding: '16px 28px',
        marginBottom : '40px',
    },
    navBrand : {
        fontSize : '1.5rem'
    }
    
}
  
class MyNavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isModalOpen: false,
            username: '',
            password: ''
        }

        this.toogleNavBar = this.toogleNavBar.bind(this);
        this.toogleModal = this.toogleModal.bind(this);

    }

    toogleNavBar() {
        this.setState({
            ...this.state,
            isOpen : !this.state.isOpen
        })
    }

    toogleModal() {
        this.setState({
            ...this.state,
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleForm(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e) {
        alert(`username:${this.state.username} \npassword:${this.state.password}`)
        this.toogleModal();
        this.setState({
            username: '',
            password: ''
        },()=>console.log(JSON.stringify(this.state)))
        
        e.preventDefault();
    }

    render() {
        return (
            <Navbar style={mystyle.header} dark expand='md'>
                <NavbarBrand style={mystyle.navBrand}>Expenditure Tracker</NavbarBrand>
                <NavbarToggler onClick={this.toogleNavBar} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink to='/home' className='nav-link'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/add' className='nav-link'>Add Data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/view' className='nav-link'>View Expense</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem className='ml-auto'>
                            <Button outline className='my-btn' color='primary' onClick={this.toogleModal}>
                                <FontAwesomeIcon icon={ faUserAlt } /> &nbsp; Login
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toogleModal}>
                    <ModalHeader toggle={this.toogleModal}> 
                        Enter Valid Credential for Login 
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e) => this.submitForm(e)}>
                            <FormGroup>
                                <Label htmlFor='username'>Enter Username: </Label>
                                <input type='text' className='form-control' id='username'
                                    name='username' value={this.state.username} onChange={(e)=>this.handleForm(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Enter password: </Label>
                                <input type='password' className='form-control' id='password'
                                    name='password' value={this.state.password} onChange={(e)=>this.handleForm(e)} />
                            </FormGroup>
                            <Button type='submit' value='submit' className='my-btn' color='primary'>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Navbar>
        );
    }
}

const Header = () =>  <MyNavBar />

export default Header;

