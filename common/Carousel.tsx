import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, } from "lucide-react";

interface CarouselItem {
    id: string| number;
    name: string;
    imageUrl: string;
    [key: string]: string | number;
}

interface CarouselProps {
    title: string;
    items: CarouselItem[];
    itemWidth: string;
    itemHeight: string;
    renderItem: (item: CarouselItem) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ title, items, itemWidth, renderItem }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const scrollAmount = containerRef.current.clientWidth * 0.75;
            const newPosition =
                direction === "left"
                    ? Math.max(0, scrollPosition - scrollAmount)
                    : Math.min(
                        containerRef.current.scrollWidth - containerRef.current.clientWidth,
                        scrollPosition + scrollAmount
                    );

            containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
            setScrollPosition(newPosition);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                scroll("left");
            } else if (event.key === "ArrowRight") {
                scroll("right");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [scrollPosition]);

    return (
        <div className="py-8 rounded-md w-full overflow-hidden">
            <div className="px-5 md:px-10">
                <h2 className="text-2xl mb-6 px-4">{title}</h2>

                <div className="relative">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto scrollbar-hide scroll-smooth transition-all duration-500 ease-in-out gap-4 pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={`flex-shrink-0 ${itemWidth} bg-white/10 overflow-hidden rounded-md transition-all duration-300 hover:shadow-md`}
                            >
                                {renderItem(item)}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("left")}
                        className="hidden  absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-r-md transition-all duration-300 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="hidden  absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-l-md transition-all duration-300 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;