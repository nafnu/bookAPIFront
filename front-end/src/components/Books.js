//component to view all dogs
import React from "react";
import axios from 'axios';


class Books extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          books: [],
          isLoaded: true
        }
     
    }

    componentDidMount(){

        axios.get('/book')
            .then((response) => {
           
                this.setState( {
                    books: response.data,
                    isLoaded: true
                })
                
            })
            .catch((error)=> {
            // handle error 
            // in case we get an error from the server, e.g. the server is offline
                this.setState({
                    isLoaded:false,
                    error
                })
                
            })
       
           
    }


    render(){
        //assign variables using the state
        const { isLoaded, books} = this.state;
        
        //conditional rendering: https://reactjs.org/docs/conditional-rendering.html
        //if we are waiting for our server to serve us the data render this part of code
        // also render this if the SERVER is offline
        if(!isLoaded){
            return(
                <div>The page is loading or the SERVER is down...</div>
            )
        //render this part of code if we received the data from the server
        } else {
            return(
                <div>
                    <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                            <th>Year Publication</th>
                            <th>Publishing House</th>
                        </tr>
                    </thead>

                    <tbody>
                        {books.map(book => (
                        <tr key={book._id}>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td >{book.author}</td>
                            <td >{book.ISBN}</td>
                            <td >{book.yearPublication}</td>
                            <td >{book.publishingHouse}</td>
                    </tr>
                    ))}
                    </tbody> 
                    </table>
              </div>  
            )
        }
    }
}
    

export default Books;