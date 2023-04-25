import styled from "styled-components"


const StyledHeading = styled((props) => props.as)`
    font-size: ${(props) => props.size}px;
    font-weight: ${(props) => props.weight}px;
    color: ${props => props.color};
    grid-column-start: 2;
    justify-self: center;
`
const Heading = (props) => {
    return <StyledHeading {...props}>{props.title}</StyledHeading>
}
export default Heading