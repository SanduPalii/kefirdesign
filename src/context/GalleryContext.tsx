"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface GalleryContextType {
  images: string[];
  selectedIndex: number | null;
  openGallery: (images: string[], index: number) => void;
  closeGallery: () => void;
  next: () => void;
  prev: () => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

export function GalleryProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openGallery = useCallback((imgs: string[], index: number) => {
    setImages(imgs);
    setSelectedIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, [images.length]);

  const prev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  return (
    <GalleryContext.Provider
      value={{ images, selectedIndex, openGallery, closeGallery, next, prev }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("useGallery must be used within a GalleryProvider");
  return ctx;
}
