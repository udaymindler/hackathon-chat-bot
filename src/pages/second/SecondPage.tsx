import React, { useEffect, useState } from 'react';
import "./SecondPage.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import First from '../first/First';
import axios from 'axios';
const SecondPage = (props: { setIsSecondPage: any, isSecondPage: boolean }) => {
    const toggleSecondPage = () => {
        props.setIsSecondPage(!props.isSecondPage);
    };


    const [previousQueries, setPreviousQueries] = useState<Array<string>>([]); // Specify the type as an array of strings
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        const fetchPreviousQueries = async () => {
            try {
                const response = await axios.post('https://ca0d-65-0-227-116.ngrok-free.app/chatbot/previous-queries');
                if (response.data && Array.isArray(response.data)) {
                    setPreviousQueries(response.data);
                }
            } catch (error) {
                console.error('Error fetching previous queries:', error);
            }
        };

        fetchPreviousQueries();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.post('https://ca0d-65-0-227-116.ngrok-free.app/chatbot/query', {
                query: searchQuery,
                previousQueries: previousQueries,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
            {
                props.setIsSecondPage ? < div className='container-second' >
                    <div className="qAndA">
                        <div className='backt'>
                            <div onClick={toggleSecondPage} className='small-circle'>
                                <ArrowBackIcon />
                            </div>
                        </div>
                        <div className='content'>
                            <div className="ques">what is mip and msh</div>
                            <div className='ans'>This program is designed to help you excel in your educational and career journey, and promote holistic self-development. </div>
                            <div className="ques">what is mip and msh</div>
                            <div className='ans'>This program is designed to help you excel in your educational and career journey, and promote holistic self-development. </div>
                            <div className="ques">whadfwef sefwefvwefv werwef nd msh</div>
                            <div className='ans'>This program is designed to help you excel in your educational and career journey, and promote holistic self-development. </div>
                        </div>

                        <div className="suggestions">Type your queries here</div>
                        <div className='footer'>
                            <input type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type='submit' className='btns' onClick={handleSearch}>send</button>
                        </div>
                    </div>
                </div > : <First />
            }
        </>


    );
};

export default SecondPage;