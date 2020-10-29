import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './calendar.css';
import buildCalendar from './build'
import dayStyles, {beforeToday} from './styles'
import { Container, Button, Row, Col } from 'react-bootstrap';

export default function Calendar(props) {
    const [calendar , setCalendar] = useState([]);
    const [value , setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    function currMonthName() {
        return value.format('MMMM')
    }

    function currYear() {
        return value.format('YYYY')
    }

    function prevMonth() {
        return value.clone().subtract(1, 'month')
    }

    function nextMonth() {
        return value.clone().add(1, 'month')
    }

    function thisMonth() {
        return value.isSame(new Date(), 'month')
    }

    return ( 
        <div className='calendar'>
            <div className='header'>
                <div className='previous' onClick={() => !thisMonth() && setValue(prevMonth())}>
                {!thisMonth() ? String.fromCharCode(171) : null}</div>
                <div className='current'>
                    {currMonthName()} {currYear()}
                </div>
                <div className='next' onClick={() => {setValue(nextMonth())}}>{String.fromCharCode(187)}</div>
            </div>
            <div className='body'>
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div  className='day' key={day.format('MM/DD').toString()} 
                            onClick={() => { !beforeToday(day) && setValue(day)
                                // console.log('clicked', day)
                                }}>
                                <div  className={dayStyles(day, value)}>
                                        {day.format('D').toString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button onClick={props.form} >Book</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}