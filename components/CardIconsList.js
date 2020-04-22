import { Image } from 'react-bootstrap';

const CardIconsList = ( props ) => {
  return (
    <ul className="CardPaymentForm-CardIcons">
      <li className={`${props.type === 'amex' && 'active'}`}>
        <Image 
          fluid
          src="/static/amex.png" 
          alt="Amex" 
        />
      </li>
      <li className={`${props.type === 'jcb' && 'active'}`}>
        <Image 
          fluid
          src="/static/jcb.png" 
          alt="JCB" 
        />
      </li>
      <li className={`${props.type === 'mastercard' && 'active'}`}>
        <Image 
          fluid
          src="/static/mastercard.png" 
          alt="MasterCard" 
        />
      </li>
      <li className={`${props.type === 'visa' && 'active'}`}>
        <Image 
          fluid
          src="/static/visa.png" 
          alt="VISA" 
        />
      </li>
    </ul>
  );
}

export default CardIconsList;