import {Link, useNavigate} from 'react-router-dom';

const Book = (props) => {

    let navigate = useNavigate();
    console.log(props);
    let book  = props.member;
    return(
        <div>
            <p>
            {book.name}
            </p>
            <p>
                <p><Link Link to={"/viewBook?id="+book._id}>View </Link></p>

                <p><Link Link to={`/editBook?id=${book._id}`}>Edit </Link></p>
            </p>
        </div>
  
    )
}

export default Book;
