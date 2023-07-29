export const authErrors = {
  unknown: {
    customErrorType: 'auth/unknown',
    formField: '',
    message: 'An error occurred. Please try again',
  },
  usernameMissing: {
    customErrorType: 'auth/username-missing',
    formField: 'username',
    message: 'Username is required',
  },
  usernameInvalid: {
    customErrorType: 'auth/username-invalid',
    formField: 'username',
    message: 'Username is invalid',
  },
  usernameDoesNotExist: {
    customErrorType: 'auth/username-does-not-exist',
    formField: 'username',
    message: 'Username does not exist',
  },
  usernameAlreadyExists: {
    customErrorType: 'auth/username-already-exists',
    formField: 'username',
    message: 'Username is already in use',
  },
  usernameTooShort: {
    customErrorType: 'auth/username-too-short',
    formField: 'username',
    message: 'Username is too short',
  },
  usernameTooLong: {
    customErrorType: 'auth/username-too-long',
    formField: 'username',
    message: 'Username is too long',
  },
  emailMissing: {
    customErrorType: 'auth/email-missing',
    formField: 'email',
    message: 'Email address is required',
  },
  emailInvalid: {
    customErrorType: 'auth/email-invalid',
    formField: 'email',
    message: 'Email address is invalid',
  },
  emailAlreadyExists: {
    customErrorType: 'auth/email-already-exists',
    formField: 'email',
    message: 'Email address is already in use',
  },
  passwordMissing: {
    customErrorType: 'auth/password-missing',
    formField: 'password',
    message: 'Password is required',
  },
  passwordInvalid: {
    customErrorType: 'auth/password-invalid',
    formField: 'password',
    message: 'Password is invalid',
  },
  passwordIncorrect: {
    customErrorType: 'auth/password-incorrect',
    formField: 'password',
    message: 'Password is incorrect',
  },
  passwordTooShort: {
    customErrorType: 'auth/password-too-short',
    formField: 'password',
    message: 'Password is too short',
  },
  passwordTooLong: {
    customErrorType: 'auth/password-too-long',
    formField: 'password',
    message: 'Password is too long',
  },
};

export const crudErrors = {};
