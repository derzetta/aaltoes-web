import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Tokyo2025Task: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className="space-y-12">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          {...fadeIn}
        >
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/bank/aaltoes_white.svg" alt="Aaltoes Logo" className="h-8" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-12"
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
        >
          <h1 className="font-mono text-3xl font-bold tracking-tight text-zinc-100">Japan Expedition 2025 Optional Task Set</h1>
          
          <div className="content-section">
            <div className="space-y-12">
              <div>                
                <div className="space-y-6">
                  <p className="font-mono text-zinc-400">
                    Dear Applicants,
                  </p>
                  <p className="font-mono text-zinc-400">
                    Thank you for applying to the Aaltoes Japan Expedition. This is your second round to showcase your insights. We've put together a selection of tasks to help you showcase your skills for the expedition. Completing them is optional, but any submissions you make by Tuesday at 16:59 will give us additional context to consider.
                  </p>
                  <p className="font-mono text-zinc-400">
                    The tasks cover a broad range of abilities—from hard to soft skills, beginner to expert-level knowledge, and passive to active engagement with the ecosystem. We're looking for work with attention to detail and a "wow" factor; success isn't necessarily about completing the most tasks but rather showing ownership and excellence. If you want to show what you can do, this is your chance to shine!
                  </p>
                  <p className="font-mono text-zinc-400">
                    If you have any questions, feel free to ask Tetsu (@fujimut). Submit the tasks in the most digestible format possible through the Typeform link below.
                  </p>

                  <div className="mt-8">
                    <p className="font-mono text-zinc-400">With love, </p>
                    <p className="font-mono text-zinc-400">Doni ドニ, Tetsu 哲, Yera イェラ </p>
                  </div>

                  <div className="mt-8 mb-12">
                    <img
                      src="/bank/tetsuyeradoni.jpg"
                      alt="Aaltoes Japan Expedition Team"
                      className="w-full max-w-2xl mx-auto rounded-lg border border-zinc-100/10"
                    />
                  </div>

                  <div className="font-mono bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                    <p className="text-zinc-400">
                      Submit your tasks here: {" "}
                      <a 
                        href="https://form.typeform.com/to/LMZE75wA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        https://form.typeform.com/to/LMZE75wA
                      </a>
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="font-mono bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                      <h3 className="font-mono text-xl font-semibold mb-4 uppercase tracking-wider text-zinc-100">Task 1: Pitch Your Project</h3>
                      <p className="text-zinc-400">
                        Present your project or Aaltoes for the expedition directed at Japanese startup/innovation ecosystem players. Any format is acceptable [presentation, website, video, pitch deck, etc.] as long as it is understandable remotely and asynchronously. We will not spend more than 3 minutes reviewing your pitch, so ensure clarity and impact.
                      </p>
                    </div>

                    <div className="font-mono bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                      <h3 className="font-mono text-xl font-semibold mb-4 uppercase tracking-wider text-zinc-100">Task 2: 1-Page Report on Tokyo's Startup/Innovation Ecosystem</h3>
                      <p className="text-zinc-400">
                        Research and analyze a specific area or characteristic of Tokyo's startup ecosystem that interests you. Explain what makes Tokyo's ecosystem unique and how it differs from Finland's startup culture. Looking toward 2025, discuss what lessons Finland's ecosystem can learn from Tokyo, supported by examples or insights from past success stories. The quality of both content and delivery will be considered.
                      </p>
                    </div>

                    <div className="font-mono bg-zinc-900/30 backdrop-blur-sm border border-zinc-100/10 rounded-lg p-6">
                      <h3 className="font-mono text-xl font-semibold mb-4 uppercase tracking-wider text-zinc-100">Task 3: Your Own Prompt</h3>
                      <p className="text-zinc-400">
                        If you feel none of these tasks fully showcase your skills, willpower, or fire in the belly, propose your own prompt! Show us something outside the box that highlights your unique abilities and passion for the Japan expedition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Tokyo2025Task; 