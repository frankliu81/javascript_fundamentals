{/* comments */}

var Name = React.createClass({displayName: "Name",
  nameMatched: function(){
    {/* if the filterTerm is null then everything matches */}
    console.log(this.props.filterTerm);
    return this.props.filterTerm === null ||
      this.props.name.toLowerCase().match(this.props.filterTerm);
  },
  render: function(){
    if (this.nameMatched()){
      styles = {display: "list-item"};
    } else {
      styles = {display: "none"};
    }
    return React.createElement("li", {style: styles}, this.props.name)
  }
});

var FilterList = React.createClass({displayName: "FilterList",
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
              return React.createElement(Name, {name: name, key: index, filterTerm: this.state.filterTerm})
            });
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              React.createElement("ul", null, 
                names
              )
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, {names: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]}), document.getElementById('container'));
