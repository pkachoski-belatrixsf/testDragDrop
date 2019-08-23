import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolType from './tool-type';
import style from 'styled-components';

const ToolsSection = style.div`
    width: 10vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color: #E1E2E1;
    color: #000000;
`;

const ToolsSectionTitle = style.h2`
    flex: 1;
    border-bottom: 1px solid grey;
`;

const ToolsSectionContent = style.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    overflow-y: auto;
    flex: 9;
    >.tool-item:not(last-child) {
        margin-bottom: calc(1px + 0.2vw);
    }
    padding: 10px;
`;

const ToolTypes = () => {
    const tools = useSelector(state => state.tools)
    const dispatch = useDispatch();

    const toolClickEventHandler = (data) => {
        dispatch({ type: "TOOL_SELECTED", payload: data });
    };
    return (
        <ToolsSection>
            <ToolsSectionTitle>Types</ToolsSectionTitle>
            <ToolsSectionContent>
                {
                    tools.map(tool => (
                        <ToolType
                            key={`tool-${tool.id}`}
                            className="tool-item"
                            data={tool}
                            onClick={() => toolClickEventHandler(tool.items)} />
                    ))
                }
            </ToolsSectionContent>
        </ ToolsSection>
    );
}

export default ToolTypes;