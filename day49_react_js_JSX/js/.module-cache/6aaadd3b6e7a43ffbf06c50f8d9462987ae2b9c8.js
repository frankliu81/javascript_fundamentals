var Hello = React.createClass({displayName: "Hello",
  render: function(){
    return React.createElement("div", null, "Hello World");
  }
});

ReactDOM.render(React.createElement(Hello, null), document.getElementById('container'));
