import Image from "../components/Image";
import Heading3 from "../components/Heading3"
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
            <Heading3 />
            <MovieRating />
        </StyledArticle>
     );
}
 
export default MovieCard;