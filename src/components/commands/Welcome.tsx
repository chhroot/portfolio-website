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
        <Seperator>----</Seperator>
        <div>There is no place like 127.0.0.1 (Version 0.0.2)</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
        ____  
       /___/\\__
      _\\   \\/_/\\__
    __\\       \\/_/\\
    \\   __    __ \\ \\
   __\\  \\_\\   \\_\\ \\ \\   __ 
  /_/\\   __   __   \\ \\_/_/\\
  \\_\\/_\\__\\/\\__\\/\\__\\/_\\_\\/
     \\_\\/_/\\       /_\\_\\/
        \\_\\/       \\_\\/                  
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
