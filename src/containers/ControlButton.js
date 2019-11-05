import React, { Component } from 'react'

import { connect } from 'react-redux'
import { appStart } from '../store/modules/app'

class ControlButton extends Component {

    handleClick = () => {

        const { appStart } = this.props

        appStart()

    }

    render() {

        const { start } = this.props

        return (
            <button onClick={ this.handleClick }>

                { !start ? '게임시작' : '게임재시작' }
        
            </button>
        )

    }

}

const mapState = ({ app: { start }}) => ({ start })

const mapDispatch = { appStart }

export default connect(
    mapState,
    mapDispatch
)(ControlButton)