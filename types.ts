import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface AxisItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface FormData {
  name: string;
  municipio: string;
  vereda: string;
  whatsapp: string;
  votaCurul: string; // 'Si' | 'No'
  quiereApoyar: string; // 'Si' | 'No'
}