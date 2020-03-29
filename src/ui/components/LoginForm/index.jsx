import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import FormInput from '../FormInput/index';
import './index.css';
import { required } from '../../../utils';
import i18n from '../../../i18n';
import connect from '../../../connect';
import { getSelector } from '../../../redux/slices';

const LoginForm = ({ authenticateUser }) => {
  const userAuthenticatingState = useSelector(getSelector('userAuthenticatingState'));

  return (
    <div className="LoginForm">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          authenticateUser(values, resetForm);
        }}
      >
        <Form>
          <div className="form-group">
            <Field
              name="username"
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
                  disabled={userAuthenticatingState.isRequested()}
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
                  disabled={userAuthenticatingState.isRequested()}
                />
              )}
            </Field>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={userAuthenticatingState.isRequested()}
          >
            {userAuthenticatingState.isRequested() && (
              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
            )}

            {i18n.t('loginForm.submitButtonText')}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
};

export default connect()(LoginForm);
