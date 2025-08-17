
export interface FlowNodeData {
  id: string;
  text: string;
  emoji?: string;
  position: { top: string; left: string };
  isLink?: boolean;
  tooltipText?: string;
  className?: string;
}

export interface BoundingBoxData {
  id:string;
  position: { top: string; left: string; width: string; height: string };
  color: 'blue' | 'red';
}

export interface PathData {
  id: string;
  d: string;
  isDotted?: boolean;
}