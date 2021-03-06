import React from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
  }
  onSubmit(e) {
    //const url = this.refs.url.value.trim();
    const { url } = this.state;

    e.preventDefault();
    //if(url) {
      //Links.insert({url, userId: Meteor.userId() });
      Meteor.call('Links.insert', url, (err, res) => {
        if(!err){
          //this.setState({url: '', isOpen: false, error: ''});
          this.handleModalClose();
        }else{
          this.setState({error: err.reason });
        }
      });
      //this.refs.url.value='';
    //}
  }

  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }

  handleModalClose() {
    this.setState({
      url: '',
      isOpen: false,
      error: ''});
  }
  render() {
    return (
      <div>
        <button className="button" onClick= {() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view__modal"
          >
            <h1>Add Link</h1>
            {this.state.error ? <p> {this.state.error} </p> : undefined}
            <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
              <input
                type="text"
                placeholder="URL"
                ref="url"
                value={this.state.url}
                onChange={this.onChange.bind(this)}/>
              <button className="button">Add Link</button>
              <button type="button" className="button button--secondary" onClick= {this.handleModalClose.bind(this)}>Cancel</button>
            </form>

        </Modal>
      </div>
    );
  }
}
