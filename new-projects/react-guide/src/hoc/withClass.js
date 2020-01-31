import React from 'react';

// HOC can handle errors and/or handle analytics data
const withClass =(WrappedComponent, className)=>{
    return props =>(
        <div  className={className}><WrappedComponent/></div>
    )
}

export default withClass;