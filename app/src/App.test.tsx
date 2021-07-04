import React from 'react';
import App, { StyledGridDiv, StyledButtonDiv, FlexBoxContainer } from './App';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

describe('<App/> Component', () => {
  test('When App component is rendered, there is 1 StyledButtonDiv elements ', () => {
    const app = shallow<typeof App>(<App />);

    expect(app.find(StyledButtonDiv)).toHaveLength(1);
  });
  test('When App component is rendered, there is 1 StyledGridDiv elements ', () => {
    const app = shallow<typeof App>(<App />);

    expect(app.find(StyledGridDiv)).toHaveLength(1);
  });
  test('When App component is rendered, there is 1 br element ', () => {
    const app = shallow<typeof App>(<App />);
    expect(app.find('br')).toHaveLength(1);
  });
  test('When App component is rendered, there is 2 button element ', () => {
    const app = shallow<typeof App>(<App />);
    expect(app.find(Button)).toHaveLength(2);
  });
});
