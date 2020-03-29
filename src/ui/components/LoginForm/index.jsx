import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import FormInput from '../FormInput/index';
import './index.css';
import { required } from '../../../utils';
import i18n from '../../../i18n';

const LoginForm = () => {


  return (
    <div className="LoginForm">
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={(values) => {
          console.log('values:', values);
        }}
      >
        <Form>
          <div className="form-group">
            <Field
              name="name"
              validate={required}
            >
              {({
                field: {
                  name,
                  value,
                  onChange,
                  onBlur,
                },
                meta: { touched, error },
              }) => (
                <FormInput
                  id={uuidv4()}
                  type="text"
                  label={i18n.t('loginForm.nameFieldLabel')}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  touched={touched}
                  error={error}
                />
              )}
            </Field>
          </div>

          <div className="form-group">
            <Field
              name="password"
              validate={required}
            >
              {({
                field: {
                  name,
                  value,
                  onChange,
                  onBlur,
                },
                meta: { touched, error },
              }) => (
                <FormInput
                  id={uuidv4()}
                  type="password"
                  label={i18n.t('loginForm.passwordFieldLabel')}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  touched={touched}
                  error={error}
                />
              )}
            </Field>
          </div>

          <button type="submit" className="btn btn-primary">{i18n.t('loginForm.submitButtonText')}</button>
        </Form>
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {

};

export default LoginForm;
