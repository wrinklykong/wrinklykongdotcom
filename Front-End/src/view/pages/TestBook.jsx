import Book from "../../components/Book"
import { useParams } from "react-router-dom";

const TestBookPage = () => {

    const params = useParams()

    return (
        <div>
            <p>
                {params.bookId}
            </p>
            <br/>
            <Book id={params.bookId}/>
        </div>
    );
}

export default TestBookPage;