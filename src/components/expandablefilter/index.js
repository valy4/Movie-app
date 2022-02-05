import React from "react";


import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false,
    };
  }
  render() {
    const { items, title } = this.props;
    const itemList = items.map((i) => <Checkbox checkList={i.name} />);

    return (
      <details>
        <summary>
          <strong>Select {title}</strong>
        </summary>
        {itemList}
      </details>
    );
  }

  // You need to create your own checkbox component with a custom checkmark
}
