import React from 'react';

const Login = () => {
    return ( 

        <form action="" className="flex justify-center p-5">

            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" className="border-black border mx-3"/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" className="border-black border mx-3"/>
            <input type="submit" value="Login" className="bg-indigo-400 px-2 py-1 rounded-lg text-white"/>
        </form>
     );
}
 
export default Login;