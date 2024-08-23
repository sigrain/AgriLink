import Image from "next/image";
import { initializeFirebaseApp } from "./lib/firebase";
import { getApp } from 'firebase/app'

export default function Home() {
  initializeFirebaseApp();
  console.log(getApp())

  return (
    <main>
    </main>
  );
}
