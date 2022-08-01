import React from 'react'
import { ReactComponent as IconGithub } from '../assets/github.svg';
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>By <a href='https://github.com/aridsm'> Ariane Morelato <IconGithub /></a></p>
    </footer>
  )
}

export default Footer