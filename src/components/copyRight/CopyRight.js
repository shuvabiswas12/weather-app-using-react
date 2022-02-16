import React from "react";

export default function CopyRight() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-between">
                <div className="col-sm-12 col-md-4">
                    <p className="lead">@copyright 2022 </p>
                </div>
               <div className="d-flex justify-content-between">
                   <div className="col-sm-6 col-md-4">
                       <p className="lead text-white-50">Built by <a className="lead text-white" target="_blank" href="https://linkedin.com/in/shuva-biswas">Shuva Biswas</a></p>
                   </div>
                   <div className="col-sm-6 col-md-4">
                       <p className="text-end">
                           <a className="text-white" target="_blank" href="https://github.com/shuvabiswas12/weather-app-using-react"><strong>GITHUB link</strong></a>
                       </p>
                   </div>
               </div>
            </div>
        </div>
    )
}