import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import Le from "../Components/Le";

export const revalidate = 30;

export default function Leis() {
  return (
    <>
      <Le></Le>
    </>
  );
}
