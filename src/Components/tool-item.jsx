import React from 'react';
import style from 'styled-components';

const ToolItemButtonSize = "calc(30px + 5vw)";
const ToolItemWrapper = style.button`
    width: ${ToolItemButtonSize};
    height: ${ToolItemButtonSize};
    display:flex;
    flex-direction:column;
    align-items: stretch;
    background-color: #FFFFFF;
    :hover {
        background-color: #CCC;
    }
`;
const ToolItemBasicWrapper = style.button`
    position: absolute;
    width: ${ToolItemButtonSize};
    height: ${ToolItemButtonSize};
    
    background-color: #FFFFFF;
    top: ${props => `${props.posY}px`};
    left: ${props => `${props.posX}px`};
    :hover {
        background-color: #CCC;
    }
`;
const ItemName = style.div`
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
`;
const ToolItem = ({ onDragStart, draggable, data: { name } }) => (
    <ToolItemWrapper
        draggable={draggable}
        onDragStart={onDragStart}
    >
        <ItemName>{name}</ItemName>
    </ToolItemWrapper>
);
const ToolItemPosition = ({ data, posX, posY }) => (
    <ToolItemBasicWrapper posX={posX} posY={posY}>
        <ItemName>{data}</ItemName>
    </ToolItemBasicWrapper>
);

export default ToolItem;
export { ToolItemPosition };