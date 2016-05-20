{/* comments */}

var Name = React.createClass({
  nameMatched: function(){
    {/* if the filterTerm is null then everything matches */}
    //console.log(this.props.filterTerm);
    return this.props.filterTerm === null ||
      this.props.name.toLowerCase().match(this.props.filterTerm);
  },
  render: function(){
    if (this.nameMatched()){
      styles = {display: "list-item"};
    } else {
      styles = {display: "none"};
    }
    return <li style={styles}>{this.props.name}</li>
  }
});

var FilterList = React.createClass({
          getInitialState: function(){
            return {filterTerm: null};
          },
          filterNames: function(){
            //console.log(this.refs.userInput.value.toLowerCase());
            var filterTerm = this.refs.userInput.value.toLowerCase();
            console.log(filterTerm);
            this.setState({filterTerm: filterTerm});
          },
          render: function(){
            var names = this.props.names.map(function(name, index){
              return <Name name={name} key={index} filterTerm={this.state.filterTerm}/>
            }.bind(this));
            return <div>
              <input type="text" ref="userInput" onChange={this.filterNames} />
              <ul>
                {names}
              </ul>
            </div>;
          }
        });

ReactDOM.render(<FilterList names={["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]}/>, document.getElementById('container'));
