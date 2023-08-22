// import React, { useState } from 'react'
import React from 'react'

function Flight(props) {
    // const [departure, setDeparture] = useState('');
    // const [arrival, setArrival] = useState('');
    // const [departureDate, setDepartureDate] = useState('');
    // const [returnDate, setReturnDate] = useState('');
    // const [passengers, setPassengers] = useState(1);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission here
    // };

    return (
        <div className='overflow-y-scroll abc'>
            <div className=''>
                {/* <h1 className="text-center text-xl font-bold md:text-white md:text-3xl">Flight Booking</h1> */}
                <div className='flex justify-center  dev-flight-form-container py-28 top-0 dark:bg-slate-800'>
                    <div className="bg-gray-100 px-6 py-6 rounded-xl md:shadow-2xl">
                        <div className="flight-navbar">
                            <ul className="flex">
                                <li className="mx-2 md:text-xl"><input type="radio" name="trip" id="oneway" className="" />&nbsp;&nbsp;One way</li>
                                <li className="mx-2 md:text-xl"><input type="radio" name="trip" id="roundtrp" className="" />&nbsp;&nbsp;Round Trip</li>
                            </ul>
                        </div>
                        <form className="">
                            <div className='flex justify-around mt-3 flex-wrap md:flex-nowrap items-center'>
                                <div className="dev-form-field w-full">
                                    <div className="field-title mx-1 md:mx-2">From</div>
                                    <div className='md:mx-2'><input type="text" name="depart" id="depart" className='border rounded-lg px-1 py-2 w-full' /></div>
                                </div>
                                <div className="dev-form-field w-full my-2">
                                    <div className="field-title mx-1">To</div>
                                    <div className='md:mx-2'><input type="text" name="arrival" id="arrival" className='border rounded-lg px-1 py-2 w-full' /></div>
                                </div>
                                <div className="dev-form-field mt-5 md:mt-0 w-full">
                                    <div className="field-title mx-1">Departure Date</div>
                                    <div className='md:mx-2'><input type="date" name="depart" id="depart" className='border rounded-lg px-1 py-2 w-full' /></div>
                                </div>
                                <div className="dev-form-field mt-5 md:mt-0 w-full">
                                    <div className="field-title mx-1">Arrival Date</div>
                                    <div className='md:mx-2'><input type="date" name="depart" id="depart" className='border rounded-lg px-1 py-2 w-full' /></div>
                                </div>
                            </div>
                            <div className="flex justify-start mt-3 flex-wrap md:flex-nowrap items-center">
                                <div className="mx-2">
                                    <select name="adult" className='px-2 py-2 border rounded-lg bg-white' id="passenger">
                                        <option defaultValue={props.adultVal}>--No of adult</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="mx-2">
                                    <select name="children" className='px-2 py-2 border rounded-lg bg-white' id="passenger">
                                        <option defaultValue={props.childVal}>--No of children</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="mx-2 mt-3">
                                    <button className="btn bg-blue-600 text-white px-2 py-2 rounded-lg">Search for Flights</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flight