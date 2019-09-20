import React from "react"
import Header from "./Header"
// import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default Layout
