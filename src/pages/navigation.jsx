import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Navigation = props => {
    return (
      <div className="navbar" style={{ display: "flex" }}>
        <Link to="" className="nav" disabled>
          Güncel Durum
        </Link>
        <Link to="/" className="nav" disabled>
          Yardım İstekleri
        </Link>
        <Link to="/" className="nav" disabled>
          Gönüllüler
        </Link>
        <Link to="/signin" className="nav" disabled>
          Giriş
        </Link>
      </div>
    )
}

Navigation.propTypes = {

}

export default Navigation
