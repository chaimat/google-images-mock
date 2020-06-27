import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props)

        this.imageRef = React.createRef();
        this.state = {span: 0}
    }
    // grid-row-end
    componentDidMount(){
        this.imageRef.current.addEventListener('load', () => {
            const height = this.imageRef.current.clientHeight;
            const span = Math.ceil(height / 10);

            this.setState({span: span}); 
        })
    }

    render(props){

        const {alt_description, urls} = this.props.image

        return (
        <div style={{gridRowEnd: `span ${this.state.span}`}}>
            <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
        </div>
        )
    }
}

export default ImageCard