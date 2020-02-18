import React from 'react';

class Field extends React.Component {
  render() {
    return (
      <div className='form-group floating-label-form-group controls'>
        <label>{this.props.label }</label>
        {this.props.elementName === 'input' ? (
          <input
            type={this.props.type}
            className='form-control'
            placeholder={this.props.placeholder}
            id={this.props.name}
            required
            data-validation-required-message='Please enter your name.'
            value={this.props.value}
            onChange={e => this.props.onChange(e)}
          />
        ) : (
          <textarea
            rows='5'
            className='form-control'
            placeholder={this.props.placeholder}
            id={this.props.name}
            required
            data-validation-required-message='Please enter a message.'
            value={this.props.value}
            onChange={e => this.props.onChange(e)}
          />
        )}
        <p className='help-block text-danger'></p>
      </div>
    );
  }
}

export default Field;
