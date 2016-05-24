var App = React.createClass({displayName: "App",
  componentDidMount: function(){
    
  },
  render: function(){
    return React.createElement("div", null, 
            React.createElement("h1", null, " Awesome Answers")
          )
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
