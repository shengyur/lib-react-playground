import React from "react";
import { shallow } from "enzyme";
import Link from "./link";
import renderer from "react-test-renderer";

const props = {
  children: "click this link!",
  page: "https://www.baidu.com"
};

describe("<Link>", () => {
  it("renders correctly", () => {
    const component = renderer.create(<Link {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("hover with correct color", () => {
    const wrapper = shallow(<Link {...props} />);
    expect(wrapper.state("class")).toBe("normal");
    wrapper.simulate("mouseenter");
    expect(wrapper.state("class")).toBe("hovered");
  });
});
