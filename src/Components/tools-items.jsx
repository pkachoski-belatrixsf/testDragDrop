import React from 'react';
import style from 'styled-components';
import ToolItem from './tool-item';
import { useSelector } from 'react-redux';

const ToolItemsSection = style.div`
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #E1E2E1;
    color: #000000;
`;
const ToolItemsContent = style.div`
    display: flex;
    flex: 9;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
    padding: 10px;

`;
const ToolItemsTitle = style.h2`
    flex: 1;
    border-bottom: 1px solid grey;
`;

const ToolItems = (props) => {
    const items = useSelector(state => state.selectedToolItems);
    const onDragStartHandler = (e, item) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(item));
    }
    return (
        <ToolItemsSection>
            <ToolItemsTitle>Items</ToolItemsTitle>
            <ToolItemsContent>
                {
                    items ? items.map(item => (
                        <ToolItem
                            key={`tool-item-${item.id}`}
                            draggable={true}
                            data={item}
                            onDragStart={(e) => onDragStartHandler(e, item)}
                        >
                        </ToolItem>))
                        : (<div></div>)
                }
            </ToolItemsContent>

        </ToolItemsSection>
    );
};

export default ToolItems;