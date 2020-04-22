import { Fragment } from 'react';
import Head from 'next/head';

const LayoutWrapper = ( props ) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>Credit Card Payment Form | Sonjoy Datta</title>
      </Head>
      { props.children }
    </Fragment>
  );
}

export default LayoutWrapper;