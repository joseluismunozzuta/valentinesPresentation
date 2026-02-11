"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import defaultImgUrl from "../public/m11.jpg";

export function ImagesChain() {

    const [photos, setPhotos] = useState<string[]>([]);

    // useEffect(() => {
    //     getItems();
    // }, []);

    useEffect(() => {

        const randomPhotos: string[] = [];
        const usedIndices = new Set<number>();

        while (randomPhotos.length < 5) {
            const randomIndex = Math.floor(Math.random() * 10) + 1;
            if (!usedIndices.has(randomIndex)) {
                usedIndices.add(randomIndex);
                randomPhotos.push(`t${randomIndex}.jpg`);
            }
        }
        setPhotos(randomPhotos);

    }, []);

    const images = [photos[0], photos[1], photos[2], photos[3], photos[4]
    ];
    return (
        <div className="z-100 mx-4 py-6 flex items-center justify-center">
            <div className="flex justify-center items-center w-full">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                        }}
                        whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                        }}
                        className="heartbeat rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image ? image : defaultImgUrl}
                            alt="img"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                            priority
                            unoptimized
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}