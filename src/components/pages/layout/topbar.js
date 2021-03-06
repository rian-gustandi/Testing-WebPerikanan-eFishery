import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class topbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to='#' class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
          eFishery
        </Link>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
          data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    )
  }
}
