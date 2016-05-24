var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return { questions: [] };
  },
  componentDidMount: function() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions.json",
      success: function(data) {
        // for active record serialized json API, the questions would be embedded inside data
        this.setState({ questions: data.questions });
      }.bind(this),
      error: function() {
        alert('Problem loading questions');
      }
    })
  },
  questionsDisplay: function() {
    if (this.state.questions.length === 0) {
      return "Loading....";
    } else {
      return this.state.questions.map(function(question, index) {
        return React.createElement(QuestionSummary, {key: index, question: question});
      });
    }
  },
  render: function() {
    return React.createElement("div", null, 
              React.createElement("h1", null, "Awesome Answers React.js Client"), 
               this.questionsDisplay() 
            );
  }
});

var QuestionSummary = React.createClass({displayName: "QuestionSummary",
  getInitialState: function() {
    return { questionDetails: null,
    insightErrors: [] };
  },
  getDetails: function() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions/" + this.props.question.id + ".json",
      success: function(data) {
        console.log("getDetails)")
        console.log(data)
        this.setState({ questionDetails: data.question, insights: data.insights });
      }.bind(this),
      error: function() {
        alert("Can't load question details");
      }
    });
  },
  hideDetails: function() {
    this.setState({ questionDetails: null, insights: [] });
  },
  sendInsight: function(){
    $.ajax({
      method: "POST",
      url: "http://localhost:3000/questions/" + this.props.question.id + "/insights",
      data: {insight: {body: this.refs.newInsight.value} },
      success: function(data) {
        if (data.success) {
          this.setState( {insights: [data.insight].concat(this.state.insights)} )
        } else {
          //console.log(data.errors)
          this.setState({insightErrors: data.errors});
        }
      }
    }).bind(this)

  },
  questionDisplay: function() {
    if (this.state.questionDetails) {
      return React.createElement("div", null, 
                React.createElement("h2", null, 
                  React.createElement("a", {href: "javascript:void(0);", onClick: this.hideDetails}, 
                     this.props.question.title
                  )
                ), 
                React.createElement("p", null,  this.state.questionDetails.body), 
                React.createElement("p", null,  this.state.questionDetails.created_at), 
                React.createElement("h3", null, "Insights"), 
                this.state.insightErrors.map(function(error, index){
                  return React.createElement("p", {key: index, style: {color: "red"}}, error)
                }), 
                React.createElement("input", {type: "text", ref: "newInsight"}), 
                React.createElement("input", {type: "submit", onClick: this.sendInsight}), 
                this.state.insights.map(function(insight,index){
                  return React.createElement("p", {key: index}, insight.body)
                })
              )
    } else {
      return React.createElement("h2", null, 
               React.createElement("a", {href: "javascript:void(0);", onClick: this.getDetails}, 
                 this.props.question.title
               )
             );
    }
  },
  render: function() {
    return React.createElement("div", null, 
               this.questionDisplay(), 
              React.createElement("hr", null)
            );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));
