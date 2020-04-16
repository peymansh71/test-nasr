import React from 'react'

export default function ErrorPage({ code , text = undefined }) {
    return (
        <div className="error-page">
            {text ? text : (
                <h4>Error {code} occurred</h4>
            )}
        </div>
    )
}