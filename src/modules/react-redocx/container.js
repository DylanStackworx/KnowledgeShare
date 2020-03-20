import React from 'react';
import { render, Document, Text } from 'redocx'
// import {MyDocument} from './doc';


export const DOCX = () => {
  return (
    <>
      <Document>
        <Text>Hello World</Text>
        {/*TODO: "SSL" this.*/}
      </Document>
    </>
  );
};