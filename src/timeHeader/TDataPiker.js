import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class TDatePicker extends Component {
    state = {
        date: "2016-05-15"
    }

    render() {
        return (
            <DatePicker
                style={{ width: 200 }}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        display: 'none',
                    },
                }}
                onDateChange={(date) => {
                    this.setState({ date: date })
                }}
            />
        )
    }
}