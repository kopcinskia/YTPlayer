import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'


const InputForms = ({ id, onChange, label, type, placeholder, helper, inputRef, onBlur }) => {

  //TODO walidacja (w mamęcie pojawienia sie klasy walidacji pokazuj wiadomosc)
  //TODO dodaj komponet ValidationMessage
  //TODO dodaj tooltip

  return (
    <FormGroup
      controlId={id}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        type={type}
        inputRef={inputRef}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
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
  onChange: PropTypes.func,
  onBlur: PropTypes.func,

};

export default InputForms;