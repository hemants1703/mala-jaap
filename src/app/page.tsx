"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  '/images/radha-krishna-1.JPG',
  '/images/radha-krishna-2.JPG',
  '/images/radha-krishna-3.JPG',
  '/images/radha-krishna-4.JPG',
  '/images/radha-krishna-5.JPG',
  '/images/radha-krishna-6.JPG',
  '/images/radha-krishna-7.JPG',
  '/images/radha-krishna-8.JPG',
  '/images/radha-krishna-9.JPG',
  '/images/radha-krishna-10.JPG',
  '/images/radha-krishna-11.JPG',
  '/images/radha-krishna-12.jpeg',
  '/images/radha-krishna-13.jpeg',
  '/images/radha-krishna-14.jpeg',
  '/images/radha-krishna-15.JPG',
  '/images/radha-krishna-16.JPG',
  '/images/radha-krishna-17.JPG',
  '/images/radha-krishna-18.JPG',
  '/images/radha-krishna-19.JPG',
  '/images/radha-krishna-20.JPG',
  '/images/radha-krishna-21.JPG',
  '/images/radha-krishna-22.JPG',
  '/images/radha-krishna-23.JPG',
  '/images/radha-krishna-24.JPG',
  '/images/radha-krishna-25.JPG',
  '/images/radha-krishna-26.JPG',
  '/images/radha-krishna-27.JPG',
];

export default function Home() {
  const [count, setCount] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const beadSound = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  const handleClick = () => {
    let newCount = count + 1;
    let newRounds = rounds;
  
    if (newCount === 108) {
      newRounds += 1;
      newCount = 0;
    }
  
    setCount(newCount);
    setRounds(newRounds);
  
    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }
  
    if (soundEnabled) {
      if (beadSound.current) {
        beadSound.current.currentTime = 0;
        beadSound.current.play();
      }
    }
  };

  const resetCount = () => {
    setCount(0);
    setRounds(0);
    setTimer(0);
    setIsTimerRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (count / 108) * 100;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="h-svh bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] text-[#7c2d12] flex flex-col items-center justify-center p-4">
      <div className="max-w-sm text-center space-y-4 w-full h-full flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-[#9a3412] tracking-wide">Hare Kṛṣṇa</h1>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-full hover:bg-[#fed7aa] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fdba74]">
            <Image
              src={images[currentImageIndex]}
              alt="Radha Krishna"
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-[#fed7aa]">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="relative">
              <svg className="w-32 h-32 -rotate-90">
                <circle
                  className="text-[#fed7aa]"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="64"
                  cy="64"
                />
                <circle
                  className="text-[#ea580c] transition-all duration-300"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="64"
                  cy="64"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-2xl font-bold text-[#9a3412]">
                  {count}
                </div>
                <div className="text-sm text-[#9a3412]">
                  of 108
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <div className="text-2xl font-bold text-[#9a3412]">
                Rounds: {rounds}
              </div>
              <div className="text-xl font-medium text-[#c2410c]">
                {formatTime(timer)}
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center space-x-4 select-none">
            <button
              onClick={resetCount}
              className="px-4 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full transition-colors shadow-md hover:shadow-lg font-medium"
            >
              Reset
            </button>
            <button
              onClick={handleClick}
              className={`w-full h-24 rounded-full bg-gradient-to-br from-[#fb923c] to-[#ea580c] hover:from-[#f97316] hover:to-[#c2410c] transition-all transform active:scale-95 shadow-lg hover:shadow-xl`}
            >
              <span className="text-2xl text-white font-medium select-none">Chant</span>
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-10">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={soundEnabled}
                  onChange={(e) => setSoundEnabled(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-[#f97316]"
                />
                <span>Enable Sound Effects</span>
              </label>
            </div>
            <button
              onClick={() => setShowSettings(false)}
              className="mt-6 w-full px-4 py-2 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <audio ref={beadSound} src="/bead-click.wav" className="hidden" />
    </div>
  );
}
