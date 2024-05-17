import { client, urlFor } from "@/app/lib/sanity";
import { Orientacao } from "@/app/lib/interface";
import { PortableText } from "@portabletext/react";

async function getData() {
  const query = `*[_type == 'orientacao'] {
    title,
    content,
    'linksRelacionados': linksRelacionados[] {
      titulo,
      url
    }
  }`;

  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export default async function Le() {
  const data: Orientacao[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 mt-5 gap-5 max-w-5xl mx-auto px-2">
      {data.map((ori, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2 p-4">{ori.title}</h3>
          <h4 className="text-sm text-gray-600 dark:text-gray-300 p-4">
            <PortableText value={ori.content} />
          </h4>
          <div className="p-4">
            <h4 className="font-bold mb-2">Links Relacionados:</h4>
            <ul>
              {ori.linksRelacionados.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-blue-500 hover:underline">
                    {link.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
