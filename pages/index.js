import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from './../components/hero'
import data from './../data/homePage.json'

export default () => <Hero data={data}/>
