"use client"

import Image from "next/image";
import { getApp } from 'firebase/app'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  router.push('/signin');

  return (
    <main>
    </main>
  );
}
