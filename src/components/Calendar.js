import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';


export default class Calendar extends Component {

    state = {
        from: null,
        to: null
    };

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleReset = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        })
    };

    render() {
        const { from, to } = this.state;
        return (
            <div>
                <DayPicker
                    initialMonth={ new Date(2016, 1) }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                <a href="#" onClick={ this.handleReset }>Reset</a>
                <div>{`from: ${from}; to: ${to}`}</div>
            </div>

        );
    }
}