import { motion } from "framer-motion";
import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, Circle, Marker, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface LocationData {
  name: string;
  volume: number;
  lat: number; // Latitude
  lng: number; // Longitude
  brand: 'invicta' | 'motorparks' | 'county' | 'competitor';
  manufacturer: string;
  registrations: number;
  isCompetitor?: boolean;
  // Urban Science Market Data
  marketSize?: number; // Total addressable market in postcode
  pumpIn?: number; // Customers coming from outside postcode
  pumpOut?: number; // Local customers going elsewhere
  marketShare?: number; // % of local market captured
  conquestRate?: number; // % of sales from competitors
}

const locations: LocationData[] = [
  { name: "County Motorparks Chelmsford", volume: 98, lat: 51.7356, lng: 0.4685, brand: 'county', manufacturer: 'Multi-Brand', registrations: 142, marketSize: 2840, pumpIn: 45, pumpOut: 38, marketShare: 5.2, conquestRate: 32 },
  { name: "Invicta Chery Barnet", volume: 22, lat: 51.6462, lng: -0.1997, brand: 'invicta', manufacturer: 'Chery', registrations: 8, marketSize: 420, pumpIn: 62, pumpOut: 71, marketShare: 1.9, conquestRate: 78 },
  { name: "Invicta Chery Bury", volume: 27, lat: 53.5933, lng: -2.2966, brand: 'invicta', manufacturer: 'Chery', registrations: 12, marketSize: 580, pumpIn: 58, pumpOut: 68, marketShare: 2.1, conquestRate: 73 },
  { name: "Invicta Chery Chelmsford", volume: 53, lat: 51.7356, lng: 0.4685, brand: 'invicta', manufacturer: 'Chery', registrations: 24, marketSize: 890, pumpIn: 54, pumpOut: 62, marketShare: 2.7, conquestRate: 68 },
  { name: "Invicta Chery Oldham", volume: 27, lat: 53.5444, lng: -2.1169, brand: 'invicta', manufacturer: 'Chery', registrations: 11, marketSize: 620, pumpIn: 64, pumpOut: 73, marketShare: 1.8, conquestRate: 81 },
  { name: "Invicta Chery Warrington", volume: 2, lat: 53.3900, lng: -2.5970, brand: 'invicta', manufacturer: 'Chery', registrations: 3, marketSize: 450, pumpIn: 67, pumpOut: 86, marketShare: 0.7, conquestRate: 89 },
  { name: "Invicta Horsham", volume: 37, lat: 51.0629, lng: -0.3259, brand: 'invicta', manufacturer: 'Multi-Brand', registrations: 45, marketSize: 1680, pumpIn: 51, pumpOut: 58, marketShare: 2.7, conquestRate: 64 },
  { name: "Invicta Jaecoo Bolton", volume: 1, lat: 53.5768, lng: -2.4282, brand: 'invicta', manufacturer: 'Jaecoo', registrations: 2, marketSize: 280, pumpIn: 75, pumpOut: 92, marketShare: 0.7, conquestRate: 95 },
  { name: "Invicta Mazda Bolton", volume: 37, lat: 53.5768, lng: -2.4282, brand: 'invicta', manufacturer: 'Mazda', registrations: 56, marketSize: 1420, pumpIn: 48, pumpOut: 52, marketShare: 3.9, conquestRate: 58 },
  { name: "Invicta Mazda Croydon", volume: 21, lat: 51.3762, lng: -0.0982, brand: 'invicta', manufacturer: 'Mazda', registrations: 38, marketSize: 1180, pumpIn: 56, pumpOut: 64, marketShare: 3.2, conquestRate: 67 },
  { name: "Invicta Mazda Maidstone", volume: 32, lat: 51.2704, lng: 0.5227, brand: 'invicta', manufacturer: 'Mazda', registrations: 47, marketSize: 1340, pumpIn: 52, pumpOut: 57, marketShare: 3.5, conquestRate: 63 },
  { name: "Invicta Mazda Northampton", volume: 28, lat: 52.2405, lng: -0.9027, brand: 'invicta', manufacturer: 'Mazda', registrations: 41, marketSize: 1250, pumpIn: 54, pumpOut: 61, marketShare: 3.3, conquestRate: 65 },
  { name: "Invicta MG Canterbury", volume: 18, lat: 51.2787, lng: 1.0789, brand: 'invicta', manufacturer: 'MG', registrations: 29, marketSize: 940, pumpIn: 59, pumpOut: 68, marketShare: 3.1, conquestRate: 71 },
  { name: "Invicta MG Croydon", volume: 28, lat: 51.3762, lng: -0.0982, brand: 'invicta', manufacturer: 'MG', registrations: 42, marketSize: 1290, pumpIn: 53, pumpOut: 60, marketShare: 3.3, conquestRate: 66 },
  { name: "Invicta MG Maidstone", volume: 25, lat: 51.2704, lng: 0.5227, brand: 'invicta', manufacturer: 'MG', registrations: 35, marketSize: 1120, pumpIn: 57, pumpOut: 65, marketShare: 3.1, conquestRate: 69 },
  { name: "Invicta Omoda Ashford", volume: 39, lat: 51.1465, lng: 0.8750, brand: 'invicta', manufacturer: 'Omoda', registrations: 15, marketSize: 680, pumpIn: 73, pumpOut: 78, marketShare: 2.2, conquestRate: 83 },
  { name: "Invicta Omoda Barnet", volume: 1, lat: 51.6462, lng: -0.1997, brand: 'invicta', manufacturer: 'Omoda', registrations: 2, marketSize: 320, pumpIn: 80, pumpOut: 94, marketShare: 0.6, conquestRate: 96 },
  { name: "Invicta Omoda Bolton", volume: 2, lat: 53.5768, lng: -2.4282, brand: 'invicta', manufacturer: 'Omoda', registrations: 3, marketSize: 340, pumpIn: 78, pumpOut: 91, marketShare: 0.9, conquestRate: 94 },
  { name: "Invicta Omoda Preston", volume: 5, lat: 53.7632, lng: -2.7031, brand: 'invicta', manufacturer: 'Omoda', registrations: 6, marketSize: 420, pumpIn: 76, pumpOut: 87, marketShare: 1.4, conquestRate: 91 },
  { name: "Invicta Omoda Ramsgate", volume: 35, lat: 51.3363, lng: 1.4160, brand: 'invicta', manufacturer: 'Omoda', registrations: 18, marketSize: 740, pumpIn: 69, pumpOut: 76, marketShare: 2.4, conquestRate: 81 },
  { name: "Invicta Subaru Crawley", volume: 34, lat: 51.1107, lng: -0.1863, brand: 'invicta', manufacturer: 'Subaru', registrations: 52, marketSize: 1520, pumpIn: 49, pumpOut: 54, marketShare: 3.4, conquestRate: 61 },
  { name: "Motorparks Bury", volume: 25, lat: 53.5933, lng: -2.2966, brand: 'motorparks', manufacturer: 'Multi-Brand', registrations: 68, marketSize: 1840, pumpIn: 42, pumpOut: 48, marketShare: 3.7, conquestRate: 54 },
  { name: "Motorparks Canterbury", volume: 73, lat: 51.2787, lng: 1.0789, brand: 'motorparks', manufacturer: 'Multi-Brand', registrations: 124, marketSize: 2680, pumpIn: 38, pumpOut: 42, marketShare: 4.6, conquestRate: 48 },
  { name: "Motorparks Oldham", volume: 33, lat: 53.5444, lng: -2.1169, brand: 'motorparks', manufacturer: 'Multi-Brand', registrations: 78, marketSize: 1920, pumpIn: 41, pumpOut: 46, marketShare: 4.1, conquestRate: 52 },
  { name: "Motorparks Preston", volume: 134, lat: 53.7632, lng: -2.7031, brand: 'motorparks', manufacturer: 'Multi-Brand', registrations: 203, marketSize: 3240, pumpIn: 34, pumpOut: 36, marketShare: 6.3, conquestRate: 41 },
  { name: "Motorparks Warrington", volume: 61, lat: 53.3900, lng: -2.5970, brand: 'motorparks', manufacturer: 'Multi-Brand', registrations: 95, marketSize: 2180, pumpIn: 39, pumpOut: 44, marketShare: 4.4, conquestRate: 49 },
];

// Competitor franchise dealers for the same manufacturers
const competitorLocations: LocationData[] = [
  // Mazda Competitors - Complete UK Network (excluding Invicta locations)
  { name: "Bourne Road Garage Mazda - Crayford", volume: 0, lat: 51.4508324, lng: 0.169387, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Barnetts Mazda - Dundee", volume: 0, lat: 56.4546165, lng: -2.975459, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Holdcroft Mazda - Stoke-on-Trent", volume: 0, lat: 53.0271454, lng: -2.152277, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Pentraeth Automotive - Menai Bridge", volume: 0, lat: 53.23317, lng: -4.177943, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Donalds Motor Group - Peterborough", volume: 0, lat: 52.5807037, lng: -0.241505, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Bel Royal Mazda - Jersey", volume: 0, lat: 49.198204, lng: -2.1456, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Struans Mazda - Perth", volume: 0, lat: 56.4067459, lng: -3.48171, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Forest Road Mazda - Guernsey", volume: 0, lat: 49.4283257, lng: -2.592184, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "T W White & Sons - Great Bookham", volume: 0, lat: 51.2691727, lng: -0.3888068, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Newport Mazda", volume: 0, lat: 51.5720367, lng: -2.948401, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Victoria Park Mazda - Cardiff", volume: 0, lat: 51.4678078, lng: -3.205592, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Leslies Mazda - Cowes", volume: 0, lat: 50.7403374, lng: -1.308414, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Magna Mazda - Poole", volume: 0, lat: 50.7055626, lng: -1.921533, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "SDM Mazda - Falkirk", volume: 0, lat: 56.0077438, lng: -3.766118, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "EMG Motor - Boston", volume: 0, lat: 52.9745445, lng: -0.028186, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Leamington Mazda", volume: 0, lat: 52.27684, lng: -1.545962, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Newcastle", volume: 0, lat: 55.0126648, lng: -1.495797, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "SG Petch Mazda - Darlington", volume: 0, lat: 54.53064, lng: -1.521685, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "FRF Mazda - Swansea", volume: 0, lat: 51.6533279, lng: -3.92840242, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "T W White & Sons - Orpington", volume: 0, lat: 51.4006348, lng: 0.10506, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Magna Mazda - Dorchester", volume: 0, lat: 50.7186661, lng: -2.443562, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Arnold Clark Mazda - Stirling", volume: 0, lat: 56.1122322, lng: -3.927457, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Edwards Mazda - Worcester", volume: 0, lat: 52.1234474, lng: -2.219004, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Magna Mazda - Christchurch", volume: 0, lat: 50.7382774, lng: -1.76914215, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Coventry Mazda", volume: 0, lat: 52.3798828, lng: -1.46791792, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Arnold Clark Mazda - Aberdeen", volume: 0, lat: 57.1263962, lng: -2.093391, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Magna Mazda - Salisbury", volume: 0, lat: 50.9913864, lng: -1.757514, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "SG Petch - Durham", volume: 0, lat: 54.787262, lng: -1.544974, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vospers Mazda - Truro", volume: 0, lat: 50.26539, lng: -5.099532, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Littlewick Green Mazda", volume: 0, lat: 51.5149078, lng: -0.793986, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "MKG3000 Mazda - Twickenham", volume: 0, lat: 51.44513, lng: -0.334744, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Mitchell Mazda - Chester", volume: 0, lat: 53.26335, lng: -2.874349, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Clevedon Mazda", volume: 0, lat: 51.4396973, lng: -2.840095, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Donalds Motor Group - Ipswich", volume: 0, lat: 52.03486, lng: 1.20368457, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Perrys Mazda - Blackburn", volume: 0, lat: 53.77525, lng: -2.479222, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Eden Mazda - Basingstoke", volume: 0, lat: 51.26342, lng: -1.043444, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Arnold Clark Mazda - Kirkcaldy", volume: 0, lat: 56.1374168, lng: -3.138786, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Lansdown Mazda - Bath", volume: 0, lat: 51.3972549, lng: -2.395, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Park's Mazda - Inverness", volume: 0, lat: 57.48134, lng: -4.223972, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Nunns Mazda - Grimsby", volume: 0, lat: 53.5381622, lng: -0.048464, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Milcars Mazda - Watford", volume: 0, lat: 51.66703, lng: -0.367557, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vospers Mazda - Plymouth", volume: 0, lat: 50.3928833, lng: -4.089363, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Perrys Mazda - Preston", volume: 0, lat: 53.78961, lng: -2.654278, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vertu Mazda - York", volume: 0, lat: 53.9625549, lng: -1.072827, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Perrys Mazda - Mansfield", volume: 0, lat: 53.12636, lng: -1.151039, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Oakmere Mazda - Northwich", volume: 0, lat: 53.2654228, lng: -2.484054, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Sandicliffe Mazda - Nottingham", volume: 0, lat: 52.9304848, lng: -1.171612, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Lynx Garage - Yeovil", volume: 0, lat: 50.93385, lng: -2.661157, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Windsors Mazda - Wirral", volume: 0, lat: 53.4287834, lng: -3.068733, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Arnold Clark Mazda - Glasgow", volume: 0, lat: 55.8709869, lng: -4.328072, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Jims Garage Mazda - Lerwick", volume: 0, lat: 60.17008, lng: -1.173132, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vospers Mazda - Exeter", volume: 0, lat: 50.6946564, lng: -3.5145607, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Hendy Mazda - Eastleigh", volume: 0, lat: 50.97318, lng: -1.371633, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "RRG Mazda - Stockport", volume: 0, lat: 53.41122, lng: -2.172648, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "EMG Mazda - Cambridge", volume: 0, lat: 52.22951, lng: 0.145954, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Magna Mazda - Southampton", volume: 0, lat: 50.9131165, lng: -1.35519218, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Rockingham Cars - Corby", volume: 0, lat: 52.49809, lng: -0.678396, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Guildford Mazda - Godalming", volume: 0, lat: 51.17215, lng: -0.651118, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Hendy Mazda - Horsham", volume: 0, lat: 51.0641747, lng: -0.33492, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Perrys Mazda - Barnsley", volume: 0, lat: 53.57251, lng: -1.524252, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Ashford Orbital Mazda", volume: 0, lat: 51.12728, lng: 0.890459, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Pat Kirk Mazda - Omagh", volume: 0, lat: 54.60208, lng: -7.310408, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vertu Mazda Redditch", volume: 0, lat: 52.30667, lng: -1.909593, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Lodge Garage - Aylesbury", volume: 0, lat: 51.8641624, lng: -0.9939, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Johnsons Mazda - Tamworth", volume: 0, lat: 52.6355667, lng: -1.711819, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Northampton Motors", volume: 0, lat: 52.24102, lng: -0.836823, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Johnsons Mazda - Oxford", volume: 0, lat: 51.7536964, lng: -1.288691, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Johnsons Mazda - Swindon", volume: 0, lat: 51.573, lng: -1.82955, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Motorlux Mazda - Newbury", volume: 0, lat: 51.4044762, lng: -1.314276, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Gateshead", volume: 0, lat: 54.9613, lng: -1.685518, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Sandicliffe Mazda - Loughborough", volume: 0, lat: 52.77831, lng: -1.217599, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Brindley Mazda - Wolverhampton", volume: 0, lat: 52.5936, lng: -2.12656, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vertu Mazda Hamilton", volume: 0, lat: 55.791832, lng: -4.07044, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Western Mazda - Edinburgh", volume: 0, lat: 55.94102, lng: -3.40503, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Sandicliffe Mazda - Leicester", volume: 0, lat: 52.6222572, lng: -1.130598, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Doncaster", volume: 0, lat: 53.5365448, lng: -1.162081, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Johnsons Mazda - Solihull", volume: 0, lat: 52.39062, lng: -1.80596, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Snows Mazda - Chichester", volume: 0, lat: 50.8314972, lng: -0.757379, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Warrington Mazda", volume: 0, lat: 53.3978, lng: -2.607103, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "David Hayton Mazda - Southport", volume: 0, lat: 53.6446724, lng: -3.001438, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Harrogate", volume: 0, lat: 53.9975433, lng: -1.499577, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Beechwood Mazda - Derby", volume: 0, lat: 52.9195938, lng: -1.46702, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Vertu Mazda - Sheffield", volume: 0, lat: 53.39809, lng: -1.4886, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Hull", volume: 0, lat: 53.7471771, lng: -0.324148, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Brayley Mazda - Milton Keynes", volume: 0, lat: 52.0060844, lng: -0.793939, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Brayley Mazda Thurrock", volume: 0, lat: 51.4794, lng: 0.3267925, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Pentagon Mazda - Lincoln", volume: 0, lat: 53.2112656, lng: -0.571513, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "T W White & Sons - Weybridge", volume: 0, lat: 51.37205, lng: -0.472361, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Eden Mazda - Taunton", volume: 0, lat: 51.01997, lng: -3.06616, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Ballyrobert Mazda - Mallusk", volume: 0, lat: 54.6723976, lng: -5.974932, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stourbridge Mazda", volume: 0, lat: 52.4245758, lng: -2.129937, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Wessex Mazda - Bristol", volume: 0, lat: 51.4636078, lng: -2.576185, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Perrys Mazda - Canterbury", volume: 0, lat: 51.3106, lng: 1.14801192, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Oldham Mazda", volume: 0, lat: 53.5441437, lng: -2.11780429, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Johnsons Mazda - Gloucester", volume: 0, lat: 51.8355026, lng: -2.26613259, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Hendy Mazda - Tunbridge Wells", volume: 0, lat: 51.15963, lng: 0.2953645, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Westdrive Mazda - Braintree", volume: 0, lat: 51.8672256, lng: 0.578894, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Snows Mazda - Portsmouth", volume: 0, lat: 50.8364, lng: -1.04417145, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Leominster Motors - Leominster", volume: 0, lat: 52.1016769, lng: -2.740533, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Roadside Motors Mazda - Lisburn", volume: 0, lat: 54.51077, lng: -6.048472, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Park's Mazda Ayr", volume: 0, lat: 55.4771, lng: -4.591, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "SG Petch Mazda - Middlesbrough", volume: 0, lat: 54.57849, lng: -1.184204, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Eden Mazda - Reading", volume: 0, lat: 51.4364128, lng: -0.97551775, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Donalds Motor Group - Norwich", volume: 0, lat: 52.6647644, lng: 1.27279913, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "David Hayton Mazda - Carlisle", volume: 0, lat: 54.9257, lng: -2.94687, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "David Hayton Mazda - Kendal", volume: 0, lat: 54.33142, lng: -2.74048829, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Arnold Clark Mazda - Linwood", volume: 0, lat: 55.8439865, lng: -4.468135, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Halifax", volume: 0, lat: 53.73176, lng: -1.86407149, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "John Banks Mazda - Colchester", volume: 0, lat: 51.91363, lng: 0.9287569, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Dewsbury", volume: 0, lat: 53.71743, lng: -1.59260619, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Stoneacre Mazda - Liverpool", volume: 0, lat: 53.39289, lng: -2.9825325, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "J T Hughes Mazda Telford", volume: 0, lat: 52.6794243, lng: -2.43295264, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Saltmarine Mazda - Dungannon", volume: 0, lat: 54.49306, lng: -6.650473, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Yeomans Mazda Bexhill", volume: 0, lat: 50.843792, lng: 0.4666519, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Yeomans Mazda Worthing", volume: 0, lat: 50.8202934, lng: -0.451028824, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Romford Mazda", volume: 0, lat: 51.59843, lng: 0.163087, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  { name: "Norton Way Mazda - Letchworth", volume: 0, lat: 51.9825554, lng: -0.223481, brand: 'competitor', manufacturer: 'Mazda', registrations: 0, isCompetitor: true },
  
  // MG Competitors - Complete UK Network (excluding Invicta locations)
  { name: "WLMG Reading", volume: 0, lat: 51.443839, lng: -0.976382, brand: 'competitor', manufacturer: 'MG', registrations: 45, isCompetitor: true },
  { name: "WLMG Eastcote", volume: 0, lat: 51.574355, lng: -0.395276, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Wilsons Epsom", volume: 0, lat: 51.343258, lng: -0.259549, brand: 'competitor', manufacturer: 'MG', registrations: 52, isCompetitor: true },
  { name: "WH Brand Spalding", volume: 0, lat: 52.696937, lng: -0.051513, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Wellington MG", volume: 0, lat: 50.980216, lng: -3.207609, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Waylands Oxford", volume: 0, lat: 51.736425, lng: -1.318975, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Waylands Newbury", volume: 0, lat: 51.383827, lng: -1.313936, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Vospers Plymouth", volume: 0, lat: 50.394084, lng: -4.090004, brand: 'competitor', manufacturer: 'MG', registrations: 44, isCompetitor: true },
  { name: "Vertu Edinburgh West", volume: 0, lat: 55.942651, lng: -3.408369, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Vertu Chesterfield", volume: 0, lat: 53.230847, lng: -1.458345, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Vertu Carlisle", volume: 0, lat: 54.929233, lng: -2.951842, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "Vertu Beaconsfield", volume: 0, lat: 51.609542, lng: -0.644653, brand: 'competitor', manufacturer: 'MG', registrations: 48, isCompetitor: true },
  { name: "Tunbridge Wells MG", volume: 0, lat: 51.154862, lng: 0.284388, brand: 'competitor', manufacturer: 'MG', registrations: 39, isCompetitor: true },
  { name: "Toomey Southend", volume: 0, lat: 51.570727, lng: 0.679654, brand: 'competitor', manufacturer: 'MG', registrations: 42, isCompetitor: true },
  { name: "Toomey Basildon", volume: 0, lat: 51.574401, lng: 0.397907, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Thurlow Nunn Norwich", volume: 0, lat: 52.657271, lng: 1.276634, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Thurlow Nunn King's Lynn", volume: 0, lat: 52.73907, lng: 0.406969, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Threeways Abergele", volume: 0, lat: 53.285383, lng: -3.574603, brand: 'competitor', manufacturer: 'MG', registrations: 26, isCompetitor: true },
  { name: "Stoneacre Rochdale", volume: 0, lat: 53.603117, lng: -2.150228, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Stoneacre Middlesbrough", volume: 0, lat: 54.565043, lng: -1.223695, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Stoneacre Hyde", volume: 0, lat: 53.446609, lng: -2.073057, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "Stoneacre Doncaster", volume: 0, lat: 53.546503, lng: -1.08982, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Stoneacre Derby", volume: 0, lat: 52.886446, lng: -1.475395, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Spirit Corby", volume: 0, lat: 52.48712, lng: -0.683078, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "Sandicliffe Nottingham", volume: 0, lat: 52.931195, lng: -1.171044, brand: 'competitor', manufacturer: 'MG', registrations: 43, isCompetitor: true },
  { name: "Sandicliffe Loughborough", volume: 0, lat: 52.785586, lng: -1.241932, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Sandicliffe Lincoln", volume: 0, lat: 53.238157, lng: -0.508472, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "RRG Stockport", volume: 0, lat: 53.411654, lng: -2.171545, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Roy Tolley Colchester", volume: 0, lat: 51.870676, lng: 0.865626, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Richmond Southampton", volume: 0, lat: 50.915778, lng: -1.285443, brand: 'competitor', manufacturer: 'MG', registrations: 46, isCompetitor: true },
  { name: "Richmond Portsmouth", volume: 0, lat: 50.842294, lng: -1.035885, brand: 'competitor', manufacturer: 'MG', registrations: 44, isCompetitor: true },
  { name: "Richmond Guildford", volume: 0, lat: 51.260741, lng: -0.565836, brand: 'competitor', manufacturer: 'MG', registrations: 42, isCompetitor: true },
  { name: "Richmond Bognor Regis", volume: 0, lat: 50.806717, lng: -0.669585, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Richard Hardie Ashington", volume: 0, lat: 55.186738, lng: -1.568555, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Regency Elgin", volume: 0, lat: 57.646662, lng: -3.283632, brand: 'competitor', manufacturer: 'MG', registrations: 22, isCompetitor: true },
  { name: "Read Grimsby", volume: 0, lat: 53.541856, lng: -0.126374, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Rawlinson Bury St Edmunds", volume: 0, lat: 52.239139, lng: 0.744422, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Premier Isle of Wight", volume: 0, lat: 50.704642, lng: -1.294718, brand: 'competitor', manufacturer: 'MG', registrations: 24, isCompetitor: true },
  { name: "Polesworth Tamworth", volume: 0, lat: 52.616234, lng: -1.614611, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Pinkstones Stoke", volume: 0, lat: 53.000831, lng: -2.214054, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Perrys Preston", volume: 0, lat: 53.790108, lng: -2.656581, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Perrys Huddersfield", volume: 0, lat: 53.651738, lng: -1.780966, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Perrys Aylesbury", volume: 0, lat: 51.82347, lng: -0.828242, brand: 'competitor', manufacturer: 'MG', registrations: 39, isCompetitor: true },
  { name: "Penton Salisbury", volume: 0, lat: 51.07082, lng: -1.812874, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Paul Rigby Redditch", volume: 0, lat: 52.284531, lng: -1.9059, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Paul Rigby Erdington", volume: 0, lat: 52.525615, lng: -1.896833, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Park's Irvine", volume: 0, lat: 55.608132, lng: -4.634892, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Palmers Hemel Hempstead", volume: 0, lat: 51.769607, lng: -0.448805, brand: 'competitor', manufacturer: 'MG', registrations: 40, isCompetitor: true },
  { name: "OC Davies Neyland", volume: 0, lat: 51.718101, lng: -4.954397, brand: 'competitor', manufacturer: 'MG', registrations: 21, isCompetitor: true },
  { name: "OC Davies Cardigan", volume: 0, lat: 52.102315, lng: -4.609914, brand: 'competitor', manufacturer: 'MG', registrations: 19, isCompetitor: true },
  { name: "NT Shaw Louth", volume: 0, lat: 53.375102, lng: -0.002694, brand: 'competitor', manufacturer: 'MG', registrations: 26, isCompetitor: true },
  { name: "Nathaniel Swansea", volume: 0, lat: 51.652011, lng: -3.918057, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Nathaniel Cwmbran", volume: 0, lat: 51.659656, lng: -3.036149, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "Nathaniel Cardiff", volume: 0, lat: 51.466665, lng: -3.191578, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Nathaniel Bridgend", volume: 0, lat: 51.502929, lng: -3.539774, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Mervyn Stewart Belfast", volume: 0, lat: 54.58068, lng: -5.964742, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Mervyn Stewart Bangor", volume: 0, lat: 54.645203, lng: -5.674885, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Mangoletsi Knutsford", volume: 0, lat: 53.252129, lng: -2.367369, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "M.R. Gair Lerwick", volume: 0, lat: 60.169301, lng: -1.168769, brand: 'competitor', manufacturer: 'MG', registrations: 12, isCompetitor: true },
  { name: "Luscombe Leeds", volume: 0, lat: 53.781125, lng: -1.526749, brand: 'competitor', manufacturer: 'MG', registrations: 43, isCompetitor: true },
  { name: "Lookers Brighton", volume: 0, lat: 50.840564, lng: -0.234203, brand: 'competitor', manufacturer: 'MG', registrations: 39, isCompetitor: true },
  { name: "Lochside Enniskillen", volume: 0, lat: 54.345083, lng: -7.62196, brand: 'competitor', manufacturer: 'MG', registrations: 23, isCompetitor: true },
  { name: "Listers Solihull", volume: 0, lat: 52.398732, lng: -1.819762, brand: 'competitor', manufacturer: 'MG', registrations: 46, isCompetitor: true },
  { name: "Listers Northampton", volume: 0, lat: 52.241719, lng: -0.836875, brand: 'competitor', manufacturer: 'MG', registrations: 40, isCompetitor: true },
  { name: "Lancaster Morecambe", volume: 0, lat: 54.054962, lng: -2.848219, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Kidderminster Motor House", volume: 0, lat: 52.370876, lng: -2.244118, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Just Keighley", volume: 0, lat: 53.881358, lng: -1.918567, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Just Harrogate", volume: 0, lat: 53.987715, lng: -1.504675, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "John Clark Perth", volume: 0, lat: 56.409941, lng: -3.452957, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "John Clark Dundee", volume: 0, lat: 56.475555, lng: -3.050262, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "JC Campbell Newry", volume: 0, lat: 54.158371, lng: -6.325299, brand: 'competitor', manufacturer: 'MG', registrations: 25, isCompetitor: true },
  { name: "James Haugh Dumfries", volume: 0, lat: 55.070712, lng: -3.604169, brand: 'competitor', manufacturer: 'MG', registrations: 26, isCompetitor: true },
  { name: "Islington Bath", volume: 0, lat: 51.373745, lng: -2.350773, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Islington Trowbridge", volume: 0, lat: 51.333909, lng: -2.205201, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "Holdcroft Warrington", volume: 0, lat: 53.392029, lng: -2.605813, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Holdcroft Stoke", volume: 0, lat: 53.026952, lng: -2.152665, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Holdcroft Cheshire Oaks", volume: 0, lat: 53.259612, lng: -2.887734, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Hendy Poole", volume: 0, lat: 50.752202, lng: -1.930079, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Hendy Exeter", volume: 0, lat: 50.70854, lng: -3.532203, brand: 'competitor', manufacturer: 'MG', registrations: 39, isCompetitor: true },
  { name: "Hendy Crawley", volume: 0, lat: 51.129694, lng: -0.177256, brand: 'competitor', manufacturer: 'MG', registrations: 44, isCompetitor: true },
  { name: "Hawkins Hayle", volume: 0, lat: 50.194645, lng: -5.394218, brand: 'competitor', manufacturer: 'MG', registrations: 22, isCompetitor: true },
  { name: "Hawkins Blackwater", volume: 0, lat: 50.270023, lng: -5.179323, brand: 'competitor', manufacturer: 'MG', registrations: 24, isCompetitor: true },
  { name: "Hammond Halesworth", volume: 0, lat: 52.35214, lng: 1.509707, brand: 'competitor', manufacturer: 'MG', registrations: 26, isCompetitor: true },
  { name: "Greg Mitchell Strabane", volume: 0, lat: 54.756008, lng: -7.450263, brand: 'competitor', manufacturer: 'MG', registrations: 21, isCompetitor: true },
  { name: "Glyn Hopkin Watford", volume: 0, lat: 51.650024, lng: -0.388126, brand: 'competitor', manufacturer: 'MG', registrations: 47, isCompetitor: true },
  { name: "Glyn Hopkin Waltham Abbey", volume: 0, lat: 51.68271, lng: 0.00166, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Glyn Hopkin St Albans", volume: 0, lat: 51.752503, lng: -0.275523, brand: 'competitor', manufacturer: 'MG', registrations: 45, isCompetitor: true },
  { name: "Glyn Hopkin Romford", volume: 0, lat: 51.574224, lng: 0.160363, brand: 'competitor', manufacturer: 'MG', registrations: 42, isCompetitor: true },
  { name: "Glyn Hopkin Milton Keynes", volume: 0, lat: 52.014542, lng: -0.743367, brand: 'competitor', manufacturer: 'MG', registrations: 46, isCompetitor: true },
  { name: "Glyn Hopkin Mill Hill", volume: 0, lat: 51.604349, lng: -0.239439, brand: 'competitor', manufacturer: 'MG', registrations: 44, isCompetitor: true },
  { name: "Glyn Hopkin East London", volume: 0, lat: 51.555825, lng: 0.06164, brand: 'competitor', manufacturer: 'MG', registrations: 48, isCompetitor: true },
  { name: "Glyn Hopkin Chelmsford", volume: 0, lat: 51.728734, lng: 0.453542, brand: 'competitor', manufacturer: 'MG', registrations: 43, isCompetitor: true },
  { name: "Glyn Hopkin Buckhurst Hill", volume: 0, lat: 51.632919, lng: 0.031634, brand: 'competitor', manufacturer: 'MG', registrations: 40, isCompetitor: true },
  { name: "Glyn Hopkin Bedford", volume: 0, lat: 52.109523, lng: -0.499584, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Frasers Falkirk", volume: 0, lat: 56.006351, lng: -3.833485, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "FJ Chalke Yeovil", volume: 0, lat: 50.936361, lng: -2.641876, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "Evans Halshaw York", volume: 0, lat: 53.987498, lng: -1.092122, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Evans Halshaw Hull", volume: 0, lat: 53.722422, lng: -0.414438, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Evans Halshaw Grantham", volume: 0, lat: 52.888113, lng: -0.634948, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Evans Halshaw Banbury", volume: 0, lat: 52.071498, lng: -1.33779, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Eric Stead Sheffield", volume: 0, lat: 53.442035, lng: -1.458967, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "EMG Ipswich", volume: 0, lat: 52.055762, lng: 1.136931, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Eden Swindon", volume: 0, lat: 51.572644, lng: -1.83177, brand: 'competitor', manufacturer: 'MG', registrations: 40, isCompetitor: true },
  { name: "Eden Newton Abbot", volume: 0, lat: 50.538767, lng: -3.616077, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Drive Weston Super Mare", volume: 0, lat: 51.344316, lng: -2.944906, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Drive Scarborough", volume: 0, lat: 54.263843, lng: -0.416114, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Drive Leicester", volume: 0, lat: 52.619449, lng: -1.134288, brand: 'competitor', manufacturer: 'MG', registrations: 42, isCompetitor: true },
  { name: "Drive Leamington Spa", volume: 0, lat: 52.290576, lng: -1.554229, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Drive Darlington", volume: 0, lat: 54.529972, lng: -1.548459, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Drive Bristol", volume: 0, lat: 51.52489, lng: -2.571972, brand: 'competitor', manufacturer: 'MG', registrations: 45, isCompetitor: true },
  { name: "Donalds Peterborough", volume: 0, lat: 52.580735, lng: -0.241529, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Dicksons Inverness", volume: 0, lat: 57.487286, lng: -4.247629, brand: 'competitor', manufacturer: 'MG', registrations: 25, isCompetitor: true },
  { name: "Dees Croydon", volume: 0, lat: 51.35863, lng: -0.115915, brand: 'competitor', manufacturer: 'MG', registrations: 43, isCompetitor: true },
  { name: "Croxdale Durham", volume: 0, lat: 54.720921, lng: -1.576905, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "Crayford and Abbs Holt", volume: 0, lat: 52.917871, lng: 1.152503, brand: 'competitor', manufacturer: 'MG', registrations: 24, isCompetitor: true },
  { name: "Coventry MG", volume: 0, lat: 52.381914, lng: -1.462594, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Clarks Stourbridge", volume: 0, lat: 52.457685, lng: -2.123824, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Cinderford MG", volume: 0, lat: 51.834211, lng: -2.512288, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Chorley Burnley", volume: 0, lat: 53.790742, lng: -2.253258, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Chorley Blackpool", volume: 0, lat: 53.774893, lng: -3.0281, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Chorley Chorley", volume: 0, lat: 53.657265, lng: -2.657476, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "Chapelhouse Wigan", volume: 0, lat: 53.541911, lng: -2.631344, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Chapelhouse St Helens", volume: 0, lat: 53.450469, lng: -2.741039, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Chapelhouse Southport", volume: 0, lat: 53.600283, lng: -3.033403, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Chapelhouse Bolton", volume: 0, lat: 53.579847, lng: -2.409809, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Cars2 Wakefield", volume: 0, lat: 53.663795, lng: -1.507227, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Cars2 Bradford", volume: 0, lat: 53.809733, lng: -1.757465, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Cars2 Barnsley", volume: 0, lat: 53.551746, lng: -1.474458, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Caffyns Ashford", volume: 0, lat: 51.127356, lng: 0.895132, brand: 'competitor', manufacturer: 'MG', registrations: 37, isCompetitor: true },
  { name: "Budgen Telford", volume: 0, lat: 52.678064, lng: -2.431106, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Budgen Shrewsbury", volume: 0, lat: 52.732627, lng: -2.714771, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Brindley Wolverhampton", volume: 0, lat: 52.597915, lng: -2.129448, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Blights Bideford", volume: 0, lat: 51.010382, lng: -4.223796, brand: 'competitor', manufacturer: 'MG', registrations: 23, isCompetitor: true },
  { name: "Blackshaws Alnwick", volume: 0, lat: 55.399394, lng: -1.689797, brand: 'competitor', manufacturer: 'MG', registrations: 26, isCompetitor: true },
  { name: "Birchwood Eastbourne", volume: 0, lat: 50.789031, lng: 0.300716, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Baylis Gloucester", volume: 0, lat: 51.836262, lng: -2.26631, brand: 'competitor', manufacturer: 'MG', registrations: 38, isCompetitor: true },
  { name: "Arnold Clark Sunderland", volume: 0, lat: 54.917029, lng: -1.403946, brand: 'competitor', manufacturer: 'MG', registrations: 35, isCompetitor: true },
  { name: "Arnold Clark Stirling", volume: 0, lat: 56.113387, lng: -3.926667, brand: 'competitor', manufacturer: 'MG', registrations: 27, isCompetitor: true },
  { name: "Arnold Clark Salford", volume: 0, lat: 53.481964, lng: -2.27723, brand: 'competitor', manufacturer: 'MG', registrations: 42, isCompetitor: true },
  { name: "Arnold Clark Rutherglen", volume: 0, lat: 55.835159, lng: -4.207691, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Arnold Clark Newcastle Shiremoor", volume: 0, lat: 55.026217, lng: -1.502589, brand: 'competitor', manufacturer: 'MG', registrations: 36, isCompetitor: true },
  { name: "Arnold Clark Liverpool", volume: 0, lat: 53.388688, lng: -2.979929, brand: 'competitor', manufacturer: 'MG', registrations: 40, isCompetitor: true },
  { name: "Arnold Clark Linwood", volume: 0, lat: 55.844136, lng: -4.46686, brand: 'competitor', manufacturer: 'MG', registrations: 29, isCompetitor: true },
  { name: "Arnold Clark Kirkcaldy", volume: 0, lat: 56.134808, lng: -3.14167, brand: 'competitor', manufacturer: 'MG', registrations: 28, isCompetitor: true },
  { name: "Arnold Clark Edinburgh East", volume: 0, lat: 55.963206, lng: -3.127926, brand: 'competitor', manufacturer: 'MG', registrations: 34, isCompetitor: true },
  { name: "Arnold Clark East Kilbride", volume: 0, lat: 55.763789, lng: -4.208774, brand: 'competitor', manufacturer: 'MG', registrations: 31, isCompetitor: true },
  { name: "Arnold Clark Bishopbriggs", volume: 0, lat: 55.89845, lng: -4.231521, brand: 'competitor', manufacturer: 'MG', registrations: 32, isCompetitor: true },
  { name: "Arnold Clark Birtley", volume: 0, lat: 54.898245, lng: -1.560764, brand: 'competitor', manufacturer: 'MG', registrations: 30, isCompetitor: true },
  { name: "Arnold Clark Aberdeen", volume: 0, lat: 57.130968, lng: -2.093954, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  { name: "Ancaster Shepperton", volume: 0, lat: 51.391662, lng: -0.43487, brand: 'competitor', manufacturer: 'MG', registrations: 41, isCompetitor: true },
  { name: "Ancaster Dartford", volume: 0, lat: 51.438401, lng: 0.243494, brand: 'competitor', manufacturer: 'MG', registrations: 44, isCompetitor: true },
  { name: "Ancaster Bromley", volume: 0, lat: 51.411067, lng: 0.026073, brand: 'competitor', manufacturer: 'MG', registrations: 46, isCompetitor: true },
  { name: "Acorn Crewe", volume: 0, lat: 53.099328, lng: -2.483913, brand: 'competitor', manufacturer: 'MG', registrations: 33, isCompetitor: true },
  
  // Subaru Competitors
  { name: "IM Group Subaru Reading", volume: 0, lat: 51.4543, lng: -0.9781, brand: 'competitor', manufacturer: 'Subaru', registrations: 45, isCompetitor: true },
  { name: "Jennings Subaru Sunderland", volume: 0, lat: 54.9069, lng: -1.3838, brand: 'competitor', manufacturer: 'Subaru', registrations: 38, isCompetitor: true },
  { name: "Lifestyle Subaru Brighton", volume: 0, lat: 50.8225, lng: -0.1372, brand: 'competitor', manufacturer: 'Subaru', registrations: 41, isCompetitor: true },
  { name: "Pentagon Subaru Derby", volume: 0, lat: 52.9225, lng: -1.4746, brand: 'competitor', manufacturer: 'Subaru', registrations: 43, isCompetitor: true },
  
  // Omoda Competitors (newer brand - fewer dealers)
  { name: "Johnsons Omoda London", volume: 0, lat: 51.5074, lng: -0.1278, brand: 'competitor', manufacturer: 'Omoda', registrations: 12, isCompetitor: true },
  { name: "Snows Omoda Portsmouth", volume: 0, lat: 50.8198, lng: -1.0880, brand: 'competitor', manufacturer: 'Omoda', registrations: 9, isCompetitor: true },
  
  // Chery Competitors - Complete UK Network (excluding Invicta locations)
  { name: "Allen Motor Romford", volume: 0, lat: 51.5762, lng: 0.1842, brand: 'competitor', manufacturer: 'Chery', registrations: 8, isCompetitor: true },
  { name: "Allen Motor Kettering", volume: 0, lat: 52.3988, lng: -0.7260, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Allen Motor Milton Keynes", volume: 0, lat: 52.0406, lng: -0.7594, brand: 'competitor', manufacturer: 'Chery', registrations: 7, isCompetitor: true },
  { name: "Arnold Clark Newcastle", volume: 0, lat: 55.0260, lng: -1.5649, brand: 'competitor', manufacturer: 'Chery', registrations: 9, isCompetitor: true },
  { name: "Arnold Clark Clydebank", volume: 0, lat: 55.9015, lng: -4.4055, brand: 'competitor', manufacturer: 'Chery', registrations: 8, isCompetitor: true },
  { name: "Arnold Clark Glasgow", volume: 0, lat: 55.8721, lng: -4.3330, brand: 'competitor', manufacturer: 'Chery', registrations: 11, isCompetitor: true },
  { name: "Fish Brothers Swindon", volume: 0, lat: 51.5558, lng: -1.7797, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Park's East Kilbride", volume: 0, lat: 55.7642, lng: -4.1778, brand: 'competitor', manufacturer: 'Chery', registrations: 7, isCompetitor: true },
  { name: "Sytner Chery Wakefield", volume: 0, lat: 53.6724, lng: -1.5080, brand: 'competitor', manufacturer: 'Chery', registrations: 8, isCompetitor: true },
  { name: "Pentagon Loughborough", volume: 0, lat: 52.7686, lng: -1.2050, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Pentagon Barnsley", volume: 0, lat: 53.5526, lng: -1.4797, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Bassetts Bridgend", volume: 0, lat: 51.5043, lng: -3.5779, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Hartwell Grimsby", volume: 0, lat: 53.5676, lng: -0.0759, brand: 'competitor', manufacturer: 'Chery', registrations: 4, isCompetitor: true },
  { name: "John Grose Ipswich", volume: 0, lat: 52.0406, lng: 1.1556, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Barnetts Dundee", volume: 0, lat: 56.4620, lng: -2.9707, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Pye Motors Barrow", volume: 0, lat: 54.1109, lng: -3.2267, brand: 'competitor', manufacturer: 'Chery', registrations: 3, isCompetitor: true },
  { name: "Holdcroft Crewe", volume: 0, lat: 53.0983, lng: -2.4408, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Sytner Chery Bristol", volume: 0, lat: 51.5187, lng: -2.6090, brand: 'competitor', manufacturer: 'Chery', registrations: 9, isCompetitor: true },
  { name: "Birchwood Hastings", volume: 0, lat: 50.8709, lng: 0.5734, brand: 'competitor', manufacturer: 'Chery', registrations: 4, isCompetitor: true },
  { name: "Sytner Chery Cardiff", volume: 0, lat: 51.4658, lng: -3.1744, brand: 'competitor', manufacturer: 'Chery', registrations: 8, isCompetitor: true },
  { name: "Glyn Hopkin Colchester", volume: 0, lat: 51.8905, lng: 0.9027, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Glyn Hopkin St Albans", volume: 0, lat: 51.7520, lng: -0.3360, brand: 'competitor', manufacturer: 'Chery', registrations: 7, isCompetitor: true },
  { name: "Exeter Chery", volume: 0, lat: 50.7184, lng: -3.5339, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Toomey Southend Chery", volume: 0, lat: 51.5460, lng: 0.7077, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Western Chery Edinburgh Newbridge", volume: 0, lat: 55.9375, lng: -3.4089, brand: 'competitor', manufacturer: 'Chery', registrations: 7, isCompetitor: true },
  { name: "Western Chery Edinburgh Straiton", volume: 0, lat: 55.8738, lng: -3.1417, brand: 'competitor', manufacturer: 'Chery', registrations: 6, isCompetitor: true },
  { name: "Richardson Chery Driffield", volume: 0, lat: 53.9958, lng: -0.4394, brand: 'competitor', manufacturer: 'Chery', registrations: 3, isCompetitor: true },
  { name: "Chery Blackpool Cox Motor", volume: 0, lat: 53.7960, lng: -3.0266, brand: 'competitor', manufacturer: 'Chery', registrations: 5, isCompetitor: true },
  { name: "Chery Kendal Cox Motor", volume: 0, lat: 54.3274, lng: -2.7444, brand: 'competitor', manufacturer: 'Chery', registrations: 4, isCompetitor: true },
  
  // Jaecoo Competitors - Complete UK Network
  { name: "Alexanders Stockton-on-Tees", volume: 0, lat: 54.55905, lng: -1.30413, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Allen Motor Coventry", volume: 0, lat: 52.39697, lng: -1.49479, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Allen Motor Northampton", volume: 0, lat: 52.24176, lng: -0.8396, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Allen Motor Rayleigh", volume: 0, lat: 51.5632, lng: 0.66608, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Arnold Clark Aberdeen", volume: 0, lat: 57.12741, lng: -2.09158, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Arnold Clark Edinburgh", volume: 0, lat: 55.963247, lng: -3.127986, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Arnold Clark Glasgow Springburn", volume: 0, lat: 55.8944, lng: -4.2258, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Arnold Clark Huddersfield", volume: 0, lat: 53.662964, lng: -1.75708, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Arnold Clark Linwood Glasgow", volume: 0, lat: 55.84629, lng: -4.47292, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Arnold Clark Newcastle Silverlink", volume: 0, lat: 55.015, lng: -1.49719, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Arnold Clark Newcastle", volume: 0, lat: 54.96265, lng: -1.63792, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Auto West London", volume: 0, lat: 51.48731, lng: -0.2532, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 6, isCompetitor: true },
  { name: "Bassetts Swansea", volume: 0, lat: 51.65592, lng: -3.91655, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Bassetts Bridgend", volume: 0, lat: 51.49749, lng: -3.56092, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Batchelor York", volume: 0, lat: 53.97658, lng: -1.12682, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Batchelors Malton", volume: 0, lat: 54.12815, lng: -0.81716, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Batchelors Ripon", volume: 0, lat: 54.12947, lng: -1.51737, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Bentley Motor Keighley", volume: 0, lat: 53.86872, lng: -1.89653, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Birchwood Eastbourne", volume: 0, lat: 50.78928, lng: 0.30059, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Brindley Cannock", volume: 0, lat: 52.68029, lng: -2.05378, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Cars2 Barnsley", volume: 0, lat: 53.55077, lng: -1.47443, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Cars2 Wakefield", volume: 0, lat: 53.68019, lng: -1.50597, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Chapel House Blackpool", volume: 0, lat: 53.80343, lng: -3.00716, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Chapel House Southport", volume: 0, lat: 53.6, lng: -3.03318, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Chapel House Warrington", volume: 0, lat: 53.39073, lng: -2.60641, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Chapel House Wigan", volume: 0, lat: 53.54294, lng: -2.64572, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Desira Norwich", volume: 0, lat: 52.63741, lng: 1.28114, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Desira Lowestoft", volume: 0, lat: 52.47037, lng: 1.74087, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Desira Bury St Edmunds", volume: 0, lat: 52.24064, lng: 0.74358, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Drayton Motors Grantham", volume: 0, lat: 52.88752, lng: -0.63514, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Drayton Motor Louth", volume: 0, lat: 53.37617, lng: -0.00419, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Duckworth Boston", volume: 0, lat: 52.92322, lng: -0.06788, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Endeavour Watford", volume: 0, lat: 51.65122, lng: -0.39004, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "FG Barnes Guildford", volume: 0, lat: 51.26221, lng: -0.56834, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Fish Brothers Swindon", volume: 0, lat: 51.5554, lng: -1.81314, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Fordthorne Cardiff", volume: 0, lat: 51.46616, lng: -3.19065, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Gates Woodford", volume: 0, lat: 51.60153, lng: 0.04504, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Gates St Albans", volume: 0, lat: 51.7498, lng: -0.30382, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Greenhous Shrewsbury", volume: 0, lat: 52.73613, lng: -2.72114, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "GroupM53 Wirral", volume: 0, lat: 53.28951, lng: -2.91149, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Halesowen Motor House", volume: 0, lat: 52.45947, lng: -2.04866, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Hartwell Grimsby", volume: 0, lat: 53.57152, lng: -0.08749, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Hartwell Hereford", volume: 0, lat: 52.07312, lng: -2.70746, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Hartwell Abingdon", volume: 0, lat: 51.66754, lng: -1.29579, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Hatfields Hull", volume: 0, lat: 53.7211, lng: -0.42502, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Hendy Portsmouth", volume: 0, lat: 50.82569, lng: -1.04976, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Holdcroft Northwich", volume: 0, lat: 53.26399, lng: -2.49517, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Hutchings Pontypridd", volume: 0, lat: 51.5754, lng: -3.2952, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "John Grose Ipswich", volume: 0, lat: 52.0281, lng: 1.20965, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "KAP Folkestone", volume: 0, lat: 51.08174, lng: 1.13945, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Listers Solihull", volume: 0, lat: 52.39269, lng: -1.81185, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Marshall Nottingham", volume: 0, lat: 52.98116, lng: -1.17306, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Martins Winchester", volume: 0, lat: 51.07078, lng: -1.29585, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Marshall Gatwick", volume: 0, lat: 51.13538, lng: -0.18059, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Marshall Lincoln", volume: 0, lat: 53.20592, lng: -0.61586, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Meadens Christchurch", volume: 0, lat: 50.73701, lng: -1.75326, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Murley Stratford", volume: 0, lat: 52.19624, lng: -1.71474, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Park's Motherwell", volume: 0, lat: 55.78235, lng: -3.98528, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Park's Arbroath", volume: 0, lat: 56.57199, lng: -2.57551, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Park's Carlisle", volume: 0, lat: 54.93031, lng: -2.95248, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Park's Irvine", volume: 0, lat: 55.60815, lng: -4.63525, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Peoples Edinburgh West", volume: 0, lat: 55.92071, lng: -3.30332, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Peoples Liverpool", volume: 0, lat: 53.35068, lng: -2.86323, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Peoples Falkirk", volume: 0, lat: 55.99824, lng: -3.77255, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Perrys Aylesbury", volume: 0, lat: 51.82374, lng: -0.8313, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Peter Cooper Shirley", volume: 0, lat: 50.91932, lng: -1.42909, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Peter Cooper Chichester", volume: 0, lat: 50.8318, lng: -0.79288, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Pentagon Sheffield", volume: 0, lat: 53.38119, lng: -1.42722, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Platinum Frome", volume: 0, lat: 51.22192, lng: -2.32519, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Pye Motors Lancaster", volume: 0, lat: 54.056, lng: -2.83302, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Richard Sanders Kettering", volume: 0, lat: 52.40702, lng: -0.73472, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Richardsons Bridlington", volume: 0, lat: 54.08288, lng: -0.19966, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Ron Brooks Derby", volume: 0, lat: 52.9238, lng: -1.45882, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Ron Brooks Leicester", volume: 0, lat: 52.64482, lng: -1.14798, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Ron Brooks Mansfield", volume: 0, lat: 53.13227, lng: -1.15749, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "RRG Oldham", volume: 0, lat: 53.52529, lng: -2.13774, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "RRG Bury", volume: 0, lat: 53.59448, lng: -2.3057, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "SG Petch Durham", volume: 0, lat: 54.7936, lng: -1.54136, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Stoner Gillingham", volume: 0, lat: 51.39495, lng: 0.5583, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Toomey Brentwood", volume: 0, lat: 51.61099, lng: 0.27058, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Vospers Exeter", volume: 0, lat: 50.69493, lng: -3.51388, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Vospers Plymouth", volume: 0, lat: 50.39285, lng: -4.08964, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Vospers St Austell", volume: 0, lat: 50.33756, lng: -4.78887, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Warners Gloucester", volume: 0, lat: 51.85867, lng: -2.21828, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Waylands Bristol", volume: 0, lat: 51.52372, lng: -2.60583, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Wellington Taunton", volume: 0, lat: 50.98247, lng: -3.20499, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "West Motor Bromley", volume: 0, lat: 51.40704, lng: -0.01966, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Perrys Nelson", volume: 0, lat: 53.83599, lng: -2.23239, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Vale Motors Wincanton", volume: 0, lat: 51.05099, lng: -2.4187, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 2, isCompetitor: true },
  { name: "Stoner Tunbridge Wells", volume: 0, lat: 51.15517, lng: 0.28489, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Allen Motor Milton Keynes", volume: 0, lat: 52.06277, lng: -0.81719, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 4, isCompetitor: true },
  { name: "Parks Perth", volume: 0, lat: 56.41058, lng: -3.45398, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "West Motor New Kingston", volume: 0, lat: 51.39746, lng: -0.2454, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 5, isCompetitor: true },
  { name: "Clarks Kidderminster", volume: 0, lat: 52.37106, lng: -2.24707, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Yeomans Littlehampton", volume: 0, lat: 50.81483, lng: -0.5287, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
  { name: "Swansway Stockport", volume: 0, lat: 53.40137, lng: -2.15669, brand: 'competitor', manufacturer: 'Jaecoo', registrations: 3, isCompetitor: true },
];

// Convert lat/lng to percentage position on the map view
const latToY = (lat: number) => {
  const minLat = 49.8;
  const maxLat = 58.7;
  return ((maxLat - lat) / (maxLat - minLat)) * 100;
};

const lngToX = (lng: number) => {
  const minLng = -6.5;
  const maxLng = 2.0;
  return ((lng - minLng) / (maxLng - minLng)) * 100;
};

export default function InvictaLocalSEOSlide() {
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'invicta' | 'motorparks' | 'county'>('all');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all');
  const [showCompetitors, setShowCompetitors] = useState<boolean>(false);
  const [highlightMetric, setHighlightMetric] = useState<'pumpIn' | 'pumpOut' | 'marketShare' | 'conquest'>('marketShare');
  
  const manufacturers = ['all', ...Array.from(new Set(locations.map(l => l.manufacturer)))];
  
  // Combine our locations with competitors
  const allLocations = [...locations, ...competitorLocations];
  
  let filteredLocations = locations;
  let filteredCompetitors = showCompetitors ? competitorLocations : [];
  
  if (selectedBrand !== 'all') {
    filteredLocations = filteredLocations.filter(l => l.brand === selectedBrand);
  }
  
  if (selectedManufacturer !== 'all') {
    filteredLocations = filteredLocations.filter(l => l.manufacturer === selectedManufacturer);
    filteredCompetitors = filteredCompetitors.filter(l => l.manufacturer === selectedManufacturer);
  }
  
  const displayLocations = [...filteredLocations, ...filteredCompetitors];

  // Calculate aggregate metrics
  const totalMarketSize = filteredLocations.reduce((sum, loc) => sum + (loc.marketSize || 0), 0);
  const avgPumpIn = filteredLocations.reduce((sum, loc) => sum + (loc.pumpIn || 0), 0) / filteredLocations.length;
  const avgPumpOut = filteredLocations.reduce((sum, loc) => sum + (loc.pumpOut || 0), 0) / filteredLocations.length;
  const avgMarketShare = filteredLocations.reduce((sum, loc) => sum + (loc.marketShare || 0), 0) / filteredLocations.length;
  const avgConquest = filteredLocations.reduce((sum, loc) => sum + (loc.conquestRate || 0), 0) / filteredLocations.length;
  
  // Top/Bottom performers
  const topMarketShare = [...filteredLocations].sort((a, b) => (b.marketShare || 0) - (a.marketShare || 0)).slice(0, 5);
  const highestPumpOut = [...filteredLocations].sort((a, b) => (b.pumpOut || 0) - (a.pumpOut || 0)).slice(0, 5);
  const highestConquest = [...filteredLocations].sort((a, b) => (b.conquestRate || 0) - (a.conquestRate || 0)).slice(0, 5);
  
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase mb-0 p-0">
        Urban Science Market Opportunity
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-0 p-0">
        Indicative market performance data showing pump-in/pump-out dynamics and competitive positioning
      </p>
      
      <div className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-200px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.3) transparent' }}>
        <div className="w-full max-w-[98%] mx-auto">
        <div className="grid md:grid-cols-[1fr,3fr,1fr] gap-3 mb-6">
          {/* Filters Column - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl flex flex-col gap-3"
          >
            <h4 className="text-sm font-bold text-gray-800 mb-0">Filters</h4>
            <div className="flex flex-col gap-3">
                  {/* Brand Filter */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Brand:
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <button
                        onClick={() => setSelectedBrand('all')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm w-full text-left ${
                          selectedBrand === 'all'
                            ? 'bg-slate-800 text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-300'
                        }`}
                      >
                        All Brands
                      </button>
                      <button
                        onClick={() => setSelectedBrand('invicta')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm w-full text-left ${
                          selectedBrand === 'invicta'
                            ? 'bg-[#0a64c3] text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-300'
                        }`}
                      >
                        Invicta
                      </button>
                      <button
                        onClick={() => setSelectedBrand('motorparks')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm w-full text-left ${
                          selectedBrand === 'motorparks'
                            ? 'bg-[#f59e0b] text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-amber-50 border border-amber-300'
                        }`}
                      >
                        Motorparks
                      </button>
                      <button
                        onClick={() => setSelectedBrand('county')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm w-full text-left ${
                          selectedBrand === 'county'
                            ? 'bg-[#10b981] text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-green-50 border border-green-300'
                        }`}
                      >
                        County
                      </button>
                    </div>
                  </div>

                  {/* Manufacturer Filter */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Make:
                    </span>
                    <div className="flex flex-col gap-1.5 max-h-[300px] overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.3) transparent' }}>
                      {manufacturers.map((mfr) => (
                        <button
                          key={mfr}
                          onClick={() => setSelectedManufacturer(mfr)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm w-full text-left ${
                            selectedManufacturer === mfr
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-white text-slate-700 hover:bg-blue-50 border border-slate-300'
                          }`}
                        >
                          {mfr === 'all' ? 'All Makes' : mfr}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Competitors Toggle */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
                    <span className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Display:
                    </span>
                    <button
                      onClick={() => setShowCompetitors(!showCompetitors)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm flex items-center gap-1.5 w-full ${
                        showCompetitors
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-white text-slate-700 hover:bg-red-50 border border-slate-300'
                      }`}
                    >
                      {showCompetitors ? (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                          <span className="flex-1 text-left">Hide Competitors</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="flex-1 text-left">Show Competitors</span>
                        </>
                      )} 
                      <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                        {competitorLocations.length}
                      </span>
                    </button>
                  </div>
            </div>
          </motion.div>

          {/* Map Section - Center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-white/95 backdrop-blur rounded-xl p-3 shadow-2xl flex flex-col min-h-0 overflow-hidden"
          >
            <div className="mb-2 flex-shrink-0">
              <h3 className="text-lg font-bold text-gray-800 mb-1">Market Performance Map</h3>
              <p className="text-xs text-gray-600 mb-2">Circle size indicates market share • Color shows brand positioning</p>
            </div>
            
            {/* Interactive Leaflet Map - Scrollable container */}
            <div className="relative w-full flex-1 bg-slate-100 rounded-lg overflow-auto border-2 border-slate-300">
              <div className="w-full h-[800px] min-h-[800px]">
                <MapContainer
                  center={[54.0, -2.5]}
                  zoom={6}
                  style={{ width: '100%', height: '100%' }}
                  className="z-0"
                >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Postcode Boundaries - Hidden (can be re-enabled later) */}
                
                {displayLocations.map((location, index) => {
                  const isCompetitor = location.isCompetitor || false;
                  
                  const color = isCompetitor 
                    ? '#9ca3af' // gray for competitors
                    : location.brand === 'county' 
                      ? '#10b981' 
                      : location.brand === 'motorparks' 
                        ? '#f59e0b' 
                        : '#0a64c3';
                  
                  const radius = isCompetitor 
                    ? 4 // smaller for competitors
                    : location.volume >= 50 ? 10 : location.volume >= 25 ? 7 : 5;
                  
                  return (
                    <CircleMarker
                      key={index}
                      center={[location.lat, location.lng]}
                      radius={radius}
                      pathOptions={{
                        fillColor: color,
                        fillOpacity: isCompetitor ? 0.5 : 0.8,
                        color: isCompetitor ? '#6b7280' : '#fff',
                        weight: isCompetitor ? 1 : 2,
                      }}
                    >
                      <Popup>
                        <div className="text-sm min-w-[240px]">
                          <div className="font-bold text-gray-800 mb-2">
                            {location.name}
                            {isCompetitor && <span className="ml-2 text-xs text-gray-500">(Competitor)</span>}
                          </div>
                          
                          {!isCompetitor && (
                            <>
                              <div className="space-y-1.5 mb-3">
                                <div className="flex justify-between text-gray-600">
                                  <span>Market Size:</span>
                                  <span className="font-medium">{location.marketSize?.toLocaleString()} units/yr</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                  <span>Registrations:</span>
                                  <span className="font-medium text-green-600">{location.registrations} units</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                  <span>Market Share:</span>
                                  <span className="font-bold text-blue-600">{location.marketShare?.toFixed(1)}%</span>
                                </div>
                              </div>
                              
                              <div className="border-t border-gray-200 pt-2 mb-2">
                                <div className="text-xs font-semibold text-gray-700 mb-1.5">Pump-In / Pump-Out</div>
                                <div className="flex justify-between text-gray-600 text-xs mb-1">
                                  <span>Pump-In:</span>
                                  <span className="font-medium text-emerald-600">{location.pumpIn}% from outside</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-xs mb-1">
                                  <span>Pump-Out:</span>
                                  <span className="font-medium text-rose-600">{location.pumpOut}% to competitors</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-xs">
                                  <span>Conquest Rate:</span>
                                  <span className="font-medium text-violet-600">{location.conquestRate}%</span>
                                </div>
                              </div>
                            </>
                          )}
                          
                          {isCompetitor && (
                            <div className="space-y-1.5 mb-2">
                              <div className="flex justify-between text-gray-600">
                                <span>Registrations:</span>
                                <span className="font-medium">{location.registrations} units</span>
                              </div>
                              <div className="flex justify-between text-gray-600">
                                <span>Manufacturer:</span>
                                <span className="font-medium">{location.manufacturer}</span>
                              </div>
                            </div>
                          )}
                          
                          <div 
                            className="inline-block px-2 py-1 rounded text-xs font-medium text-white"
                            style={{ backgroundColor: color }}
                          >
                            {isCompetitor ? 'Competitor' : location.brand.charAt(0).toUpperCase() + location.brand.slice(1)}
                          </div>
                        </div>
                      </Popup>
                    </CircleMarker>
                  );
                })}
              </MapContainer>
              </div>
            </div>

            {/* Legend & Stats */}
            <div className="mt-3 flex items-center justify-between flex-shrink-0">
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#0a64c3]"></div>
                  <span className="text-gray-700">Invicta ({locations.filter(l => l.brand === 'invicta').length})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                  <span className="text-gray-700">Motorparks ({locations.filter(l => l.brand === 'motorparks').length})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                  <span className="text-gray-700">County ({locations.filter(l => l.brand === 'county').length})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#9ca3af] opacity-50"></div>
                  <span className="text-gray-700">Competitors ({competitorLocations.length})</span>
                </div>
              </div>
              <div className="text-xs font-bold text-gray-800">
                {filteredLocations.reduce((sum, loc) => sum + loc.volume, 0).toLocaleString()} searches/mo
              </div>
            </div>
          </motion.div>

          {/* Market Performance Metrics - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-2.5 min-h-0 overflow-y-auto pr-2"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.3) transparent' }}
          >
            {/* Aggregate Market Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 shadow-xl flex-shrink-0"
            >
              <h4 className="text-white font-bold text-sm mb-2">Aggregate Metrics</h4>
              <div className="space-y-2">
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-white/70 text-xs mb-0.5">Total Market Size</div>
                  <div className="text-xl font-bold text-white">{totalMarketSize.toLocaleString()}</div>
                  <div className="text-white/60 text-xs">units/year</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2">
                  <div className="text-white/70 text-xs mb-0.5">Avg Market Share</div>
                  <div className="text-xl font-bold text-white">{avgMarketShare.toFixed(1)}%</div>
                  <div className="text-white/60 text-xs">across locations</div>
                </div>
              </div>
            </motion.div>

            {/* Pump-In / Pump-Out */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 shadow-xl flex-shrink-0"
            >
              <h4 className="text-white font-bold text-sm mb-2">Customer Flow</h4>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/90 text-xs">Pump-In</span>
                    <span className="text-white font-bold text-base">{avgPumpIn.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div className="bg-white rounded-full h-1.5" style={{ width: `${avgPumpIn}%` }}></div>
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">Customers from outside postcode</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/90 text-xs">Pump-Out</span>
                    <span className="text-white font-bold text-base">{avgPumpOut.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div className="bg-rose-400 rounded-full h-1.5" style={{ width: `${avgPumpOut}%` }}></div>
                  </div>
                  <div className="text-white/70 text-xs mt-0.5">Local customers going elsewhere</div>
                </div>
              </div>
            </motion.div>

            {/* Top Market Share Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/95 backdrop-blur rounded-xl p-3 shadow-xl flex-shrink-0"
            >
              <h4 className="text-gray-800 font-bold text-sm mb-2">Top Market Share</h4>
              <div className="space-y-1.5">
                {topMarketShare.map((loc, i) => (
                  <div key={i} className="flex justify-between items-center text-xs">
                    <span className="text-gray-700 font-medium truncate flex-1">{loc.name.split(' ').slice(-1)}</span>
                    <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold ml-2">{loc.marketShare?.toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highest Pump-Out (Opportunity) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl p-3 shadow-xl flex-shrink-0"
            >
              <h4 className="text-white font-bold text-sm mb-1.5">Highest Pump-Out</h4>
              <div className="text-xs text-white/80 mb-1.5">Greatest opportunity to capture local demand</div>
              <div className="space-y-1">
                {highestPumpOut.map((loc, i) => (
                  <div key={i} className="flex justify-between items-center text-xs bg-white/10 rounded px-2 py-1">
                    <span className="text-white/90 truncate flex-1">{loc.name.split(' ').slice(-1)}</span>
                    <span className="text-white font-bold ml-2">{loc.pumpOut}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Conquest Rate Leaders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl p-3 shadow-xl flex-shrink-0"
            >
              <h4 className="text-white font-bold text-sm mb-1.5">Conquest Leaders</h4>
              <div className="text-xs text-white/80 mb-1.5">Highest % from competitors</div>
              <div className="space-y-1">
                {highestConquest.slice(0, 3).map((loc, i) => (
                  <div key={i} className="flex justify-between items-center text-xs bg-white/10 rounded px-2 py-1">
                    <span className="text-white/90 truncate flex-1">{loc.name.split(' ').slice(-1)}</span>
                    <span className="text-white font-bold ml-2">{loc.conquestRate}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-3 text-xs text-gray-500 text-center italic">
          * Data shown is indicative and may include unverified, estimated, or time-dependent information
        </div>
        </div>
      </div>
    </>
  );
}
