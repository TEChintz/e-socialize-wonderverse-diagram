
import React from "react";
import { 
  Scale, Feather, Link, CircleDot, 
  BarChart3, MessageSquare, Sparkles, 
  Heart, Zap, ToggleLeft
} from "lucide-react";

const ESocializeDiagram = () => {
  return (
    <div className="w-full h-full relative">
      {/* Main diagram container with gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2D1A45] to-[#331A45] z-0" />
      
      <div className="relative z-10 w-full h-full grid grid-cols-3 gap-8 p-8">
        {/* Left Column */}
        <div className="flex flex-col justify-between gap-8">
          {/* Positivity Chain Reaction */}
          <div className="bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="w-6 h-6 rounded-full bg-[#F97316]" />
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-[#FEC6A1]" />
              ))}
            </div>
            <p className="text-[10px] md:text-xs text-white/70 text-center mt-4">
              One act of positivity sparks nine more—goodness amplifies.
            </p>
          </div>

          {/* Herd Behavior Loop */}
          <div className="bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-4 h-4 rounded-full ${i === 0 ? 'bg-[#D946EF]' : 'bg-[#D3E4FD]'}`}
                />
              ))}
            </div>
            <p className="text-[10px] md:text-xs text-white/70 text-center">
              Human behavior follows emotion—kindness inspires kindness.
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center gap-8">
          {/* Simulated Wonderland Core */}
          <div className="relative w-full aspect-square rounded-full bg-gradient-to-r from-[#9b87f5]/30 to-[#7E69AB]/30 border border-[#9b87f5]/30 p-8">
            <div className="absolute inset-2 rounded-full bg-[#1A1F2C]/40" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
              <span className="text-white/90 font-light text-sm">Simulated Environment</span>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Scale, label: "Equality" },
                  { icon: Feather, label: "Respect" },
                  { icon: Link, label: "Togetherness" },
                  { icon: CircleDot, label: "Social Acceptance" },
                  { icon: BarChart3, label: "Non-Judgment" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#9b87f5]/20 flex items-center justify-center border border-[#9b87f5]/40">
                        <Icon className="w-4 h-4 text-[#D6BCFA]" />
                      </div>
                      <span className="text-[9px] text-white/70">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mediator */}
          <div className="w-full bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 border-2 border-[#9b87f5] rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/90 text-sm">Mediator</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-8">
          {/* Creative Script Amplifier */}
          <div className="bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="flex justify-around items-center mb-4">
              <MessageSquare className="text-[#D6BCFA] w-5 h-5" />
              <Sparkles className="text-[#D6BCFA] w-5 h-5" />
              <Zap className="text-[#D6BCFA] w-5 h-5" />
            </div>
            <p className="text-[10px] md:text-xs text-white/70 text-center">
              Creative scripts amplify human emotions and guide the journey.
            </p>
          </div>

          {/* Controlled Simulation Layer */}
          <div className="bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="text-[10px] md:text-xs text-white/90 mb-4">Simulation Control</div>
            <div className="space-y-2 mb-4">
              {["Positivity", "Respect", "Engagement"].map((label, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-[9px] md:text-[10px] text-white/70">{label}</span>
                  <div className="w-6 h-3 rounded-full bg-[#9b87f5]">
                    <div className="w-2 h-2 rounded-full bg-white translate-y-0.5 translate-x-3" />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-[#33C3F0] to-[#9b87f5]" />
            </div>
          </div>

          {/* Emotional Outcome Stream */}
          <div className="bg-[#1A1F2C]/40 rounded-lg p-6 border border-[#9b87f5]/30">
            <div className="flex justify-around items-center mb-4">
              <Heart className="text-[#D6BCFA] w-5 h-5" />
              <Sparkles className="text-[#D6BCFA] w-5 h-5" />
              <Zap className="text-[#D6BCFA] w-5 h-5" />
            </div>
            <p className="text-[10px] md:text-xs text-white/70 text-center">
              Output: Positivity, Fulfillment, Connection, Joy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESocializeDiagram;
