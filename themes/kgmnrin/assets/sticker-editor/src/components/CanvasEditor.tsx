import React, { forwardRef } from 'react';
import { AnyElement } from '../types';
import TextNode from './TextNode';

interface CanvasEditorProps {
  backgroundSticker: string | null;
  elements: AnyElement[];
  selectedElementId: string | null;
  setSelectedElementId: (id: string | null) => void;
}

const CanvasEditor = forwardRef<HTMLDivElement, CanvasEditorProps>(
  ({ backgroundSticker, elements, selectedElementId, setSelectedElementId }, ref) => {
    
    const handleCanvasClick = (e: React.MouseEvent) => {
      // 点击空白区域取消选中
      if (e.target === e.currentTarget) {
        setSelectedElementId(null);
      }
    };

    return (
      <div 
        ref={ref}
        className="canvas-editor"
        onClick={handleCanvasClick}
        style={{
          backgroundImage: backgroundSticker ? `url(${backgroundSticker})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {elements.map(element => {
          if (element.type === 'text') {
            return (
              <TextNode
                key={element.id}
                element={element}
                isSelected={selectedElementId === element.id}
                onClick={() => setSelectedElementId(element.id)}
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
);

export default CanvasEditor;