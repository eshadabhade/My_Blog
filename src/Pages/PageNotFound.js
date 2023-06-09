import React from 'react'
import {Link} from 'react-router-dom';
function PageNotFound(){
    return(
      <div className='container-fluid pagenotfound'>
        <p>404 Page Not Found</p>
        <Link type="button" class="btn" to='/'>Redirect</Link>
      </div>
    );
  }
  export default PageNotFound;