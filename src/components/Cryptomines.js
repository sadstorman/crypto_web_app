import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const Cryptomines = () => {
    let word = '-'

    const [eternal, setEternal] = useState('')
    const [changeEternal, setChangeEternal] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    const [formValues, handleInputChange] = useForm({ howMuchSlp: '' })
    const { howMuchSlp } = formValues

    const handleClick = () => {
        setIsClicked(!isClicked)
        setIsLoading(!isLoading)
    }


    const getData = async () => {
        const resp = await axios.get('https://api.coingecko.com/api/v3/coins/cryptomines-eternal')
        const usdEt = resp.data.market_data.current_price.usd
        const changeEt = resp.data.market_data.price_change_percentage_24h
        setEternal(`${usdEt}`)
        setChangeEternal(`${changeEt}`)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()

    }, [setEternal, isLoading])

    return (
        <div className="container">
            <h2 className="text-center">Cryptomines</h2>

            <div className="row mt-4">


                <div className="col-sm">
                    <h3> Eternal actual value: {isLoading ? (<div className="spinner-border text-light" role="status">
                    </div>) : ((changeEternal.includes(word)? (<h4 className="text-danger text-center">{eternal} $<h6 className="mt-1"> change percentage {(changeEternal * 1).toFixed(2)} %</h6> </h4>) : (<h4 className="text-success text-center">{eternal} $<h6 className="mt-1"> change percentage {(changeEternal * 1).toFixed(2)} %</h6> </h4>)))}</h3>

                </div>

                <div className="col-sm text-center d-flex flex-column form-group">

                    <div className="p-4">
                        <div className="input-group mb-3 mt-2">
                            <span className="input-group-text">$</span>
                            <input type="number" name="howMuchSlp" value={howMuchSlp} onChange={handleInputChange} placeholder="Eternal" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <span className="input-group-text">{(howMuchSlp * eternal).toFixed(1)} $</span>
                        </div>
                    </div>

                </div>

                <button className="btn btn-lg btn-warning mt-2" onClick={handleClick} > refresh values</button>
            </div>


            <footer className="fixed-bottom text-center"> <p className="text-success">Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f</p></footer>
        </div>
    )
}
