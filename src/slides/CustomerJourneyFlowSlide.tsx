import React, { useState, useEffect } from "react";
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

type JourneyType = "usedCar" | "service";

// Custom styles for ReactFlow controls
const controlStyles = `
  .react-flow__controls-custom button {
    background: white !important;
    border: 1px solid #e5e7eb !important;
    border-bottom: none !important;
    color: #1f2937 !important;
    width: 32px !important;
    height: 32px !important;
  }
  .react-flow__controls-custom button:hover {
    background: #f3f4f6 !important;
  }
  .react-flow__controls-custom button:first-child {
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
  }
  .react-flow__controls-custom button:last-child {
    border-bottom: 1px solid #e5e7eb !important;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
  }
  .react-flow__controls-custom svg {
    fill: #1f2937 !important;
    width: 16px !important;
    height: 16px !important;
  }
`;

// Used Car Sales Journey with AI Enhancement
const usedCarNodes: Node[] = [
  { id: "start", type: "input", data: { label: "Used Car Inquiry" }, position: { x: 50, y: 0 },
    style: { background: "rgba(59, 130, 246, 0.5)", border: "2px solid rgba(96, 165, 250, 0.8)", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "12px", fontWeight: "600", backdropFilter: "blur(8px)" }},
  { id: "ai-chatbot", data: { label: "AI Chatbot\n(Impel)" }, position: { x: 40, y: 90 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "video-intro", data: { label: "Video Intro\n(Sales)" }, position: { x: 160, y: 90 },
    style: { background: "rgba(236, 72, 153, 0.5)", border: "2px solid rgba(244, 114, 182, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "channel", data: { label: "Channel?" }, position: { x: 240, y: 90 },
    style: { background: "rgba(168, 85, 247, 0.5)", border: "2px solid rgba(192, 132, 252, 0.8)", color: "white", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "600", backdropFilter: "blur(8px)" }},
  { id: "web", data: { label: "Website" }, position: { x: 180, y: 180 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)" }},
  { id: "phone", data: { label: "Phone" }, position: { x: 280, y: 180 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)" }},
  { id: "ai-sentiment", data: { label: "AI Sentiment\nAnalysis" }, position: { x: 40, y: 270 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "crm", data: { label: "CRM Entry\n+ Data Lake" }, position: { x: 215, y: 270 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "ai-scoring", data: { label: "AI Lead\nScoring" }, position: { x: 400, y: 270 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "qualify", data: { label: "Qualified?" }, position: { x: 230, y: 360 },
    style: { background: "rgba(168, 85, 247, 0.5)", border: "2px solid rgba(192, 132, 252, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)" }},
  { id: "ai-personalize", data: { label: "AI Personalized\nCommunication" }, position: { x: 30, y: 450 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "hot", data: { label: "Hot Lead\nSales Handoff" }, position: { x: 200, y: 450 },
    style: { background: "rgba(22, 163, 74, 0.5)", border: "2px solid rgba(34, 197, 94, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "video-library", data: { label: "Video Library\n(Campaigns)" }, position: { x: 500, y: 180 },
    style: { background: "rgba(236, 72, 153, 0.5)", border: "2px solid rgba(244, 114, 182, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "nurture", data: { label: "AI Nurture\nDrip Campaign" }, position: { x: 360, y: 450 },
    style: { background: "rgba(217, 119, 6, 0.5)", border: "2px solid rgba(245, 158, 11, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "data-lake", type: "output", data: { label: "Analytics & Insights" }, position: { x: 500, y: 360 },
    style: { background: "rgba(6, 182, 212, 0.5)", border: "2px solid rgba(34, 211, 238, 0.8)", color: "white", padding: "6px 12px", borderRadius: "8px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)" }},
];

const usedCarEdges: Edge[] = [
  { id: "e1", source: "start", target: "ai-chatbot", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e1b", source: "start", target: "video-intro", animated: true, style: { stroke: "rgba(244, 114, 182, 0.7)", strokeWidth: 2 } },
  { id: "e2", source: "start", target: "channel", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e2b", source: "video-library", target: "ai-personalize", animated: true, style: { stroke: "rgba(244, 114, 182, 0.7)", strokeWidth: 2 }, label: "Content", labelStyle: { fill: "white", fontSize: 9, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  { id: "e3", source: "channel", target: "web", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e4", source: "channel", target: "phone", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e5", source: "web", target: "crm", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e6", source: "phone", target: "crm", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e7", source: "ai-chatbot", target: "ai-sentiment", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e8", source: "crm", target: "ai-scoring", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e9", source: "ai-sentiment", target: "crm", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e10", source: "crm", target: "qualify", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e11", source: "ai-scoring", target: "qualify", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e12", source: "qualify", target: "hot", label: "High", style: { stroke: "rgba(34, 197, 94, 0.7)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 10, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  { id: "e13", source: "qualify", target: "nurture", label: "Medium", style: { stroke: "rgba(245, 158, 11, 0.7)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 10, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  { id: "e14", source: "qualify", target: "ai-personalize", label: "All", style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 }, labelStyle: { fill: "white", fontSize: 10, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  { id: "e15", source: "crm", target: "data-lake", animated: true, style: { stroke: "rgba(34, 211, 238, 0.6)", strokeWidth: 2 } },
];

// Service Booking Journey with AI Enhancement
const serviceNodes: Node[] = [
  { id: "start", type: "input", data: { label: "Service Inquiry" }, position: { x: 50, y: 0 },
    style: { background: "rgba(59, 130, 246, 0.5)", border: "2px solid rgba(96, 165, 250, 0.8)", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "12px", fontWeight: "600", backdropFilter: "blur(8px)" }},
  { id: "ai-scheduler", data: { label: "AI Scheduler\n(Smart Calendar)" }, position: { x: 30, y: 90 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "video-walkround", data: { label: "Service\nWalkaround" }, position: { x: 160, y: 90 },
    style: { background: "rgba(236, 72, 153, 0.5)", border: "2px solid rgba(244, 114, 182, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "channel", data: { label: "Channel?" }, position: { x: 240, y: 90 },
    style: { background: "rgba(168, 85, 247, 0.5)", border: "2px solid rgba(192, 132, 252, 0.8)", color: "white", padding: "8px 16px", borderRadius: "8px", fontSize: "12px", fontWeight: "600", backdropFilter: "blur(8px)" }},
  { id: "app", data: { label: "Mobile App" }, position: { x: 160, y: 180 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)" }},
  { id: "web", data: { label: "Website" }, position: { x: 250, y: 180 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)" }},
  { id: "phone", data: { label: "Phone" }, position: { x: 340, y: 180 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)" }},
  { id: "ai-vehicle", data: { label: "AI Vehicle\nHistory Check" }, position: { x: 30, y: 270 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "crm", data: { label: "CRM + Service\nHistory" }, position: { x: 215, y: 270 },
    style: { background: "rgba(51, 65, 85, 0.6)", border: "2px solid rgba(100, 116, 139, 0.5)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "11px", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "ai-recommend", data: { label: "AI Service\nRecommendations" }, position: { x: 390, y: 270 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "booking", data: { label: "Booking\nConfirmed" }, position: { x: 220, y: 360 },
    style: { background: "rgba(22, 163, 74, 0.5)", border: "2px solid rgba(34, 197, 94, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "ai-reminder", data: { label: "AI Smart\nReminders" }, position: { x: 40, y: 450 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "video-content", data: { label: "Video Content\n(CitNow-style)" }, position: { x: 500, y: 270 },
    style: { background: "rgba(236, 72, 153, 0.5)", border: "2px solid rgba(244, 114, 182, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "service", data: { label: "Service\nCompleted" }, position: { x: 200, y: 450 },
    style: { background: "rgba(22, 163, 74, 0.5)", border: "2px solid rgba(34, 197, 94, 0.8)", color: "white", padding: "8px 14px", borderRadius: "8px", fontSize: "11px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "ai-feedback", data: { label: "AI Feedback\nAnalysis" }, position: { x: 360, y: 450 },
    style: { background: "rgba(139, 92, 246, 0.5)", border: "2px solid rgba(167, 139, 250, 0.8)", color: "white", padding: "6px 12px", borderRadius: "6px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)", whiteSpace: "pre-line", textAlign: "center" }},
  { id: "data-lake", type: "output", data: { label: "Service Analytics" }, position: { x: 500, y: 360 },
    style: { background: "rgba(6, 182, 212, 0.5)", border: "2px solid rgba(34, 211, 238, 0.8)", color: "white", padding: "6px 12px", borderRadius: "8px", fontSize: "10px", fontWeight: "600", backdropFilter: "blur(8px)" }},
];

const serviceEdges: Edge[] = [
  { id: "e1", source: "start", target: "ai-scheduler", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e1b", source: "start", target: "video-walkaround", animated: true, style: { stroke: "rgba(244, 114, 182, 0.7)", strokeWidth: 2 } },
  { id: "e2", source: "start", target: "channel", animated: true, style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e2b", source: "booking", target: "video-content", animated: true, style: { stroke: "rgba(244, 114, 182, 0.7)", strokeWidth: 2 }, label: "Updates", labelStyle: { fill: "white", fontSize: 9, fontWeight: 500 }, labelBgStyle: { fill: "rgba(0, 0, 0, 0.6)" } },
  { id: "e3", source: "channel", target: "app", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e4", source: "channel", target: "web", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e5", source: "channel", target: "phone", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e6", source: "app", target: "crm", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e7", source: "web", target: "crm", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e8", source: "phone", target: "crm", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e9", source: "ai-scheduler", target: "ai-vehicle", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e10", source: "ai-vehicle", target: "crm", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e11", source: "crm", target: "ai-recommend", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e12", source: "crm", target: "booking", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e13", source: "ai-recommend", target: "booking", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e14", source: "booking", target: "ai-reminder", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e15", source: "booking", target: "service", style: { stroke: "rgba(148, 163, 184, 0.6)", strokeWidth: 2 } },
  { id: "e16", source: "service", target: "ai-feedback", animated: true, style: { stroke: "rgba(167, 139, 250, 0.7)", strokeWidth: 2 } },
  { id: "e17", source: "crm", target: "data-lake", animated: true, style: { stroke: "rgba(34, 211, 238, 0.6)", strokeWidth: 2 } },
  { id: "e18", source: "ai-feedback", target: "data-lake", animated: true, style: { stroke: "rgba(34, 211, 238, 0.6)", strokeWidth: 2 } },
];

const CustomerJourneyFlowSlide: React.FC = () => {
  const [journeyType, setJourneyType] = useState<JourneyType>("usedCar");
  const [nodes, setNodes, onNodesChange] = useNodesState(usedCarNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(usedCarEdges);

  // Update nodes and edges when journey type changes
  useEffect(() => {
    console.log('Journey type changed to:', journeyType);
    if (journeyType === "usedCar") {
      setNodes(usedCarNodes);
      setEdges(usedCarEdges);
    } else {
      setNodes(serviceNodes);
      setEdges(serviceEdges);
    }
  }, [journeyType, setNodes, setEdges]);

  console.log('Rendering CustomerJourneyFlowSlide with nodes:', nodes.length, 'edges:', edges.length);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: controlStyles }} />
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase">
            AI-Enhanced Customer Journeys
          </h2>
          <p className="text-sm md:text-base text-white/80 mt-1">
            Intelligent automation & personalization at every touchpoint
          </p>
        </div>
        
        {/* Journey Toggle */}
        <div className="flex gap-2 bg-white/10 p-1 rounded-lg">
          <button
            onClick={() => setJourneyType("usedCar")}
            className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all ${
              journeyType === "usedCar" ? "bg-white text-black" : "text-white hover:bg-white/20"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            Used Car Sales
          </button>
          <button
            onClick={() => setJourneyType("service")}
            className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all ${
              journeyType === "service" ? "bg-white text-black" : "text-white hover:bg-white/20"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
            </svg>
            Service Booking
          </button>
        </div>
      </div>
      
      <div className="flex gap-4">
        {/* Main ReactFlow Diagram */}
        <div className="relative flex-1 h-[500px] bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        {nodes.length > 0 ? (
          <ReactFlow
            key={journeyType}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            fitViewOptions={{ padding: 0.2, duration: 200 }}
            attributionPosition="bottom-left"
            className="bg-transparent"
            minZoom={0.5}
            maxZoom={1.5}
            defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          >
            <Background 
              variant={BackgroundVariant.Dots}
              gap={20}
              size={1}
              color="rgba(255, 255, 255, 0.1)"
            />
            <Controls 
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="react-flow__controls-custom"
            />
          </ReactFlow>
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            Loading journey...
          </div>
        )}
        </div>
        
        {/* Other Journey Examples - Right Side */}
        <div className="w-80 h-[500px] rounded-lg p-4 overflow-y-auto" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <h4 className="text-sm font-bold text-white mb-3 uppercase">Other AI Journey Opportunities</h4>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <div>
                <div className="font-semibold text-white">Test Drive Booking</div>
                <div className="text-white/60">Scheduling optimisation</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <div>
                <div className="font-semibold text-white">Finance Application</div>
                <div className="text-white/60">Pre-qualification & documentation</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <div>
                <div className="font-semibold text-white">Customer Retention</div>
                <div className="text-white/60">Predictive churn analysis</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <div>
                <div className="font-semibold text-white">Upsell Opportunities</div>
                <div className="text-white/60">AI recommendations</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-400">•</span>
              <div>
                <div className="font-semibold text-white">VIP Experience</div>
                <div className="text-white/60">Behavior analysis</div>
              </div>
            </div>
          </div>

          {/* Data Infrastructure Section */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <h4 className="text-sm font-bold text-cyan-400 mb-2 uppercase">Data Infrastructure</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">▸</span>
                <div>
                  <div className="font-semibold text-white">GCP Data Lake</div>
                  <div className="text-white/60">Centralized customer data repository</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">▸</span>
                <div>
                  <div className="font-semibold text-white">Uplift Modelling</div>
                  <div className="text-white/60">Campaign effectiveness prediction</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">▸</span>
                <div>
                  <div className="font-semibold text-white">Churn Prediction</div>
                  <div className="text-white/60">Especially aftersales retention insights</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">▸</span>
                <div>
                  <div className="font-semibold text-white">Customer Lifetime Value</div>
                  <div className="text-white/60">Long-term value modelling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex gap-4 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-5 rounded bg-gradient-to-br from-violet-600/50 to-violet-800/50 border border-violet-400/80"></div>
          <span className="text-white/70">AI Tools</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-5 rounded bg-gradient-to-br from-pink-600/50 to-pink-800/50 border border-pink-400/80"></div>
          <span className="text-white/70">Video Content</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-5 rounded bg-gradient-to-br from-slate-700/60 to-slate-900/60 border border-slate-400/50"></div>
          <span className="text-white/70">Process</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-5 rounded bg-gradient-to-br from-cyan-600/50 to-cyan-800/50 border border-cyan-400/80"></div>
          <span className="text-white/70">Data Lake</span>
        </div>
      </div>
    </>
  );
};

export default CustomerJourneyFlowSlide;
