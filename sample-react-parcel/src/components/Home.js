import React from 'react';
import { Button } from 'react-bootstrap';
import Api from '../services/api_service.js';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {dbList: []}
    this.http_post = this.http_post.bind(this);
    this.http_delete = this.http_delete.bind(this);
  }

  componentDidMount() {
    Api.http_get().then(result => {
      this.setState({dbList: result});
    })
  }

  http_post() {
    Api.http_post().then(result => {
      this.setState(state => {
        const dbList = [...state.dbList, result.data];
        return {
          dbList
        };
      });
    })
  }

  http_delete() {
    Api.http_delete().then(result => {
      this.setState(state => {
        const dbList = state.dbList;
        dbList.pop()
        return {
          dbList
        };
      });
    })
  }

  render() {
    return (
      <div className="react-app-parcel p-3">
        <h1 className="h1-react">Hola, I'm a React Parcel</h1>
        <div className="mt-2">
          <p>[{this.state.dbList.toString()}]</p>
        </div>
        <div className="mt-2">
          <Button 
            variant="primary"
            className="mr-2"
            onClick={this.http_post}
          >
            Post
          </Button>
          <Button 
            variant="danger"
            onClick={this.http_delete}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}