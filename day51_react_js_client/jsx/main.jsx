var App = React.createClass({
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
        return <QuestionSummary key={index} question={question} />;
      });
    }
  },
  render: function() {
    return <div>
              <h1>Awesome Answers React.js Client</h1>
              { this.questionsDisplay() }
            </div>;
  }
});

var QuestionSummary = React.createClass({
  getInitialState: function() {
    return { questionDetails: null,
    insightErrors: [] };
  },
  getDetails: function() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/questions/" + this.props.question.id + ".json",
      success: function(data) {
        //console.log("getDetails")
        //console.log(data)
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
          this.refs.newInsight.value = "";
          this.setState( {insights: [data.insight].concat(this.state.insights)} )
        } else {
          //console.log(data.errors)
          this.setState({insightErrors: data.errors});
        }
      }.bind(this),
      error: function() {
        alert("Can't send insight");
      }
    })

  },
  questionDisplay: function() {
    if (this.state.questionDetails) {
      return <div>
                <h2>
                  <a href="javascript:void(0);" onClick={this.hideDetails}>
                    { this.props.question.title }
                  </a>
                </h2>
                <p>{ this.state.questionDetails.body }</p>
                <p>{ this.state.questionDetails.created_at }</p>
                <h3>Insights</h3>
                {this.state.insightErrors.map(function(error, index){
                  return <p key={index} style={{color: "red"}}>{error}</p>
                })}
                <input type="text" ref="newInsight"/>
                <input type="submit" onClick={this.sendInsight}/>
                {this.state.insights.map(function(insight,index){
                  return <p key={index}>{insight.body}</p>
                })}
              </div>
    } else {
      return <h2>
               <a href="javascript:void(0);" onClick={this.getDetails}>
                 {this.props.question.title}
               </a>
             </h2>;
    }
  },
  render: function() {
    return <div>
              { this.questionDisplay() }
              <hr />
            </div>;
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
