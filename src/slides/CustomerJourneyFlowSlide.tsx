import React from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from "@xyflow/react";

const CustomerJourneyFlowSlide: React.FC = () => {
  // Define nodes with ReactFlow format
  const initialNodes: Node[] = [
    {
      id: "start",
      type: "input",
      data: { label: "Customer Inquiry" },
      position: { x: 400, y: 0 },
      style: {
        background: "rgba(59, 130, 246, 0.5)",
        border: "2px solid rgba(96, 165, 250, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "50px",
        fontSize: "14px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "channel",
      data: { label: "Channel?" },
      position: { x: 400, y: 100 },
      style: {
        background: "rgba(168, 85, 247, 0.5)",
        border: "2px solid rgba(192, 132, 252, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "web",
      data: { label: "Website Form" },
      position: { x: 150, y: 200 },
      style: {
        background: "rgba(51, 65, 85, 0.6)",
        border: "2px solid rgba(100, 116, 139, 0.5)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "phone",
      data: { label: "Phone Call" },
      position: { x: 380, y: 200 },
      style: {
        background: "rgba(51, 65, 85, 0.6)",
        border: "2px solid rgba(100, 116, 139, 0.5)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "email",
      data: { label: "Email" },
      position: { x: 610, y: 200 },
      style: {
        background: "rgba(51, 65, 85, 0.6)",
        border: "2px solid rgba(100, 116, 139, 0.5)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "crm",
      data: { label: "CRM Entry" },
      position: { x: 400, y: 300 },
      style: {
        background: "rgba(51, 65, 85, 0.6)",
        border: "2px solid rgba(100, 116, 139, 0.5)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "qualify",
      data: { label: "Lead Qualified?" },
      position: { x: 380, y: 400 },
      style: {
        background: "rgba(168, 85, 247, 0.5)",
        border: "2px solid rgba(192, 132, 252, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "hot",
      type: "output",
      data: { label: "Hot Lead" },
      position: { x: 250, y: 500 },
      style: {
        background: "rgba(22, 163, 74, 0.5)",
        border: "2px solid rgba(34, 197, 94, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
      },
    },
    {
      id: "nurture",
      type: "output",
      data: { label: "Nurture Flow" },
      position: { x: 550, y: 500 },
      style: {
        background: "rgba(217, 119, 6, 0.5)",
        border: "2px solid rgba(245, 158, 11, 0.8)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "13px",
        fontWeight: "600",
        backdropFilter: "blur(8px)",
      },
    },
  ];

  // Define edges (connections)
  const initialEdges: Edge[] = [
    { id: "e1", source: "start", target: "channel", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
    { id: "e2", source: "channel", target: "web", label: "Web", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 11, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
    { id: "e3", source: "channel", target: "phone", label: "Call", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 11, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
    { id: "e4", source: "channel", target: "email", label: "Email", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 11, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
    { id: "e5", source: "web", target: "crm", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
    { id: "e6", source: "phone", target: "crm", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
    { id: "e7", source: "email", target: "crm", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
    { id: "e8", source: "crm", target: "qualify", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
    { id: "e9", source: "qualify", target: "hot", label: "Yes", style: { stroke: "rgba(34, 197, 94, 0.7)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 11, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
    { id: "e10", source: "qualify", target: "nurture", label: "Not Yet", style: { stroke: "rgba(245, 158, 11, 0.7)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 11, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
        Customer Communication Flow
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Mapping customer touchpoints and decision paths
      </p>
      
      <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
          className="bg-transparent"
        >
          <Background 
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1}
            color="rgba(255, 255, 255, 0.1)"
          />
          <Controls 
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
            }}
          />
        </ReactFlow>
      </div>

      <div className="mt-3 flex gap-4 text-xs justify-center flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-12 h-6 rounded-full bg-gradient-to-br from-blue-600/50 to-blue-800/50 backdrop-blur-sm border-2 border-blue-400/80 shadow-lg"></div>
          <span className="text-white/70">Start/End</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 rounded bg-gradient-to-br from-purple-600/50 to-purple-800/50 backdrop-blur-sm border-2 border-purple-400/80 shadow-lg"></div>
          <span className="text-white/70">Decision</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 rounded bg-gradient-to-br from-slate-700/60 to-slate-900/60 backdrop-blur-sm border-2 border-slate-400/50 shadow-lg"></div>
          <span className="text-white/70">Process</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 rounded bg-gradient-to-br from-green-600/50 to-green-800/50 backdrop-blur-sm border-2 border-green-400/80 shadow-lg"></div>
          <span className="text-white/70">Hot Lead</span>
        </div>
      </div>
    </>
  );
};

export default CustomerJourneyFlowSlide;
