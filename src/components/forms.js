import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'


class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  //TODO popraw walidację

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <FormGroup
        controlId={ this.props.id }
        validationState={this.getValidationState()}
      >
        <ControlLabel>{ this.props.label }</ControlLabel>
        <FormControl
          inputRef={ this.props.inputRef }
          type={ this.props.type }
          value={this.state.value}
          placeholder={ this.props.placeholder }
          onChange={this.handleChange}
        />
        <FormControl.Feedback />
        <HelpBlock>{ this.props.helper }</HelpBlock>
      </FormGroup>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helper: PropTypes.string,
  type: PropTypes.string,
  inputRef: PropTypes.func,
};

export default Form;