import './css/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../src/components/Home'

ReactDOM.hydrate(<Home /> , document.getElementById("root"))