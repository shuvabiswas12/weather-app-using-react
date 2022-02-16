import React from "react";

export default function CopyRight() {
    return (
        <div className="container">
            <div className="d-flex justify-content-between flex-wrap">
                <div className="">
                    <p className="lead">@copyright 2022 </p>
                </div>
                <div className="">
                    <p className="lead text-white-50">Built by <a className="lead text-white" target="_blank" href="https://linkedin.com/in/shuva-biswas">Shuva Biswas</a></p>
                </div>
                <div className="">
                    <a className="text-white" target="_blank" href="https://github.com/shuvabiswas12/weather-app-using-react"><strong>GITHUB link</strong></a>
                </div>
            </div>
        </div>
    )
}