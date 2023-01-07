
import React from 'react';
import { useRouteError } from 'react-router-dom';

// in @types/reach__router
const Error404 = ():JSX.Element => {

// get and log the error
const error: any = useRouteError();
console.log(error)

  return (
    <div id="error-page">
     <h2> {error.status } | {  error.statusText} </h2>
    </div>
  )
}


export default Error404;