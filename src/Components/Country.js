import React, { Component } from 'react';
import {Card,Table,Row,Col,CardTitle} from 'react-materialize'

class Country extends Component{
	constructor(props){
		super(props);
		this.state  = {
			countryData:[]
		}
	}
	componentWillReceiveProps(nextProps){
			var stateData = this.state.countryData;
			stateData.push(nextProps.countryData)
			this.setState({countryData:stateData})
	}
	render(){
		return ( 
		<Row>
			{
				this.state.countryData && this.state.countryData.map((item,key)=>
            <Col s={12} m={3} key={key}>
                <Card header={<CardTitle reveal image={item.flag} waves='light'/>}
                    title={item.name}
                    reveal={
                      <Table>
                      <tbody>
                        <tr>
                          <td><b>Country</b></td>
                          <td>{item.name}</td>
                        </tr>
                        <tr>
                          <td><b>Capital</b></td>
                          <td>{item.capital}</td>
                        </tr>
                        <tr>
                          <td><b>Currencies</b></td>
                          <td>{item.currencies[0].name}</td>
                        </tr>
                        <tr>
                          <td><b>Population</b></td>
                          <td>{item.population}</td>
                        </tr>
                      </tbody>
                    </Table>
                    }>
                    
                    <p>Native Name:- {item.nativeName}</p>
                </Card>
            </Col>
            )
            }
            
        </Row>
        )
	}
}

export default Country;