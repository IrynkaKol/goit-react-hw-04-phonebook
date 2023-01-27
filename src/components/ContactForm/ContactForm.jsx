import {useState} from 'react';
import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { FormStyled, Label, Input, Button } from './ContactForm.styled';

function ContactForm () {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const hendleSubmit = (contact, { resetForm }) => {
    this.props.onSubmit(contact);
    resetForm();
  };


  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });
  return (
    <Formik
       
      validationSchema={schema}
      onSubmit={hendleSubmit}
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
}

/*
class OldContactForm extends Component {
state = {
  name: '',
  number: '',
}

  hendleSubmit = (contact, { resetForm }) => {
    this.props.onSubmit(contact);
    resetForm();
  };

  render() {
    const schema = yup.object().shape({
      name: yup.string().required(),
      number: yup.string().min(6).max(16).required(),
    });

    return (
      <Formik
         
        validationSchema={schema}
        onSubmit={this.hendleSubmit}
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
  }
}
*/
export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
