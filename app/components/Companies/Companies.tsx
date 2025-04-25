"use client"
import React from "react";

interface QuranText {
    arabic: string;
    translation: string;
    reference: string;
}

const quranTexts: QuranText[] = [
    {
        arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
        translation: "Read in the name of your Lord who created.",
        reference: "Surah Al-Alaq (96:1)"
    },
    {
        arabic: "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
        translation: "He taught man what he did not know.",
        reference: "Surah Al-Alaq (96:5)"
    },
    {
        arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
        translation: "And say: My Lord, increase me in knowledge.",
        reference: "Surah Ta-Ha (20:114)"
    }
];

export default function QuranSection() {
    return (
        <div className='text-center bg-white py-16 px-4'>
            <div className="mx-auto max-w-3xl">
                <h2 className="text-xl font-medium mb-12 text-purple">Quranic Wisdom on Seeking Knowledge</h2>
                
                <div className="overflow-x-hidden group relative py-8">
                    <div className="flex animate-scroll hover:animation-paused">
                        {[...quranTexts, ...quranTexts].map((item, i) => (
                            <div key={i} className="flex-shrink-0 px-8 min-w-[300px]">
                                <div className="text-block">
                                    <p className="text-2xl mb-4 font-bold text-yellow-600 rtl" dir="rtl">{item.arabic}</p>
                                    <p className="text-lg mb-2 text-gray-800">{item.translation}</p>
                                    <p className="text-sm text-gray-500">{item.reference}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-lg text-gray-700">
                        Join us at Daarul-Qirat to embark on a journey of learning the noble Quran and 
                        Arabic language through our specialized courses taught by expert scholars.
                    </p>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                    display: flex;
                }
                
                .hover\:animation-paused:hover {
                    animation-play-state: paused;
                }
                
                @media (max-width: 640px) {
                    .animate-scroll {
                        animation-duration: 30s;
                    }
                }
            `}</style>
        </div>
    );
}