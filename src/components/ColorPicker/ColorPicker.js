import React, { Component } from 'react';
import s from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  addOptionClassName = index => {
    const optionClasses = [s.option];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push(s.option__active);
    }
    return optionClasses.join(' ');
  };
  render() {
    const {activeOptionIdx} = this.state;
    const {options} = this.props;
    const { label } = options[activeOptionIdx];
    const { color } = options[activeOptionIdx];
    console.log({ color });
    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p style={{ color: color }}>You choose: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const addOptionClassNames = this.addOptionClassName(index);
            return (
              <button
                key={label}
                className={addOptionClassNames}
                onClick={() => this.setActiveIdx(index)}
                style={{
                  backgroundColor: color,
                  border:
                    index === activeOptionIdx
                      ? '3px solid silver'
                      : 'none',
                }}
              >
                {' '}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ColorPicker;
