export class CommandManager {
	private history: AppState[] = [];
	private currentIndex = -1;
	
	execute(state: AppState) {
	  // 清除当前索引后的历史
	  this.history = this.history.slice(0, this.currentIndex + 1);
	  this.history.push(JSON.parse(JSON.stringify(state)));
	  this.currentIndex = this.history.length - 1;
	}
	
	undo(): AppState | null {
	  if (this.currentIndex <= 0) return null;
	  this.currentIndex--;
	  return this.history[this.currentIndex];
	}
	
	redo(): AppState | null {
	  if (this.currentIndex >= this.history.length - 1) return null;
	  this.currentIndex++;
	  return this.history[this.currentIndex];
	}
	
	getCurrentState(): AppState {
	  return this.history[this.currentIndex];
	}
  }