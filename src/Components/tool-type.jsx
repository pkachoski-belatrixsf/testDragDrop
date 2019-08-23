import React from 'react';
import style from 'styled-components';
import { Icon } from 'react-fa';

const ToolButtonSize = "calc(50px + 5vw)";
const ToolButton = style.button`
    display:flex;
    align-items: stretch;
    flex-direction:column;
    width: ${ToolButtonSize};
    height: ${ToolButtonSize};
    :hover {
        background-color: #CCC;
    }
    background-color: #FFFFFF;
`;
const ToolDescription = style.div`
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    color: #FFFFFF;
`;

const ToolType = ({ data: { name, icon }, className = "", onClick }) => (
    <ToolButton
        className={`${className}`}
        onClick={onClick}
    >
        {<Icon name={`${icon}`} style={{fontSize: "5em", alignItems: "center", justifyContent: "center", display: "flex", flex:2}}/>}
        {<ToolDescription>{name}</ToolDescription>}
    </ToolButton>);

export default ToolType;