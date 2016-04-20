var Cell = React.createClass({
  getInitialState: function() {
    return {
      focused: false
    };
  },
  evalFormula: function(formula) {
    // =sum(0:0,0:1)
    var match = /=(sum|mul)\((\d+):(\d+)\,(\d+):(\d+)\)/.exec(formula);
    if (match) {
      return {
        sum: this.props.getCellVal(match[2], match[3]) + this.props.getCellVal(match[4], match[5]),
        mul: this.props.getCellVal(match[2], match[3]) * this.props.getCellVal(match[4], match[5])
      }[match[1]];
    }
    else {
      return formula;
    }
  },

  getValue: function() {
    var value = this.props.value;

    if (/^=/.test(value.toString()) && !this.state.focused) {
      return this.evalFormula(value);
    }
    else {
      return value;
    }
  },

  setFocus: function(){
    this.setState({focused: true});
  },

  unsetFocus: function(){
    this.setState({focused: false});
  },

  render: function() {
    return (
      <td><input value={this.getValue()}
                 onChange={this.props.onValueChange}
                 onFocus={this.setFocus}
                 onBlur={this.unsetFocus} /></td>
    );
  }
});
