const Footer = () => {
  return (
    <footer className="border-t border-glow/10 bg-night/90 px-6 py-10 text-sm text-glow/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Appizzo Collection. Crafted for luminous encounters.</p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com" className="hover:text-glow" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.behance.net" className="hover:text-glow" target="_blank" rel="noreferrer">
            Behance
          </a>
          <a href="mailto:hello@appizzo.studio" className="hover:text-glow">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
