function Footer() {
  const socialLinks = [
    { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
    { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
    { href: 'https://twitter.com', icon: 'fab fa-x-twitter', label: 'X / Twitter' },
    { href: 'https://youtube.com', icon: 'fab fa-youtube', label: 'YouTube' },
  ]

  return (
    <footer
      className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4 px-4 px-md-5"
      /*
        Deep midnight blue background — a rich blend of black with a hint of blue
        for a premium, modern dark footer aesthetic.
      */
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Left: Copyright text */}
      <div className="text-secondary small mb-3 mb-md-0 ms-md-3 text-center text-md-start">
        &copy; 2026 &mdash; Traditional Designer Studio (Made in India)
      </div>

      {/* Right: Social media icons */}
      <div className="d-flex gap-3">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-light link-opacity-75 link-opacity-50-hover text-decoration-none"
            aria-label={label}
          >
            <i className={`${icon} fa-lg`}></i>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
