import React from 'react';

const authContext = React.createContext({
    auththenticated:true,
    login:()=>{}
})

export default authContext;