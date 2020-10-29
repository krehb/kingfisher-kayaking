import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Componets/Navbar/navbar';
import MyJumbotron from './Componets/Jumbotron/jumbotron';
import { Container, Row, Col } from 'react-bootstrap';
import Routes from './Componets/routes/routes';
import Prices from './Componets/Prices/prices';
import Pickup from './Componets/Pickup/pickup';
import Calendar from './Componets/calendar';
import SelectionFrom from './Componets/SelectionForm/SelectionForm';


class App extends Component {
  state = {
    jumbotron: true,
    showCalendar: false,
    showPrice: false,
    showRoutes: true,
    showPickup: false,
    showSelectionForm: false,
    route: null,
  }
  

  showCalendarHandler = () => {
    this.setState({
      jumbotron: false,
      showCalendar: true,
      showPrice: false,
      showRoutes: false,
      showPickup: false,
      showSelectionForm: false
    })
  }

  showPriceHandler = () => {
    this.setState({
      showPrice: true,
      showCalendar: false,
      showSelectionForm: false
    })
  }

  showRoutesHandler = () => {
    this.setState({
      showRoutes: true,
      showPrice: false,
      showCalendar: false,
      jumbotron: false,
      showPickup: false
    })
  }

  showHomeHandler = () => {
    this.setState({
      showRoutes: true,
      showPrice: true,
      showCalendar: false,
      jumbotron: true,
      showPickup: true,
      showSelectionForm: false,
      showEcwid: false
    })
  }

  showPickUpHandler = () => {
    this.setState({
      showRoutes: false,
      showPrice: false,
      showCalendar: false,
      jumbotron: false,
      showPickup: true
    })
  }

  showSelectionFormHandler = () => {
    this.setState({
      showCalendar: false,
      showSelectionForm: true,
    })
  }
  
  showEwcidHandler = () => {
    this.setState({
      showEcwid: true,
      showSelectionForm: false
    })
  }

  saltHandler = () => {
    this.setState({route: 'Salt Fork'})
    this.showCalendarHandler()
  }
  salineHandler = () => {
    this.setState({route: 'Saline'})
    this.showCalendarHandler()
  }
  sangamonHandler = () => {
    this.setState({route: 'Sangamon'})
    this.showCalendarHandler()
  }

  render(){

    if (this.state.calendar > 12){
      this.state.calendar = 1
    } 
    if (this.state.calendar < 1){
      this.state.calendar = 12
    }

    let jumbo = null
    let price = null
    let routes = null
    let calendar = null
    let pickup = null
    let selectionForm = null

    if (this.state.showSelectionForm){
      selectionForm = ( <SelectionFrom ecwids={this.showEwcidHandler} route={this.state.route} />);
    } else { selectionForm = (null) }    

    if (this.state.jumbotron){
      jumbo = ( <MyJumbotron/>);
    } else { jumbo = (null) }

    if (this.state.showPrice){
      price = (<Prices/>)
    } else { price = null }

    if (this.state.showCalendar){
      calendar = (
        <Container>
          <Row>What's Available</Row>
          <Row>
            <Col><p className='kayaks-0'>kayaks = 0</p></Col>
            <Col><p className='kayaks-2'>kayaks > 2</p></Col>
            <Col><p className='kayaks-4'>kayaks > 4</p></Col>
            <Col><p className='kayaks-6'>kayaks > 6</p></Col>
            <Col><p className='kayaks-8'>kayaks > 8</p></Col>
          </Row>
          <Calendar form={this.showSelectionFormHandler} />
        </Container>
      )
    } else { calendar = null }

    if (this.state.showRoutes){
      routes = (<Routes saline={this.salineHandler}
        salt={this.saltHandler}
        sangamon={this.sangamonHandler}
      />)
    } else { routes = null }
    
    if (this.state.showPickup){
      pickup = (<Pickup/>)
    } else { pickup = null }


    return (
      <div>
        <MyNavbar showHome={this.showHomeHandler}/>

        {selectionForm}
        {jumbo}
        <br></br>
        {calendar}
        <br></br>
        {routes}
        <br></br>
        {price}
        {pickup}



        <footer className="footer mt-auto py-3">
          <Container>
            <span className="text-muted">Copyright&#169; 2021 KingFisher Kayaking</span>
          </Container>         
        </footer>
      </div>
    );
  }
}

export default App;
