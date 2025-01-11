import Footer from '../components/Footer'

interface TeamMemberProps {
  name: string
  role: string
  image: string
  email: string
  telegram?: string
  linkedin?: string
}

function TeamMember({ name, role, image, email, telegram, linkedin }: TeamMemberProps) {
  return (
    <div className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-all hover:bg-black/40 hover:border-white/20">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
          />
        </div>
        <div>
          <h3 className="font-mono text-white/90 text-lg tracking-wide mb-1">{name}</h3>
          <p className="font-sans text-white/60 text-sm">{role}</p>
        </div>
        <div className="flex gap-4">
          <a 
            href={`mailto:${email}`}
            className="text-white/50 hover:text-white/70 transition-colors"
            title="Email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z" />
            </svg>
          </a>
          {telegram && (
            <a 
              href={`https://t.me/${telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors"
              title="Telegram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645 c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l-0.332,4.99c0.322,0,0.464-0.147,0.464-0.147l2.222-2.164l4.626,3.41 c0.852,0.47,1.464,0.227,1.676-0.785l3.04-14.707C22.056,4.286,21.474,3.418,20.665,3.717z" />
              </svg>
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="absolute inset-0 -m-[1px] rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

function Team() {
  const teamMembers = [
    {
      name: "Nantte Kivinen",
      role: "President",
      image: "/team/nantte.jpg",
      email: "nantte.kivinen@aaltoes.com",
      telegram: "nanttekivinen",
      linkedin: "https://linkedin.com/in/nanttekivinen"
    },
    {
      name: "Yeralkhan Slam",
      role: "Partnerships & Finance",
      image: "/team/yera.jpg",
      email: "yera.slam@aaltoes.com",
      telegram: "yeralkhan",
      linkedin: "https://linkedin.com/in/yeralkhan"
    },
    // Add more team members here
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="page-container">
        <h1 className="page-title">Our Team</h1>
        <div className="title-divider" />
        
        <div className="content-section">
          <p className="text-content mb-12">
            Meet the dedicated team behind Aaltoes 2025. We're a group of passionate individuals 
            working together to foster entrepreneurship and innovation in the Aalto community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Team 