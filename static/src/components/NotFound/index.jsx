import React from 'react';

export default function NotFound() {
    return (
        <div className="notFound">
            <div className="inner">
                <h3 className="errorCode">404</h3>
                <h4 className="errorName">Not found</h4>
                <p className="errorDescription">{'The page you were looking for isn\'t found. Go to '}
                    <a href="/">main page</a>{' or '}
                    <a href="/">contact us</a>
                </p>
            </div>
        </div>
    );
}
