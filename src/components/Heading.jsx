import styled from "styled-components"


const StyledHeading = styled.h1`
    font-size: ${props => props.size}px;
`
const Heading = (props) => {
    return <StyledHeading size={props.size}>{props.title}</StyledHeading>
}
export default Heading