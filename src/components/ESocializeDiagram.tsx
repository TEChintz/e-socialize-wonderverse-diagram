
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Abstract icons for concepts
import { 
  Scale, Feather, Link, CircleDot, 
  BarChart3, MessageSquare, Sparkles, 
  Heart, Zap, ToggleLeft, ToggleRight
} from "lucide-react";

const ESocializeDiagram = () => {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      // Responsive adjustments if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={diagramRef} className="w-full h-full relative overflow-hidden">
      {/* Main diagram container with gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2D1A45] to-[#331A45] z-0"></div>
      
      {/* Ambient particles in background */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D6BCFA] opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Section 1: Simulated Wonderland Core */}
      <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-[#9b87f5]/30 to-[#7E69AB]/30 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            boxShadow: ["0 0 20px #9b87f580", "0 0 40px #9b87f580", "0 0 20px #9b87f580"] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="absolute inset-2 rounded-full bg-[#1A1F2C]/40 backdrop-blur-sm border border-[#9b87f5]/30" />
          <div className="absolute z-20 text-white/90 font-light text-sm">Simulated Environment</div>
          
          {/* Orbit elements */}
          {[
            { icon: Scale, label: "Equality", angle: 0, distance: 110 },
            { icon: Feather, label: "Respect", angle: 72, distance: 110 },
            { icon: Link, label: "Togetherness", angle: 144, distance: 110 },
            { icon: CircleDot, label: "Social Acceptance", angle: 216, distance: 110 },
            { icon: BarChart3, label: "Non-Judgment", angle: 288, distance: 110 },
          ].map((item, i) => {
            const Icon = item.icon;
            const radian = (item.angle * Math.PI) / 180;
            const x = Math.cos(radian) * item.distance;
            const y = Math.sin(radian) * item.distance;
            
            return (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center"
                style={{ 
                  left: "50%", 
                  top: "50%", 
                  x: x, 
                  y: y,
                }}
                animate={{
                  x: x,
                  y: y,
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.5,
                }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#9b87f5]/20 backdrop-blur-sm flex items-center justify-center border border-[#9b87f5]/40">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#D6BCFA]" />
                </div>
                <span className="text-[9px] md:text-xs text-white/70 mt-1">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Section 2: Positivity Chain Reaction (Left Side) */}
      <div className="absolute left-1/6 top-1/2 transform -translate-x-1/4 -translate-y-1/3 z-20">
        <div className="relative w-48 h-48">
          {/* Central node */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-[#F97316] -translate-x-1/2 -translate-y-1/2"
            animate={{
              boxShadow: ["0 0 10px #F97316", "0 0 25px #F97316", "0 0 10px #F97316"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          {/* Chain reaction nodes */}
          {[...Array(9)].map((_, i) => {
            const angle = (i * 40) % 360;
            const distance = 60;
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * distance;
            const y = Math.sin(radian) * distance;
            
            return (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-[#FEC6A1]"
                style={{ 
                  left: "50%", 
                  top: "50%", 
                  x: x - 8, 
                  y: y - 8,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                  boxShadow: ["0 0 5px #FEC6A1", "0 0 15px #FEC6A1", "0 0 5px #FEC6A1"]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            );
          })}
          
          {/* Light beams connecting nodes */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(9)].map((_, i) => {
              const angle = (i * 40) % 360;
              const distance = 60;
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * distance + 24;
              const y = Math.sin(radian) * distance + 24;
              
              return (
                <motion.line
                  key={i}
                  x1="24" y1="24" x2={x} y2={y}
                  stroke="#FEC6A1"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0.1, 0.5, 0.1]
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              );
            })}
          </svg>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-[10px] md:text-xs text-white/70 leading-tight">
              One act of positivity sparks nine more—<br/>goodness amplifies.
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Herd Behavior Loop (Bottom Left Corner) */}
      <div className="absolute left-1/6 bottom-1/6 transform -translate-x-1/3 z-20">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D3E4FD" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M20,50 C20,30 80,30 80,50 C80,70 20,70 20,50 Z"
              fill="none"
              stroke="url(#loopGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            />
            
            {/* Abstract head shapes */}
            {[...Array(6)].map((_, i) => (
              <motion.circle
                key={i}
                cx={20 + i * 12}
                cy={50}
                r="4"
                fill={i === 0 ? "#D946EF" : "#D3E4FD"}
                animate={{
                  fill: i === 0 ? "#D946EF" : ["#D3E4FD", "#D946EF", "#D3E4FD"],
                }}
                transition={{
                  duration: 5,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </svg>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center w-full">
            <span className="text-[10px] md:text-xs text-white/70 leading-tight">
              Human behavior follows emotion—<br/>kindness inspires kindness.
            </span>
          </div>
        </div>
      </div>

      {/* Section 4: The Mediator Effect (Middle Section - Bridge Area) */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.div
          className="relative w-24 h-24 md:w-32 md:h-32"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Hexagon shape */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"
              fill="#7E69AB20"
              stroke="#9b87f5"
              strokeWidth="1"
              animate={{
                stroke: ["#9b87f5", "#D946EF", "#9b87f5"],
                strokeWidth: [1, 2, 1],
                strokeDasharray: ["0, 0", "5, 5", "0, 0"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/90 text-xs md:text-sm font-medium">Mediator</span>
          </div>
          
          {/* Connecting threads to other sections */}
          <svg className="absolute left-0 top-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30">
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30) % 360;
              const length = 100 + Math.random() * 100;
              const radian = (angle * Math.PI) / 180;
              const x = Math.cos(radian) * length;
              const y = Math.sin(radian) * length;
              
              return (
                <motion.line
                  key={i}
                  x1="250" y1="250" x2={250 + x} y2={250 + y}
                  stroke="#9b87f5"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 5,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                />
              );
            })}
          </svg>
          
          {/* Orbiting symbols */}
          {[
            { icon: Scale, angle: 0 },
            { icon: CircleDot, angle: 90 },
            { icon: Link, angle: 180 },
            { icon: BarChart3, angle: 270 },
          ].map((item, i) => {
            const Icon = item.icon;
            const radian = (item.angle * Math.PI) / 180;
            const distance = 60;
            const x = Math.cos(radian) * distance;
            const y = Math.sin(radian) * distance;
            
            return (
              <motion.div
                key={i}
                className="absolute w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
                style={{ 
                  left: "50%", 
                  top: "50%", 
                  x: x - 16, 
                  y: y - 16,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Icon className="text-[#D6BCFA] w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Section 5: Creative Script Amplifier (Right Center) */}
      <div className="absolute right-1/4 top-1/3 transform -translate-y-1/3 z-20">
        <div className="relative w-40 h-40">
          {/* DNA helix / wave */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M10,50 C30,20 70,80 90,50"
              fill="none"
              stroke="#D946EF"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
              d="M10,50 C30,80 70,20 90,50"
              fill="none"
              stroke="#33C3F0"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            />
          </svg>
          
          {/* Script icons along the wave */}
          {[
            { icon: MessageSquare, x: 25, y: 30 },
            { icon: Feather, x: 50, y: 50 },
            { icon: Sparkles, x: 75, y: 30 },
          ].map((item, i) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={i}
                className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#9b87f5]/20 backdrop-blur-sm flex items-center justify-center border border-[#9b87f5]/40"
                style={{ 
                  left: `${item.x}%`, 
                  top: `${item.y}%`, 
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: ["0 0 5px #9b87f580", "0 0 15px #9b87f580", "0 0 5px #9b87f580"],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              >
                <Icon className="text-[#D6BCFA] w-3 h-3 md:w-4 md:h-4" />
              </motion.div>
            );
          })}
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <span className="text-[10px] md:text-xs text-white/70 leading-tight">
              Creative scripts amplify human emotions<br/>and guide the journey.
            </span>
          </div>
        </div>
      </div>

      {/* Section 6: Controlled Simulation Layer (Bottom Right) */}
      <div className="absolute right-1/6 bottom-1/6 transform translate-x-1/6 z-20">
        <motion.div
          className="relative w-48 h-32 md:w-56 md:h-36 rounded-lg bg-[#1A1F2C]/70 backdrop-blur-sm border border-[#9b87f5]/30 p-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            boxShadow: ["0 0 10px #9b87f520", "0 0 20px #9b87f520", "0 0 10px #9b87f520"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="text-[10px] md:text-xs text-white/90 mb-2">Simulation Control</div>
          
          {/* Toggle switches */}
          <div className="flex flex-col gap-1.5 mb-3">
            {[
              { label: "Positivity", active: true },
              { label: "Respect", active: true },
              { label: "Engagement", active: true },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-[9px] md:text-[10px] text-white/70">{item.label}</span>
                <motion.div 
                  className={cn(
                    "w-6 h-3 rounded-full",
                    item.active ? "bg-[#9b87f5]" : "bg-gray-700"
                  )}
                  animate={{
                    backgroundColor: item.active ? ["#9b87f5", "#D946EF", "#9b87f5"] : "#374151"
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-white translate-y-0.5"
                    animate={{
                      x: item.active ? 10 : 2
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Compatibility meter */}
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#33C3F0] to-[#9b87f5]"
              initial={{ width: "20%" }}
              animate={{ width: ["20%", "80%", "60%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          <div className="text-[8px] md:text-[9px] text-white/50 text-center">
            Environment improves with every session—because we control it.
          </div>
        </motion.div>
      </div>

      {/* Section 7: Emotional Outcome Stream (Far Right) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <div className="relative w-32 md:w-40 h-48">
          {/* Flowing ribbon */}
          <svg className="w-full h-full" viewBox="0 0 100 200">
            <defs>
              <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="50%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,100 C20,70 40,130 60,100 C80,70 100,130 120,100"
              fill="none"
              stroke="url(#ribbonGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                d: [
                  "M0,100 C20,70 40,130 60,100 C80,70 100,130 120,100",
                  "M0,100 C20,130 40,70 60,100 C80,130 100,70 120,100",
                  "M0,100 C20,70 40,130 60,100 C80,70 100,130 120,100"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          
          {/* Symbols inside the ribbon */}
          {[
            { icon: Heart, x: "20%", y: "40%" },
            { icon: Sparkles, x: "50%", y: "50%" },
            { icon: Zap, x: "80%", y: "60%" },
          ].map((item, i) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={i}
                className="absolute w-5 h-5 md:w-6 md:h-6"
                style={{ 
                  left: item.x, 
                  top: item.y, 
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  y: ["0%", "-20%", "0%"],
                  rotate: [-5, 5, -5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              >
                <Icon className="text-white w-full h-full" />
              </motion.div>
            );
          })}
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full">
            <span className="text-[9px] md:text-xs text-white/80 leading-tight">
              Output: Positivity, Fulfillment,<br/>Connection, Joy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESocializeDiagram;
