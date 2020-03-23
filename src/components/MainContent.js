import React from "react"

class MainContent extends React.Component {
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg:"",
            allMemeImgs:[],
        }
        this.textHandler = this.textHandler.bind(this)
        this.generate = this.generate.bind(this)
    }


    textHandler(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    generate(e) {
        e.preventDefault()
        const randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomUrl = this.state.allMemeImgs[randomIndex].url

        this.setState({
            randomImg: randomUrl
        })
    }


    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(res=> {
                this.setState({
                    allMemeImgs:res.data.memes,
                    randomImg:res.data.memes[2].url
                })
            })
    }



    render() {
        return (
            <div>
                <form id="meme-form" onSubmit={this.generate}>
                    <input placeholder="top text" type="text" name="topText" onChange={this.textHandler}/>
                    <input placeholder="bottom text" type="text" name="bottomText" onChange={this.textHandler}/>
                    <button>Generate Next</button>
                </form>
                <div id="meme-container">
                    <img alt="troll" src={this.state.randomImg} className="meme-img" />
                    <div className="top-text">{this.state.topText}</div>
                    <div className="bottom-text">{this.state.bottomText}</div>
                </div>
            </div>
        )
    }
}

export default MainContent