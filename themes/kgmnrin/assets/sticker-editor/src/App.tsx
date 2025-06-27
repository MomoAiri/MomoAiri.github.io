import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import StickerSelector from './components/StickerSelector';
import CanvasEditor from './components/CanvasEditor';
import PropertyInspector from './components/PropertyInspector';
import { CommandManager } from './commands/commandManager';
import { AppState, AnyElement } from './types';

const initialState: AppState = {
  elements: [],
  backgroundSticker: null,
  selectedElementId: null,
};

function App() {
  const [state, setState] = useState<AppState>(initialState);
  const commandManager = useRef(new CommandManager());
  const canvasRef = useRef<HTMLDivElement>(null);

  // 保存状态到命令历史
  const saveStateToHistory = (newState: AppState) => {
    commandManager.current.execute(newState);
    setState(newState);
  };

  // 添加文本元素
  const addTextElement = () => {
    const newText: AnyElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: '双击编辑文字',
      fontSize: 24,
      x: 100,
      y: 100,
    };

    saveStateToHistory({
      ...state,
      elements: [...state.elements, newText],
      selectedElementId: newText.id,
    });
  };

  // 设置背景贴纸
  const setBackgroundSticker = (url: string) => {
    saveStateToHistory({
      ...state,
      backgroundSticker: url,
    });
  };

  // 更新元素
  const updateElement = (id: string, updates: Partial<AnyElement>) => {
    saveStateToHistory({
      ...state,
      elements: state.elements.map(el => 
        el.id === id ? { ...el, ...updates } : el
      ),
    });
  };

  // 设置选中的元素
  const setSelectedElementId = (id: string | null) => {
    setState(prev => ({ ...prev, selectedElementId: id }));
  };

  // Undo操作
  const handleUndo = () => {
    const prevState = commandManager.current.undo();
    if (prevState) setState(prevState);
  };

  // Redo操作
  const handleRedo = () => {
    const nextState = commandManager.current.redo();
    if (nextState) setState(nextState);
  };

  // 复制画布内容
  const handleCopy = async () => {
    if (!canvasRef.current) return;
    
    try {
      // 使用html2canvas将画布内容转为图片
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(canvasRef.current);
      
      canvas.toBlob(blob => {
        if (!blob) return;
        
        // 复制到剪贴板
        navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
      });
    } catch (error) {
      console.error('复制失败:', error);
    }
  };

  // 初始化命令历史
  useEffect(() => {
    commandManager.current.execute(initialState);
  }, []);

  return (
    <div className="app">
      <Toolbar 
        onAddText={addTextElement}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onCopy={handleCopy}
      />
      
      <div className="main-content">
        <StickerSelector 
          stickers={["/stickers/Airi_01.png", "/stickers/Airi_02.png"]}
          onSelectSticker={setBackgroundSticker}
        />
        
        <CanvasEditor 
          ref={canvasRef}
          backgroundSticker={state.backgroundSticker}
          elements={state.elements}
          selectedElementId={state.selectedElementId}
          setSelectedElementId={setSelectedElementId}
        />
      </div>
      
      <PropertyInspector 
        element={state.elements.find(el => el.id === state.selectedElementId)}
        onUpdateElement={updateElement}
      />
    </div>
  );
}

export default App;