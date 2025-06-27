import React from 'react';

interface ToolbarProps {
  onAddText: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onCopy: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ 
  onAddText, 
  onUndo, 
  onRedo, 
  onCopy 
}) => {
  return (
    <div className="toolbar">
      <button onClick={onUndo}>撤销</button>
      <button onClick={onRedo}>重做</button>
      <button onClick={onAddText}>添加文字</button>
      <button onClick={onCopy}>复制</button>
    </div>
  );
};

export default Toolbar;