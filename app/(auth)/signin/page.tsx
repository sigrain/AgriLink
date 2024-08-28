"use client"
import { signup, signin } from '@/app/lib/firebase'
import { useRouter } from 'next/navigation'
import { useRef } from 'react';

export default function SignUp() {

  const router = useRouter();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSignIn() {
    try {
        await signin(emailRef.current?.value ?? "", passwordRef.current?.value ?? "");
        router.push('/dashboard');
    } catch(e) {
        console.log(e);
    }
  }

  function handleSignUp() {
    router.push('./signup');
  }
    
  return (
    <main className='w-[390px] ml-auto mr-auto background-color'>
      <div className="ml-7 mr-7 flex flex-col justify-between h-screen">
        <div className="flex flex-col items-left justify-center flex-grow">
          <h1 className="text-green text-4xl text-left">AgriLink</h1>
          <h2 className="mt-5 text-green text-base text-left">Grow your own plants</h2>
          <h2 className="text-green text-base text-left">from anywhere in the world</h2>
          <input className='mt-24 white-input rounded-lg w-full h-10 pl-7' placeholder='Email' ref={emailRef}/>
          <input className='mt-4 white-input rounded-lg w-full h-10 pl-7' placeholder='Password' ref={passwordRef}/>
        </div>

        <div className="justify-center mt-auto mb-8">
            <button className="green-button rounded-lg w-full h-10" onClick={handleSignIn}>
                <p className='text-green text-base text-center'>Sign in</p>
            </button>
            <button className='mt-4 w-full h-10' onClick={handleSignUp}>
                <p className='text-green text-base text-center'>Sign up</p>
            </button>
        </div>
      </div>
    </main>
  )
}