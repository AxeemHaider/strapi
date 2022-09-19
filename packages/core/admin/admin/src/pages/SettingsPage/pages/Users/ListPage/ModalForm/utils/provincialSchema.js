import { generateDistrictOptions, generateDistrictOptionsForProvince } from './districts';

export const provinceList = [
  {
    id: 10_000,
    name: 'PUNJAB',
  },
  {
    id: 20_000,
    name: 'KPK',
  },
  {
    id: 30_000,
    name: 'SINDH',
  },
  {
    id: 40_000,
    name: 'BALOCHISTAN',
  },
  {
    id: 50_000,
    name: 'GB',
  },
  {
    id: 60_000,
    name: 'AJK',
  },
  {
    id: 70_000,
    name: 'FATA',
  },
  {
    id: 80_000,
    name: 'IDPs',
  },
];

const generateProvinceOptions = () => {
  return provinceList.map((province) => ({
    metadatas: {
      intlLabel: {
        id: 'Auth.form.province.label',
        defaultMessage: province.name,
      },
    },
    key: province.id,
    value: province.id,
  }));
};

const defaultProvincialSchema = [
  [
    {
      intlLabel: {
        id: 'Auth.form.province.label',
        defaultMessage: 'Province',
      },
      name: 'province',
      type: 'select',
      options: generateProvinceOptions(),
      size: {
        col: 6,
        xs: 12,
      },
    },
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

export const generateProvincialSchema = (user) => {
  if (!user.province) {
    return defaultProvincialSchema;
  }

  return [
    [
      {
        intlLabel: {
          id: 'Auth.form.district.label',
          defaultMessage: 'District',
        },
        name: 'district',
        type: 'select',
        options: generateDistrictOptionsForProvince(user.province),
        size: {
          col: 6,
          xs: 12,
        },
      },
    ],
  ];
};
