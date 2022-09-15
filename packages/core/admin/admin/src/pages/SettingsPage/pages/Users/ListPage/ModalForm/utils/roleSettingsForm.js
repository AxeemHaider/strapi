const form = [
  [
    {
      intlLabel: {
        id: 'Auth.form.district.label',
        defaultMessage: 'District',
      },
      name: 'district',
      type: 'select',
      options: [
        {
          metadatas: {
            intlLabel: {
              id: 'Auth.form.district.label',
              defaultMessage: 'Lahore',
            },
          },
          key: 1000,
          value: 1000,
        },
        {
          metadatas: {
            intlLabel: {
              id: 'Auth.form.province.label',
              defaultMessage: 'Pattoki',
            },
          },
          key: 2000,
          value: 2000,
        },
      ],
      size: {
        col: 6,
        xs: 12,
      },
    },
  ],
];

export default form;
