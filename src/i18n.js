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

        welcomeForm: {
          title: 'Hello, welcome back!',
          subtitle: 'It is nice to see you again!',
          label: 'Your current balance is:',
          submitButtonText: 'continue',
        },

        intro: {
          title: 'This is the app home screen',
          gratitude: 'Thanks for reviewing this code 😽',
        },

        validations: {
          required: 'Required',
          email: 'Invalid email',
        },

        serverErrors: {
          authenticateUser: 'Something went wrong during authenticating. Please try again.',
          updateUser: 'Something went wrong during updating. Please try again.',
          terminateUser: 'Something went wrong during logging out. Please try again.',
        },
      },
    },
  },
});

export default i18next;
