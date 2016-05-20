{/* comments */}

var Task = React.createClass({
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
      return <div>
              <input type="checkbox" ref="userInput" onClick={this.toggleStrikeOut}/>
              <span style={taskProperties}>Task {this.props.number}</span>
             </div>;
    }

});

var TaskContainer = React.createClass({
          render: function(){
            return <div>
            <Task number="1"/>
            <Task number="2"/>
            </div>;
          }
        });

ReactDOM.render(<TaskContainer/>, document.getElementById('container'));
