{/* comments */}

var Name = React.createClass({displayName: "Name",
  nameMatched: function(){
    {/* if the filterTerm is null then everything matches */}
    return this.props.filterTerm === null ||
      this.props.name.toLowerCase().match(this.prop.filterTerm);
  },
  render: function(){
    if (nameMatched()){
      styles = {display: "list-item"};
    } else {
      styles = {display: "none"};
    }
    return React.createElement("li", {style: styles}, name)
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
            var names = this.props.names.map(function(name, index){
              return React.createElement(Name, {name: name, key: index})
            });
            return React.createElement("div", null, 
              React.createElement("input", {type: "text", ref: "userInput", onChange: this.filterNames}), 
              names
            );
          }
        });

ReactDOM.render(React.createElement(FilterList, {names: ["Greg", "Jon", "Todd", "Matt", "Critian", "Frank"]}), document.getElementById('container'));
