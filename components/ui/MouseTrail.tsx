"use client";
import { cn } from "@/lib/utils";
import { createRef, useRef, useEffect, useState, ReactNode } from "react";

interface ImageMouseTrailProps {
  items: any[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
  onMouseMove?: (x: number, y: number) => void;
}

export default function ImageMouseTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
  onMouseMove,
}: ImageMouseTrailProps) {
  const containerRef = useRef(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));
  const currentZIndexRef = useRef(1);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const hideTrailRef = useRef<HTMLElement | null>(null);
  const globalIndexRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    hideTrailRef.current = document.querySelector(".hide-mouse-trail");
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const isHoveringHideElement = (x: number, y: number) => {
    const rect = hideTrailRef.current?.getBoundingClientRect();
    if (!rect) return false;
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  };

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;

    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1;
    }
    image.style.zIndex = String(currentZIndexRef.current);
    currentZIndexRef.current++;

    image.dataset.status = "active";

    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive";
      }, 1500);
    }
    lastMousePosition.current = { x, y };
  };

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive";
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(
      x - lastMousePosition.current.x,
      y - lastMousePosition.current.y
    );
  };

  const updateTrail = (x: number, y: number) => {
    if (isHoveringHideElement(x, y)) {
      refs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.style.display = "none";
        }
      });
      return;
    }

    refs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.style.display = "block";
      }
    });

    if (distanceFromLast(x, y) > window.innerWidth / distance) {
      const lead =
        refs.current[globalIndexRef.current % refs.current.length].current;
      const tail =
        refs.current[
          (globalIndexRef.current - maxNumberOfImages) % refs.current.length
        ]?.current;

      if (lead) activate(lead, x, y);
      if (tail) deactivate(tail);

      globalIndexRef.current++;
    }
  };

  const handleMouseMove = (e: MouseEvent | Touch) => {
    // Always notify parent component immediately
    onMouseMove?.(e.clientX, e.clientY);

    // Use RAF for trail updates
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      updateTrail(e.clientX, e.clientY);
    });
  };

  return (
    <section
      onMouseMove={(e) => handleMouseMove(e)}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      ref={containerRef}
      className={cn("relative grid h-full w-full rounded-lg  bg-blue-200 overflow-y-hidden", className)}
    >
      <div className="hidden sm:absolute h-full w-full z-[10000]">
        {items.map((item, index) => (
          <img
            key={index}
            className={cn(
              "  object-contain scale-0 opacity:0 data-[status='active']:scale-100 data-[status='active']:opacity-100 transition-transform data-[status='active']:duration-500 duration-300 data-[status='active']:ease-out-expo absolute -translate-y-[50%] -translate-x-[50%] z-[1000000000000000000000000000000000000000000000000000000000]",
              imgClass
            )}
            data-index={index}
            data-status="inactive"
            src={item}
            alt={`image-${index}`}
            ref={refs.current[index]}
          />
        ))}
      </div>
    
      <article className="relative">{children}</article>
    </section>
  );
}
