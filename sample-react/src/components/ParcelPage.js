import React from 'react';
import { withRouter } from "react-router";
import { Button } from 'react-bootstrap';
import Parcel from 'single-spa-react/parcel'

class ParcelPage extends React.Component {

    goToHome() {
        this.props.history.push('/react');
    }

    render() {
        return (
            <div className="react-app py-3">
                <Parcel
                    config={() => System.import('http://localhost:8081/js/app.js')}
                    wrapWith="div"
                />
                <div className="mt-2">
                    <Button 
                        variant="secondary"
                        className="mr-2"
                        onClick={() => {
                            System.import('http://localhost:8081/js/app.js').then(result => {
                                console.log(result)
                            })
                        }}
                    >
                        Log module
                    </Button>
                    <Button 
                        variant="secondary"
                        onClick={() => this.goToHome()}
                    >
                        Home
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(ParcelPage);