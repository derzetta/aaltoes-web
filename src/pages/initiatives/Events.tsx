import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

interface EventCardProps {
  title: string;
  description: string;
  percentage: string;
  delay?: number;
}

const EventCard = ({ title, description, percentage, delay = 0 }: EventCardProps) => (
  <motion.div
    className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-xl p-6 group hover:bg-zinc-900/30 transition-colors"
    {...fadeIn}
    transition={{ ...fadeIn.transition, delay }}
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-xl font-medium text-zinc-100">{title}</h3>
      <span className="text-2xl font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">{percentage}</span>
    </div>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

export default function Events() {
  const eventTypes = [
    {
      title: "Hackathons & Building Sessions",
      description: "Intensive hands-on events focused on creating and shipping products. From weekend hackathons to week-long building sprints.",
      percentage: "70%"
    },
    {
      title: "Speaker Events",
      description: "Curated talks from industry leaders, successful founders, and technical experts, maintaining our traditional knowledge sharing.",
      percentage: "20%"
    },
    {
      title: "Community Gatherings",
      description: "Social events, networking sessions, and informal meetups to strengthen our builder community.",
      percentage: "10%"
    }
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-24 pb-24">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-4">
            <Link to="/2025">
              <img src="/bank/aaltoes_white.svg" alt="Aaltoes Logo" className="h-8" />
            </Link>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-zinc-950/90" />
          <img 
            src="/bank/events.jpg" 
            alt="Events Evolution"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-12">
            <motion.div
              className="max-w-4xl"
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              <h1 className="text-7xl font-medium text-zinc-100 mb-6">Events Evolution</h1>
              <p className="text-2xl text-zinc-300 leading-relaxed">
                A major shift towards hands-on building with 10x increase in hackathon funding.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-100/10">
          <iframe
            src="https://www.youtube.com/embed/k2uiHDZe66k?start=200"
            title="Events Evolution Announcement"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Content */}
        <div className="space-y-16">
          <motion.div
            className="space-y-6"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
          >
            <h2 className="text-3xl font-medium text-zinc-100">The Shift to Building</h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
              Events have been the cornerstone of Aaltoes since 2009. While maintaining our traditional speaker events, we're making a significant shift towards hands-on building and creation. Our new event distribution reflects this change:
            </p>
          </motion.div>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <EventCard
                key={event.title}
                {...event}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="bg-zinc-950/30 backdrop-blur-sm border border-zinc-100/10 rounded-2xl p-8"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.7 }}
          >
            <h3 className="text-2xl font-medium text-zinc-100 mb-4">10x Hackathon Funding</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We're increasing our hackathon funding tenfold to support this shift. This investment will provide better resources, tools, and prizes for builders, making Aaltoes events the premier platform for creating and launching new projects.
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.div 
          className="flex justify-center pt-12"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.8 }}
        >
          <Link 
            to="/2025"
            className="base-button inline-flex items-center justify-center group"
          >
            <span className="relative z-10 uppercase">Back to Initiatives</span>
            <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>
    </Layout>
  )
} 