var App = React.createClass({displayName: "App",
  getInitialState: function(){
    return { questions: []};
  },
  componentDidMount: function(){
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions.json",
      success: function(data){
        //console.log(data);
        console.log(this);
        this.setState({questions: data});
      },
      error: function(){
        alert('Problem loading questions')
      }
    })
  },
  render: function(){
    return React.createElement("div", null, 
            React.createElement("h1", null, " Awesome Answers"), 
             this.state.questions.map(function(question,index){
                return React.createElement(QuestionSummary, {key: index, question: question});
            })
          )
  }
});

var QuestionSummary = React.createClass({displayName: "QuestionSummary",
  render: function(){
    return React.createElement("div", null, 
            React.createElement("h2", null, this.props.question.title)
          )
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
