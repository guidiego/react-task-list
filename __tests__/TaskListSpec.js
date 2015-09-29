jest.dontMock('../src/react/components/task/TaskList.js');

import React from "react/addons";
import TaskList from '../src/react/components/task/TaskList.js';

const MOCK = [
  {
    id      : 0,
    date    : new Date(),
    open    : true,
    message : "Minha mensagem de test 1"
  },
  {
    id      : 0,
    date    : new Date(),
    open    : false,
    message : "Minha mensagem de test 2"
  }
];

describe('TaskList', function () {
  var TestUtils = React.addons.TestUtils;

  it("Componente Rendeniza", function () {
    let component = TestUtils.renderIntoDocument(<TaskList />);
    expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

  it("Componente esta com todos os infos corretos", function () {
    let component = TestUtils.renderIntoDocument(<TaskList list={MOCK}/>);
    expect(component.props.list).toEqual(MOCK);
  })
});
