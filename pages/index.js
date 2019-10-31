import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from './../components/hero'
import data from './../data/homePage.json'

import "../styles/style.css"

export default () => {
    return(
        <div>
            <Hero data={data}/>
            <Head>
                <title>WildeHart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        </div>
        )
}