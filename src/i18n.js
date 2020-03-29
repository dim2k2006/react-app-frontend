import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        ADD_CHANNEL: 'Something went wrong during creating the channel. Please try again.',
        EDIT_CHANNEL: 'Something went wrong during editing the channel. Please try again.',
        REMOVE_CHANNEL: 'Something went wrong during removing the channel. Please try again.',
        SUBMIT_MESSAGE: 'Something went wrong during sending the message. Please try again.',

        loginForm: {
          nameFieldLabel: 'Username/Email',
          passwordFieldLabel: 'Password',
          submitButtonText: 'Submit',
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
