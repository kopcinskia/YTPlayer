import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

//Ma być głupi
const InputForms = ({ id, validationProp, onChange, label, type, placeholder, helper }) => {

  //TODO walidacja nie działa
  //tooltip

  return (
    <FormGroup
      controlId={id}
      validationState={validationProp}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />

      <FormControl.Feedback />
      <HelpBlock>{helper}</HelpBlock>
    </FormGroup>
  );
}

InputForms.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.func,
  validationProp: PropTypes.string,
  onChange: PropTypes.func,

};

export default InputForms;