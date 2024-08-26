"use client"
import { useState, useEffect } from "react";
import { addPlants, getPlants } from "@/app/lib/firebase";

export default function Dashboard() {
    const [subjects, setSubjects] = useState<any>([]);

    const fetchSubjects = async() => {
        const path = `plants`;
        const data = await getPlants(path);
        console.log(data);
        setSubjects(data);
    }

    useEffect(() => {
        fetchSubjects();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="w-[390px] ml-auto mr-auto background-color">
            <div className='w-full flex justify-end items-center p-4'>
                <h1 className='text-white text-4xl text-right'>AgriLink</h1>
            </div>
            <div className="white-panel w-full h-screen">
                <div className='h-full'>
                <div className="flex justify-start space-x-4 p-7">
                    <button className='green-button rounded-md h-10 w-10'>&#128167;</button>
                    <button className='green-button rounded-md h-10 w-10'>&#128247;</button>
                    <button className='green-button rounded-md h-10 w-10'>&#128712;</button>
                </div>
                <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center mb-7 mx-7">
                    <button className='green-button rounded-full w-14 h-14 mt-auto mb-5'><p className='text-green text-xl'>&#128247;</p></button>
                </div>
                {Array.isArray(subjects) && subjects.length > 0 &&
                    (
                        <div>
                            <h3 className='text-green text-lg ml-7'>{subjects[0].name}</h3>
                            <p className='text-green text-sm ml-7 mt-3'>🌱 {subjects[0].species}</p>
                            <p className='text-green text-sm ml-7'>📍 {subjects[0].location}</p>
                            <p className='text-green text-sm ml-7'>📅 {subjects[0].days}</p>
                        </div>
                    )
                }
                <ul className="flex overflow-x-auto ml-7 mt-7 mb-7">
                {
                    subjects.map((item: any, index: number) => {
                        return (
                            <li key={index} className="min-w-[280px] flex-shrink-0">
                                <button className="bg-gray-200 rounded-xl items-start w-[260px] h-36">
                                <h3 className='text-green text-lg text-left ml-7'>{item.name}</h3>
                                <p className='text-green text-sm text-left ml-7 mt-3'>🌱 {item.species}</p>
                                <p className='text-green text-sm text-left ml-7'>📍 {item.location}</p>
                                <p className='text-green text-sm text-left ml-7'>📅 {item.days}</p>
                                </button>
                            </li>
                        )
                    })
                }
                </ul>
                </div>
            </div>
        </div>
    )
}