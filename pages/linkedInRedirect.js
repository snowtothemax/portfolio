import React from 'react'
import Router from 'next/router'

export default class extends React.Component{
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(301, { Location: "https://www.linkedin.com/in/maxwell-johnson-4a1111179/" })
        res.end()
      } else {
        window.location = "https://www.linkedin.com/in/maxwell-johnson-4a1111179/"
      }

      return {}
    }
  }