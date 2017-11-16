import React, { Component } from 'react';
import {Button,Col, Card, Row, Input} from 'react-materialize'
import Country from './Country'

class Form extends Component{
	 constructor(){
    super();
    this.state = {
      results : []
    }
    
    this.searchButton = this.searchButton.bind(this);
    this.fetchData = this.fetchData.bind(this);
}



fetchData(searchTerm){
  var url = "https://restcountries.eu/rest/v2/alpha/"+searchTerm;
  fetch(url)
      .then(response => response.json())
      .then(result => {
		result.status != '404' ? this.setState({results:result}) : alert("Enter Valid Country Code")
       })
      .catch(e => e);
}


searchButton(){
	var searchTerm = this.refs.CountryCode.state.value
	searchTerm.toUpperCase();
	this.fetchData(searchTerm)
}

	render(){
		return ( 
		<div>
			<Row>
	          <Col m={12} s={12}>
	              <Card className='grey lighten-4' textClassName='black-text' title='Fetch Country Detail'>
	                <Row>
	                    <Input  s={6} label="Country Code" ref="CountryCode"/>
	                    <Button waves='light' onClick={this.searchButton}>Submit</Button>
	                </Row>
	              </Card>
	          </Col>
	        </Row>
	        <Country countryData={this.state.results}/>
        </div>
        )
	}
}

export default Form;