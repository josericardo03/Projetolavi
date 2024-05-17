import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import Foto from "@/app/Components/Foto";

export const revalidate = 30;

export default function Galeria() {
  return (
    <>
      <Foto></Foto>
    </>
  );
}
