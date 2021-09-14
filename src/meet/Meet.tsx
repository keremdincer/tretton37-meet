import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
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

const Toolbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 16px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
`

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.section`
  width: 200px;
  height: 266px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GridFooter = styled.section`
  text-align: center;
  padding: 24px 0;

  button {
    border: 0;
    border-radius: 4px;
    background-color: ${(props => props.theme.colors.secondary)};
    color: #fff;
    padding: 12px 32px;
  }
`

const Meet = () => {
  return (
    <div>
      <Header>
        <h1>Meet the team</h1>
        <h2>The fellowship of the <span>tretton37</span></h2>
      </Header>

      <main>
        <Toolbar>
          <span>Search</span>
          <span>Grid/List Switch</span>
        </Toolbar>

        <Grid>
          {Array.from(Array(10).keys()).map(i => (
            <Card key={i}>
              {i}
            </Card>
          ))}
        </Grid>

        <GridFooter>
          <button>Load More</button>
        </GridFooter>
      </main>

    </div>
  )
}

export default Meet
