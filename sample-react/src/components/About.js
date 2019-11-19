import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';

class About extends React.Component {

    goToHome() {
        this.props.history.push('/react');
    }

    render() {
        return (
            <div className="react-app py-3">
                <h1 className="h1-react">Hola, I'm a React About page</h1>
                <Button 
                    variant="secondary"
                    className="mt-2"
                    onClick={() => this.goToHome()}
                >
                    Home
                </Button>
            </div>
        );
    }
}

export default withRouter(About);