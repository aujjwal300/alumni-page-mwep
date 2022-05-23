import React, { Component } from 'react';
import AlumniPage from './AlumniPage';
import Header from './HeaderComponent.js'

class Main extends Component {
    render() {
        return (
            <div className='page'>
                <Header />
                <AlumniPage />
                {/* <Footer/> */}
            </div>
        )
    }
}

export default Main;