import React from 'react'
import styled from 'styled-components'

interface Props { }

const List: React.FC<Props> = ({ children }) => (
  <Wrapper>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Office</th>
          <th colSpan={3}>Links</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  </Wrapper>
)

const Wrapper = styled.div`
  overflow-y: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      background-color: #fff;
      border: 1px solid #ccc;
      color: ${props => props.theme.colors.primary};

      th {
        text-align: left;
        padding: 4px 8px;
        font-size: 14px;
      }
    }
  }
`

export default List