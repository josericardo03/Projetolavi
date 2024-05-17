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
    <div className=" md:p-10 max-w-5xl mx-auto ">
      <div className="columns-1 gap-5 lg:gap-8 sm:colums-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt:5 lg:[&>img:not(:first-child)]:mt-8">
        {data.map((video, idx) => (
          <div key={video.id}>
            {video.fotos.map((foto, index) => (
              <div key={index} className="mb-5">
                <Image
                  src={urlFor(foto.imagem).url()}
                  alt={foto.descricao}
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
