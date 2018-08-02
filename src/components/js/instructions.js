import React, { Component } from 'react';
import {section,instructionstitle} from '../css/app.css';

class Instructions extends Component {

  render() {

    return (

        <div className={section}>

        <div className={instructionstitle}>

        Instructions

    </div>

    <div>

        Be prepared with scanned copies of all supporting documents,

        date of event(s) and date of when you were made aware of the event.

        However, if you do not have this information readily available,

        <b>DO NOT DELAY REPORTING.</b>

        Provide the information to the best of your knowledge to avoid any late disclosures.

        It is critical that Market Conduct is notified immediately when you

        become aware of an event that falls into one of the categories listed below:

    </div>

     

 </div>

    );

  }

}

 

export default Instructions;