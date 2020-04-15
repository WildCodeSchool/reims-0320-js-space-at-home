import React from 'react'

class PictureDay extends React.Component{
    constructor(){
        super()
        this.state = {
            url: "https://via.placeholder.com/150",
            concept: null
        }
    }



    render(){
        return(
            <>
            <img src={this.state.url} alt=""/>
            <p>Affichage svp</p>
            </>
        )
    }
}

export default PictureDay