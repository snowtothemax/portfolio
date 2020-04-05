import React from 'react'
import Router from 'next/router'

export default class extends React.Component{
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(301, { Location: "https://github.com/snowtothemax" })
        res.end()
      } else {
        window.location = "https://github.com/snowtothemax"
      }

      return {}
    }
  }