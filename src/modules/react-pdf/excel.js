import React from 'react';
import Excel from 'exceljs';

import data from './data';

export const ExcelFile = () => {
  const workbook = new Excel.Workbook();

  workbook.creator = 'Me';
  workbook.lastModifiedBy = 'That guy';
  workbook.created = new Date(2020, 3, 10);
  workbook.modified = new Date();

  const worksheet = workbook.addWorksheet('Worksheet', {properties:{tabColor:{argb:'FFC0000'}, state: 'frozen', xSplit: 1, ySplit:1}});

  const createColumns = async () => {
    const rows = data.data.map((item) => item);
    worksheet.columns = Object.keys(rows[0]).map((key, index) => ({
      header: key, key: key, width: (index+2)*3
    }));
    worksheet.addRows(rows);

    worksheet.getColumn('D').numFmt = '"$"#,##0.00;[Red]\-"$"#,##0.00';

    worksheet.getRow(1).font = {
      name: 'vedana',
      family: 4,
      size: 16,
      underline: true,
      bold: true
    };
  };

  // generic download blob function -> https://medium.com/@riccardopolacci/download-file-in-javascript-from-bytea-6a0c5bb3bbdb
  function createAndDownloadBlobFile(body, filename, extension = 'xlsx') {
    const blob = new Blob([body]);
    const fileName = `${filename}.${extension}`;
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, fileName);
    } else {
      const link = document.createElement('a');
      // Browsers that support HTML5 download attribute
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  const downloadFile = async () => {
    await createColumns();
    workbook.xlsx.writeBuffer()
      .then(function(buffer) {
        createAndDownloadBlobFile(buffer, "File");
      });
  };

  return <a onClick={() => downloadFile()}>Download Excel</a>
};