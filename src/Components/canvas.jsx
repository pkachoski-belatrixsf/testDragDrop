import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToolItemPosition } from './tool-item';
import style from 'styled-components';

const CanvasSection = style.div`
    padding: 10px;
    width: 55vw;
    max-width: 55vw;

    overflow-y: auto;
    background-color: grey;

`;

const Canvas = (props) => {
    const [items, setItems] = useState([]);
    const [newitemId, setNewItemId] = useState(1);
    const dispatch = useDispatch();
    const draggedItem = useSelector(state => state.draggedItem);

    const dragOverHandler = (e) => {
        e.preventDefault();
    };
    const dropHandler = (e) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        const item = { ...data, itemId: newitemId,  posX: e.clientX, posY: e.clientY };
        setNewItemId(newitemId+1);
        setItems([...items, item]);
    };

    return (
        <CanvasSection
            onDragOver={dragOverHandler}
            onDrop={dropHandler}>
            {
                items.map(item => (
                    <ToolItemPosition
                        key={`tool-item-${item.itemId}`}
                        data={`${item.name}-${item.itemId}`}
                        posX={item.posX}
                        posY={item.posY}
                    />))
            }
        </CanvasSection>
    );
}

export default Canvas;