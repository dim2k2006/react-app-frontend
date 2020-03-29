import i18n from './i18n';

export const required = (value) => (value || typeof value === 'number' ? undefined : i18n.t('validations.required'));
