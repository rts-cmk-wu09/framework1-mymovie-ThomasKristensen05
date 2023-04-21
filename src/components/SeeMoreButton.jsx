import styled from "styled-components"

const Button = styled.button `

    background-color: transparent;
    width: 80px;
    height: 30px;
    border-radius: 25px;
    font-size: 10px;
    letter-spacing: 2px;

`



const SeeMoreButton = () => {
    return ( 
        <Button>See More</Button>
     );
}
 
export default SeeMoreButton;