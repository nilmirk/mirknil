'use client';
import { ReactNode, useState, useEffect } from "react";
import '@/components/skill/skill.scss';
import { Texting, Text } from "mirk-ui";

export default function SkillCard({ name, children, icon, percent }: {
  icon: ReactNode,
  name: string,
  children: ReactNode,
  percent: number
}) {

  const [animatedProgress, setAnimatedProgress] = useState(0);

  const size = 64;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;
  const animate = true;
  const animationDuration = 1000;

  useEffect(() => {
    if (animate) {
      // Анимация заполнения прогресс-бара
      let startTimestamp: number | null = null;
      
      const animateProgress = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progressAmount = Math.min(elapsed / animationDuration, 1) * percent;
        
        setAnimatedProgress(progressAmount);
        
        if (elapsed < animationDuration) {
          requestAnimationFrame(animateProgress);
        } else {
          setAnimatedProgress(percent);
        }
      };
      
      requestAnimationFrame(animateProgress);
    } else {
      setAnimatedProgress(percent);
    }
  }, [percent, animate, animationDuration]);

  return (
    <div className="skill padh-24 padv-24 rad-24 flex-c gap-24 bg-blackHover">
      <div className="skill-header flex-r a-center j-between">
        <div className="skill-name flex-r a-center gap-16">
          {icon}
          <Texting className="da" text={Text.Body1}>{name}</Texting>
        </div>
        <div className="percent">
         <div className="circle-container flex-r a-center j-center">
          <svg className="progress" width={64} height={64} viewBox="0 0 64 64">
            <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke='#141414'
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke='#135BEB'
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
          </svg>
          <Texting className="da" text={Text.Caption1}>{`${percent}%`}</Texting>
          <div className="clipper"></div>
         </div>
        </div>
      </div>
      <Texting text={Text.Body4}>{children}</Texting>
    </div>
  );
}