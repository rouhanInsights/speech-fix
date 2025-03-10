"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import LoginModal from "../components/Loginmodal/LoginModal";

import SectionOne from '../components/HomeSection/SectionOne/SectionOne';
import SectionTwo from '../components/HomeSection/SectionTwo/SectionTwo';

export default function HomePage() {

  const searchParams = useSearchParams();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Check if the URL contains "?login=true" to auto-open the modal
    if (searchParams.get("login") === "true") {
      setIsLoginOpen(true);
    }
  }, [searchParams]);

  return (
    <>
    <div>
      <h1>Welcome to SpeechFix</h1>
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
    <SectionOne/>
    <SectionTwo/>
    </>
  );
}
