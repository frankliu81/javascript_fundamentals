{/* comments */}

var Name = React.createClass({displayName: "Name",
  getInitialState: function(){
    return {display: "list-item"}
  },
  show: function(){
    this.setState({display: "list-item"});
  },
  hide: function(){
    this.setState({display: "none"});
  },
  render: function(){
    var items = this.props.items.map(function(name){
      return React.createElement("li", {style: {display: this.state.display}}, name, " ", this.props.filter_term)
    });

    return React.createElement("ul", null, items)
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
              return React.createElement(Name, null)
            });
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              names
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, {names: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]}), document.getElementById('container'));
