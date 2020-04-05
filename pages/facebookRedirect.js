import React from 'react'
import Router from 'next/router'

export default class extends React.Component{
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(301, { Location: "https://www.facebook.com/nick.licker.98" })
        res.end()
      } else {
        window.location = "https://www.facebook.com/nick.licker.98"
      }

      return {}
    }
  }