import React from 'react';
import { useHistory } from 'react-router-dom';
import i18n from '../../../i18n';
import connect from '../../../connect';
import './index.css';

const WelcomeForm = () => {
  const history = useHistory();
  const redirect = () => history.replace('/');

  return (
    <div className="WelcomeForm">
      <div className="WelcomeForm__header mb-4">
        <h3 className="text-center mb-3">
          {i18n.t('welcomeForm.title')}
        </h3>

        <p className="text-center">{i18n.t('welcomeForm.subtitle')}</p>
      </div>

      <div className="WelcomeForm__content text-center">
        <p>{i18n.t('welcomeForm.label')}</p>

        <p><strong>100 Kr</strong></p>
      </div>

      <div className="WelcomeForm__cta position-fixed d-flex justify-content-center align-items-center p-3 w-100">
        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={redirect}
        >
          {i18n.t('welcomeForm.submitButtonText')}
        </button>
      </div>
    </div>
  );
};

export default connect()(WelcomeForm);
