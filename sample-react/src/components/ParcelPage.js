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
                <h1 className="h1-react mb-3">Hola, I'm a React Page</h1>
                <Parcel
                    config={() => System.import('sample-vue-parcel')}
                    wrapWith="div"
                />
                <div className="mt-3">
                    <Button 
                        variant="secondary"
                        className="mr-2"
                        onClick={() => {
                            System.import('sample-vue-parcel').then(result => {
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