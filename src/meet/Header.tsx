import styled from "styled-components";

export default styled.header`
padding: 32px 0;

h1, h2 {
  margin: 0;
  color: ${props => props.theme.colors.primary};
}

h1 {
  color: ${props => props.theme.colors.secondary};
  text-shadow: 0 1px 2px ${props => props.theme.colors.primary};
  margin-bottom: 8px;
}

h2 > span {
  color: ${props => props.theme.colors.secondary};
}
`