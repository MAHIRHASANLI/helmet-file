import React from 'react'
import {Helmet} from "react-helmet";
const NotFound = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='linkler'><h1>NotFound | error</h1></div>
</div>
    
  )
}

export default NotFound