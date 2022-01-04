// component to add a dog
import React from 'react';
import axios from 'axios';

class BookAdd extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            author: '',
            ISBN: '',
            yearPublication: '',
            publishingHouse: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event){

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
        
      
    }

    handleSubmit(event) {

        const params = new URLSearchParams()
        params.append('title', this.state.title);
        params.append('author', this.state.author);
        params.append('ISBN', this.state.ISBN);
        params.append('yearPublication', this.state.yearPublication);
        params.append('publishingHouse', this.state.publishingHouse);
        const config = {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        }


        axios.post("/book", params, config)
         
            .then((response)=>{

                window.location.href = '/'
            }).catch(()=>{

        })

        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Title:
                    <input type="text" name="name" value={this.state.title} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                    Author:
                    <input type="text" name="gender" value={this.state.author} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                    ISBN:
                    <input type="text" name="yearOfBirth" value={this.state.ISBN} onChange={this.handleInputChange} />
                    </label>
                    <label>
                    Year Publication:
                    <input type="text" name="yearOfBirth" value={this.state.yearPublication} onChange={this.handleInputChange} />
                    </label>
                    <label>
                    Publishing House:
                    <input type="text" name="yearOfBirth" value={this.state.publishingHouse} onChange={this.handleInputChange} />
                    </label>
                </form>

            </div>
        )
    }
}

export default BookAdd
