import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        loginForm: {
          title: 'Authenticate',
          nameFieldLabel: 'Username/Email',
          passwordFieldLabel: 'Password',
          submitButtonText: 'Submit',
          invalidCredentials: 'Invalid username or password',
        },

        validations: {
          required: 'Required',
        },

        serverErrors: {
          authenticateUser: 'Something went wrong during authenticating. Please try again.',
        },
      },
    },
  },
});

export default i18next;
