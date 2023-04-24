import styled from "styled-components"

const Button = styled.button `

    background-color: white;
    width: 61px;
    height: 21px;
    border-radius: 25px;
    font-size: 10px;
    color: #aaa9b1;
    border: solid 1px;
    border-color: #aaa9b1;

`



const SeeMoreButton = () => {
    return ( 
        <Button>See More</Button>
     );
}
 
export default SeeMoreButton;