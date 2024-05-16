export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

export interface Equipe {
  nome: string;
  foto: any;
  descricao: string;
  tipo: "docente" | "bolsista" | "colaborador_externo";
  email: string;
}

export interface Legislacao {
  title: string;
  content: any;
  linksRelacionados: {
    titulo: string;
    url: string;
  }[];
}
