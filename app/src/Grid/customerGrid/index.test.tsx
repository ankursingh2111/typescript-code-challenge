import React from 'react';
import { CustomerGrid } from './index';
import { shallow } from 'enzyme';
import { DataGrid } from '@material-ui/data-grid';

describe('<CustomerGrid/> Component', () => {
  test('When Customer Grid component is rendered, there is 1 Grid elements ', () => {
    const app = shallow<typeof CustomerGrid>(<CustomerGrid buttonVal={'customers'} />);
    expect(app.find(DataGrid)).toHaveLength(1);
  });
});
