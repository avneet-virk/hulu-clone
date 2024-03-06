import React from 'react';
import Results from '../components/Results';

const Trending = ({title,selectedOption}) => {
    console.log(title,selectedOption)
return(
    <>
    <Results title={title} selectedOption={selectedOption}/>
    </>
)
}
export default Trending