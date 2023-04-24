import styled from "styled-components";
import coverimage from "../assets/Poster.png"

const StyledImg = styled.img `
    box-shadow: 0px 5px 10px rgb(0 0 0 / 0.5);

`

const Image = () => {
    return ( 
        <StyledImg src={coverimage} alt="<lkjsdhf" />
     );
}
 
export default Image;