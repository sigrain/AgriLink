"use client"
import { useState, useEffect } from "react";
import { addPlants } from "@/app/lib/firebase";
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function Register() {

    const router = useRouter();

    const nameRef = useRef<HTMLInputElement>(null);
    const speciesRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const daysRef = useRef<HTMLInputElement>(null);

    async function handleRegister() {
        try {
            await addPlants(nameRef.current?.value ?? "", speciesRef.current?.value ?? "", locationRef.current?.value ?? "", daysRef.current?.value ?? "");
            router.push('./dashboard');
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <div className="w-[390px] ml-auto mr-auto background-color">
            <div className='w-full flex justify-end items-center p-4'>
                <h1 className='text-white text-4xl text-right'>AgriLink</h1>
            </div>
            <div className="white-panel flex flex-col justify-between w-full h-screen">
                <div className="flex flex-col items-left justify-center flex-grow ml-7 mr-7">
                    <h1 className='text-green text-left text-2xl'>Register your plants</h1>
                    <input className='mt-10 white-input rounded-lg w-full h-10 pl-7' placeholder='Name' ref={nameRef} />
                    <input className='mt-4 white-input rounded-lg w-full h-10 pl-7' placeholder='Spiecies' ref={speciesRef} />
                    <input className='mt-4 white-input rounded-lg w-full h-10 pl-7' placeholder='Location' ref={locationRef} />
                    <input className='mt-4 white-input rounded-lg w-full h-10 pl-7' placeholder='Days' ref={daysRef} />
                </div>

                <div className="justify-center mt-auto mb-8 ml-7 mr-7">
                    <button className="green-button rounded-lg w-full h-10 mb-20" onClick={handleRegister}>
                        <p className='text-green text-base text-center'>Register</p>
                    </button>
                </div>
            </div>
        </div>
    )
}