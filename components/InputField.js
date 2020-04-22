import { Form } from 'react-bootstrap';

import { handleFocus, handleFocusOut } from '../utils';

const InputField = ( props ) => {
  const { unique, label, name, value, children, ...rest } = props;

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
      />
      {children}
    </Form.Group>
  );
}

export default InputField;