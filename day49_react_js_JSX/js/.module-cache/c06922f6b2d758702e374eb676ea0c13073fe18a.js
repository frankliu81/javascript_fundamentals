var Hello = React.createClass({displayName: "Hello",
  render: function(){
    return React.createElement("div", null, "Hello World");
  }
});

var Box = React.createClass({displayName: "Box",
  getInitialState: function() {
    return {lastClicked: "N/A"};
  },
  setLastClicked: function(color) {
    this.setState({lastClicked: color})
  },
  printToConsole: function(){
    console.log(this.refs.userInput.value);
  },
  render: function(){
    var circles = this.props.circles.map(function(color, index){
        return React.createElement(Circle, {color: color, 
                        notifyParent: this.setLastClicked, 
                        key: index});
                        }.bind(this));

    return React.createElement("div", {className: "box red"}, 
      React.createElement("input", {type: "text", ref: "userInput", onChange: this.printToConsole}), 
      circles, 
      "You last click the ", this.state.lastClicked, " circle"
      );
  }
});


var Circle = React.createClass({displayName: "Circle",
  notifyParentContainer: function(){
    this.props.notifyParent(this.props.color);
  },
  render: function(){
    return React.createElement("div", {className: "circle", 
        onClick: this.notifyParentContainer, 
        style: {backgroundColor: this.props.color}})
  }
});

{/* comments */}

var Task = React.createClass({displayName: "Task",
    strikeOut: function(){
      console.log(this.refs.taskItem);
    },
    render: function(){
      return React.createElement("div", null, 
        React.createElement("input", {type: "checkbox", ref: "userInput", onClick: this.strikeOut}), 
        React.createElement("p", {ref: "taskItem"}, "Task ", this.props.number)
        );
    }

});

var TaskContainer = React.createClass({displayName: "TaskContainer",
          render: function(){
            return React.createElement("div", null, 
            React.createElement(Task, {number: "1"}), 
            React.createElement(Task, {number: "2"})
            );
          }
        });

ReactDOM.render(React.createElement(TaskContainer, null), document.getElementById('container'));
