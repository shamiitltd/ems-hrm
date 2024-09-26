import React from 'react';
import './styles/CardSkeleton.css'; // Import the CSS file for styling

// Functional component for rendering a card skeleton loader
const CardSkeleton = () => {
    return (
        <div className="container">
            <div className="row">
                {/* 
                    Left Column (currently empty)
                    This column is designed to accommodate additional content or space.
                */}
                <div className="col-lg-6 col-md-6 col-12"></div>

                {/* 
                    Right Column
                    Contains the card skeleton which serves as a placeholder for content while data is loading.
                */}
                <div className="col-lg-6 col-md-6 col-12 column2">
                    <div className="card">
                        {/* 
                            Card Image Placeholder
                            A placeholder for the card's image, styled with a 'skeleton' class for loading state.
                        */}
                        <div className="card-img skeleton"></div>

                        <div className="card-body">
                            {/* 
                                Card Circle Placeholder
                                Placeholder for an element that may be a profile picture or an avatar.
                            */}
                            <h3 className="card-circle"></h3>

                            {/* 
                                Card Title Placeholder
                                A skeleton placeholder for the card's title.
                            */}
                            <h2 className="card-title skeleton"></h2>

                            {/* 
                                Card Personal Info Placeholder
                                Placeholders for personal information that might be displayed on the card.
                            */}
                            <h6 className="card-personal skeleton"></h6>

                            {/* 
                                Card Introduction Placeholder
                                Placeholder for introductory text or a description.
                            */}
                            <p className="card-intro skeleton"></p>

                            {/* 
                                Additional Personal Info Placeholder
                                An additional placeholder for more personal information.
                            */}
                            <h6 className="card-personal skeleton"></h6>

                            {/* 
                                Additional Introduction Placeholder
                                Another placeholder for additional introductory text or description.
                            */}
                            <p className="card-intro skeleton"></p>

                            {/* 
                                Card Button Placeholder
                                A skeleton placeholder for a button element on the card.
                            */}
                            <button className="card-button skeleton"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSkeleton;
