import React, { Component } from 'react'
class Coment extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (   
            <div>
                <input type='text' placeholder='escriba'/>
                <button>enviar</button>
            </div>
        )
    }
}
export default  Coment