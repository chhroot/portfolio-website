import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
     ___                         __  __       __ __ _                
    /   |  ____ ___  _______  __/ /_/ /_     / //_/(_)________ ____ 
   / /| | / __ __ \\/ ___/ / / / __/ __  \\   / ,<  / / ___/ __ / __ \\
  / ___ |/ / / / / / /  / /_/ / /_/ / / /  / /| |/ / /  / /_/ / / / 
 /_/  |_/_/ /_/ /_/_/   \\__,_/\\__/_/ /_/  /_/ |_/_/_/   \\__/_/ /_/`  
          }
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ___                         __  __  
    /   |  ____ ___  _______  __/ /_/ /_ 
   / /| | / __ __ \\/ ___/ / / / __/ __ \
  / ___ |/ / / / / / /  / /_/ / /_/ / / /
 /_/  |_/_/ /_/ /_/_/   \\__,_/\\__/_/ /_       
                         
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Hey there, A battle with daemons portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
 _______________________ 
 < Why are you here ?  >
  ----------------------- 
             ^__^
             (==)\\~_______
             (__)\\       )\\/
                 ||----w||
                 ||     ||
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
