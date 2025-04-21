import { useState, useEffect, useRef } from "react"
import { Link, useFetcher } from "react-router"
import { Route } from "./+types/Silkway";
import { sql } from '@vercel/postgres'
import { z } from 'zod'

const applicationSchema = z.object({
  name: z.string().min(1).max(250),
  email: z.string().email().max(250),
  project: z.string().min(1).max(5000),
  about: z.string().min(1).max(5000),
  china: z.string().min(1).max(5000),
})

const createTableIfNotExists = async () => {
  await sql`CREATE TABLE IF NOT EXISTS silkway_applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    project TEXT NOT NULL,
    about TEXT NOT NULL,
    china TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;
}

export async function action({
  request,
}: Route.ActionArgs) {
  try {
    await createTableIfNotExists();
  } catch (error) {
    console.error('Error creating table:', error);
    return { success: false }
  }
  const formData = await request.formData();
  const validatedFields = applicationSchema.safeParse(Object.fromEntries(formData))

  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors }
  }

  const { name, email, project, about, china } = validatedFields.data

  try {
    await sql`INSERT INTO silkway_applications (name, email, project, about, china) VALUES (${name}, ${email}, ${project}, ${about}, ${china})`;
    return { success: true };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false };
  }
}

type ActionData = Awaited<ReturnType<typeof action>>

// Component for typing animation
interface TypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypedText: React.FC<TypedTextProps> = ({ text, speed = 20, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsDone(true);
      }
    };
    
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);
  
  return <span>{displayedText}{!isDone && <span className="opacity-0">_</span>}</span>;
};

// Field group interfaces for type safety
interface BaseField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface TextField extends BaseField {
  type: 'text' | 'email';
  placeholder: string;
  ref?: React.RefObject<HTMLInputElement>;
}

interface TextareaField extends BaseField {
  type: 'textarea';
  placeholder: string;
  rows?: number;
}

interface SelectField extends BaseField {
  type: 'select';
  options: Array<{ value: string; label: string }>;
}

type FormField = TextField | TextareaField | SelectField;

interface FieldGroup {
  section: string;
  fields: FormField[];
}

// Terminal Form component
interface TerminalFormProps {
  onClose: () => void;
}

const TerminalForm: React.FC<TerminalFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    about: '',
    china: ''
  });
  const [cursorVisible, setCursorVisible] = useState(true);
  const [focusedField, setFocusedField] = useState('');
  const nameInputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher<ActionData>();
  const loading = fetcher.state !== 'idle';
  const data = fetcher.data;
  const [success, setSuccess] = useState<boolean | null>(data?.success ?? null);
  const [errors, setErrors] = useState<Required<ActionData>['errors'] | null>(data?.errors ?? null);

  useEffect(() => {
    setSuccess(data?.success ?? null);
    setErrors(data?.errors ?? null);
  }, [data]);

  const handleRetry = () => {
    setSuccess(null);
  };

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  // Focus first input on mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
      setFocusedField('name');
    }
  }, []);

  // Textarea and input blur/focus handlers
  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Field groups with labels and descriptions
  const fieldGroups: FieldGroup[] = [
    {
      section: "",
      fields: [
        {
          name: "name",
          label: "NAME",
          type: "text",
          placeholder: "Your name",
          required: true,
          ref: nameInputRef
        } as TextField,
        {
          name: "email",
          label: "EMAIL",
          type: "email",
          placeholder: "Your email",
          required: true
        } as TextField,
        {
          name: "project",
          label: "PROJECT",
          type: "textarea",
          placeholder: "What are you building? (AI/Robotics/Game/Tech) (max 5000 characters)",
          required: true,
          rows: 2
        } as TextareaField,
        {
          name: "about",
          label: "ABOUT YOU",
          type: "textarea",
          placeholder: "Tell us something about yourself that you want us to know (max 5000 characters)",
          required: true,
          rows: 2
        } as TextareaField,
        {
          name: "china",
          label: "CHINA INTEREST",
          type: "textarea",
          placeholder: "How could working in China benefit your project? (max 5000 characters)",
          required: true,
          rows: 2
        } as TextareaField
      ]
    }
  ];

  // Auto-resize textarea handler
  const handleTextareaInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = e.currentTarget;
    // Reset height to auto to properly calculate the new height
    textarea.style.height = 'auto';
    // Set height to scrollHeight to accommodate all content
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="font-['Geist_Mono'] mt-8 border-t border-zinc-800 pt-6">
      <div className="text-blue-400 text-base pb-2 sticky top-0 bg-transparent z-10 flex justify-between items-center">
        <TypedText text="APPLY TO PROJECT SILKWAY" speed={30} />
        <div className="text-xs text-zinc-400">Press ESC to cancel</div>
      </div>

      {!loading && success === null ? (
        <fetcher.Form action="/silkway" method="post" className="space-y-4 mt-4">
          <div className="space-y-3">
            {fieldGroups[0].fields.map((field, fieldIndex) => (
              <div key={field.name} className="flex flex-col">
                <div className="text-xs text-zinc-300 flex items-center mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </div>
                
                <div className="flex items-start border-b border-zinc-700 pb-1">
                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onInput={handleTextareaInput}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-none outline-none text-white font-['Geist_Mono'] text-sm resize-none overflow-hidden min-h-[3em]"
                      placeholder={(field as TextareaField).placeholder}
                      required={field.required}
                      rows={(field as TextareaField).rows || 2}
                      onKeyDown={handleEscape}
                    />
                  ) : (
                    <input
                      ref={field.name === 'name' ? nameInputRef : undefined}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-none outline-none text-white font-['Geist_Mono'] text-sm"
                      placeholder={(field as TextField).placeholder}
                      required={field.required}
                      autoFocus={fieldIndex === 0}
                      onKeyDown={handleEscape}
                      autoComplete={field.name === 'email' ? 'email' : 'off'}
                    />
                  )}
                  
                  {/* Show blinking cursor in the focused field when empty */}
                  {focusedField === field.name && formData[field.name as keyof typeof formData].length === 0 && (
                    <span className={`text-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 flex justify-between items-center">
            <div className="text-xs text-zinc-400">
              Contact: <a href="mailto:doni.peltojarvi@aaltoes.com" className="text-blue-400 hover:underline">doni.peltojarvi@aaltoes.com</a>
            </div>
            <div className="flex space-x-3">
              <button 
                type="button" 
                onClick={onClose}
                className="border border-zinc-700 hover:border-zinc-500 text-white font-['Geist_Mono'] text-sm py-2 px-4 rounded focus:outline-none"
              >
                CANCEL
              </button>
              <button 
                type="submit" 
                className="border border-blue-700 bg-transparent hover:border-blue-500 text-blue-400 font-['Geist_Mono'] text-sm py-2 px-4 rounded focus:outline-none"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </fetcher.Form>
      ) : loading ? (
        <div className="py-6 text-center">
          <div className="text-sm animate-pulse">
            <span className="text-blue-400">$</span> <span className="text-white">Submitting...</span>
          </div>
        </div>
      ) : success ? (
        <div className="py-6 text-center">
          <div className="text-green-400 text-sm">
            Application submitted successfully!
          </div>
          <div className="text-sm text-zinc-300">
            We'll be in touch via email soon.
          </div>
          <div className="text-sm text-zinc-400 mt-3">
            Questions? Contact <a href="mailto:doni.peltojarvi@aaltoes.com" className="text-blue-400 hover:underline">doni.peltojarvi@aaltoes.com</a>
          </div>
        </div>
      ) : success === false ? (
        <div className="py-6 text-center">
          <div className="text-red-400 text-sm">
            Application submission failed. Please try again.
          </div>
          {errors && (
            <div className="text-red-400 text-sm mt-6 flex flex-col gap-2">
              {errors.name && (<>
                <div><span className="font-bold">Name:</span> {errors.name}</div>
              </>)}
              {errors.email && (<>
                <div><span className="font-bold">Email:</span> {errors.email}</div>
              </>)}
              {errors.project && (<>
                <div><span className="font-bold">Project:</span> {errors.project}</div>
              </>)}
              {errors.about && (<>
                <div><span className="font-bold">About You:</span> {errors.about}</div>
              </>)}
              {errors.china && (<>
                <div><span className="font-bold">China Interest:</span> {errors.china}</div>
              </>)}
            </div>
          )}
          <button 
            type="button" 
            onClick={handleRetry} 
            className="text-blue-400 hover:underline mt-3"
          >
            Retry
          </button>
        </div>
      ) : null}
    </div>
  );
};

// Terminal Interface component
interface TerminalInterfaceProps {
  options: {
    text: string;
    link: string;
    isExternal?: boolean;
    action?: () => void;
  }[];
  promptText?: string;
  delay?: number;
}

const TerminalInterface: React.FC<TerminalInterfaceProps> = ({ 
  options, 
  promptText = "Select an option:",
  delay = 4000
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingPrompt, setTypingPrompt] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Type out the prompt
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      if (currentIndex <= promptText.length) {
        setTypingPrompt(promptText.substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(startTyping, 40);
      } else {
        setTypingComplete(true);
      }
    };
    
    const showTimer = setTimeout(() => {
      setVisible(true);
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(showTimer);
    };
  }, [delay, promptText]);
  
  // Blink cursor
  useEffect(() => {
    if (!visible) return;
    
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, [visible]);
  
  // Handle keyboard navigation
  useEffect(() => {
    if (!typingComplete) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : options.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < options.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selectedOption = options[selectedIndex];
        
        if (selectedOption.action) {
          selectedOption.action();
        } else if (selectedOption.isExternal) {
          window.open(selectedOption.link, '_blank');
        } else {
          window.location.href = selectedOption.link;
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [options, selectedIndex, typingComplete]);
  
  if (!visible) return null;
  
  return (
    <div className="font-['Geist_Mono'] mt-6">
      <div className="text-sm mb-2">
        <span className="text-blue-400">silkway@aaltoes:~$</span> <span>{typingPrompt}</span>
        {!typingComplete && <span className={`ml-1 text-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>}
      </div>
      
      {typingComplete && (
        <div className="pl-2 space-y-1">
          {options.map((option, index) => {
            const isSelected = index === selectedIndex;
            const handleClick = () => {
              if (option.action) {
                option.action();
              } else if (option.isExternal) {
                window.open(option.link, '_blank');
              } else {
                window.location.href = option.link;
              }
            };
            
            return (
              <div 
                key={option.text} 
                className="flex items-center"
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={handleClick}
              >
                <div 
                  className={`w-full flex items-center px-1 cursor-pointer ${isSelected ? 'bg-blue-500 text-white font-bold' : 'text-white hover:bg-blue-500/30'}`}
                >
                  <div className="flex w-full">
                    <span>{option.text}</span>
                    {isSelected && <span className={`ml-1 text-blue-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Silkway() {
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showContent, setShowContent] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Add a style tag to the document head for Silkway page selection colors
    const style = document.createElement('style')
    style.innerHTML = `
      .silkway-page ::selection {
        background-color: white;
        color: #18181b;
      }
      .silkway-page ::-moz-selection {
        background-color: white;
        color: #18181b;
      }

      /* CRT Scanlines */
      .scanlines::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background: linear-gradient(
          rgba(255, 255, 255, 0.02) 50%, 
          rgba(0, 0, 0, 0.04) 50%
        );
        background-size: 100% 2px;
        z-index: 2;
        opacity: 0.4;
      }
      
      /* Additional subtle CRT effect */
      .scanlines::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background-image: radial-gradient(
          ellipse at center,
          rgba(0, 0, 150, 0.04) 0%,
          rgba(0, 0, 0, 0.2) 100%
        );
        z-index: 1;
        opacity: 0.3;
      }
    `
    document.head.appendChild(style)
    
    // Show content after a delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 400);
    
    // Clean up when component unmounts
    return () => {
      document.head.removeChild(style);
      clearTimeout(timer);
    }
  }, [])

  // Handle ESC key to close form
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showForm) {
        setShowForm(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showForm]);

  const handleApply = () => {
    setShowForm(true);
    
    // Scroll to the form after a brief delay to allow it to render
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  // Separate delay values for initial load vs returning from form
  const getTerminalDelay = () => {
    // If returning from form (not initial load), use a short delay
    if (showContent && showForm === false && formWasShown.current) {
      return 300; // Short delay after canceling
    }
    // Initial load - delay should be slightly longer than the final paragraph
    return 4050; // Slightly longer than the 3900 + typing duration of final paragraph
  };

  // Track if form was previously shown
  const formWasShown = useRef(false);
  useEffect(() => {
    if (showForm) {
      formWasShown.current = true;
    }
  }, [showForm]);

  return (
    <div
      className="min-h-screen bg-zinc-950 text-white p-6 flex flex-col text-sm leading-tight silkway-page scanlines relative"
      style={{ fontFamily: "'Geist Mono', monospace" }}
    >
      <div className="max-w-3xl mx-auto w-full pt-16 px-8 relative z-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-sm font-bold tracking-wide font-['Geist_Mono']">
            <TypedText text="PROJECT SILKWAY" speed={30} />
            {cursorVisible ? <span className="ml-1 text-blue-400">_</span> : <span className="ml-1 opacity-0">_</span>}
          </h1>
        </header>

        {showContent && (
          <main className="flex-1 font-['Geist_Mono']">
            <div className="space-y-8">
              <p className="text-sm leading-relaxed">
                <TypedText 
                  text="We're dropping Finnish founders into China's tech ecosystem this fall. Not for tourism, but innovation." 
                  speed={5} 
                  delay={900}
                />
              </p>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="THE STACK" speed={10} delay={1700} />
                </h2>
                <p><TypedText text="• Fully covered housing in Hangzhou" speed={3} delay={1950} /></p>
                <p><TypedText text="• Dedicated workspace" speed={3} delay={2100} /></p>
                <p><TypedText text="• Direct connections to Chinese capital, companies, and investors" speed={3} delay={2200} /></p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="HANGZHOU ECOSYSTEM" speed={10} delay={2500} />
                </h2>
                <p><TypedText text="• Alibaba: Multinational tech giant" speed={3} delay={2750} /></p>
                <p><TypedText text="• DeepSeek: True Open-Source AI" speed={3} delay={2850} /></p>
                <p><TypedText text="• Unitree: Robotics that dominate the market" speed={3} delay={2950} /></p>
                <p>
                  <a 
                    href="https://www.sixthtone.com/news/1016770" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    <TypedText text="+ other emerging 'Little Dragons' reshaping global tech" speed={3} delay={3050} />
                  </a>
                </p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="WE ARE LOOKING FOR" speed={10} delay={3200} />
                </h2>
                <p><TypedText text="• OS AI that ships" speed={3} delay={3350} /></p>
                <p><TypedText text="• Robotics that works" speed={3} delay={3400} /></p>
                <p><TypedText text="• Game dev that innovates" speed={3} delay={3450} /></p>
                <p><TypedText text="• Tech with traction" speed={3} delay={3500} /></p>
              </section>

              <section className="space-y-1.5">
                <h2 className="font-normal mb-1.5 font-['Geist_Mono']">
                  <TypedText text="EXECUTION PLAN" speed={10} delay={3550} />
                </h2>
                <p><TypedText text="• Remote: July-September" speed={3} delay={3650} /></p>
                <p><TypedText text="• Live in Hangzhou: September-October" speed={3} delay={3750} /></p>
              </section>

              <p className="text-sm leading-relaxed">
                <TypedText 
                  text="This is your backdoor into the market most founders can't crack. Don't sleep on it." 
                  speed={5}
                  delay={3900}
                />
              </p>

              {!showForm && (
                <TerminalInterface
                  promptText="Please select an option:"
                  delay={getTerminalDelay()}
                  options={[
                    { 
                      text: "APPLY", 
                      link: "#", 
                      action: handleApply 
                    },
                    { 
                      text: "VIEW OTHER PROJECTS", 
                      link: "/2025" 
                    }
                  ]}
                />
              )}
            </div>

            {showForm && <TerminalForm onClose={handleCloseForm} />}

            <div className="my-8 border-t border-zinc-800"></div>

            <footer className="text-sm mb-8">
              <TypedText text="Powered by " speed={5} delay={4400} />
              <Link to="/2025" className="underline hover:no-underline">
                <TypedText text="Aaltoes 2025" speed={5} delay={4550} />
              </Link>
              <TypedText text=" & " speed={5} delay={4750} />
              <Link to="https://cetc.fi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                <TypedText text="CETC" speed={5} delay={4800} />
              </Link>
            </footer>
          </main>
        )}
      </div>
    </div>
  )
} 