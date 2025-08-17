import React, { useEffect } from 'react';
import { type FlowNodeData, type BoundingBoxData, type PathData } from '../types';

const nodes: FlowNodeData[] = [
  { id: 'problem', text: 'Discover Problem', emoji: '🐛', position: { top: '45%', left: '15%' } },
  { id: 'find', text: "You Found Roy's Profile", position: { top: '15%', left: '50%' } },
  { 
    id: 'hire', 
    text: 'Hire Roy', 
    emoji: '🤝',
    position: { top: '35%', left: '50%' },
    tooltipText: "(*The Real Physical Human Person) Roy Hodge Jr., Unless you're alright with AI agents then please speak with my deepfake clone <a href=\"#forthelulz\" id=\"show-chat-link\" class=\"text-blue-400 underline hover:text-blue-300 cursor-pointer\">here</a>."
  },
  { id: 'profit', text: 'Profit', emoji: '📈', position: { top: '25%', left: '85%' } },
  { id: 'google', text: 'Google Endlessly', emoji: '🔮', position: { top: '65%', left: '50%' } },
  { id: 'waste', text: 'Waste Time', emoji: '⏳', position: { top: '85%', left: '50%' } },
  { id: 'cry', text: 'Cry', emoji: '😥', position: { top: '75%', left: '85%' } },
  { id: 'deepfake', text: 'Is that really me?', emoji: '🤔', position: { top: '15%', left: '15%' }, tooltipText: "Good question. The animated image on the left (blue border) is a deepfake I generated. The photo on the right (purple border) is the real me. It's a reminder to always question what you see online!" },
];

const boxes: BoundingBoxData[] = [
  { id: 'good-path', position: { top: '5%', left: '40%', width: '20%', height: '40%' }, color: 'blue' },
  { id: 'bad-path', position: { top: '55%', left: '40%', width: '20%', height: '40%' }, color: 'red' },
];

const paths: PathData[] = [
    { id: 'p-to-find', d: 'M 22 45 C 35 45, 35 15, 43 15' },
    { id: 'find-to-hire', d: 'M 50 20 L 50 30' },
    { id: 'hire-to-profit', d: 'M 57 35 C 65 35, 65 25, 78 25' },
    { id: 'p-to-google', d: 'M 22 45 C 35 45, 35 65, 43 65' },
    { id: 'google-to-waste', d: 'M 50 70 L 50 80' },
    { id: 'waste-to-cry', d: 'M 57 85 C 65 85, 65 75, 78 75' },
    { id: 'find-to-deepfake', d: 'M 43 15 L 22 15', isDotted: true },
];

const FlowNode: React.FC<{ node: FlowNodeData }> = ({ node }) => {
  const baseClasses = 'absolute transform -translate-x-1/2 -translate-y-1/2 min-w-[180px] text-center bg-gray-700 border border-gray-500 rounded-md shadow-lg px-6 py-3 transition-all duration-300';
  const finalClasses = `${baseClasses} ${node.className || ''}`;
  const containerStyle = { top: node.position.top, left: node.position.left };

  const hasHtmlInText = /<[a-z][\s\S]*>/i.test(node.text);

  if (node.tooltipText) {
    const hasHtmlInTooltip = /<[a-z][\s\S]*>/i.test(node.tooltipText);
    return (
      <div style={containerStyle} className="absolute group">
        <div className={finalClasses.replace('absolute', '')}>
          {node.text} {node.emoji}
        </div>
        <div 
          className="absolute bottom-full left-1/2 z-20 mb-2 w-72 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-blue-500"
        >
          {hasHtmlInTooltip
            ? <span dangerouslySetInnerHTML={{ __html: node.tooltipText }} />
            : node.tooltipText
          }
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={containerStyle}
      className={finalClasses}
    >
      {hasHtmlInText ? (
        <span dangerouslySetInnerHTML={{ __html: `${node.text} ${node.emoji || ''}`.trim() }} />
      ) : (
        <>
          {node.text} {node.emoji}
        </>
      )}
    </div>
  );
};

interface FlowchartProps {
  onShowChat: () => void;
}

const Flowchart: React.FC<FlowchartProps> = ({ onShowChat }) => {
  useEffect(() => {
    const link = document.getElementById('show-chat-link');
    if (link) {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        onShowChat();
        
        setTimeout(() => {
            const chatSection = document.getElementById('forthelulz');
            if (chatSection) {
              chatSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0);
      };
      
      link.addEventListener('click', handleClick);

      return () => {
        link.removeEventListener('click', handleClick);
      };
    }
  }, [onShowChat]);

  return (
    <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[500px] relative mt-8 no-print">
      {boxes.map((box) => (
        <div
          key={box.id}
          className={`absolute rounded-lg bg-gray-800/50 ${
            box.color === 'blue' ? 'border-2 border-blue-500' : 'border-2 border-red-500'
          }`}
          style={{ ...box.position }}
        ></div>
      ))}

      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="absolute top-0 left-0 pointer-events-none"
      >
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="6" markerHeight="6"
                orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
            </marker>
        </defs>
        {paths.map(path => (
            <path 
                key={path.id} 
                d={path.d} 
                stroke="#9ca3af" 
                strokeWidth="0.5" 
                fill="none" 
                markerEnd="url(#arrow)" 
                strokeDasharray={path.isDotted ? '2 2' : 'none'}
            />
        ))}
      </svg>
      
      {nodes.map((node) => (
        <FlowNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Flowchart;