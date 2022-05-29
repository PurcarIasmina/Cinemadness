import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const params = useParams();

    return <h1>{params.movieId}</h1>
};

export default MovieDetails;