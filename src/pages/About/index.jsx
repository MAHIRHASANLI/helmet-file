import React from 'react'
import {Helmet} from "react-helmet";
const About = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='linkler'><h1>About</h1></div>
</div>
  
  )
}

export default About