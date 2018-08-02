import React,{ Component} from 'react';
import Styles from '../css/app.css';
import Instructions from './instructions';


class App extends Component{
        render(){
            return (

                <div className={Styles.app}>
          
                  <header className={Styles.header}>
          
                  <div className={Styles.wrapper}>
          
          
                    <span className={Styles.title}>Welcome to Compliance Portal
          
                    </span>
          
                    </div>
          
                  </header>
          
                 
          
                  <div className={Styles.menu}>
          
                  <div className={Styles.wrapper}>
          
                      <div className="cp-menu-dropdown">
          
                          <button className={Styles.dropdown} type="button">
          
                              <span>Regulatory Disclosure</span>
          
                              <i className="fa fa-chevron-down"></i>
          
                          </button>
          
                      </div>
          
                  </div>
          
              </div>
              <div className={Styles.body}>

<Instructions/>

</div>
</div>
              );
}
}
export default App;