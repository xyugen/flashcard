"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Flashcard = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);

    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                className="relative w-64 h-40"
                onClick={handleFlip}
                animate={{ rotateY: flipped ? 360 : 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card className="absolute transition-all size-full flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-lg bg-background text-foreground">
                    <div className="flex flex-1 justify-center items-center size-full">
                        <motion.span
                            key={flipped ? answer : question}
                            className="text-2xl text-foreground/90 font-semibold"
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
                    <div className="select-none w-full text-center p-1 bg-muted text-muted-foreground text-sm rounded-b-xl">
                        <motion.span
                            key={flipped ? answer : question}
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
        </div>
    );
};

export default Flashcard;
