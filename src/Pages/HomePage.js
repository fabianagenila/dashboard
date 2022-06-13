import React from 'react'
import HorizontalCharts from '../components/Charts/HorizontalChart'
import ScatteredCharts from '../components/Charts/ScatteredChart'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faFilter } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import './HomePage.css'


const HomePage = () => {
    return (
        <div>
            <div className='d-flex flex-row justify-content-between'>
                <div className='title-div d-flex flex-column'>
                    <p className='title'>Dashboard</p>
                    <p className='subtitle'>Desafio Técnico Frontend</p>
                </div>
                <div className='filter-btn-div'>
                    <button className='filter-btn d-flex p-2'><FontAwesomeIcon icon={faFilter} className='filter-icon'/>Filtrar</button>
                </div>
            </div>

            <div className='chart-container'>
                <div className='row-container'>
                    <p className="d-flex flex-row align-items-center p-2" >Barras<FontAwesomeIcon icon={faInfoCircle} className='info-icon' /></p>
                    <div className='col-container'>
                        <HorizontalCharts />
                    </div>
                </div>
                <div className='row-container'>
                    <p className="d-flex flex-row align-items-center p-2" >Scatter<FontAwesomeIcon icon={faInfoCircle} className='info-icon' /></p>
                    <div className='col-container'>
                        <ScatteredCharts />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage