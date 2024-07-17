import * as Yup from 'yup';
//    Service
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

//      Order validation
  export const orderValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount is required')
      .positive('Amount must be a positive number')
      .integer('Amount must be an integer'),
    client_full_name: Yup.string()
      .required('Client full name is required')
      .min(2, 'Client full name must be at least 2 characters')
      .max(50, 'Client full name must be less than 50 characters'),
    client_phone_number: Yup.string()
      .required('Client phone number is required')
      .matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Client phone number is not valid'),
      service_id: Yup.string().required('Service is required'),
    });