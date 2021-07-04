import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './columns';
import { OrderRowData } from '../../records';
import { modifyData } from './reducer';

export const OrderGrid = ({ buttonVal }: { buttonVal: string }) => {
  const [rows, setRows] = useState<OrderRowData[]>(new Array<OrderRowData>());
  useEffect(() => {
    if (buttonVal) {
      const getData = async () => {
        const response = await fetch('http://localhost:8080/api/' + buttonVal);
        const data = await response.json();
        const rowData: OrderRowData[] = modifyData(data);
        setRows(rowData);
      };
      getData();
    }
  }, [buttonVal]);

  return <DataGrid rows={rows} columns={columns} disableExtendRowFullWidth={true} />;
};
