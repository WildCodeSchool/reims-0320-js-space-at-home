import React from 'react'

class Moons extends React.Component{
    constructor(props){
        super(props)
        this.state(test)
    }
    render(){
        return(
            <h1>Moons</h1>
            <ul>
                <li>Earth : Moon</li>
                <li>Mars : Phobos, Deimos</li>
                <li>Jupiter : IO, Europe, Ganymède, Callisto</li>
                <li>Saturne: Mimas, Encelade, Téthys, Dioné, Rhéa, Titan, Hyperion, Japet, Phoebé</li>
                <li>Uranus : Puck , Miranda, Ariel, Umbriel, Titania, Obéron</li>
                <li>Neptune  : Triton,, Néréide</li>
                <li>PLuton : Charon</li>
            </ul>
        )
    }
}

export default Moons