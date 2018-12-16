import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1058.6450102971467!2d-79.37975871781899!3d43.6436592593103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb2b5935bf09%3A0x5842d0e7d5669410!2sScotiabank+Arena!5e0!3m2!1sen!2sca!4v1544966250978"
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;