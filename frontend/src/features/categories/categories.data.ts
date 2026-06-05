import {
  MdDryCleaning, MdConstruction, MdElectricBolt, MdPlumbing,
  MdFormatPaint, MdAcUnit, MdBuild, MdLocalShipping,
  MdSecurity, MdGridOn, MdHomeRepairService, MdCarpenter,
} from 'react-icons/md'

export const CATEGORIES = [
  { key: 'cleaning',     Icon: MdDryCleaning,       bg: '#fff7ed', accent: '#f97316' },
  { key: 'construction', Icon: MdConstruction,      bg: '#fef2f2', accent: '#ef4444' },
  { key: 'electrical',   Icon: MdElectricBolt,      bg: '#fefce8', accent: '#eab308' },
  { key: 'plumbing',     Icon: MdPlumbing,          bg: '#eff6ff', accent: '#3b82f6' },
  { key: 'painting',     Icon: MdFormatPaint,       bg: '#f0fdf4', accent: '#22c55e' },
  { key: 'ac',           Icon: MdAcUnit,            bg: '#f0f9ff', accent: '#0ea5e9' },
  { key: 'appliance',    Icon: MdBuild,             bg: '#fdf4ff', accent: '#a855f7' },
  { key: 'moving',       Icon: MdLocalShipping,     bg: '#fff7ed', accent: '#f97316' },
  { key: 'security',     Icon: MdSecurity,          bg: '#fef2f2', accent: '#ef4444' },
  { key: 'mason',        Icon: MdHomeRepairService, bg: '#faf5ff', accent: '#a855f7' },
  { key: 'tilefix',      Icon: MdGridOn,            bg: '#f0f9ff', accent: '#0ea5e9' },
  { key: 'carpenter',    Icon: MdCarpenter,         bg: '#fef9ec', accent: '#d97706' },
]
