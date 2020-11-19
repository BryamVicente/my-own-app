import React from 'react'
import Character from '../Components/Character'
import Form from '../Components/Form'
import Search from '../Components/Search'
import characters from '../api'

class CharacterContainer extends React.Component {

    state = {
        characters: characters,
        searchValue: ""
    }
    
    searchHandler = (e) => {
        console.log(e.target.value)
        this.setState({searchValue: e.target.value})
    }

    filteredCharacters = () => {
        return this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }

    // filteredCharactersShow = () => {
    //     return this.state.characters.filter(character => character.show.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    // }

    submitHandler = (object) => {
        // console.log(e.target[1])
        // here we copy the array 
        let newArray = [...this.state.characters, object]
        // console.log(newArray)
        this.setState({characters: newArray})
    }


    render(){

        let characters = this.filteredCharacters().map(characterObj => <Character character={characterObj} />)
        return (
            <>
                <Form submitHandler={this.submitHandler} />
                <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                <br/>
                <h3>CharacterList</h3>
                {characters}
            </>
        )
    }
}

export default CharacterContainer;