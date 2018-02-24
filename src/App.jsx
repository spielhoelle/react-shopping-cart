import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
           <li className="list-group-item d-flex justify-content-between lh-condensed">
             <div>
               <h6 className="my-0">Product name</h6>
               <small className="text-muted">Brief description</small>
             </div>
             <span className="text-muted">$12</span>
           </li>
         </div>
      );
   }
}
export default App;
