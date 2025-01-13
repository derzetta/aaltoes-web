import { FaInfoCircle } from 'react-icons/fa'

function EarlyAccessBanner() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-8 flex items-center gap-3">
      <FaInfoCircle className="text-white/70 flex-shrink-0" />
      <p className="text-white/70 text-sm">
        This website is in early development. Some information might be inaccurate or incomplete.
      </p>
    </div>
  )
}

export default EarlyAccessBanner 