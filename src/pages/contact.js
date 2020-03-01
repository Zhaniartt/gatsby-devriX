import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Route, Link } from 'react-router-dom';
import Layout from '../components/layout'
import './contact.css'

export class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: null,
        password: null,
        message: ''
    }
  } 
 
  handleChange = ev =>{
    let fieldName = ev.target.name;
    let fieldValue = ev.target.value;
    this.setState({ [fieldName]:fieldValue})


  }
  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state)
    //some fetch logic here 

  }


  render() {

    return (
      <Layout>
              <div>
      <div className="text-center" style={{padding: '100px 340px'}}>
        <div className="logo">Contact Me</div>
        <div className="login-form-1">
          <form onSubmit={this.handleSubmit} id="login-form" className="text-left">
            <div className="login-form-main-message" />
            <div className="main-login-form">
              <div className="login-group">
                <div className="form-group">
                  <label htmlFor="lg_username" className="sr-only">Name</label>
                  <input onChange={this.handleChange} type="text" className="form-control" id="lg_username" name="username" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="lg_password" className="sr-only">Email</label>
                  <input onChange={this.handleChange} type="password" className="form-control" id="lg_password" name="password" placeholder="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="lg_password" className="sr-only">Message</label>
                  <input onChange={this.handleChange} type="text" className="form-control" id="lg_password" name="message" placeholder="Message.." />
                </div>
              </div>
              <button type="submit" className="login-button"><i className="fa fa-chevron-right" /></button>
            </div>
          </form>
        </div>
        {/* end:Main Form */}
      </div>
 

    </div>
      </Layout>

    )
  }
}

export default Contact;