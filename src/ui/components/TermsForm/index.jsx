import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { getSelector } from '../../../redux/slices';
import i18n from '../../../i18n';
import connect from '../../../connect';
import { redirect } from '../../../utils';
import './index.css';

const TermsForm = ({ refreshUser }) => {
  const userUpdatingState = useSelector(getSelector('userUpdatingState'));
  const userId = useSelector(getSelector('userId'));
  const history = useHistory();
  const redirectFn = redirect(history);

  return (
    <div className="TermsForm">
      <Formik
        initialValues={{
          id: userId,
          acceptTerms: true,
        }}
        onSubmit={(values, { resetForm }) => {
          refreshUser(values, resetForm, redirectFn);
        }}
      >
        <Form>
          <h3 className="text-center mb-4">
            {i18n.t('termsForm.title')}
          </h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mollis nunc sed id semper risus in hendrerit. Tempor orci eu lobortis elementum nibh tellus molestie. Sed enim ut sem viverra aliquet eget sit amet. Vitae tortor condimentum lacinia quis vel eros.</p> {/* eslint-disable-line */}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mollis nunc sed id semper risus in hendrerit. Tempor orci eu lobortis elementum nibh tellus molestie. Sed enim ut sem viverra aliquet eget sit amet. Vitae tortor condimentum lacinia quis vel eros.</p> {/* eslint-disable-line */}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mollis nunc sed id semper risus in hendrerit. Tempor orci eu lobortis elementum nibh tellus molestie. Sed enim ut sem viverra aliquet eget sit amet. Vitae tortor condimentum lacinia quis vel eros.</p> {/* eslint-disable-line */}

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Mollis nunc sed id semper risus in hendrerit. Tempor orci eu lobortis elementum nibh tellus molestie. Sed enim ut sem viverra aliquet eget sit amet. Vitae tortor condimentum lacinia quis vel eros.</p> {/* eslint-disable-line */}

          <div className="TermsForm__cta position-fixed d-flex justify-content-center align-items-center p-3 w-100">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={userUpdatingState.isRequested()}
            >
              {userUpdatingState.isRequested() && (
                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
              )}

              {i18n.t('termsForm.submitButtonText')}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

TermsForm.propTypes = {
  refreshUser: PropTypes.func.isRequired,
};

export default connect()(TermsForm);
