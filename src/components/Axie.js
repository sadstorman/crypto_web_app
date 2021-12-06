import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from '../hooks/useForm';
export const Axie = () => {

    // const [dateSelected, setDateSelected] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    const [slp, setSlp] = useState(null)
    const [axs, setAxs] = useState(null)
    const [ChangeSlp, setChangeSlp] = useState(null)
    const [changeAxs, setChangeAxs] = useState(null)
    const [formValues, handleInputChange] = useForm({ howMuchSlp: '' })
    const { howMuchSlp } = formValues

    const [formValues2, handleInputChange2] = useForm({ howMuchAxs: '' })
    const { howMuchAxs } = formValues2

    const handleClick = () => {
        setIsClicked(!isClicked)
        setIsLoading(!isLoading)
    }

    const getData = async () => {
        const resp = await axios.get('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
        const resp2 = await axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity')
        const usdAxs = resp2.data.market_data.current_price.usd
        const changeAxs = resp2.data.market_data.price_change_percentage_24h
        const changeSlp = resp.data.market_data.price_change_percentage_24h
        const usdSlp = resp.data.market_data.current_price.usd
        setSlp(`${usdSlp}`)
        setChangeSlp(`${changeSlp}`)
        setAxs(`${usdAxs}`)
        setChangeAxs(`${changeAxs}`)
        setIsLoading(false)
    }


    useEffect(() => {
        getData()
    }, [setSlp, isClicked])

    return (
        <div className="container">
            <h2 className="text-center">Axies</h2>

            {/* <div className="text-center">
                <label>Start date:</label> <Datepicker selected={dateSelected} dateFormat="MM/dd" maxDate={new Date()} onChange={date => setDateSelected(date)} />
                <h3> Amount of days: <b className="text-primary">{dateSelected.getUTCDate()} </b> </h3>
                <h3> $ per day: <b className="text-primary">6</b> </h3>
            </div> */}



            <div className="row mt-4">


                <div className="col-sm">
                    <h3> SLP actual value: {isLoading ? (<div className="spinner-border text-light" role="status">
                    </div>) : <h4 className="text-danger text-center">{(slp + " $")} <h6> change percentage {ChangeSlp} %</h6> </h4>} </h3>

                    <h3> AXS actual value: {isLoading ? (<div className="spinner-border text-light" role="status">
                    </div>) : <h4 className="text-danger text-center">{(axs + " $")} <h6> change percentage {changeAxs} %</h6> </h4>}</h3>


                </div>

                <div className="col-sm text-center d-flex flex-column form-group">

                    <div className="p-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" name="howMuchSlp" value={howMuchSlp} onChange={handleInputChange} placeholder="SLP" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text">{(howMuchSlp * slp).toFixed(1)} $</span>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input type="number" name="howMuchAxs" value={howMuchAxs} onChange={handleInputChange2} placeholder="AXS" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text">{(howMuchAxs * axs).toFixed(1)} $</span>
                        </div>
                    </div>
                </div>

                <button className="btn btn-lg btn-warning mt-4" onClick={handleClick} > refresh values</button>
            </div>


            <footer className="fixed-bottom text-center"> <p className="text-success">Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f</p></footer>
        </div>
    )
}
