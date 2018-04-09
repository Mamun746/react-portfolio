import React from 'react'
import Hero from '../containers/Hero'
import TwoCol from '../containers/TwoCol'
import PrimaryFourCol from '../containers/PrimaryFourCol'
import ContactCTA from '../ContactCTA'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Hero/> 
                <PrimaryFourCol/>
                <TwoCol/>
                <TwoCol/>
                <TwoCol/>
                <ContactCTA/>
            </div>
        );
    }
}

export default HomePage;