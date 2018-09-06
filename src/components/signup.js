import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom'

class Signup extends Component {
    state = { 
        isSignedUp: false,
        username: "",
        password: "",
        email: "",
     }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault()
        return <Redirect to='/food' />
    }

    success = (e) => {
                e.preventDefault()
                this.setState({isSignedUp: true})
                return <Redirect to ='/food' />
    } 

    render() {
        return (
        <section className="section is-large">
            <div className="container" id="signupSection">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title text-centered" id="dark-title">Let's get you signed up</h1>
                <form onSubmit={this.success}>
                    <div className="field">
                        <label className="label">Your username</label>
                            <div className="control">
                                <input className="input is-medium" name="username" type="text" placeholder="indecisiveEater10" onChange={this.onChange} value={this.state.username} required></input>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Your Email Address</label>
                                <div className="control">
                                    <input className="input is-medium" name="email" type="email" placeholder="example@example.com"onChange={this.onChange} value={this.state.email} required></input>
                                </div>
                            </div>

                        <div className="field">
                            <label className="label">Your password</label>
                                <div className="control">
                                    <input className="input is-medium" name="password" type="password" placeholder="A Secure Password" onChange = {this.onChange} value={this.state.password} required></input>
                                </div>
                            </div>
                            <button className="button is-info">Sign up!</button>
                            
                        </form><br />
                        
                            <p>Already a user? <NavLink to='/login'>Login Here.</NavLink></p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Signup;