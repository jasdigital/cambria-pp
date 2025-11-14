import React, { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TitleSlideContent from "./slides/TitleSlide";
import OverviewSlideContent from "./slides/OverviewSlide";
import GrangeSectionSlideContent from "./slides/GrangeSectionSlide";
import GrangeWebsiteUXSlideContent from "./slides/GrangeWebsiteUXSlide";
import GrangeUsedCarsSlideContent from "./slides/GrangeUsedCarsSlide";
import GrangeBeforeAfterSlideContent from "./slides/GrangeBeforeAfterSlide";
import GrangeBeforeAfterWipeSlideContent from "./slides/GrangeBeforeAfterWipeSlide";
import GrangeLocationSearchSlideContent from "./slides/GrangeLocationSearchSlide";
import DataCRMSectionSlideContent from "./slides/DataCRMSectionSlide";
import SEOComparisonSlideContent from "./slides/SEOComparisonSlide";
import CustomerJourneyFlowSlideContent from "./slides/CustomerJourneyFlowSlide";
import CRMFoundationsSlideContent from "./slides/CRMFoundationsSlide";
import SingleCustomerViewSlideContent from "./slides/SingleCustomerViewSlide";
import DataFlowSystemsSlideContent from "./slides/DataFlowSystemsSlide";
import LifecycleAutomationSlideContent from "./slides/LifecycleAutomationSlide";
import CRMKPIFrameworkSlideContent from "./slides/CRMKPIFrameworkSlide";
import PersonalisationSlideContent from "./slides/PersonalisationSlide";
import SocialSectionSlideContent from "./slides/SocialSectionSlide";
import SocialManagementToolsSlideContent from "./slides/SocialManagementToolsSlide";
import SocialVideoMontageSlideContent from "./slides/SocialVideoMontageSlide";
import YouTubeShortsSlideContent from "./slides/YouTubeShortsSlide";
import InvictaSectionSlideContent from "./slides/InvictaSectionSlide";
import InvictaSlideContent from "./slides/InvictaSlide";
import InvictaLocalSEOSlideContent from "./slides/InvictaLocalSEOSlide";
import InvictaTopSearchTermsSlideContent from "./slides/InvictaTopSearchTermsSlide";
import InvictaGooglePlacesSlideContent from "./slides/InvictaGooglePlacesSlide";
import ShowroomBrandSlideContent from "./slides/ShowroomBrandSlide";
import VideoContentSlideContent from "./slides/VideoContentSlide";
import TimeToMarketSlideContent from "./slides/TimeToMarketSlide";
import RetentionAmberSlideContent from "./slides/RetentionAmberSlide";
import CitNowSlideContent from "./slides/CitNowSlide";
import LeadershipManagementSlideContent from "./slides/LeadershipManagementSlide";
import NextStepsSlideContent from "./slides/NextStepsSlide";

type SlideType = "title" | "content" | "media";

type TransitionStyle = "slide" | "fade" | "zoom";

interface Slide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  bullets?: string[];
  mediaUrl?: string;
  mediaAlt?: string;
  videoUrl?: string;
  notes?: string;
  brand?: "cambria" | "grange" | "invicta";
}

const slides: Slide[] = [
  {
    id: "title",
    type: "title",
    title: "",
    subtitle: "Cambria Automobiles · Grange Automotive · Invicta",
    notes:
      "Open with context: this is a strategic digital review focused on Grange and Invicta, across UX, performance, data, and retention.",
    brand: "cambria",
  },
  {
    id: "overview",
    type: "content",
    title: "Overview",
    bullets: [
      "Website Experience & UX",
      "Used Car Journey & Conversion",
      "Navigation & Visual Identity",
      "SEO, PPC & Paid Alignment",
      "AI & Data Enrichment",
      "Retention & Service Journeys",
    ],
    notes:
      "Set expectations: we will move from customer-facing experience into data, performance marketing, and long-term retention.",
    brand: "cambria",
  },
  {
    id: "grange-section",
    type: "title",
    title: "Grange Website Review",
    notes: "Section divider for Grange-specific content.",
    brand: "grange",
  },
  {
    id: "grange-website-ux",
    type: "content",
    title: "Grange — Website & UX",
    notes: "Consolidated view of website experience, navigation, visual identity, and homepage.",
    brand: "grange",
  },
  {
    id: "grange-used-cars",
    type: "content",
    title: "Grange — Used Cars",
    notes: "Consolidated view of used cars issues and enhancements.",
    brand: "grange",
  },
  {
    id: "grange-before-after",
    type: "content",
    title: "Grange — Homepage Transformation",
    notes: "Interactive before/after comparison of homepage design.",
    brand: "grange",
  },
  {
    id: "grange-before-after-wipe",
    type: "content",
    title: "Grange — Used Car Imagery",
    notes: "Draggable wipe/slider comparison of used car photography quality.",
    brand: "grange",
  },
  {
    id: "grange-location-search",
    type: "content",
    title: "Grange — Location Search Analysis",
    notes: "Search volume analysis for Grange premium and luxury brand locations.",
    brand: "grange",
  },
  {
    id: "seo-comparison",
    type: "content",
    title: "SEO Performance",
    notes: "Search term rankings comparison with competitors by volume.",
    brand: "grange",
  },
  {
    id: "data-crm-section",
    type: "title",
    title: "Data & CRM",
    notes: "Section divider for Data and CRM content.",
    brand: "cambria",
  },
  {
    id: "customer-journey-flow",
    type: "content",
    title: "Customer Communication Flow",
    notes: "Interactive flow diagram showing customer journey and decision points.",
    brand: "cambria",
  },
  {
    id: "crm-foundations",
    type: "content",
    title: "CRM & Data Strategy Foundations",
    notes: "Overview of 10 core foundations for automotive CRM excellence.",
    brand: "cambria",
  },
  {
    id: "single-customer-view",
    type: "content",
    title: "Single Customer View",
    notes: "Unified profile connecting all customer touchpoints.",
    brand: "cambria",
  },
  {
    id: "data-flow-systems",
    type: "content",
    title: "Real-Time Data Flow",
    notes: "Breaking down the fragmented automotive stack.",
    brand: "cambria",
  },
  {
    id: "lifecycle-automation",
    type: "content",
    title: "Lifecycle Automation",
    notes: "High-performing journeys for sales and aftersales.",
    brand: "cambria",
  },
  {
    id: "crm-kpi-framework",
    type: "content",
    title: "KPI Framework",
    notes: "Real-time reporting with single source of truth.",
    brand: "cambria",
  },
  {
    id: "personalisation",
    type: "content",
    title: "Personalisation & Relevance",
    notes: "Using customer data for relevant messaging.",
    brand: "cambria",
  },
  {
    id: "social-section",
    type: "title",
    title: "Social",
    notes: "Section divider for Social content.",
    brand: "cambria",
  },
  {
    id: "social-management-tools",
    type: "content",
    title: "Social Media Management Tools",
    notes: "Overview of automation platforms like Hootsuite, Buffer, Sprout Social, and Later for multi-location social management.",
    brand: "cambria",
  },
  {
    id: "social-video-montage",
    type: "content",
    title: "Social Content Showcase",
    notes: "Video montage showcasing premium content for social media platforms.",
    brand: "cambria",
  },
  {
    id: "youtube-shorts",
    type: "content",
    title: "YouTube Shorts Strategy",
    notes: "Vertical video content strategy for YouTube Shorts with content types and performance metrics.",
    brand: "cambria",
  },
  {
    id: "invicta-section",
    type: "title",
    title: "Invicta",
    notes: "Section divider for Invicta content.",
    brand: "invicta",
  },
  {
    id: "invicta",
    type: "content",
    title: "Invicta — Digital Review",
    bullets: [
      "Improve product placement visual hierarchy",
      "Leverage local events & partnerships for content",
      "Enhance social photography quality and consistency",
      "Fix reservation & finance redirect issues",
    ],
    notes:
      "Highlight Invicta as a big opportunity: volume plus local presence, but journeys need tightening.",
    brand: "invicta",
  },
  {
    id: "invicta-local-seo",
    type: "content",
    title: "Invicta — Local SEO Audit",
    notes: "Geographic distribution and search volume analysis across Invicta, Motorparks, and County locations.",
    brand: "invicta",
  },
  {
    id: "invicta-top-search-terms",
    type: "content",
    title: "Invicta — Top Search Terms",
    notes: "Analysis of top-performing search terms by volume, competition, and bid range.",
    brand: "invicta",
  },
  {
    id: "invicta-google-places",
    type: "content",
    title: "Invicta — Google Business Profile Review",
    notes: "Key actions to maximize local search visibility across all Invicta locations.",
    brand: "invicta",
  },
  {
    id: "media-showroom",
    type: "media",
    title: "Showroom & Brand Experience",
    subtitle: "Use physical experience as a key digital asset",
    bullets: [
      "Hero imagery should showcase the showroom experience",
      "Blend lifestyle-led photography with vehicle packshots",
      "Align onsite visuals with OEM and group-level brand",
    ],
    mediaUrl: "/images/grange-showroom-placeholder.jpg",
    mediaAlt: "Grange showroom imagery",
    notes:
      "Invite them to imagine a gallery of real locations: this makes the online journey feel closer to the showroom experience.",
  },
  {
    id: "media-video",
    type: "media",
    title: "Interactive & Video Content",
    subtitle: "Using rich media to tell the story",
    bullets: [
      "Service walkarounds, sales intros, and CitNow-style content",
      "Create reusable libraries for campaigns and landing pages",
      "Integrate video into key decision points in the journey",
    ],
    videoUrl: "/media/example-showroom-video.mp4",
    mediaAlt: "Showroom video",
    notes:
      "This is a placeholder for real content; talk about CitNow, OEM media and what could be done with richer video.",
  },
  {
    id: "time-to-market",
    type: "content",
    title: "Time to Market",
    bullets: [
      "Accelerate photo → live workflow for used cars",
      "AI-driven data enrichment for speed & accuracy",
      "Better operational visibility across dealerships",
      "Automated tagging for categories & features",
    ],
    notes:
      "Show how operational improvements translate directly into faster sales and better use of PPC and social.",
  },
  {
    id: "retention-amber",
    type: "content",
    title: "Retention & Amber Work",
    bullets: [
      "Automated MOT & WIP reminders",
      "Personalised, multi-channel messaging",
      "WhatsApp and SMS layered with email",
      "Better post-service follow-up journeys",
    ],
    notes:
      "Tie this back to lifetime value and aftersales profitability. This is where CRM and digital can work together.",
  },
  {
    id: "citnow",
    type: "content",
    title: "CitNow & Media Standards",
    bullets: [
      "Apply consistent media guidelines across brands",
      "Improve minimum quality thresholds for photos & video",
      "Integrate CitNow content into CRM and UVD pages",
      "Use rich media in outbound comms and remarketing",
    ],
    notes:
      "Position CitNow not just as a workshop tool, but a content engine for marketing and customer reassurance.",
    brand: "cambria",
  },
  {
    id: "leadership-management",
    type: "content",
    title: "Leadership & Management",
    notes:
      "Strategic leadership approach combining agile marketing, project management excellence, and change management expertise from Mercedes-Benz Leadership Accelerator programme.",
    brand: "cambria",
  },
  {
    id: "next-steps",
    type: "content",
    title: "Next Steps",
    bullets: [
      "0–30 days: Quick Wins in UX, copy & journeys",
      "30–90 days: Platform and performance improvements",
      "Q2–Q3: AI & data enrichment across stock & journeys",
      "Longer term: Full digital transformation roadmap",
    ],
    notes:
      "End with a clear phased view so they can see where to start and how it scales.",
    brand: "cambria",
  },
];

const getVariants = (style: TransitionStyle, direction: number) => {
  if (style === "fade") {
    return {
      enter: { opacity: 0 },
      center: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  if (style === "zoom") {
    return {
      enter: { opacity: 0, scale: 0.94 },
      center: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.96 },
    };
  }
  // default: slide
  return {
    enter: {
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    },
  };
};

const parseHashIndex = (): number | null => {
  const hash = window.location.hash || "";
  const match = hash.match(/(\d+)/);
  if (!match) return null;
  const idx = parseInt(match[1], 10) - 1;
  if (Number.isNaN(idx)) return null;
  if (idx < 0 || idx >= slides.length) return null;
  return idx;
};

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const idx = parseHashIndex();
    return idx ?? 0;
  });
  const [direction, setDirection] = useState(1);
  const [transitionStyle, setTransitionStyle] = useState<TransitionStyle>("slide");
  const [presenterMode, setPresenterMode] = useState(false);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      if (nextIndex < 0 || nextIndex >= slides.length) return;
      setDirection(nextIndex > currentIndex ? 1 : -1);
      setCurrentIndex(nextIndex);
    },
    [currentIndex]
  );

  const goNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      goToSlide(currentIndex + 1);
    }
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  }, [currentIndex, goToSlide]);

  // Sync hash with slide index
  useEffect(() => {
    const hashIndex = parseHashIndex();
    if (hashIndex !== null && hashIndex !== currentIndex) {
      setCurrentIndex(hashIndex);
    }
    const onHashChange = () => {
      const idx = parseHashIndex();
      if (idx !== null) {
        setCurrentIndex(idx);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const newHash = `#/slide/${currentIndex + 1}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  }, [currentIndex]);

  const slide = slides[currentIndex];
  const nextSlide = slides[currentIndex + 1];
  const isCambria = slide.brand === "cambria";
  const isInvicta = slide.brand === "invicta";
  const isGrange = slide.brand === "grange";

  const [videoEnded, setVideoEnded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 15) {
      videoRef.current.pause();
      setVideoEnded(true);
      setVideoPlaying(false);
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  const handleReplayVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setVideoEnded(false);
      setVideoPlaying(true);
    }
  };

  useEffect(() => {
    setVideoEnded(false);
    setVideoPlaying(false);
  }, [currentIndex]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      }
      if (e.key.toLowerCase() === "p") {
        e.preventDefault();
        setPresenterMode((prev) => !prev);
      }
      if (e.key.toLowerCase() === "s") {
        e.preventDefault();
        if (slide.id === "grange-section") {
          if (videoPlaying || videoEnded) {
            handleReplayVideo();
          } else {
            handlePlayVideo();
          }
        }
        if (slide.id === "social-video-montage") {
          if ((window as any).replayMontageVideos) {
            (window as any).replayMontageVideos();
          } else if ((window as any).playMontageVideos) {
            (window as any).playMontageVideos();
          }
        }
      }
      if (e.key === "1") setTransitionStyle("slide");
      if (e.key === "2") setTransitionStyle("fade");
      if (e.key === "3") setTransitionStyle("zoom");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, slide.id, videoPlaying, videoEnded, handlePlayVideo, handleReplayVideo]);

  const variants = getVariants(transitionStyle, direction);

  return (
    <div className="h-screen w-screen bg-neutral-100 text-neutral-900 flex flex-col">
      {/* Top bar */}
      <header 
        className="w-full flex items-center justify-between px-6 md:px-10 backdrop-blur z-20 transition-colors duration-300"
        style={{ 
          background: isCambria ? '#fff' : isInvicta ? 'linear-gradient(to right, #ffffff 0%, #0a64c3 100%)' : '#000',
          borderBottom: isInvicta ? 'none' : '1px solid',
          borderBottomColor: isCambria ? '#e5e5e5' : '#262626',
          padding: isCambria ? '0.5rem 2.5rem' : isInvicta ? '0.5rem 2.5rem' : '0.75rem 2.5rem'
        }}
      >
        <div className="flex items-center gap-4">
          {isCambria ? (
            <img 
              src="https://motorparksimages.blob.core.windows.net/cgassets/cambriaautomobiles_500.png" 
              alt="Cambria Automobiles"
              className="h-10 md:h-14 w-auto object-contain"
            />
          ) : isInvicta ? (
            <img 
              src="https://www.invictamotors.co.uk/assets/svg/logos/invicta.svg" 
              alt="Invicta Motors"
              className="h-8 md:h-10 w-auto object-contain"
            />
          ) : (
            <svg className="h-5 md:h-6 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 22">
              <defs>
                <style>{`.grange-logo-svg-1 {fill: #fff;}`}</style>
              </defs>
              <path className="grange-logo-svg-1" d="m18.54031,17.54545c-.64972.77816-1.56844,1.38195-2.75536,1.81099-1.18732.42884-2.50267.64356-3.94645.64356-1.51615,0-2.84562-.33083-3.9888-.99248-1.14298-.66185-2.02551-1.62232-2.64701-2.88181-.62169-1.25929-.94059-2.73906-.95649-4.43971v-1.19129c0-1.74857.29484-3.26253.88432-4.5421.58948-1.27937,1.43981-2.25793,2.55078-2.93588,1.11097-.67776,2.41241-1.01673,3.9045-1.01673,2.0774,0,3.70171.49544,4.87292,1.48613,1.17101.99069,1.86487,2.43249,2.08158,4.32539h-3.51344c-.16044-1.00262-.51552-1.73644-1.06485-2.20186-.54952-.46503-1.30541-.69784-2.26807-.69784-1.22728,0-2.1617.46145-2.80347,1.38374-.64177.9225-.96663,2.29411-.97458,4.11485v1.11912c0,1.83684.34892,3.22456,1.04675,4.16296.69804.9386,1.72073,1.4078,3.06829,1.4078,1.35551,0,2.32214-.28868,2.8997-.86623v-3.02018h-3.2848v-2.65894h6.89446v6.99049Z"></path>
              <path className="grange-logo-svg-1" d="m26.96365,13.3463h-2.87564v6.41313h-3.60946V2.24076h6.50916c2.06965,0,3.66573.46125,4.78883,1.38374,1.1229.9225,1.68455,2.22592,1.68455,3.91027,0,1.19547-.25866,2.19192-.77617,2.98996-.51731.79824-1.30143,1.43404-2.35217,1.90722l3.78999,7.15908v.1684h-3.87428l-3.2848-6.41313Zm-2.87564-2.92375h2.91183c.90639,0,1.6082-.23043,2.10564-.69187.49723-.46105.74595-1.09686.74595-1.90702,0-.82607-.2346-1.47579-.7038-1.94917-.4694-.47318-1.1893-.70996-2.15991-.70996h-2.8997v5.25803Z"></path>
              <path className="grange-logo-svg-1" d="m46.0945,16.14977h-6.32884l-1.20322,3.60966h-3.8381l6.52129-17.51867h3.34484l6.55767,17.51867h-3.8383l-1.21535-3.60966Zm-5.35425-2.92375h4.37967l-2.20186-6.55747-2.17781,6.55747Z"></path>
              <path className="grange-logo-svg-1" d="m66.04467,19.75944h-3.60946l-7.02687-11.52682v11.52682h-3.60946V2.24076h3.60946l7.0388,11.55068V2.24076h3.59753v17.51867Z"></path>
              <path className="grange-logo-svg-1" d="m82.07263,17.54545c-.64972.77816-1.56844,1.38195-2.75536,1.81099-1.18732.42884-2.50267.64356-3.94645.64356-1.51615,0-2.84562-.33083-3.9888-.99248-1.14298-.66185-2.02551-1.62232-2.64701-2.88181-.62169-1.25929-.94059-2.73906-.95649-4.43971v-1.19129c0-1.74857.29484-3.26253.88432-4.5421.58948-1.27937,1.43981-2.25793,2.55078-2.93588,1.11097-.67776,2.41241-1.01673,3.9045-1.01673,2.0774,0,3.70171.49544,4.87292,1.48613,1.17101.99069,1.86487,2.43249,2.08158,4.32539h-3.51344c-.16044-1.00262-.51552-1.73644-1.06485-2.20186-.54952-.46503-1.30541-.69784-2.26807-.69784-1.22728,0-2.1617.46145-2.80347,1.38374-.64177.9225-.96663,2.29411-.97458,4.11485v1.11912c0,1.83684.34892,3.22456,1.04675,4.16296.69804.9386,1.72073,1.4078,3.06829,1.4078,1.35551,0,2.32214-.28868,2.8997-.86623v-3.02018h-3.2848v-2.65894h6.89446v6.99049Z"></path>
              <path className="grange-logo-svg-1" d="m94.55058,12.16714h-6.93045v4.6926h8.13367v2.8997h-11.74313V2.24076h11.71908v2.92375h-8.10961v4.17509h6.93045v2.82753Z"></path>
            </svg>
          )}
          <div 
            className="font-semibold tracking-wide uppercase text-[10px] md:text-xs transition-colors duration-300"
            style={{ color: isCambria ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.7)' }}
          >
            {slide.title}
          </div>
        </div>
        <div 
          className="flex items-center gap-4 text-[10px] md:text-xs transition-colors duration-300"
          style={{ color: isCambria ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.7)' }}
        >
          <span className="hidden md:inline">
            Slide {currentIndex + 1} / {slides.length}
          </span>
          <div 
            className="w-24 md:w-32 h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: isCambria ? 'rgba(0, 0, 0, 0.1)' : isInvicta ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)' }}
          >
            <div
              className="h-full transition-all"
              style={{
                width: `${((currentIndex + 1) / slides.length) * 100}%`,
                backgroundColor: isCambria ? 'rgba(0, 0, 0, 0.5)' : isInvicta ? '#7bb5e8' : '#fff'
              }}
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <div 
        className="relative flex-1 flex overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-200 bg-cover bg-center"
        style={{ 
          backgroundImage: slide.id === "grange-section" ? 'none' : (isInvicta 
            ? 'url(https://cdn.invictamotors.co.uk/assets/invicta/invicta/homepage-tablet.webp)' 
            : 'url(https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp)')
        }}
      >
        {/* Video background for Grange section slide */}
        {slide.id === "grange-section" && (
          <>
            <video
              ref={videoRef}
              muted
              playsInline
              onTimeUpdate={handleVideoTimeUpdate}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: videoEnded ? 'none' : 'block' }}
            >
              <source src="/video/DK Aston Martin Valkyrie ASMR.mp4#t=0,15" type="video/mp4" />
            </video>
            {videoEnded && (
              <div 
                className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
                style={{ backgroundImage: 'url(https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp)' }}
              />
            )}
          </>
        )}
        
        {/* Gradient overlay for Invicta */}
        {isInvicta && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(10,100,195,0.25) 100%)'
            }}
          />
        )}
        {/* Click zones for next/prev - narrow edge zones to avoid interfering with slide content */}
        <div
          className="absolute inset-y-0 left-0 w-16 cursor-pointer z-10 hover:bg-black/5 transition-colors"
          onClick={goPrev}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 cursor-pointer z-10 hover:bg-black/5 transition-colors"
          onClick={goNext}
        />

        {/* OEM Partnership Logo - Bottom Right for Grange slides (except grange-section) */}
        {isGrange && slide.id !== "grange-section" && (() => {
          const grangeLogos = [
            { src: "https://www.grange.co.uk/assets/svg/logos/alpine-logo.svg", alt: "Alpine" },
            { src: "https://www.grange.co.uk/assets/svg/logos/aston-martin-logo.svg", alt: "Aston Martin" },
            { src: "https://www.grange.co.uk/assets/svg/logos/bentley-logo.svg", alt: "Bentley" },
            { src: "https://www.grange.co.uk/assets/svg/logos/lamborghini-logo.svg", alt: "Lamborghini" },
            { src: "https://www.grange.co.uk/assets/svg/logos/land-rover-logo.svg", alt: "Land Rover" },
            { src: "https://www.grange.co.uk/assets/svg/logos/mclaren-logo.svg", alt: "McLaren" },
            { src: "https://www.grange.co.uk/assets/svg/logos/ineos-logo.svg", alt: "INEOS" },
          ];
          const logo = grangeLogos[currentIndex % grangeLogos.length];
          return (
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="h-8 md:h-12 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
              />
            </div>
          );
        })()}

        {/* Topic Headings - Right Side for Grange Section Slide */}
        {slide.id === "grange-section" && (
          <div className="absolute right-12 md:right-20 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 md:gap-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-left text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">Experience</span>
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-left text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">Navigation</span>
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-left text-white" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">Conversion</span>
            </h3>
          </div>
        )}

        <div
          className={`relative mx-auto my-auto w-full ${
            presenterMode ? "max-w-7xl" : "max-w-5xl"
          } px-4 md:px-8`}
        >
          <div
            className={`grid gap-6 items-stretch ${
              presenterMode ? "md:grid-cols-[2.1fr,1fr]" : ""
            }`}
          >
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={slide.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="shadow-lg px-6 md:px-10 py-7 md:py-10 text-white relative"
                style={{ backgroundColor: isGrange ? 'rgba(0,0,0,.4)' : 'rgba(42,42,42,.8)' }}
              >
                <div className="h-full flex flex-col justify-center gap-5 md:gap-6">
                  {currentIndex === 0 && <TitleSlideContent />}
                  {currentIndex === 1 && <OverviewSlideContent />}
                  {currentIndex === 2 && <GrangeSectionSlideContent />}
                  {currentIndex === 3 && <GrangeWebsiteUXSlideContent />}
                  {currentIndex === 4 && <GrangeUsedCarsSlideContent />}
                  {currentIndex === 5 && <GrangeBeforeAfterSlideContent />}
                  {currentIndex === 6 && <GrangeBeforeAfterWipeSlideContent />}
                  {currentIndex === 7 && <GrangeLocationSearchSlideContent />}
                  {currentIndex === 8 && <SEOComparisonSlideContent />}
                  {currentIndex === 9 && <DataCRMSectionSlideContent />}
                  {currentIndex === 10 && <CustomerJourneyFlowSlideContent />}
                  {currentIndex === 11 && <CRMFoundationsSlideContent />}
                  {currentIndex === 12 && <SingleCustomerViewSlideContent />}
                  {currentIndex === 13 && <DataFlowSystemsSlideContent />}
                  {currentIndex === 14 && <LifecycleAutomationSlideContent />}
                  {currentIndex === 15 && <CRMKPIFrameworkSlideContent />}
                  {currentIndex === 16 && <PersonalisationSlideContent />}
                  {currentIndex === 17 && <SocialSectionSlideContent />}
                  {currentIndex === 18 && <SocialManagementToolsSlideContent />}
                  {currentIndex === 19 && <SocialVideoMontageSlideContent />}
                  {currentIndex === 20 && <YouTubeShortsSlideContent />}
                  {currentIndex === 21 && <InvictaSectionSlideContent />}
                  {currentIndex === 22 && <InvictaSlideContent />}
                  {currentIndex === 23 && <InvictaLocalSEOSlideContent />}
                  {currentIndex === 24 && <InvictaTopSearchTermsSlideContent />}
                  {currentIndex === 25 && <InvictaGooglePlacesSlideContent />}
                  {currentIndex === 26 && <ShowroomBrandSlideContent />}
                  {currentIndex === 27 && <VideoContentSlideContent />}
                  {currentIndex === 28 && <TimeToMarketSlideContent />}
                  {currentIndex === 29 && <RetentionAmberSlideContent />}
                  {currentIndex === 30 && <CitNowSlideContent />}
                  {currentIndex === 31 && <LeadershipManagementSlideContent />}
                  {currentIndex === 32 && <NextStepsSlideContent />}
                </div>
              </motion.div>
            </AnimatePresence>

            {presenterMode && (
              <aside className="hidden md:flex flex-col bg-white/90 rounded-3xl border border-neutral-200 shadow px-5 py-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                  Presenter Notes
                </div>
                <div className="text-sm text-neutral-800 flex-1 leading-relaxed whitespace-pre-line">
                  {slide.notes || "No notes for this slide yet."}
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="text-[11px] uppercase text-neutral-500 mb-1">
                    Next slide
                  </div>
                  {nextSlide ? (
                    <div className="text-sm font-medium text-neutral-800">
                      {nextSlide.title}
                    </div>
                  ) : (
                    <div className="text-xs text-neutral-400">
                      End of presentation
                    </div>
                  )}
                </div>
                <div className="mt-4 text-[10px] text-neutral-400">
                  Keyboard: ← / → / Space · P = toggle presenter · 1/2/3 =
                  transition
                </div>
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <footer className="w-full flex items-center justify-between px-6 md:px-10 py-2 bg-white/80 border-t border-neutral-200 backdrop-blur text-[10px] text-neutral-500">
        <div className="flex items-center gap-4">
          <div>
            Use <span className="font-semibold">←</span>,{" "}
            <span className="font-semibold">→</span> or{" "}
            <span className="font-semibold">Space</span> to navigate ·{" "}
            <span className="font-semibold">P</span> = Presenter Mode ·{" "}
            <span className="font-semibold">S</span> = Play/Replay Videos ·{" "}
            <span className="font-semibold">1</span>/<span className="font-semibold">2</span>/
            <span className="font-semibold">3</span> = Slide/Fade/Zoom
          </div>
          {slide.id === "grange-section" && (
            <button
              onClick={videoPlaying || videoEnded ? handleReplayVideo : handlePlayVideo}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-full text-xs font-medium hover:bg-black/80 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                {videoPlaying || videoEnded ? (
                  <path d="M8 15A7 7 0 1 1 8 1v2.5L11.5 0 8 3.5V6a5 5 0 1 0 5 5h2a7 7 0 0 1-7 7z"/>
                ) : (
                  <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                )}
              </svg>
              {videoPlaying || videoEnded ? 'Replay' : 'Play'} Video
            </button>
          )}
          {slide.id === "social-video-montage" && (
            <button
              onClick={() => {
                if ((window as any).replayMontageVideos) {
                  (window as any).replayMontageVideos();
                } else if ((window as any).playMontageVideos) {
                  (window as any).playMontageVideos();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-full text-xs font-medium hover:bg-black/80 transition-colors"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
              Play Videos
            </button>
          )}
        </div>
        <div>
          {currentIndex + 1}
        </div>
      </footer>
    </div>
  );
};

export default App;
