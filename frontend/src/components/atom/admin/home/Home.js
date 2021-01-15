import React from 'react'
import Header from '../../../layout/admin/Header';
import Menu from '../../../layout/admin/Menu';

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
