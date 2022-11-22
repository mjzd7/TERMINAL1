import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[TAB]\t\t Autocomplete.\n[Ctrl+L]\t Clear Terminal window.\n[Ctrl+C]\t Cancel`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'You are one of the most awesome people who love to code and chose to use the TERMINAL over the GUI. Elite If I may say that.';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://mohitdagar.tech', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:27dagar@gmail.com');

  return 'Opening mail to 27dagar@gmail.com...';
};
export const phone = async (args: string[]): Promise<string> => {
  setTimeout(() => {
  window.open('tel:9953953168')
},1000);
  return 'Opening my contact number in your dailer...';
};
export const contactme = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.mohitdagar.tech/contacts_map');
  }, 1200);

  return `Opening Mohit's Contact information...`;
}

export const resume = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://drive.google.com/file/d/1nxWM-thVOKAewFdLtpLikAy1WS_2MkQS/view?usp=share_link');
  }, 1200);

  return `Opening Mohit Dagar's Resume...`;
}

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs' instead.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? Just type 'code' to use Visual Studio Code`;
};
export const code = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://vscode.dev', '_blank');
  }, 1000);
  return `You really want to code... I see.

  Get started.
  May the force be with you.`
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=D3-vBBQKOYU&list=PL13qnYzAsmgqNmjf3H0TiOs25SH6l2QFb');
  }, 3500);

  return `Either you are very funny or way too dumb...
  I thought you knew what you were doing. :/

  Permission denied: with little power comes... '${args[0]}' responsiblities.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/mjzd7/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

//export const donate = async (args?: string[]): Promise<string> => {
 // window.open(packageJson.funding.url, '_blank');

//  return 'Opening donation url...';
//};
//searches
export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};
export const ls = async (args: string[]): Promise<string> => {
  return `
  I could have shown you
  a lot of
  fake directories
  but let's just keep it real...
  
  Try using 'projects' instead.`;
};

export const cmd = async (args: string[]): Promise<string> => {
  return `
  Isn't it the terminal already...`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `
  Any body can create a directory on linux, but right now, but you just stole my heart...`;
};

export const photo = async (args: string[]): Promise<string> => {
  return `
                                                                                  
                                                                                
                                                                                
                        .,.....,,.............                                  
                     ,.....,,,.,.,.......  .....                                
                   ,....................... ....,                               
                .,.......................,,*,.,,,                               
               ..............,,*/(((((((###((###/,                              
              ...........,*//(((###%%###########(*                              
              ......,,,,**///((((#########%#######*                             
              ,..,,,,,,,****/((((###%%%##%%%%#(/*,,,                            
               ,,,,,,,,,,/((((#(****,,,/#####//(((/(                            
                ,.,,,,,,/(((/*/(((#(/////#%%/**#(,((#                           
                ,...,,,,/##(((/,*#%*,*//(##%%#((((#%%#                          
               .(((##/,,/######(((((#######%%%%#%%%%%%                          
               *%(%%(//**((####%%%%%%%#(((##%%%#(#%%%#                          
                 (%#%#/%**((###%%%%%#(#(((**(##/(#((#(                          
                   ((###(,*/((#####(////*,,,*///(/*,(/                          
                      ,//*,*//((((#,***/(###%%&&//##(,                          
                        //*,///((/((###(((((#######(/.                          
                         /(/,**//((//########(//###*,                           
                         ./((/,,,*,,,,/#%###(//###(,,*.                         
                          */(((/*,....,,*/(/#***/,,,#**/***/,                   
                       ./,@//(((((***,,.....,,...,(@***********///*             
                   ******,&&(((((((///(///*///(#(&@&*************////////       
              ************#&@&/((((((((#((##(((@@@&****************/////////////
        ,*/***************(%&&@@%/(((((((((/&@@@@&#**//**///********////////////
  *//*********************/%&&@@@@@&(((//&@@@@@@&&*////*///*********////////////
*******************,******/%&&&@@@&./*/*/%@@@@@&&#////////*********/////////////
***************************%%&&&@.,,,**#/#(*@@@&&//////////////**///////////////
***************************%&&&&%%*,**//**/&&%%&&*////////////**////////////////
***************************#&&&&&&&/(///(*&&&&&&#/////////////*/*///////////////
  `;
};


export const banner = (args?: string[]): string => {
  return `
███╗░░░███╗░░░░░██╗███████╗██████╗░███████╗
████╗░████║░░░░░██║╚════██║██╔══██╗╚════██║
██╔████╔██║░░░░░██║░░███╔═╝██║░░██║░░░░██╔╝
██║╚██╔╝██║██╗░░██║██╔══╝░░██║░░██║░░░██╔╝░
██║░╚═╝░██║╚█████╔╝███████╗██████╔╝░░██╔╝░░
╚═╝░░░░░╚═╝░╚════╝░╚══════╝╚═════╝░░░╚═╝░░░ v${packageJson.version}
𝕋𝔼ℝ𝕄𝕀ℕ𝔸𝕃  ℂ𝕆ℕ𝕊𝕆𝕃𝔼 𝔽𝕆ℝ  𝕄𝕆ℍ𝕀𝕋𝔻𝔸𝔾𝔸ℝ.𝕋𝔼ℂℍ

Type 'help' to see list of available commands.

If you prefer to use the Graphical Interface, Type gui or 
<a href="https://mohitdagar.tech">Click here</a>, but before that try 'theme random' first.

----------------------------------------------------------
`;
};
