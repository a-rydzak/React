import React from 'react';

// HOC can handle errors and/or handle analytics data
//{...props} is used for dynamic and unknown props
const withClass =(WrappedComponent, className)=>{
    return props =>(
        <div  className={className}><WrappedComponent {...props}/></div>
    )
}

export default withClass;