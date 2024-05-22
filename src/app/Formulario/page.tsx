import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import Form from "@/app/Components/Form";

export const revalidate = 30;

export default function Formulario() {
  return (
    <>
      <Form></Form>
    </>
  );
}
