import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthConditionFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://healthwise.p.rapidapi.com/body/diseases/{bodypart}', // Replace {bodypart} with the actual body part
                headers: {
                    'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
                    'x-rapidapi-host': 'healthwise.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setData(response.data); // Adjust based on the API's response structure
            } catch (error) {
                setError('Error fetching data.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

  }
export default HealthConditionFetcher;
