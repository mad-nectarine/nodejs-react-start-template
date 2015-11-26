import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import * as ActionCreators from '../actions/IndexActions';
import DefaultLayout from '../components/layouts/DefaultLayout'
import MessageArea from '../components/views/MessageArea'

export interface IndexAppProps extends ActionCreators.IndexActionApi {
  dispatch?
  title? : string
  message?: { text:string,type:string }
}

class IndexApp extends React.Component<IndexAppProps, any> {
  render() {
    // Injected by connect() call:
    const {  
      message,
      title
    } = this.props;
    
    return (
      <DefaultLayout title={title}>
        <section>
        <h1>Change Message</h1>
        <div className="input-form">
          <p>
            <label>Message</label>
            <input type="text" ref="text" />
            </p>
          <p>
            <label>Type</label>
            <select ref="type">
              <option key="info" value="info">info</option>
              <option key="error" value="error">error</option>
              </select>
             </p>
          <div className="operations">
            <button onClick={this.handleClick.bind(this)}>Change</button>
            </div>
          </div>
        </section>
        <section>
          <h1>Message</h1>
          <MessageArea message={message}  />
        </section>
        </DefaultLayout>
    );
  }
  handleClick(e){
    let text = this.refs["text"] as React.HTMLProps;
    let type = this.refs["type"] as React.HTMLProps;
    let msg = {
      text : text.value as string,
      type : type.value as string      
    };
    this.props.changeMessage(msg);
  }
}
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps(state) {
  return {
    message: state.message
  }
}
function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(ActionCreators, dispatch)
}

// Wrap the component to inject dispatch and state into it
//export default ReactRedux.connect(select,mapDispatchToProps)(App)
export default ReactRedux.connect(mapStateToProps,mapDispatchToProps)(IndexApp)