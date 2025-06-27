import React from 'react';
import { AnyElement, TextElement } from '../types';

interface PropertyInspectorProps {
  element?: AnyElement;
  onUpdateElement: (id: string, updates: Partial<AnyElement>) => void;
}

const PropertyInspector: React.FC<PropertyInspectorProps> = ({ 
  element, 
  onUpdateElement 
}) => {
  if (!element || element.type !== 'text') {
    return null;
  }

  const textElement = element as TextElement;

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateElement(element.id, { content: e.target.value });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateElement(element.id, { fontSize: parseInt(e.target.value) });
  };

  const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateElement(element.id, { x: parseInt(e.target.value) });
  };

  const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateElement(element.id, { y: parseInt(e.target.value) });
  };

  return (
    <div className="property-inspector">
      <h3>文本属性</h3>
      
      <div className="property-group">
        <label>内容:</label>
        <input
          type="text"
          value={textElement.content}
          onChange={handleContentChange}
        />
      </div>
      
      <div className="property-group">
        <label>字体大小:</label>
        <input
          type="number"
          value={textElement.fontSize}
          onChange={handleFontSizeChange}
          min="10"
          max="100"
        />
      </div>
      
      <div className="property-group">
        <label>X 位置:</label>
        <input
          type="number"
          value={textElement.x}
          onChange={handleXChange}
        />
      </div>
      
      <div className="property-group">
        <label>Y 位置:</label>
        <input
          type="number"
          value={textElement.y}
          onChange={handleYChange}
        />
      </div>
    </div>
  );
};

export default PropertyInspector;