import React from 'react'
import HeaderForm from '../components/HeaderForm'
import ButtonGroup from '../components/ButtonGroup'
import InputForm from '../components/InputForm'
import CheckBox from '../components/CheckBox'
import Footer from '../components/Footer'
import '../css/form.css'
class Signup extends React.Component{
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
                errorMsg: '(Password should contain 8 to 15 letter Contain 1 upper and lower case alphabet Contain 1 numberic character Contain 1 special character)'
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
                errorMsg: '(Upload image in .jpg , .png format)'
            },
            acceptPolicy: {
                name: 'acceptPolicy',
                value: false,
                isRequired: false,
                isError: false,
                errorMsg: '(You should accept the policies to continue)'
            },
            error: true
        }
    }

    isFormValidated = () => {
        const isEmail = this.validateEmail(this.state.emailAddress.value)
        const isPassword = this.validatePassword(this.state.password.value)
        const isRepeatPassword = this.validateRepeatPassword(this.state.password.value, this.state.repeatPassword.value)
        const isProfileImage = this.validateProfileImage(this.state.profileImage.value)
        const isAcceptPolicy = this.state.acceptPolicy.value
        this.changeStateError('acceptPolicy', isAcceptPolicy)
        return (isEmail && isPassword && isRepeatPassword && isProfileImage && isAcceptPolicy)
    }
    
    printAllValues = () => {
        console.log(this.state.emailAddress.value)
        console.log(this.state.password.value)
        console.log(this.state.repeatPassword.value)
        console.log(this.state.profileImage.value)
        console.log(this.state.acceptPolicy.value)
    }
    
    inputChangeHandler = (key, value) => {
        this.setState({
            [key]: {
                ...this.state[key],
                value: value
            }
        })
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
    
    validateRepeatPassword = (password, repeatPassword) => {
        const isError = (password === repeatPassword)
        this.changeStateError('repeatPassword', isError)
        return isError
    }
    
    validateProfileImage = (image) => {
        var error = true
        if ((image.length > 0)){
            var allowedExtensions =  /(\.png|\.jpg)$/i; 
            if (!allowedExtensions.exec(image)) { 
                error = false
            }
        }
        this.changeStateError('profileImage', error)
        return error
    }

    changeStateError = (key, isError) => {
        this.setState({
            [key]: {
                ...this.state[key],
                isError: !isError
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="flex-container">
                    <div className="form-data">
                        <form onSubmit = {this.onSubmitHandler}>
                            <HeaderForm title="Sign Up" text="Please fill in this form to create an account."/>
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
                                    <div className="col-md-6">
                                        <InputForm 
                                            type="password" 
                                            name={this.state.repeatPassword.name} 
                                            placeholder="Enter Password Again" 
                                            labelName="Repeat Password" 
                                            value={this.state.repeatPassword.value} 
                                            changeHandler = {this.inputChangeHandler}
                                            required = {this.state.emailAddress.isRequired}
                                            alertMsg = {this.state.repeatPassword.isError && this.state.repeatPassword.errorMsg}
                                            />
                                    </div>
                                    <div className="col-md-6">
                                        <InputForm 
                                            type="file" 
                                            name={this.state.profileImage.name} 
                                            placeholder="Upload Image" 
                                            labelName="Upload Profile Image" 
                                            value={this.state.profileImage.value} 
                                            changeHandler = {this.inputChangeHandler} 
                                            required = {this.state.emailAddress.isRequired}
                                            alertMsg = {this.state.profileImage.isError && this.state.profileImage.errorMsg}
                                            acceptFile = "image/*"
                                            />
                                    </div>
                                </div>
                                <CheckBox 
                                    text ="I accept the terms & policies" 
                                    name={this.state.acceptPolicy.name} 
                                    check={this.state.acceptPolicy.value} 
                                    changeHandler = {this.inputChangeHandler} 
                                    alertMsg = {this.state.acceptPolicy.isError && this.state.acceptPolicy.errorMsg}
                                    />
                                <br/>
                                <p className="text-center">By creating an account you agree to our <a href="/" style={{color:'red'}}><strong>Terms & Privacy</strong></a>.</p>
                                <ButtonGroup />           
                            </div>
                        </form>
                        <div className="footer-form">
                            <Footer 
                                linkTo="/signin" 
                                labelName="Already have an account?" 
                                linkName="Log in" 
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup