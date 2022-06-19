import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { LayoutWrapper } from './Layout.styles'

type Props = {}

export default function Layout({}: Props) {
  return (
    <LayoutWrapper><Header/>
    <Sidebar/></LayoutWrapper>
  )
}