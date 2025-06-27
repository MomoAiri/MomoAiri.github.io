// 元素类型
export type ElementType = 'text';

// 基本元素接口
export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
}

// 文本元素
export interface TextElement extends CanvasElement {
  type: 'text';
  content: string;
  fontSize: number;
}

// 所有元素的联合类型
export type AnyElement = TextElement;

// 命令接口
export interface Command {
  execute(): void;
  undo(): void;
}

// 应用状态
export interface AppState {
  elements: AnyElement[];
  backgroundSticker: string | null;
  selectedElementId: string | null;
}