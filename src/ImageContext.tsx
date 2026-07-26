import { createContext, useState, ReactNode, useContext } from 'react';

type ImageContextType = {
  image1: string;
  setImage1: (url: string) => void;
  image2: string;
  setImage2: (url: string) => void;
  isLoading: boolean;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [image1, setImage1] = useState('/bike1.png');
  const [image2, setImage2] = useState('/bike2.png');

  return (
    <ImageContext.Provider value={{ image1, setImage1, image2, setImage2, isLoading: false }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImages() {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
}
