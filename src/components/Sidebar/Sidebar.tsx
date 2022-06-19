
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { SideBarItem, SideBarWrapper } from './Sidebar.styles'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <SideBarWrapper>
      <span>a</span>
      <span>b</span>
      <SideBarItem className='abc' primary><h3>abcd</h3></SideBarItem>
      <SideBarItem>d</SideBarItem>
    </SideBarWrapper>
  )
}