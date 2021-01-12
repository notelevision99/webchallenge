import React from 'react'
import Header from '../../pages/Header';
import Menu from '../../pages/Menu';

export default class Home extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = false;
    }
    render() {
        return (
            <>
            <Header/>
            <Menu/>
            <div className='content-wrapper'>
                Admin Home
            </div>
            </>
            
        )
    }
    
}
