/*"use client";

import { motion } from "framer-motion";
import { Edit } from "lucide-react";
import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
  role: string;
  onEditAvatar: () => void;
}

export const ProfileHeader = ({
  name,
  email,
  avatar,
  joinedDate,
  role,
  onEditAvatar,
}: ProfileHeaderProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="relative">
        <Image
          src={avatar}
          alt={name}
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#f4b500]"
        />
        <button
          onClick={onEditAvatar}
          className="absolute bottom-0 right-0 bg-[#f4b500] p-2 rounded-full hover:bg-[#d4a017] transition-colors"
        >
          <Edit size={16} className="text-black" />
        </button>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-gray-600 mb-1">{email}</p>
        <p className="text-gray-500 text-sm">Member since {joinedDate}</p>
        {role === "admin" && (
          <span className="inline-block mt-2 px-3 py-1 bg-[#f4b500] text-black text-xs font-bold rounded-full">
            ADMIN
          </span>
        )}
      </div>
    </div>
  </motion.section>
);*/

"use client";

import { motion } from "framer-motion";
import { Edit } from "lucide-react";
import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  email: string;
  avatar: string;
  joinedDate: string;
  role: string;
  onEditAvatar: () => void;
}

export const ProfileHeader = ({
  name,
  email,
  avatar,
  joinedDate,
  role,
  onEditAvatar,
}: ProfileHeaderProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-12"
  >
    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
      <div className="relative">
        <Image
          src={avatar}
          alt={name}
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#82cee4]"
        />
        <button
          onClick={onEditAvatar}
          className="absolute bottom-0 right-0 bg-[#82cee4] p-2 rounded-full hover:bg-[#62aee4] transition-colors"
        >
          <Edit size={16} className="text-black" />
        </button>
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-gray-600 mb-1">{email}</p>
        <p className="text-gray-500 text-sm">Member since {joinedDate}</p>
        {role === "admin" && (
          <span className="inline-block mt-2 px-3 py-1 bg-[#82cee4] text-black text-xs font-bold rounded-full">
            ADMIN
          </span>
        )}
      </div>
    </div>
  </motion.section>
);