"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const Flashcard = ({
    question,
    answer,
    onValueChange,
}: {
    question: string;
    answer: string;
    onValueChange?: (value: boolean) => void;
}) => {
    const x = useMotionValue(0);
    const [flipped, setFlipped] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [showX, setShowX] = useState(false);

    // Monitor x value to toggle icons
    useEffect(() => {
        const unsubscribeX = x.on("change", (latest) => {
            setShowCheck(latest > 150);
            setShowX(latest < -150);
        });

        return () => {
            unsubscribeX(); // Clean up listener on unmount
        };
    }, [x]);

    const handleFlip = () => setFlipped(!flipped);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (onValueChange) {
        onValueChange(info.offset.x > 100);
      }
    }

    return (
        <motion.div
            className="relative h-40 w-64 md:h-52 md:w-80"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x }}
            onClick={handleFlip}
            whileHover={{
                y: -5,
                transition: {
                    duration: 0.2,
                    type: "tween",
                    ease: "easeInOut",
                },
            }}
            animate={{ rotateY: flipped ? 360 : 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 50,
            }}
        >
            {showCheck && (
                <Check className="absolute size-6 md:size-8 left-1 top-1 p-1 rounded-full bg-green-500 text-white" />
            )}

            {showX && (
                <X className="absolute size-6 md:size-8 right-1 top-1 p-1 rounded-full bg-red-500 text-white" />
            )}

            <Card className="transition-all size-full flex flex-col cursor-pointer hover:shadow-lg bg-background text-foreground">
                <div className="flex flex-1 justify-center items-center size-full">
                    <motion.span
                        key={flipped ? answer : question}
                        className="text-3xl md:text-4xl text-foreground/90 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                    >
                        {flipped ? answer : question}
                    </motion.span>
                </div>
                <div className="select-none w-full text-center p-1 md:p-1 bg-muted text-muted-foreground text-sm md:text-base rounded-b-xl">
                    <motion.span
                        key={flipped ? "Tap to flip back" : "Tap to reveal"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                        }}
                    >
                        {flipped ? "Tap to flip back" : "Tap to reveal"}
                    </motion.span>
                </div>
            </Card>
        </motion.div>
    );
};

export default Flashcard;
