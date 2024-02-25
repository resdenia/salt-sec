export type TabVariable = 'Request' | 'Response';

export const PROJECT_TABS: TabVariable[] = ['Response', 'Request'];

export const SWAGGER_API_DICTIONARY = {
  urlParams: 'URL Parameters',
  queryParams: 'Query Parameters',
  headers: 'Headers',
  body: 'Body'
};

export const TAG_COLOR_DICTIONARY = {
  pll: 'var(--primary05)',
  masking: 'var(--turquoise)',
  type: 'var(--secondary03)',
  colorType: 'var(--secondary05)'
};

export const TABLE_NAMES = {
  PII: 'PII',
  MASKING: 'Masking',
  TYPE: 'Type',
  NAME: 'Name'
};
