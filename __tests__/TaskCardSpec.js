jest.dontMock('src/react/components/task/TaskCard.js');
import React from "react/addons";
import TaskCard from 'src/react/components/task/TaskCard.js';

describe('TaskCard', function () {
  var TestUtils = React.addons.TestUtils;

  it('Se o component esta sendo rendenizado', function () {
    var component = TestUtils.renderIntoDocument(<TaskCard />);
    expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });
});
