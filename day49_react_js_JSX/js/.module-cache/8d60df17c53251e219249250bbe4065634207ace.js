// first solution
// var NameList = React.createClass({
//   getInitialState: function(){
//     return {filteredNames: this.props.people};
//   },
//   filterNames: function() {
//     var filterTerm = this.refs.userInput.value.toLowerCase();
//     var filteredNames = this.props.people.filter(function(name) {
//       return name.toLowerCase().match(filterTerm);
//     });
//     this.setState({filteredNames: filteredNames});
//   },
//   render: function(){
//     var people = this.state.people.map(function(name, index){
//       return <Name name={name} key={index}/>
//     });
//   }
// });
//
// var Name = React.createClass({
//     render: function(){
//       return <li>{this.props.name}</li>
//     }
// });
//
// ReactDOM.render(<Namelist people={["Greg", "Jon", "Jacob", "Todd"]})/>,
