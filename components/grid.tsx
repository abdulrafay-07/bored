"use client"

import { useState } from "react";

import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";

import { ideas } from "@/lib/ideas";

// utility function to generate a random color
const getRandomColor = () => {
   return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
};

export const Grid = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [currentIdea, setCurrentIdea] = useState<{title: string, link: string}>();
   const [hoverColors] = useState(
      Array(144).fill("").map(() => getRandomColor())
   );
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   const handleMouseEnter = (index: number) => {
      setHoveredIndex(index);
   };

   const handleMouseLeave = () => {
      setHoveredIndex(null);
   };

   const showRandomIdea = () => {
      const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
      setCurrentIdea(randomIdea);
      setIsOpen(true);
   };

   return (
      <div className="max-w-xl mx-auto border-2 w-full border-neutral-700 shadow-xl">
         <div className="grid grid-cols-12 lg:grid-cols-16">
            {[...Array(144)].map((_, index) => (
               <div
                  key={index}
                  className="cursor-pointer transition-colors duration-100 aspect-square border border-neutral-300"
                  style={{
                     backgroundColor: hoveredIndex === index ? hoverColors[index] : "white",
                  }}
                  onClick={showRandomIdea}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
               />
            ))}
         </div>
         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Maybe?</DialogTitle>
               </DialogHeader>
               {currentIdea && (
                  <>
                     <p className="text-lg">{currentIdea.title}</p>
                     <a href={currentIdea.link} target="_blank" rel="nofollow noopener noreferrer" className="underline text-sm">Use this resource</a>
                  </>
               )}
            </DialogContent>
         </Dialog>
      </div>
   );
};
