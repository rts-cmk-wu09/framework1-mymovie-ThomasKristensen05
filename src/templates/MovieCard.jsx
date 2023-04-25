import Image from "../components/Image";
import Heading from "../components/Heading"
import MovieRating from "../components/MovieRating";
import styled from "styled-components";

const StyledArticle = styled.article`
    height: 283px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MovieCard = () => {
    return ( 
        <StyledArticle>
            <figure>
                <Image />
            </figure>
            <Heading title="Movie Name" size="14" weight="bold" color="black" as="h3" /> 
            <MovieRating />
        </StyledArticle>
     );
}
 
export default MovieCard;