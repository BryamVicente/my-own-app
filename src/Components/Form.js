import React from 'react'


class Form extends React.Component {

    state = {
        name: "",
        show: ""
       
    }

    onChangeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value})
    }

    onChangeHandlerShow = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.show]: e.target.value})
    }

    render(){
        return (
            <>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.submitHandler({name: e.target[0].value, show: e.target[1].value})
                    this.setState({name: "", show: ""})
                }}>
                    <input type="text" name="name" placeholder="enter name here" value={this.state.name} onChange={this.onChangeHandler} />
                    <input type="text" name="show" placeholder="enter name here" value={this.state.show} onChange={this.onChangeHandlerShow} />
                    <input type="url" placeholder="enter image url here" />
                    <input type="submit" value="create character" />
                </form>
            </>
        )
    }
}

export default Form; 

// --------------- Notes for Instructors -------------------------//

// I have an idea of how to do this lab, but I got confused with the many different attributes that we needed to create
//I was able to create a form that creates a character based on the name
//I could't create a character that also included the show or the image
//I atleast got the search working!