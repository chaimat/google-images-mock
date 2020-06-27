import React from 'react';
import unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state = {images: []}

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {params: {query: term}})
        this.setState({images: response.data.results})
    }

    render(){
        return(
            <div style={{width: '90%', margin: '10px auto'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <p>Found Results: {this.state.images.length}</p>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App