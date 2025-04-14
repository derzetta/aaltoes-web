import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Silkway() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen bg-[#0000FF] text-white p-6 flex flex-col text-sm leading-tight"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <div className="max-w-3xl mx-auto w-full pt-16 px-8">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-sm font-bold tracking-wide font-['Geist_Mono']">
            PROJECT SILKWAY{cursorVisible ? <span className="ml-1">_</span> : <span className="ml-1 opacity-0">_</span>}
          </h1>
          <span className="text-sm font-normal font-['Geist_Mono']">FALL 25</span>
        </header>

        <main className="flex-1 font-['Geist_Mono']">
          <div className="space-y-8">
            <p className="text-sm leading-relaxed">
              We're dropping Finnish founders into China's tech ecosystem this fall. Not for tourism, but
              innovation.
            </p>

            <section className="space-y-1.5">
              <h2 className="font-normal mb-1.5 font-['Geist_Mono']">THE STACK</h2>
              <p>• Fully covered housing in Hangzhou</p>
              <p>• Dedicated workspace</p>
              <p>• Direct connections to Chinese capital, companies, and investors</p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-normal mb-1.5 font-['Geist_Mono']">HANGZHOU ECOSYSTEM</h2>
              <p>• Alibaba: E-commerce empire</p>
              <p>• DeepSeek: True Open-Source AI</p>
              <p>• Unitree: Robotics that dominate the market</p>
              <p>• Plus emerging "Little Dragons" reshaping global tech</p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-normal mb-1.5 font-['Geist_Mono']">WE ARE LOOKING FOR</h2>
              <p>• OSAI that ships</p>
              <p>• Robotics that works</p>
              <p>• Tech with traction</p>
            </section>

            <section className="space-y-1.5">
              <h2 className="font-normal mb-1.5 font-['Geist_Mono']">EXECUTION PLAN</h2>
              <p>• Remote: July-September</p>
              <p>• Live in Hangzhou: September-October</p>
            </section>

            <p className="text-sm leading-relaxed">
              This is your backdoor into the market most founders can't
              <br />
              crack. Don't sleep on it.
            </p>

            <div>
              <Link to="/apply" className="inline-block underline hover:no-underline" id="apply">
                Apply here
              </Link>
            </div>
          </div>

          <div className="my-8 border-t border-dashed border-white"></div>

          <footer className="text-sm mb-8">
            Powered by{" "}
            <Link to="/2025" className="underline hover:no-underline">
              Aaltoes 2025
            </Link>{" "}
            &{" "}
            <Link to="https://cetc.fi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              CETC
            </Link>
          </footer>
        </main>
      </div>
    </div>
  )
} 