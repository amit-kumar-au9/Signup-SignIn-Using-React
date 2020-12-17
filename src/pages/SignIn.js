import React from 'react'
import HeaderForm from '../components/HeaderForm'
import ButtonGroup from '../components/ButtonGroup'
import InputForm from '../components/InputForm'
import CheckBox from '../components/CheckBox'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import '../css/form.css'
class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            emailAddress: {
                name: 'emailAddress',
                value: '',
                isRequired: true,
                isError: false,
                errorMsg:'(Email address is not in correct format)'
            },
            password: {
                name: 'password',
                value: '',
                isRequired: true,
                isError: false,
                errorMsg: '(Wrong Password)'
            },
            repeatPassword: {
                name: 'repeatPassword',
                value: '',
                isRequired: true,
                isError: false,
                errorMsg: '(Repeat Password should match above Password)'
            },
            profileImage: {
                name: 'profileImage',
                value: '',
                isRequired: true,
                isError: false,
                errorMsg: '(It should be in .jpg , .png format)'
            },
            rememberMe: {
                name: 'rememberMe',
                value: false,
                isRequired: false,
            },
            error: true
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        const isValidated = this.isFormValidated()
        this.setState({
            error: !isValidated
        })
        if(isValidated){
            console.log('Yes all form values are correct')
        }
        else{
            console.log("Form can't be submitted")
        }
        this.printAllValues()
    }

    isFormValidated = () => {
        const isEmail = this.validateEmail(this.state.emailAddress.value)
        const isPassword = this.validatePassword(this.state.password.value)
        return (isEmail && isPassword)
    }

    printAllValues = () => {
        console.log(this.state.emailAddress.value)
        console.log(this.state.password.value)
        console.log(this.state.rememberMe.value)
    }

    validateEmail = (email) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isError = emailRegex.test(email) 
        this.changeStateError('emailAddress', isError)
        return isError
    }

    validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isError = passwordRegex.test(password)
        this.changeStateError('password', isError)
        return isError
    }

    changeStateError = (key, isError) => {
        this.setState({
            [key]: {
                ...this.state[key],
                isError: !isError
            }
        })
    }

    inputChangeHandler = (key, value) => {
        this.setState({
            [key]: {
                ...this.state[key],
                value: value
            }
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="flex-container">
                    <div className="form-data">
                        <form onSubmit = {this.onSubmitHandler}>
                            <HeaderForm title="Log In" text="Please fill in this form to proceed"/>
                            <div className="container form-container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputForm 
                                            type="email" 
                                            name={this.state.emailAddress.name}
                                            placeholder="Enter email address" 
                                            labelName="Email Address" 
                                            value={this.state.emailAddress.value} 
                                            changeHandler = {this.inputChangeHandler} 
                                            required = {this.state.emailAddress.isRequired}
                                            alertMsg = {this.state.emailAddress.isError && this.state.emailAddress.errorMsg}
                                            />
                                    </div>
                                    <div className="col-md-6">
                                        <InputForm 
                                            type="password" 
                                            name={this.state.password.name}
                                            placeholder="Enter Password" 
                                            labelName="Enter Password" 
                                            value={this.state.password.value} 
                                            changeHandler = {this.inputChangeHandler}
                                            required = {this.state.emailAddress.isRequired}
                                            alertMsg = {this.state.password.isError && this.state.password.errorMsg}
                                            />
                                    </div>
                                </div>
                                <CheckBox 
                                    text ="Remember Me" 
                                    name={this.state.rememberMe.name} 
                                    check={this.state.rememberMe.value} 
                                    changeHandler = {this.inputChangeHandler} 
                                    />
                                <br/>
                                <ButtonGroup/>                
                            </div>
                        </form>
                        <div className="footer-form">
                            <Footer 
                                linkTo="/" 
                                labelName="Don't have an account?" 
                                linkName="Create an account" 
                                />
                            <Link to='/forgot_password'>Forgot password</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn