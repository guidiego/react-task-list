jest.dontMock('../src/react/components/task/TaskCard.js');

import React from "react/addons";
import TaskCard from '../src/react/components/task/TaskCard.js';

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

describe('TaskCard', function () {
  var TestUtils = React.addons.TestUtils;

  it('Componente Rendeniza', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard />);
    expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

  it('Component esta com propriedade OPEN normal - True', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard info={MOCK[0]}/>);
    expect(component.props.info.open).toBeTruthy();
  });

  it('Component esta com propriedade OPEN normal - False', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard info={MOCK[1]}/>);
    expect(component.props.info.open).toBeFalsy();
  });


  it('Se a mensagem do componente esta normal', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard info={MOCK[0]}/>);
    expect(component.props.info.message).toEqual("Minha mensagem de test 1");
  });

});
