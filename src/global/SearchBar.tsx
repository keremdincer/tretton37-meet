import React from 'react'
import styled from 'styled-components'

interface Props {
  onChange: CallableFunction
}

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
  padding: 2px 8px;
  display: flex;
  align-items: center;
  overflow: hidden;

  input {
    border: 0;
    outline: none;
    padding: 6px 4px 6px 6px;
    font-size: 16px;
    max-width: 160px;
    min-width: 160px;
    width: 160px;
    background-color: #eee;
  }
`

export default SearchBar
