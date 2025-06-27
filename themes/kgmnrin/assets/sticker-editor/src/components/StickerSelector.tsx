import React from 'react';

interface StickerSelectorProps {
  stickers: string[];
  onSelectSticker: (url: string) => void;
}

const StickerSelector: React.FC<StickerSelectorProps> = ({ 
  stickers, 
  onSelectSticker 
}) => {
  return (
    <div className="sticker-selector">
      <h3>选择底图</h3>
      <div className="sticker-grid">
        {stickers.map((sticker, index) => (
          <img
            key={index}
            src={sticker}
            alt={`表情贴纸 ${index + 1}`}
            onClick={() => onSelectSticker(sticker)}
            className="sticker-thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default StickerSelector;