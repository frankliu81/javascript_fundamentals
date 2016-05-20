{/* comments */}

var Task = React.createClass({displayName: "Task",
    getInitialState: function(){
      return {taskStyle: "none"}
    },
    toggleStrikeOut: function(){
      //console.log(this.refs.taskItem);
      if (this.state.taskStyle === "none")
      {
        this.setState({taskStyle: "line-through"});
      }
      else if (this.state.taskStyle === "line-through")
      {
        this.setState({taskStyle: "none"});
      }
    },
    render: function(){
      var taskProperties = {textDecoration: this.state.taskStyle};
      return React.createElement("div", null, 
              React.createElement("input", {type: "checkbox", ref: "userInput", onClick: this.toggleStrikeOut}), 
              React.createElement("span", {style: taskProperties}, "Task ", this.props.number)
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
