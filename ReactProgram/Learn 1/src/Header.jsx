import React from 'react'

function Header() {
  return (
     <header>
  <a href="/" class="logo">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/006/627/369/small/cool-monkey-logo-design-illustrator-free-vector.jpg"
      alt="Cool Monkey Logo"
    />
  </a>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/work">Work</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
  )
}

export default Header