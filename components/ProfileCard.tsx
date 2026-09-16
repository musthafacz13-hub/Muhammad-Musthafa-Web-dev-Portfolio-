import React from 'react';
import Image from 'next/image';

export function ProfileCard() {
  return (
    <div className="profile-id-card mb-6">
      <div className="relative w-32 h-44 sm:w-36 sm:h-48 overflow-hidden rounded-[8px] bg-white">
        <Image
          id="profile-id-photo"
          src="/images/profile.jpg"
          alt="Profile photo"
          fill
          priority
          sizes="(max-width: 640px) 128px, 144px"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
