import { Form } from 'react-bootstrap';

import { handleFocus, handleFocusOut } from '../utils';

const InputField = ( props ) => {
  const { unique, label, name, value, error, ...rest } = props;

  return (
    <Form.Group controlId={unique}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        { ...rest }
        type="text" 
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleFocusOut}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default InputField;