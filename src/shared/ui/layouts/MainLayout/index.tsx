import React from "react";
import s from './styles.module.sass'

export type MainLayoutProps = {
  topBar: React.ReactNode
  children: React.ReactNode
}

const MainLayout = ({topBar, children}: MainLayoutProps) => {
  return (
    <div className={s.MainLayout}>
      {topBar}
      {children}
    </div>
  )
}

export default MainLayout
