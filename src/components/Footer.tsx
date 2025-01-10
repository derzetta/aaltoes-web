import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10 py-4 px-6">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 text-xs">
        <Link 
          to="/" 
          className="font-mono text-white/50 hover:text-white/70 transition-colors uppercase tracking-wider"
        >
          Home
        </Link>
        <Link 
          to="/billing-info" 
          className="font-mono text-white/50 hover:text-white/70 transition-colors uppercase tracking-wider"
        >
          Billing
        </Link>
        <Link 
          to="/code-of-conduct" 
          className="font-mono text-white/50 hover:text-white/70 transition-colors uppercase tracking-wider"
        >
          Code of Conduct
        </Link>
        <Link 
          to="/privacy-notice" 
          className="font-mono text-white/50 hover:text-white/70 transition-colors uppercase tracking-wider"
        >
          Privacy Notice
        </Link>
      </div>
    </footer>
  )
}

export default Footer 