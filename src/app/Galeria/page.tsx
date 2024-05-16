import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";

export const revalidate = 30;

export default function Leis() {
  return (
    <>
      <Le></Le>
    </>
  );
}
