import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { auth } from "@service";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.css"
const Index = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password is too short')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response:unknown = await auth.sign_in(values);
      if (response.status === 200) {
        console.log('Login successful');
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/main")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
    console.log(values);
  };

  
  return (
    <div className="container">
     <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">LOGIN</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <div className="form-field">
                <Field
                  as={TextField}
                  fullWidth
                  type='email'
                  name='email'
                  label="Email"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" component="div" className="error-message" />}
                />
              </div>
              <div className="form-field">
                <Field
                  as={TextField}
                  fullWidth
                  type='password'
                  name='password'
                  label="Password"
                  variant="outlined"
                  helperText={<ErrorMessage name="password" component="div" className="error-message" />}
                />
              </div>
              <Button
                variant="contained"
                type='submit'
                className='login-button'
                endIcon={<SendIcon />}
                disabled={isSubmitting}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
  );
};

export default Index;