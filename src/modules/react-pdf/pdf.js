import React from 'react';
import {PDFDownloadLink} from '@react-pdf/renderer';
import {MyDocument} from './doc';


export const PDF = () => {
  return (
    <>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </>
  );
};