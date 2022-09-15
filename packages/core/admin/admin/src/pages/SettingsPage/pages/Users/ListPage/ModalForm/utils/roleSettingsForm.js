import { generateDistrictOptions } from './districts';

const form = [
  [
    {
      intlLabel: {
        id: 'Auth.form.district.label',
        defaultMessage: 'District',
      },
      name: 'district',
      type: 'select',
      options: generateDistrictOptions(),
      size: {
        col: 6,
        xs: 12,
      },
    },
  ],
];

export default form;
