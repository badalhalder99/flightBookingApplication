import React, { useState } from 'react';
import styles from '../header/header.module.css';
import { IoSearch } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const FlightSearch = ({ flightData }) => {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [showDetails, setShowDetails] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredResults = flightData.filter(flight => 
            flight.legs.some(leg => 
                leg.segment.departureLocation.toLowerCase() === departure.toLowerCase() && 
                leg.segment.arrivalLocation.toLowerCase() === arrival.toLowerCase() && 
                leg.segment.departureDate === date
            )
        );
        setSearchResults(filteredResults);
    };

    const toggleDetails = (legRef) => {
        setShowDetails(prevState => ({
            ...prevState,
            [legRef]: !prevState[legRef]
        }));
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const formatDate2 = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    

    return (
        <>
            <div className="bg-[#396181] pt-5">
                <div className={`container ${styles.customContainer} my-0 ml-auto mr-auto py-1 md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}>
                    {/* User search form */}
                    <form onSubmit={handleSubmit} className='mb-4'>
                        <div className="formTop grid md:grid-cols-5 2xsmall:grid-cols-1 gap-[4px]">
                            <div className="fromInput relative">
                                <label htmlFor="departure" className='absolute left-[8px] top-1 text-[14px] text-[#9e9e9e]'>Flying from</label>
                                <input
                                    type="text"
                                    id="departure"
                                    placeholder='City or Airport'
                                    value={departure}
                                    onChange={(e) => setDeparture(e.target.value)}
                                    className='border border-solid border-[#000] placeholder-[#000] py-6 pb-2 px-2 rounded-[4px] w-full xsmall:text-[15px] 2xsmall:text-[14px]'
                                    required  
                                />
                            </div>

                            <div className="toInput relative">
                                <label htmlFor="arrival" className='absolute left-[8px] top-1 text-[14px] text-[#9e9e9e]'>Flying to</label>
                                <input
                                    type="text"
                                    id="arrival"
                                    placeholder='City or Airport'
                                    value={arrival}
                                    onChange={(e) => setArrival(e.target.value)}
                                    className='border border-solid border-[#000] placeholder-[#000] py-6 pb-2 px-2 rounded-[4px] w-full xsmall:text-[15px] 2xsmall:text-[14px]'
                                    required  
                                />
                            </div>

                            <div className="dateInput relative">
                                <label htmlFor="date" className='absolute left-[8px] top-1 text-[14px] text-[#9e9e9e]'>Departing</label>
                                <input
                                    type="date"
                                    id="date"
                                    placeholder='Departing'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className='border border-solid border-[#000] placeholder-[#000] py-[22px] pb-2 px-2 rounded-[4px] w-full xsmall:text-[15px] 2xsmall:text-[14px]'
                                />
                            </div>

                            <div className="travelerInput relative">
                                <label htmlFor="people" className='absolute left-[8px] top-1 text-[14px] text-[#9e9e9e]'>Travelers</label>
                                <input
                                    id="people"
                                    type='number'
                                    placeholder='Traveler'
                                    value={people}
                                    onChange={(e) => setPeople(parseInt(e.target.value))}
                                    className='border border-solid border-[#000] placeholder-[#000] py-6 pb-2 px-2 rounded-[4px] w-full xsmall:text-[15px] 2xsmall:text-[14px]'
                                    required 
                                /> 
                            </div>

                            <div className="submitButton small:pb-[0] 2xsmall:pb-2 small:w-auto 2xsmall:w-full">
                                <button type="submit" className='bg-[#ec8134] text-white text-semibold xsmall:text-[15px] 2xsmall:text-[14px] py-4 rounded-[4px] md:mt-0 2xsmall:mt-[2px] btn w-full flex justify-center items-center'><IoSearch className='mr-[2px]' /> Modify Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {searchResults.length > 0 && (
                <div className='flex justify-center items-center text-white bg-[#053a65] py-2 px-2'>
                    <div>
                        <div className='text-[14px]'>{formatDate(date)}</div>
                        <div className='flex justify-center items-center'>{departure.toUpperCase()} <MdFlight className='rotate-90 mr-1 ml-1'/> {arrival.toUpperCase()}</div>
                    </div>
                </div>
            )}
            {searchResults.length > 0 && (
                <div className="bg-[#396181] py-2 px-2">
                    <div className={`container ${styles.customContainer} my-0 ml-auto mr-auto py-1 md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}>
                        <div className="flex justify-around items-center small:flex-row 2xsmall:flex-col">
                            <p className="flex justify-center items-center text-white text-[14px] small:mb-0 2xsmall:mb-1"><FaCircleCheck className='mr-1 text-[#ec8134] text-base'/> SEARCH RESULTS</p>
                            <p className="flex justify-center items-center text-white text-[14px] small:mb-0 2xsmall:mb-1"><FaRegCheckCircle className='mr-1 text-[#ec8134] text-base'/> PASSENGER DETAILS</p>
                            <p className="flex justify-center items-center text-white text-[14px]"><FaRegCheckCircle className='mr-1 text-[#ec8134] text-base'/> BOOKING INFORMATION</p>
                        </div>
                    </div>
                </div>
            )}

            <div className={`container ${styles.customContainer} my-0 ml-auto mr-auto py-1 md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px] mt-5 mb-5`}>
                {/* Showing the user search data */}
                <div className='flex justify-between items-start'>
                    <div className="filteringArea px-3 py-2 lg:w-[20%] 2xsmall:w-full shadow-md lg:block 2xsmall:hidden">
                        <p className='text-black'>Filtering Area</p>
                    </div>
                    <div className="dataTable bg-white  lg:w-[78%] 2xsmall:w-full py-2">
                        {searchResults.length > 0 ? (
                            <div className='overflow-x-auto'>
                                <ul>
                                    {searchResults.map((flight, index) => (
                                        <li key={index} className='mb-3'>
                                            <div>
                                                {flight.legs.map((leg, legIndex) => (
                                                    <div key={legIndex} className='border border-solid border-[#ddd] mb-2 p-3 pb-2 overflow-x-auto rounded-lg'>
                                                        <div className='flex justify-between items-start overflow-x-auto'>
                                                            <p className='text-nowrap'>{formatDate2(leg.segment.departureDate)}</p>
                                                            <p className='flex justify-center items-center text-nowrap mr-5 ml-5'>{leg.segment.departureLocation}  <MdFlight className='rotate-90 mr-1 ml-1'/> {leg.segment.arrivalLocation}</p>
                                                            {/* Add more details as needed */}
                                                            <div>
                                                                <button type='button' className='bg-[#ec8134] text-white px-2 py-1 rounded-md block text-nowrap'>Book Now</button>
                                                                <button className='mt-1 text-[14px] flex justify-start items-center mb-1 text-nowrap' onClick={() => toggleDetails(leg.ref)}>
                                                                    {showDetails[leg.ref] ? 'Flight Details' : 'Flight Details'} <MdKeyboardArrowDown className='text-lg'/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='overflow-x-auto'>
                                                            {showDetails[leg.ref] && (
                                                                <div className="details border-t border-solid border-[#ddd] pt-2 overflow-x-auto">

                                                                    <div className='flex justify-start items-center bg-black text-white w-[120px] px-5 py-1 overflow-x-auto mb-2'>
                                                                        {departure.toUpperCase()} 
                                                                        <MdFlight className='rotate-90 mr-1 ml-1 text-lg'/> 
                                                                        {arrival.toUpperCase()}
                                                                    </div>

                                                                    {leg.segmentDetails.map(detail => (
                                                                        <div key={detail.id} className='flex justify-between items-center border-b border-solid border-[#ddd] py-2 overflow-x-auto'>
                                                                            <p className='text-nowrap mr-8'>{detail.fleet.marketing} <br />Aircraft: {detail.fleet.marketingFlightNumber}</p>
                                                                            
                                                                            <p className='text-nowrap mr-8'>{detail.origin.dateTime} <br /> {detail.origin.airport}</p>

                                                                            <p className='text-nowrap mr-8'>{detail.destination.dateTime} <br /> {detail.destination.airport}</p>
                                                                            <p className='text-nowrap'>{detail.fleet.marketing} <br />{detail.fleet.marketingFlightNumber}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>To get data please search accurately.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightSearch;
