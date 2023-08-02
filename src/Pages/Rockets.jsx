import React, { useState, useEffect } from 'react';
import GridItem from '../Components/GridItems';

const GridContainer = () => {
    const [gridData, setGridData] = useState([]);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v3/rockets');
            const data = await response.json();
            setGridData(data); // Assuming the API response is an array of objects with required properties
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data from the API when the component mounts
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array ensures it runs only once on mount

    return (
        <section>
            <h1 className='heading text-center mb-5 p-5'>Rockets</h1>


            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 ">

                {gridData.map((item) => (
                    <GridItem
                        key={item.id} // Assuming each item has a unique "id" property
                        img={item.flickr_images}
                        name={item.rocket_name}
                        stages={item.stages}
                        cost_per_launch={item.cost_per_launch}
                        
                        description={item.description}
                        wiki={item.wikipedia}
                    />
                ))}
            </div>
        </section>

    );
};

export default GridContainer;
