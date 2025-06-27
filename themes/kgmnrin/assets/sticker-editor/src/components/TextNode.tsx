import React, { useState, useRef, useEffect } from 'react';
import { TextElement } from '../types';

interface TextNodeProps {
  element: TextElement;
  isSelected: boolean;
  onClick: () => void;
}

const TextNode: React.FC<TextNodeProps> = ({ 
  element, 
  isSelected,
  onClick 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(element.content);
  const inputRef = useRef<HTMLInputElement>(null);

  // 双击进入编辑模式
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // 完成编辑
  const handleBlur = () => {
    setIsEditing(false);
    // 这里实际更新操作由父组件处理
  };

  // 编辑时自动聚焦
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <div
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
      style={{
        position: 'absolute',
        left: element.x,
        top: element.y,
        cursor: 'move',
        border: isSelected ? '2px dashed blue' : 'none',
        padding: '4px',
        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.7)' : 'transparent',
      }}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
          style={{
            fontSize: `${element.fontSize}px`,
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        />
      ) : (
        <div style={{ fontSize: `${element.fontSize}px` }}>
          {content}
        </div>
      )}
    </div>
  );
};

export default TextNode;