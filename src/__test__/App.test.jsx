import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Save } from 'react-feather'

import Navbar from '../Navbar'
import NewtaskButton from '../Newtask/NewtaskButton'
import parser from '../Utils/Parser'

describe('Unit Test', () => {
  it('Navbar component render correctly', async () => {
    render(<Navbar />)
    expect(screen.getByText(/tasks list/i)).toBeDefined()
  })

  it('NewtaskButton component render correctly', async () => {
    const col = ""
    const backgr = ""
    render(<NewtaskButton Icon={Save} tit='Add' style={col, backgr}/>)
    expect(screen.getByText(/Add/)).toBeDefined()
  })

  it('Parser do not format an input string without @, #, an email or a link', async () => {
    expect('hello').equal(parser('hello', 'task'))
  })

  it('Parser can format an input string with a @, a #, an email and a link', async () => {
    expect('<span id="attask">@marie</span>').equal(parser('@marie','task'))
    expect('<span id="hashtask">#sport</span>').equal(parser('#sport','task'))
    expect('<span id="mailtask">marie@mail.dev</span>').equal(parser('marie@mail.dev','task'))
    expect('<span id="linktask">www.marie.dev</span>').equal(parser('www.marie.dev','task'))
  })
  
})
