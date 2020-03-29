import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import connect from '../../../connect';
import i18n from '../../../i18n';
import { required, email, composedFieldValidation } from '../../../utils';
import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';
import './index.css';
import { getSelector } from '../../../redux/slices';

const validateEmail = (value) => composedFieldValidation(value, [required, email]);

const DetailsForm = ({ updateUser }) => {
  const userUpdatingState = useSelector(getSelector('userUpdatingState'));
  const history = useHistory();
  const redirect = () => history.replace('/terms');

  return (
    <div className="DetailsForm">
      <h3 className="text-center mb-4">
        {i18n.t('detailsForm.title')}
      </h3>

      <Formik
        initialValues={{ email: '', phone: '', acceptMarketing: false }}
        onSubmit={(values, { resetForm }) => {
          updateUser(values, resetForm, redirect);
        }}
      >
        <Form>
          <div className="form-group">
            <Field
              name="email"
              validate={validateEmail}
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
                  label={i18n.t('detailsForm.emailFieldLabel')}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  touched={touched}
                  error={error}
                  disabled={userUpdatingState.isRequested()}
                />
              )}
            </Field>
          </div>

          <div className="form-group">
            <Field
              name="phone"
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
                  type="phone"
                  label={i18n.t('detailsForm.phoneFieldLabel')}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  touched={touched}
                  error={error}
                  disabled={userUpdatingState.isRequested()}
                />
              )}
            </Field>
          </div>

          <div className="form-group">
            <Field
              name="acceptMarketing"
              type="checkbox"
            >
              {({
                field: {
                  name,
                  checked,
                  onChange,
                  onBlur,
                },
                meta: { touched, error },
              }) => (
                <FormCheckbox
                  id={uuidv4()}
                  label={i18n.t('detailsForm.subscriptionFieldLabel')}
                  name={name}
                  checked={checked}
                  onChange={onChange}
                  onBlur={onBlur}
                  touched={touched}
                  error={error}
                  disabled={userUpdatingState.isRequested()}
                />
              )}
            </Field>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={userUpdatingState.isRequested()}
          >
            {userUpdatingState.isRequested() && (
              <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
            )}

            {i18n.t('detailsForm.submitButtonText')}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

DetailsForm.propTypes = {
  updateUser: PropTypes.func.isRequired,
};

export default connect()(DetailsForm);
