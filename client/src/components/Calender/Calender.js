import React from "react";
import "./Calender.css";

function Calender() {
    return (
        <div className="container" id="dailyCalender">
            <h2 id="clientPageTitle">Daily Calories Calender</h2>
            <div className="row" id="calenderContainer">
                <div className="col-md-1" id="sun">Sun</div>
                <div className="col-md-1" id="sun">Mon</div>
                <div className="col-md-1" id="sun">Tue</div>
                <div className="col-md-1" id="sun">Wed</div>
                <div className="col-md-1" id="sun">Thurs</div>
                <div className="col-md-1" id="sun">Fri</div>
                <div className="col-md-1" id="sun">Sat</div>
            </div>
            <div className="row" id="calenderContainer">
                <div className="col-md-5" id="containerBorder">
                    <div className="input-group mb-3" id="searchSection">
                        <input type="text" className="form-control" placeholder="Calories Search by Food" aria-label="Calories Search by Food" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <div className="input-group mb-3" id="searchSection">
                        <input type="text" className="form-control" placeholder="Calories Search by Restaurant Menu" aria-label="Calories Search by Restaurant Menu" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-7" id="containerBorder">
                    <div id="calenderContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    Breakfast : 
                                </div>
                                <div className="col-md-4">
                                    Lunch :
                                </div>
                                <div className="col-md-4">
                                    Dinner : 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span>On (date), you ate (total calories)</span>
                <br/>
                <span>(Remainning Calories) to 1. maintain 2. lose your weight</span>
            </div>
        </div>
    );
  }

export default Calender;