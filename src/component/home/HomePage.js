import React from 'react';
import "./homePage.scss";

const HomePage = () => {

    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Home</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jockets</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Paints</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Shirt</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">T-Shirt</h1>
                        <p className="subtitle">Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;