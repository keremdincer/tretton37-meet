import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CgMenuGridR, CgLayoutList } from 'react-icons/cg'
import { BiSortAZ } from 'react-icons/bi'
import { Employee, getAllEmployees } from '../api'
import SearchBar from '../global/SearchBar'
import GridItem from './GridItem'
import Header from './Header'
import List from './List'
import ListItem from './ListItem'
import Grid from './Grid'

type SortType = 'name' | 'office'

const Meet = () => {
  const [layout, setLayout] = React.useState<'grid' | 'list'>('grid')
  const [sort, setSort] = React.useState<SortType>('name')
  const [employees, setEmployees] = React.useState<Employee[]>([])
  const [search, setSearch] = React.useState<string>('')
  const [page, setPage] = React.useState<number>(1)

  const list = employees
    .filter(employee =>
      employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      employee.office.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      (employee.gitHub && employee.gitHub.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (employee.twitter && employee.twitter.toLowerCase().indexOf(search.toLowerCase()) !== -1) ||
      (employee.linkedIn && employee.linkedIn.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    )
    .sort((a, b) => a[sort].localeCompare(b[sort]))
    .splice(0, page * 20)

  useEffect(() => {
    getAllEmployees().then(employees => {
      setEmployees(employees)
    }).catch(error => { })
  }, [])

  return (
    <div>
      <Header>
        <h1>Meet the team</h1>
        <h2>The fellowship of the <span>tretton37</span></h2>
      </Header>

      <main>
        <Toolbar>
          <SearchBar onChange={(val: string) => setSearch(val)} />
          <section>
            <BiSortAZ size={24} />
            <select onChange={(e) => setSort(e.currentTarget.value as SortType)}>
              <option value="name">name</option>
              <option value="office">office</option>
            </select>
            <Switch layout={layout}>
              <button aria-label="Change to grid layout" disabled={layout === 'grid'} onClick={() => setLayout('grid')}><CgMenuGridR size={24} /></button>
              <button aria-label="Change to list layout" disabled={layout === 'list'} onClick={() => setLayout('list')}><CgLayoutList size={24} /></button>
            </Switch>
          </section>
        </Toolbar>

        {layout === 'grid' && (
          <Grid>
            {list.map(employee => (
              <GridItem key={employee.name} {...employee} />
            ))}
          </Grid>
        )}

        {layout === 'list' && (
          <List>
            {list.map(employee => (
              <ListItem key={employee.name} {...employee} />
            ))}
          </List>
        )}

        <Footer>
          <button onClick={() => setPage(page => page + 1)}>Load More</button>
        </Footer>
      </main>

    </div>
  )
}

const Toolbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 8px;
  height: 48px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;

  section {
    display: flex;
    align-items: center;

    select {
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      padding: 6px 4px 6px 6px;
      font-size: 16px;
      background-color: #eee;
    }
  }
`

const Switch = styled.div<{ layout: 'grid' | 'list' }>`
  button {
    border: 0;
    padding: 4px;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border-radius: 4px;
    width: 34px;
    height: 34px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 4px;

    &:disabled {
      background-color: ${props => props.theme.colors.secondary};
    }
  }

  @media (max-width: 768px) {
    button:disabled {
      display: none;
    }
  }
`

const Footer = styled.section`
  text-align: center;
  padding: 24px 0;

  button {
    border: 0;
    border-radius: 4px;
    background-color: ${(props => props.theme.colors.secondary)};
    color: #fff;
    padding: 12px 32px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;

    &:hover {
      background-color: ${(props => props.theme.colors.secondaryDarker)};
      transform: translate(0, -4px);
    }
  }
`

export default Meet
