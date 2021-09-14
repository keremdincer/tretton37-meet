import React from 'react'
import styled from 'styled-components'
import {
  SiLinkedin,
  SiGithub,
  SiTwitter
} from 'react-icons/si'
import { Employee } from '../api'

const GridItem: React.FC<Employee> = ({ name, office, imagePortraitUrl, gitHub, linkedIn, twitter }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imagePortraitUrl + '-medium'} alt={`${name}`} />
      </ImageWrapper>
      <ItemBody>
        <h3>{name}</h3>
        <p>{office}</p>
      </ItemBody>
      <Links>
        {gitHub && <a href={`https://github.com/${gitHub}`}><SiGithub /></a>}
        {linkedIn && <a href={`https://linkedin.com${linkedIn}`}><SiLinkedin /></a>}
        {twitter && <a href={`https://twitter.com/${twitter}`}><SiTwitter /></a>}
      </Links>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #fff;
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 200px;
  min-width: 200px;
  overflow: hidden;

  &:hover {
    border-color: ${props => props.theme.colors.secondary};
    transition: border-color 0.3s;
  }
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 266px;
  overflow: hidden;

  img {
    max-height: 100%;
    height: 100%;
  }
`

const ItemBody = styled.div`
  padding: 0 8px 8px 8px;
  flex: 1 0 auto; // for IE10+

  h3 {
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
    margin: 8px 0;
  }

  p {
    color: ${props => props.theme.colors.secondaryDarker};
    font-weight: 500;
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px;

  a {
    color: ${props => props.theme.colors.primary};
    margin: 6px 4px;
    font-size: 22px;

    &:hover {
      color: ${props => props.theme.colors.primaryDarker};
      transform: scale(1.2);
      transition: transform 0.3s, color 0.3s;
    }
  }
`

export default GridItem
