var List = React.createClass({
  render: function(){
    var tasks = this.props.tasks.map(function(name, index){
        return <Task name={name}
        key={index} />
    });
    return <div>
        {tasks}
      </div>
  }
});

var Task = React.createClass({
  getInitialState: function(){
    return {textDecoration: 'none'};
  },
  crossOut: function(){
    if (this.state.textDecoration === 'line-through') {
      this.setState({textDecoration: 'none'});
    } else {
      this.setState({textDecoration: "line-through"});
    }
  },
  render: function(){
    return <div style={{textDecoration: this.state.textDecoration}}>
        <input type="checkbox" onChange={this.crossOut}></input>
        {this.props.name}
      </div>
  }
});

ReactDOM.render(<List tasks={["Task 1", "Task 2", "Task 3"]} />,
                document.getElementById('container'));
