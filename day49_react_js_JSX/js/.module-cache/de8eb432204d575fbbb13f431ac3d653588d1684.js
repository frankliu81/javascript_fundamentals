{/* comments */}

var Name = React.createClass({displayName: "Name",
  nameMatches: function(){
    
  },
  render: function(){
    return React.createElement("li", {style: {display: this.state.display}}, name, " ", this.props.filter_term)
  }
});

var FilterList = React.createClass({displayName: "FilterList",
          getInitialState: function(){
            return {filterTerm: null};
          },
          filterNames: function(){
            //console.log(this.refs.userInput.value.toLowerCase());
            var filterTerm = this.refs.userInput.value.toLowerCase();
            this.setState({filterTerm: filterTerm});
          },
          render: function(){
            var names = this.props.names.map(function(name){
              return React.createElement(Name, {name: name})
            });
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              names
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, {names: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]}), document.getElementById('container'));
