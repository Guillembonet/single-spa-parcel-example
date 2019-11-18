import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';
//import Api from '../services/api_service.js';

class Home extends React.Component {
  constructor() {
    super()
    //this.dbList = 'unimplemented'
  }

  componentDidMount() {
    // Api.http_get().then(result => {
    //   this.dbList = result
    // })
  }

  goToAbout() {
    this.props.history.push('/react_about');
  }

  goToVue() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div class="react-app py-3">
        <h1 class="h1-react">Hola, I'm a React App</h1>
        <div class="mt-2">
          {/* <p>{this.dbList}</p> */}
        </div>
        <div class="mt-2">
          <Button 
            variant="secondary"
            className="mr-2"
            onClick={() => this.goToVue()}
          >
            Vue
          </Button>
          <Button 
            variant="secondary"
            onClick={() => this.goToAbout()}
          >
            About
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);