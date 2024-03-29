// import React, { useState } from "react";
// import { supabase } from "./supabase";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {

//       const { error } = await supabase.auth.signUp({
//         email: email,
//         password: password,
//       });

//       if (error) {
//         throw error;
//       }

//       const { data, error: insertError } = await supabase
//         .from('users')
//         .upsert([
//           {
//             email: email,

//             password: password,
//           },
//         ], { onConflict: ['email'] });

//       if (insertError) {
//         throw insertError;
//       }

//       setResponseMessage("Check your email for a verification link");
//     } catch (error) {
//       setResponseMessage(error.message);
//     }
//   };



//   return (


//     <div className="flex min-h-full">
//       {/* Left Column */}

//       <div className="flex-1 px-6 py-12 lg:px-8">
//         <div className="flex items-center justify-between">
//           <img
//             className="ml-6 h-10 w-auto"
//             src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg"
//             alt="Your Company"
//           />
//           <p className="mr-6 text-right absolute right-0 text-white"><a href="#"> &lt; Back to home</a></p>

//         </div>



//         <div className="sm:mx-auto sm:w-full sm:max-w-sm relative top-4 left-20">

//           <h2 className="mt-10 ml-16 text-3xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in
//           </h2>
//         </div>
//         <br></br>




//         <div className="mt-4 flex justify-center">
//           <button className="flex items-center border border-gray-900 text-gray-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none mr-2">
//             <svg className="shrink-0 me-2" width="22" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M23.001 12.2332C23.001 11.3699 22.9296 10.7399 22.7748 10.0865H12.7153V13.9832H18.62C18.501 14.9515 17.8582 16.4099 16.4296 17.3898L16.4096 17.5203L19.5902 19.935L19.8106 19.9565C21.8343 18.1249 23.001 15.4298 23.001 12.2332Z" fill="#4285F4" />
//               <path d="M12.714 22.5C15.6068 22.5 18.0353 21.5666 19.8092 19.9567L16.4282 17.3899C15.5235 18.0083 14.3092 18.4399 12.714 18.4399C9.88069 18.4399 7.47596 16.6083 6.61874 14.0766L6.49309 14.0871L3.18583 16.5954L3.14258 16.7132C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z" fill="#FBBC05" />
//               <path d="M6.62046 14.0767C6.39428 13.4234 6.26337 12.7233 6.26337 12C6.26337 11.2767 6.39428 10.5767 6.60856 9.92337L6.60257 9.78423L3.25386 7.2356L3.14429 7.28667C2.41814 8.71002 2.00146 10.3084 2.00146 12C2.00146 13.6917 2.41814 15.29 3.14429 16.7133L6.62046 14.0767Z" fill="#FBBC05" />
//               <path d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z" fill="#EB4335" />
//             </svg>
//             Login with Google
//           </button>

//           <button className="flex items-center border border-gray-900 text-gray-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 focus:outline-none">
//             <svg className="shrink-0 me-2" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M24 12C24 5.3726 18.6274 2.65179e-05 12 2.65179e-05C5.37258 2.65179e-05 0 5.3726 0 12C0 17.9896 4.38823 22.954 10.125 23.8542V15.4688H7.07813V12H10.125V9.35628C10.125 6.34878 11.9165 4.68753 14.6576 4.68753C15.9705 4.68753 17.3438 4.9219 17.3438 4.9219V7.87503H15.8306C14.3399 7.87503 13.875 8.80003 13.875 9.74902V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9896 24 12Z" fill="#1877F2" />
//               <path d="M16.6711 15.4687L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92187C17.3438 4.92187 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4687H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4687H16.6711Z" fill="white" />
//             </svg>
//             Login with Facebook
//           </button>
//         </div>

//         <br />

//         <p className="mt-3 mr-4 text-center text-gray-600">or</p>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form onSubmit={handleSignup} className="space-y-6" method="POST">




//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder="Enter you email address"
//                   required
//                   className="block w-full px-4 rounded-2xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   placeholder="    Enter your password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="flex items-center mt-4">
//                 <input
//                   type="checkbox"
//                   id="remember-me"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//                 <a href="#" className="ml-24 font-semibold text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>


//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-3xl bg-indigo-900 px-3 py-1.5  font-bold leading-9 text-white  shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign In
//               </button>
//             </div>

//             <div className="text-center mt-4 text-sm text-gray-500">
//               Don't have an account yet?
//               <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2">
//                 Sign up
//               </a>
//             </div>
//           </form>

//           <p>{responseMessage}</p>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="flex-1 relative">
//         <div className="flex justify-end items-center h-full"> {/* Image container */}
//           <img
//             className="w-full h-auto"
//             src="https://magicai.liquid-themes.com/images/bg/bg-auth.jpg"
//             alt="Background Auth"
//             style={{ position: "absolute", zIndex: "-1" }}
//           />
//           <div
//             style={{
//               overflow: "hidden",
//               width: "100%",
//             }}
//           >
//             <img
//               className="w-full h-auto"
//               src="https://magicai.liquid-themes.com/images/bg/dash-mockup.jpg"
//               alt="Dashboard Mockup"
//               style={{
//                 marginRight: "-25%",
//                 marginLeft: "auto",
//                 width: "150%",
//                 height: "150%",
//               }}
//             />
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiOutlineEyeOff, HiOutlineChevronLeft } from "react-icons/hi";
import logo from '../images/logo.png';
import authBg from '../images/bg-auth.jpg';
import dashMockup from '../images/dash-mockup.jpg';
import { supabase } from "./supabase";
//import { Link } from 'react-router-dom';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
console.log("submit")
    try {

      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .upsert([
          {
            email: email,

            password: password,
          },
        ], { onConflict: ['email'] });

      if (insertError) {
        throw insertError;
      }

      alert("Check your email for a verification link");
      console.log(data)
    } catch (error) {
      alert(error.message);
    }
  };



  return (


    <>
      <div className='grid sm:grid-cols-2 '>
        <div className='col-span-full fixed w-screen z-10 sm:text-white flex items-center justify-between py-2 sm:px-24 px-2'>
          <div><img src={logo.src} alt='' className='object-cover h-20' /></div>
          <div className='flex items-center'><HiOutlineChevronLeft className='me-2 cursor-pointer' /> Back to Home</div>
        </div>
        <div className='h-screen grid content-center justify-center'>
          <div className=''>
            <h1 className='text-3xl font-bold mb-6'>Sign in</h1>
            <form className="flex flex-col gap-4 md:w-96" onSubmit={handleSignIn}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email address" />
                </div>
                <TextInput id="email" type="email" required shadow
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <div className='relative'>
                  <TextInput id="password" type="password" required shadow
                    onChange={(e) => setPassword(e.target.value)} />
                  <HiOutlineEyeOff className='absolute right-4 top-3 cursor-pointer' />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className='flex items-center'>
                  <Checkbox id="agree" />
                  <Label htmlFor="agree" className="flex ms-2">Remember me</Label>
                </div>
                <div>
                  <Label className="flex">Forget Password</Label>
                </div>
              </div>
              <div className='mt-5'>
                <Button type="submit"  className='rounded-full w-full bg-indigo-700 hover:-translate-y-1 transition-all duration-300 h-14'>
                  <span className='text-xl'>Sign in</span>
                </Button>
              </div>
              <div className='text-center mt-5'>
                <h2>Don't have account yet? <a to='/signup' className='text-indigo-700 font-medium underline decoration-solid'>Sign up</a></h2>
              </div>
            </form>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <img src={authBg.src} alt='' className='h-screen w-screen object-cover' />
          <img src={dashMockup.src} alt='' className='h-96 rounded-3xl absolute top-0 right-0 translate-y-28 translate-x-40' />
        </div>
      </div>
    </>
  )
}
export default SignIn;


