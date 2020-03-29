import isEmail from 'validator/lib/isEmail';
import head from 'lodash/head';
import tail from 'lodash/tail';
import i18n from './i18n';

export const required = (value) => (value || typeof value === 'number' ? undefined : i18n.t('validations.required'));

export const email = (value) => (isEmail(value) ? undefined : i18n.t('validations.email'));

export const composedFieldValidation = (value, validations) => {
  if (!validations.length) return null;

  const validateFn = head(validations);
  const error = validateFn(value);

  if (error) return error;

  return composedFieldValidation(value, tail(validations));
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
