import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

//Ma być głupi
const InputForms = ({ id, getValidationState, label, type, placeholder, inputRef, helper }) => {

  //TODO walidacja nie działa
  //tooltip

  return (
    <FormGroup
      controlId={id}
      validationState={getValidationState}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type}
        placeholder={placeholder}
        inputRef={inputRef}
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
  getValidationState: PropTypes.string,
};

export default InputForms;