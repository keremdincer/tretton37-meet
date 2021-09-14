import React from 'react'
import styled from 'styled-components'
import {
  SiLinkedin,
  SiGithub,
  SiTwitter
} from 'react-icons/si'
import { Employee } from '../api'

const ListItem: React.FC<Employee> = ({ imagePortraitUrl, name, office, gitHub, linkedIn, twitter }) => {
  return (
    <tr>
      <Td shrink><img src={imagePortraitUrl + '-small'} alt={name} /></Td>
      <Td>{name}</Td>
      <Td>{office}</Td>
      <Td shrink>{gitHub && <a href={gitHub}><SiGithub /></a>}</Td>
      <Td shrink>{linkedIn && <a href={linkedIn}><SiLinkedin /></a>}</Td>
      <Td shrink>{twitter && <a href={twitter}><SiTwitter /></a>}</Td>
    </tr>
  )
}

const Td = styled.td<{ shrink?: boolean }>`
  white-space: nowrap;
  padding: 4px 8px;
  width: ${props => props.shrink ? '1px' : 'auto'};

  &:last-child {
    padding-right: 18px;
  }

  img {
    height: 42px;
    border-radius: 4px;
  }

  a {
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
    &:hover {
      color: ${props => props.theme.colors.primaryDarker};
    }
  }
`

export default ListItem