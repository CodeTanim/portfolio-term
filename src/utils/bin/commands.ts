// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `\nWelcome! Here are all the available commands:
  
  The ones you probably care about the most
  -------------------------------------------------------------------------------
  experience
  about
  linkedin
  github
  resume
  projects
  summary
  email
  help


  Just for fun. Try it out :) 
  -------------------------------------------------------------------------------
  banner 
  bing
  youtube
  reddit  
  date 
  duckduckgo
  echo
  quote: random quote generator!
  emacs 
  email  
  google 
  weather: Example usage -> weather newyork 
   
  
  A bit more fun, for the linux enthusiasts
  --------------------------------------------------------------------------------
  cd
  ls
  nvim     
  repo 
  sudo  
  vi 
  vim 
  whoami

  [ctrl+l]/clear: clears the terminal.\n
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `\nHi, I am ${config.name}. 
Welcome to my website!

I am a Self-Motivated Computer Science student with experience in web-development, 
Cloud Computing, Machine Learning, and teaching. Passionate about all things 
related to science (especially computers!), and hardworking towards any task.\n

`;
};

export const experience =async (args: string []): Promise<string> => {

  return `\nThe following is all of my relevant work experience:\n

  - Data Engineer at Developing for Good (Oct 2023 - Present)
                            
                            
  - Software Engineering Intern at Capital One (June 2023 - Present)
                            
                            
  - Developer Intern at Evergreen Investments (June 2022 - Oct 2022)
                            
                            
  - Data Science Program Intern at CCNY (Jan 2022 - May 2022)
                            
                            
  - IT Intern at ChaShaMa (June 2021 - Aug 2021)

  \n`
  
  
  

};
  


export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...\n';
};


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...\n';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Searching bing for ${args.join(' ')}`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with little power comes... no responsibility? `;
};

export const youtube = async (args?: string[]): Promise<string> => {
  window.open(`https://youtube.com/search?q=${args.join(' ')}`);
  return `Searching youtube for... `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗            
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝            
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗              
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝              
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗            
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝            
                                                                            
  ████████╗ ██████╗     ███╗   ███╗██╗   ██╗                                
  ╚══██╔══╝██╔═══██╗    ████╗ ████║╚██╗ ██╔╝                                
     ██║   ██║   ██║    ██╔████╔██║ ╚████╔╝                                 
     ██║   ██║   ██║    ██║╚██╔╝██║  ╚██╔╝                                  
     ██║   ╚██████╔╝    ██║ ╚═╝ ██║   ██║                                   
     ╚═╝    ╚═════╝     ╚═╝     ╚═╝   ╚═╝                                   
                                                                            
  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ ██╗
  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗██║
  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║██║
  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║╚═╝
  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝██╗
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ╚═╝
                                                                           
  My name is Tanim Islam 
                                                        
  Type and enter 'about' to know "all" about me. 
  Type and enter 'resume' to get a copy of my resume
  Type and enter 'linkedin' so you can connect with me!
  Type and enter 'summary' to display a quick summary of me.

  Type and enter 'help' to see the list of all available commands to navigate this terminal themed website.

  If you would rather prefer a normal viewing of my portfolio, then click <a href="https://tanim-portfolio.vercel.app"  target = "_blank"><u>here</u> </a>

`;
};