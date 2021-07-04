import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './columns';
import { GridComponentProps } from '../../records';

export const CustomerGrid: React.FC<GridComponentProps> = ({ buttonVal }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (buttonVal) {
      const getData = async () => {
        const response = await fetch('http://localhost:8080/api/' + buttonVal);
        const data = await response.json();

        setRows(data);
      };
      getData();
    }
  }, [buttonVal]);

  return <DataGrid rows={rows} columns={columns} disableExtendRowFullWidth={true} />;
};
