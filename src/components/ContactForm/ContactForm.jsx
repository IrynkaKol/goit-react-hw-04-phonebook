import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { FormStyled, Label, Input, Button } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });

  const handleSubmit = (contact, { resetForm }) => {
    onSubmit(contact);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" placeholder="Name" />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" placeholder="Number" />
          <ErrorMessage component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
