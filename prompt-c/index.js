import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submitted: false,
      invalid: false
    }
  }

  //Change state of input which stores the entered text
  inputHandler(inputText) {
    let text = inputText.target.value;
    let stringifiedText = JSON.stringify(text).slice(1,text.length + 1).trim();

    this.setState({
      input: stringifiedText,
      invalid: false 
    });
  }

  //Change state of form invalidity prop "invalid" to true if form submittal contains empty string
  //If input had text upon form submittal, change state of submitted prop to true and input prop to inputted text
  //This renders the view displaying the input text
  //This submitHandler is also used for returning to the form in which case it toggles state of submitted prop to false and input prop to empty string
  submitHandler(e) {
    e.preventDefault();
    let inputText = this.state.input;
    if(inputText.trim().length === 0) {
      this.setState({
        invalid: true
      });
    } else {
      this.setState({
        submitted: !this.state.submitted,
        input: !this.state.submitted ? inputText : ''
      });
    }
  }
  
  //Form validation: if no text entered user receives message to enter text
  //If text entered, text displayed
  //Some accessiblity attributes and values added
  render() {
    if(!this.state.submitted) { 
      return (<section className="pt6">
                <form className="center mw5" role="form">
                  <label htmlFor="text-input" className="f3"><div className={!this.state.submitted && !this.state.invalid ? 'vh' : ''} aria-hidden={!this.state.submitted && !this.state.invalid ? 'true' : 'false'}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><circle fill="#d61d00" cx="9" cy="9" r="9"/><path fill="#fff" d="M9.7 11.3H8.3L6.9 3.6l.7-.7h2.8l.7.8-1.4 7.6zM9 15.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4s1.4.6 1.4 1.4c0 .8-.6 1.4-1.4 1.4z"/></svg><span className="red-90 pl1">Required field</span></div>Enter Display Text</label>  
                  <input id="text-input" className={!this.state.submitted && !this.state.invalid ? 'mv2 f3 pt2 pb2 pr2 pl2 w-100 b--gray' : 'mv2 f3 pt2 pb2 pr2 pl2 w-100 b--red-90'} tabIndex="0" type="text" aria-required="true" aria-invalid={this.state.submitted && this.state.invalid ? 'true' : 'false'} title="Enter text that you want to display" onChange={this.inputHandler.bind(this)} autoFocus/>
                  <input className="f3 mv2 pt2 pb2 pl4 pr4 ba bg-blue white b--near-black w-100 db" role="textbox" aria-multiline="true" type="submit" value="Submit" role="button" title="Continue here after adding text to the required input field above" onClick={this.submitHandler.bind(this)}/>
                </form>
              </section>); 
    } else {
      return (<section className="center tc pv6"> 
                <h1 className="mega">{this.state.input}</h1>
                <button className="f3 mv5 pv3 ph4 ba bg-blue white b--near-black" role="button" onClick={this.submitHandler.bind(this)} autoFocus>Return to form</button>
                  <a className="mw5 db mlp" href="https://www.youtube.com/watch?v=CdqoNKCCt7A&feature=youtu.be&t=53s" target="_blank"><img className="h3" src="images/p.jpg"/></a>
              </section>);
    }

  }
}

ReactDOM.render(<Form />, document.getElementById('main'));
