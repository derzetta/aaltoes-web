import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className={`page-container ${className}`}>
        {children}
      </div>
      <Footer />
    </div>
  )
} 