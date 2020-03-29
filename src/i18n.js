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

        detailsForm: {
          title: 'Share your details',
          emailFieldLabel: 'Email',
          phoneFieldLabel: 'Phone',
          subscriptionFieldLabel: 'I do not want to receive marketing material',
          submitButtonText: 'Continue',
        },

        termsForm: {
          title: 'Terms and Conditions',
          submitButtonText: 'Accept',
        },

        validations: {
          required: 'Required',
          email: 'Invalid email',
        },

        serverErrors: {
          authenticateUser: 'Something went wrong during authenticating. Please try again.',
          updateUser: 'Something went wrong during updating. Please try again.',
        },
      },
    },
  },
});

export default i18next;
