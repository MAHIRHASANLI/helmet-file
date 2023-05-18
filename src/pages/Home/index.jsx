import React from 'react'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className='linkler'><h1>Home</h1></div>
</div>
   
  )
}

export default Home