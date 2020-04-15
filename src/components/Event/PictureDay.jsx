import React from 'react'
import Axios from 'axios'

class PictureDay extends React.Component{
    constructor(){
        super()
        this.state = {
            url: "https://via.placeholder.com/550",
            concept: "Reste à l'écran"
        }
        this.getPicture = this.getPicture.bind(this)
    }

    componentDidMount() {
        this.getPicture();
      } 

    getPicture = () => {
        Axios.get("https://api.nasa.gov/planetary/apod?api_key=tJEyrCHFpmMVohJmDqxBnDac7xXMWQeEUeYNIcKc")
            .then((response) => response.data)
            .then((data) => {
                this.setState({
                    url: data.url,
                    concept: data.explanation
                })
            })
    }

    render(){
        return(
            <>
            <img src={this.state.url} alt=""/>
            <p>{this.state.concept}</p>
            </>
        )
    }
}

export default PictureDay