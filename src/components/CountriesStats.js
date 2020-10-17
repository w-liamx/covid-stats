import React, { Component } from 'react'
import { connect } from 'react-redux'

export const CountriesStats = () => {
    return (
        <div>
            <h2>All Countries Statistics</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesStats)
