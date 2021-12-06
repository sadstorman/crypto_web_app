import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../styles/cards.css'

export const Home = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const [pvu, setPvu] = useState('')
    const [changePvu, setChangePvu] = useState('')

    const [eternal, setEternal] = useState('')
    const [changeEternal, setChangeEternal] = useState('')

    const [slp, setSlp] = useState('')
    const [changeSlp, setChangeSlp] = useState('')
    const [axs, setAxs] = useState('')
    const [changeAxs, setChangeAxs] = useState('')

    const handleClick = () => {
        setIsClicked(!isClicked)
        setIsLoading(!isLoading)
    }

    const getData = async () => {
        const resp = await axios.get('https://api.coingecko.com/api/v3/coins/plant-vs-undead-token')
        const usdPvu = resp.data.market_data.current_price.usd
        const changePvu = resp.data.market_data.price_change_percentage_24h
        setPvu(`${usdPvu}`)
        setChangePvu(changePvu)

        const resp2 = await axios.get('https://api.coingecko.com/api/v3/coins/cryptomines-eternal')
        const usdEt = resp2.data.market_data.current_price.usd
        const changeEt = resp2.data.market_data.price_change_percentage_24h
        setEternal(`${usdEt}`)
        setChangeEternal(changeEt)

        const resp3 = await axios.get('https://api.coingecko.com/api/v3/coins/smooth-love-potion')
        const resp4 = await axios.get('https://api.coingecko.com/api/v3/coins/axie-infinity')

        const usdAxs = resp4.data.market_data.current_price.usd
        const changeAxs = resp4.data.market_data.price_change_percentage_24h
        const changeSlp = resp3.data.market_data.price_change_percentage_24h
        const usdSlp = resp3.data.market_data.current_price.usd
        setSlp(`${usdSlp}`)
        setChangeSlp(`${changeSlp}`)
        setAxs(`${usdAxs}`)
        setChangeAxs(`${changeAxs}`)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()

    }, [isLoading, setPvu, setEternal, setSlp, setChangeSlp, setAxs, setChangeAxs])

    return (
        <div >
            <h1 className="text-center">Home</h1>
            <div className="text-center">
                <button className="btn btn-lg btn-primary mb-2 w-100 botoncito" onClick={handleClick} > refresh values</button>
            </div>

            {
                isLoading ? ((<div className="d-flex justify-content-center margin"> <div className="spinner-border text-center text-light" style={{ width: "12rem", height: "12rem" }} role="status">
                </div></div>)) : (<div className="container margen">

                    <div className="row d-flex ">

                        <div className="card-group text-center d-flex justify-content-between gap-4 ">
                            <div className="card rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center ">
                                    <img className="rounded mx-auto  h-50" src='/pvu.png' alt="pvu" />
                                    <h4 className="card-title bold">PVU</h4>
                                    <p className="card-text">{pvu} $</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{changePvu} %</small>
                                </div>
                            </div>

                            <div className="card rounded">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <img className="rounded mx-auto  h-50" src="/eternal.png" alt="Eternal" />
                                    <h4 className="card-title bold">ETERNAL</h4>
                                    <p className="card-text">{eternal} $</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{changeEternal} %</small>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row ">

                        <div className="card-group  text-center d-flex justify-content-between gap-4">
                            <div className="card rounded mt-4" >
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <img className="rounded mx-auto  h-50" src="/slp.png" alt="SLP" />
                                    <h4 className="card-title bold">SLP</h4>
                                    <p className="card-text">{slp} $</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{changeSlp} %</small>
                                </div>
                            </div>

                            <div className="card rounded mt-4 ">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <img className="rounded mx-auto h-50" src="/axs.png" alt="AXS" />
                                    <h4 className="card-title bold">AXS</h4>
                                    <p className="card-text">{axs} $</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{changeAxs} %</small>
                                </div>
                            </div>
                        </div>

                    </div>

                    <footer className="footer text-center margen"> <p className="text-success">Ayudame a salir de argentina: 0x0b4b8Df226D71620AC68FaC561E69aA13e02987f</p></footer>

                </div>)
            }

        </div>
    )
}
