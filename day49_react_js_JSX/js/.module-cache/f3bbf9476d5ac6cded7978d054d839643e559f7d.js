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

var List = React.createClass({displayName: "List",
  getInitialState: function(){
    return {display: "none"}
  },
  render: function(){
    var items = this.props.items.map(function(name){
      return React.createElement("li", null, name)
    });

    return React.createElement("ul", null, items)
  }
});

var FilterList = React.createClass({displayName: "FilterList",
          filterNames: function(){
            console.log(this.refs.userInput.value);
          },
          render: function(){
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              React.createElement(List, {items: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]})
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, null), document.getElementById('container'));
