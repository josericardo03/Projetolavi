import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import { Video } from "@/app/lib/interface";

async function getData() {
  const query = `*[_type == 'video'] {
    id,
    ano,
    fotos[] {
      imagem,
      descricao,
      data
    }
  }`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export default async function Foto() {
  const data: Video[] = await getData();

  return (
    <div className="md:p-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((video) => (
          <div key={video.id}>
            {video.fotos.map((foto, index) => (
              <div key={index} className="mb-5 relative overflow-hidden">
                <div className="group cursor-pointer relative">
                  <Image
                    src={urlFor(foto.imagem).url()}
                    alt={foto.descricao}
                    width={400}
                    height={300}
                    className="transform group-hover:scale-150 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                    <p>{foto.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
