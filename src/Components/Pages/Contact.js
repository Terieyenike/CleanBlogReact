import React from 'react';
import Header from '../Common/Header';
import image from '../assets/img/contact-bg.jpg';
import Field from '../Common/Field';
import Footer from '../Common/Footer';

const fields = [
  {
    name: 'name',
    elementName: 'input',
    type: 'text',
    placeholder: 'Name',
    label: 'Name'
  },
  {
    name: 'email',
    elementName: 'input',
    type: 'email',
    placeholder: 'Email Address',
    label: 'Email Address'
  },
  {
    name: 'phone',
    elementName: 'input',
    type: 'tel',
    placeholder: 'Phone Number',
    label: 'Phone Number'
  },
  {
    name: 'message',
    elementName: 'textarea',
    type: 'text',
    placeholder: 'Message',
    label: 'Message'
  }
];

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm = e => {
    e.preventDefault();
    alert('Form submitted. Thank you very much...');
  };

  render() {
    return (
      <React.Fragment>
        <Header
          heading='Contact Me'
          subheading='Have questions? I have answers.'
          image={image}
        />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              <p>
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>

              <form
                onSubmit={e => this.submitForm(e)}
                name='sentMessage'
                id='contactForm'
                noValidate>
                <div className='control-group'>
                  {fields.map((field, index) => {
                    return (
                      <Field
                        {...field}
                        key={index}
                        value={this.state[field.name]}
                        onChange={e =>
                          this.setState({ [field.name]: e.target.value })
                        }
                      />
                    );
                  })}
                </div>
                <br />
                <div id='success'></div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    id='sendMessageButton'>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <hr />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
