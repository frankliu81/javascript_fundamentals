{/* comments */}

var List = React.createClass({displayName: "List",
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
            console.log(this.refs.userInput.value.toLowerCase());
            var filterTerm = this.refs.userInput.value.toLowerCase();
            return filterTerm;
          },
          render: function(){
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              React.createElement(List, {items: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]})
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, null), document.getElementById('container'));
