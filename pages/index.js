import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from './../components/hero'
import data from './../data/homePage.json'

import "../styles/style.css"

export default () => <Hero data={data}/>
