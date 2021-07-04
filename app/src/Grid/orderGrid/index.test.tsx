import React from 'react';
import { OrderGrid } from './index';
import { shallow } from 'enzyme';
import { DataGrid } from '@material-ui/data-grid';

describe('<OrderGrid/> Component', () => {
  test('When OrderGrid component is rendered, there is 1 Grid elements ', () => {
    const app = shallow<typeof OrderGrid>(<OrderGrid buttonVal={'orders'} />);
    expect(app.find(DataGrid)).toHaveLength(1);
  });
});
