// DUMMY LOADING

// import { useState, useEffect } from "react";
// import { motion } from "motion/react";

// export function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const duration = 2500; // 2.5 seconds loading
//     const interval = 25;
//     const steps = duration / interval;
//     let currentStep = 0;

//     const timer = setInterval(() => {
//       currentStep++;
//       // Easing function for numbers (fast at start, slow at end)
//       const progressRatio = currentStep / steps;
//       const easeOutQuart = 1 - Math.pow(1 - progressRatio, 4);
      
//       const newProgress = Math.min(Math.round(easeOutQuart * 100), 100);
//       setProgress(newProgress);

//       if (currentStep >= steps) {
//         clearInterval(timer);
//         setTimeout(onComplete, 200);
//       }
//     }, interval);

//     return () => clearInterval(timer);
//   }, [onComplete]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, filter: "blur(10px)" }}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//       className="fixed inset-0 z-9999 bg-background flex items-center justify-center"
//     >
//       <div className="text-7xl md:text-9xl font-display font-bold text-foreground">
//         {progress}%
//       </div>
//     </motion.div>
//   );
// }


// LIVE LOADING
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { projects, services, experiences } from "../data";

export function LoadingScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Gather all image URLs used in the application
    const imageUrls = [
      ...projects.map(p => p.image),
      ...services.map(s => s.image),
      ...experiences.map(e => e.image),
      // Hero image
      "/images/my_pic.jpg",
      // Contact background
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      // Contact footer avatar
      "/images/my_pic.jpg"
    ];

    // Remove duplicates
    const uniqueUrls = Array.from(new Set(imageUrls));
    
    let loadedCount = 0;
    const totalImages = uniqueUrls.length;

    if (totalImages === 0) {
      setProgress(100);
      setTimeout(onComplete, 400);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(currentProgress);

      if (loadedCount === totalImages) {
        // Add a small delay so the user can see 100% before it fades out
        setTimeout(onComplete, 400);
      }
    };

    // Preload all images
    uniqueUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Even if it fails, we count it so we don't get stuck
    });

  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
    >
      <div className="text-7xl md:text-9xl font-display font-bold text-foreground">
        {progress}%
      </div>
    </motion.div>
  );
}
