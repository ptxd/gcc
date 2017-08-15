import React from 'react';

function BannerButton(props) {
        return (
            <div>
                <button className="banner-btn">
                        <span>{props.bbutton}</span>
                </button>
            </div>
        );
    }

export default BannerButton;