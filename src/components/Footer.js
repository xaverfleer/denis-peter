import React from 'react'

const Footer = ({ email }) => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            className="icon fa-facebook"
            href="https://www.facebook.com/Permakultur-Hand-Werk-119926523203357/"
            rel="noreferrer"
            target="_blank"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${email}`}
            className="icon fa-envelope-o"
            rel="noreferrer"
            target="_blank"
          >
            <span className="label">E-Mail</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          &copy; <a href="mailto:xaver.fleer@gmail.com">Xaver Fleer</a>
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
