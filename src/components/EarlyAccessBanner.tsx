import { FaInfoCircle } from 'react-icons/fa'

function EarlyAccessBanner() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 mb-8 flex items-center gap-3">
      <FaInfoCircle className="text-zinc-300 flex-shrink-0" />
      <p className="text-zinc-300 text-sm">
        This website is in early development. Some information might be inaccurate or incomplete.
      </p>
    </div>
  )
}

export default EarlyAccessBanner 