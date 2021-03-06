import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import FormInput from '../FormInput/index';
import './index.css';
import { required, redirect } from '../../../utils';
import i18n from '../../../i18n';
import connect from '../../../connect';
import { getSelector } from '../../../redux/slices';

const LoginForm = ({ authenticateUser }) => {
  const userAuthenticatingState = useSelector(getSelector('userAuthenticatingState'));
  const history = useHistory();
  const redirectFn = redirect(history);

  return (
    <div className="LoginForm">
      <h3 className="text-center mb-4">
        {i18n.t('loginForm.title')}
      </h3>

      {userAuthenticatingState.isFailed() && (
        <div className="alert alert-danger" role="alert">
          {i18n.t('loginForm.invalidCredentials')}
        </div>
      )}

      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { resetForm }) => {
          authenticateUser(values, resetForm, redirectFn);
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
