import React from 'react';
import { Formik } from 'formik';
import _ from 'lodash';
import encode from 'form-urlencoded';

const fields = {
  name: {
    label: 'Name*'
  },
  email: {
    type: 'email',
    label: 'Email*'
  },
  company: {
    label: 'Company'
  },
  phone: {
    type: 'tel',
    label: 'Phone Number*'
  },
  description: {
    label: 'Brief description of your project/needs*',
    type: 'textarea'
  }
};

class Component extends React.Component {
  state = {
    submitted: false,
    formSubmitError: undefined
  };

  getUrl = () => {
    return '/';
  };

  onSubmit = async values => {
    const url = this.getUrl();
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values })
      });
      if (!res.ok) {
        return this.setState({ formSubmitError: res.statusText });
      }
      return this.setState({ submitted: true });
    } catch (err) {
      return this.setState({ formSubmitError: (err && err.message) || err });
    }
  };

  validate = values => {
    const obj = {};
    Object.keys(fields).forEach(field => {
      if (!values[field]) {
        if (field === 'company') {
          return true;
        }
        obj[field] = 'required';
      }
      return true;
    });
    return obj;
  };

  renderInput({
    type = 'text',
    name,
    handleChange,
    handleBlur,
    values,
    errors = {},
    label,
    touched
  }) {
    const props = {
      type,
      name,
      id: name,
      onChange: handleChange,
      onBlur: handleBlur,
      value: values[name]
      // placeholder: `${_.capitalize(label || name)}`
    };
    return (
      <div key={`input-${name}`} className="field">
        <label className="label" htmlFor={name}>
          {_.capitalize(label || name)}
        </label>
        {type === 'textarea' ? <textarea {...props} /> : <input {...props} />}
        {touched[name] &&
          errors[name] && (
            <div className="error">
              {_.capitalize(name)} is {errors[name]}
            </div>
          )}
        <style jsx>
          {`
            .field {
              padding: 0 0 1rem 0;
            }
            .label {
              display: block;
              cursor: pointer;
            }
            .error {
              opacity: 0.4;
              font-style: italic;
            }
          `}
        </style>
      </div>
    );
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: 'center' }}>
          Interested in working with Ed? Please fill out this short contact form
          or send an email to{' '}
          <a href="mailto:mysafetydirector@gmail.com">
            mysafetydirector@gmail.com
          </a>
        </p>
        <Formik onSubmit={this.onSubmit} validate={this.validate}>
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            errors,
            touched
          }) => {
            const disabled = Object.values(errors).length;
            return (
              <form
                onSubmit={handleSubmit}
                className="form"
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {Object.keys(fields).map(k => {
                  const field = fields[k];
                  return this.renderInput(
                    Object.assign(
                      {
                        handleChange,
                        name: k,
                        handleBlur,
                        values,
                        errors,
                        touched
                      },
                      field
                    )
                  );
                })}
                <div className="btnContainer">
                  {this.state.formSubmitError && (
                    <div style={{ margin: '0 0 1rem 0' }}>
                      Oops! Something went wrong trying to submit this form.
                      <br />Contact mysafetyleader@gmail.com for help.<br />
                      Error: {this.state.formSubmitError}
                    </div>
                  )}
                  {disabled && (
                    <p>Please fill out the required fields before submitting</p>
                  )}
                  <button type="submit" disabled={disabled} className="submit">
                    {this.state.submitted ? 'Submitted. Thanks!' : 'Submit'}
                  </button>
                </div>
                <style jsx>
                  {`
                    .submit {
                      width: 100%;
                      background: #77dab1;
                      color: white;
                      border: 0;
                    }
                    .submit:disabled {
                      opacity: 0.3;
                    }
                  `}
                </style>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Component;
