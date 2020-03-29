import isEmail from 'validator/lib/isEmail';
import head from 'lodash/head';
import tail from 'lodash/tail';
import get from 'lodash/get';
import find from 'lodash/find';
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

const entryMap = [
  {
    checker: (mail) => !!mail === false,
    process: () => '/details',
  },
  {
    checker: (mail, acceptTerms) => !!acceptTerms === false,
    process: () => '/terms',
  },
  {
    checker: (mail, acceptTerms) => !!mail && !!acceptTerms,
    process: () => '/welcome',
  },
];

export const getUserEntryPoint = (user) => {
  const mail = get(user, 'email');
  const acceptTerms = get(user, 'acceptTerms');
  const entryItem = find(entryMap, (item) => item.checker(mail, acceptTerms));
  const process = get(entryItem, 'process');
  const entryPoint = process();

  return entryPoint;
};

export const redirect = (history) => (url) => history.replace(url);
