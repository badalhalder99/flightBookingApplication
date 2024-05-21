import React, { useState } from 'react';
import styles from '../header/header.module.css';
import FlightSearch from '../flightSearch/FlightSearch '
import flightData from '../../data/data.json';

const Home = () => {
    // State to keep track of active tab
    const [activeTab, setActiveTab] = useState(1);

    // Function to handle tab change
    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <section className='bg-[#396181]'>
                <div className={`container ${styles.customContainer} my-0 ml-auto mr-auto py-1 md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}>
                    <div className="tabWrap flex justify-start items-center mt-6">
                        <button
                            className={`${activeTab === 1 ? 'active bg-[#ec8134] border border-solid border-[#ec8134] text-[#fff] ' : 'bg-white border border-solid border-[#2e3791]'} text-[13px] font-medium py-2 xsmall:px-4 2xsmall:px-3 rounded-md`}
                            onClick={() => handleTabChange(1)}
                        >
                            One Way
                        </button>
                        <button
                            className={`${activeTab === 2 ? 'active bg-[#ec8134] border border-l-0 border-r-0 border-solid border-[#ec8134] text-[#fff] ' : 'bg-white border border-solid border-[#2e3791] border-l-0 border-r-0'} text-[13px] font-medium py-2 xsmall:px-4 2xsmall:px-3 rounded-md`}
                            onClick={() => handleTabChange(2)}
                        >
                            Round Trips
                        </button>
                        <button
                            className={`${activeTab === 3 ? 'active bg-[#ec8134] border border-solid border-[#ec8134] text-[#fff] ' : 'bg-white border border-solid border-[#2e3791]'} text-[13px] font-medium py-2 xsmall:px-4 2xsmall:px-3 rounded-md`}
                            onClick={() => handleTabChange(3)}
                        >
                            Multi-city
                        </button>
                    </div>
                </div>
            </section>
            <section>
                {/* Display content based on active tab */}
                <div className="tab-content">
                    {activeTab === 1 && (
                        <>
                            <FlightSearch flightData={flightData.result} />
                        </>
                    )}

                    {activeTab === 2 && (
                        <p className=' text-[#fff] text-base text-left'>There is nothing to show!!!</p>
                    )}
                    {activeTab === 3 && (
                        <p className=' text-[#fff] text-left'>There is nothing to show!!!</p>
                    )}
                </div>
                
            </section>
        </>
    );
}

export default Home;

