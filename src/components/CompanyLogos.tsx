function CompanyLogos() {
  const companies = [
    {
      name: 'Linear',
      logo: '/logos/linear.svg',
      url: 'https://linear.app'
    },
    {
      name: 'Wolt',
      logo: '/logos/wolt.svg',
      url: 'https://wolt.com'
    },
    {
      name: 'Smartly',
      logo: '/logos/smartly.svg',
      url: 'https://www.smartly.io'
    },
    {
      name: 'Huuva',
      logo: '/logos/huuva.svg',
      url: 'https://huuva.io'
    },
    {
      name: 'Meru',
      logo: '/logos/meru.svg',
      url: 'https://meruhealth.com'
    },
    {
      name: 'Singa',
      logo: '/logos/singa.svg',
      url: 'https://singa.com'
    },
    {
      name: 'Veri',
      logo: '/logos/veri.svg',
      url: 'https://veri.co'
    },
    {
      name: 'Solu',
      logo: '/logos/solu.svg',
      url: 'https://solu.bio'
    },
    {
      name: 'Komu',
      logo: '/logos/komu.svg',
      url: 'https://komuhomes.com'
    },
    {
      name: 'Taito',
      logo: '/logos/taito.svg',
      url: 'https://taito.ai'
    },
    {
      name: 'Arca',
      logo: '/logos/arca.svg',
      url: 'https://arca.so'
    },
    {
      name: 'Cactos',
      logo: '/logos/cactos.svg', 
      url: 'https://cactos.com'
    }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
      {companies.map((company) => (
        <a
          key={company.name}
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6 flex items-center justify-center 
                     hover:bg-zinc-900 hover:border-zinc-100/20 transition-all duration-150"
        >
          <img 
            src={company.logo} 
            alt={company.name} 
            className="h-6 w-auto opacity-50 group-hover:opacity-100 transition-all duration-150"
          />
        </a>
      ))}
    </div>
  )
}

export default CompanyLogos 