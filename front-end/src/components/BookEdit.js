//component to edit a dog entry
import axios from 'axios';

import React from 'react';

class BookEdit extends React.Component{
    constructor(props){
        super(props);
        let _id = window.location.href.split('=')[1]
        this.state = {
            id: _id,
            title: '',
            author: '',
            ISBN: '',
            yearPublication: '',
            publishingHouse: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){

        axios.get(`/book/${this.state.id}`)
            .then((response) =>{

                this.setState({
                    title : response.data.title,
                    author : response.data.author,
                    ISBN: response.data.ISBN,
                    yearPublication: response.data.yearPublication,
                    publishingHouse: response.data.publishingHouse
                })
            }).catch(err=>{


            })
    }
    handleInputChange(event){

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const title = target.title;

        this.setState({
        [title]: value
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

        axios.put(`/member/${this.state.id}`, params, config)
            
            .then((response)=>{

                window.location.href = '/'
            }).catch(()=>{

            })

        event.preventDefault();
    }
    render(){
        return(
            <div> <form onSubmit={this.handleSubmit}>
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

export default BookEdit;
