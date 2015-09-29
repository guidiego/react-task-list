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

  it('Se o component esta sendo rendenizado', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard />);
    expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

  it('Se a mensagem esta correta', function () {
    let component = TestUtils.renderIntoDocument(<TaskCard info={MOCK[0]}/>);
    expect(component.props.info.message).toEqual("Minha mensagem de test 1");
  });
});
