"use client";
import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { Equipe } from "@/app/lib/interface";
import { useEffect, useState } from "react";

async function getData() {
  const query = `*[_type == 'equipe'] {
      nome,
      foto,
      descricao,
      tipo,
      email
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Team() {
  const data: Equipe[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 max-w-5xl mx-auto px-2">
      {data.map((equipe, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <Image
                src={urlFor(equipe.foto).url()} // Convertendo a imagem
                alt="Foto da Equipe"
                width={500}
                height={500}
                className="object-cover w-full h-[200px] rounded-t-lg"
              />
            </div>
            <div className="col-span-1 p-4">
              <h3 className="text-lg font-bold mb-2">{equipe.nome}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {equipe.descricao}
              </p>
              <p className="mt-2">
                {equipe.tipo === "docente"
                  ? "Docente"
                  : equipe.tipo === "bolsista"
                    ? "Bolsista"
                    : "Colaborador Externo"}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {equipe.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
