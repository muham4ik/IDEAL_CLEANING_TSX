import * as Yup from 'yup';

export const servicesValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters long')
      .max(50, 'Name must be less than 50 characters'),
    price: Yup.number()
      .required('Price is required')
      .min(0, 'Price must be greater than or equal to 0')
      .typeError('Price must be a number'),
  });
  