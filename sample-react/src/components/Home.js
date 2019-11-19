import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';
import Api from '../services/api_service.js';

class Home extends React.Component {
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

  goToAbout() {
    this.props.history.push('/react_about');
  }

  goToVue() {
    this.props.history.push('/');
  }

  goToParcelPage() {
    this.props.history.push('/react_parcel_page');
  }

  render() {
    return (
      <div className="react-app py-3">
        <h1 className="h1-react">Hola, I'm a React App</h1>
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
        <div className="mt-2">
          <Button 
            variant="secondary"
            className="mr-2"
            onClick={() => this.goToVue()}
          >
            Vue
          </Button>
          <Button 
            variant="secondary"
            className="mr-2"
            onClick={() => this.goToAbout()}
          >
            About
          </Button>
          <Button 
            variant="secondary"
            onClick={() => this.goToParcelPage()}
          >
            Parcel Page
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);