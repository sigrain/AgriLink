"use client"

export default function Dashboard() {

    return (
        <main className=''>
            <div className='w-full flex justify-end items-center p-4'>
                <h1 className='text-white text-4xl text-right'>AgriLink</h1>
            </div>
            <div className="white-panel mt-4 w-full h-lvh">
                <div className='h-full'>
                <div className="flex justify-start space-x-4 p-7">
                    <button className='green-button h-10 w-10'>w</button>
                    <button className='green-button h-10 w-10'>c</button>
                    <button className='green-button h-10 w-10'>i</button>
                </div>
                <div className="bg-gray-200 rounded-xl h-3/5 flex items-center justify-center mb-7 mx-7">
                </div>
                <h3 className='text-green text-lg ml-7'>My Coffee</h3>
                <p className='text-green text-sm ml-7 mt-3'>Cofee Tree</p>
                <p className='text-green text-sm ml-7'>San-Paulo, Brazil</p>
                <p className='text-green text-sm ml-7'>135 days</p>
                </div>
            </div>
        </main>
    )
}