import React from 'react';
import style from 'styled-components';
import ToolItems from './Components/tools-items';
import ToolTypes from './Components/tool-types'
import Canvas from './Components/canvas';

const AppContainer = style.div`
  text-align: center;
`;
const HeaderContainer = style.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #464646;
  color: #FFFFFF;
`;
const FooterContainer = style.footer`
  text-align: center;
  height: 10vh;
  background-color: #cccccc;
`;
const MainContainer = style.div`
  display: flex;
  width: 100vw;
  max-width:100%;
  height: 60vh;
  color: white;
`;
const Separator = style.div`
  border-right: 1px solid grey;
`;
function App() {
  return (
    <AppContainer>
      <HeaderContainer>
        <h1>Title</h1>
      </HeaderContainer>
      <MainContainer>
        <ToolTypes />
        <Separator />
        <ToolItems />
        <Separator />
        <Canvas />
      </MainContainer>
      <FooterContainer>
        <div></div>
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
