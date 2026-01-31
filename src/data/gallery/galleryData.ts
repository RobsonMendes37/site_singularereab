
export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export interface GalleryData {
    textoBotao: string;
    linkBotao: string;
    previewImages: GalleryImage[];
    allImages: GalleryImage[];
}

// Carregamento dinâmico via JSON (CMS)
let dynamicGallery: any = null;
try {
    dynamicGallery = require('./gallery.json');
} catch (e) {
    console.warn('Erro ao carregar dados da Galeria dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticGallery: GalleryData = {
    textoBotao: "Ver Galeria Completa",
    linkBotao: "/galeria",
    previewImages: [
        { id: 1, src: "espaco1.png", alt: "Estrutura Clínica Singulare 1" },
        { id: 2, src: "espaco2.png", alt: "Estrutura Clínica Singulare 2" },
        { id: 3, src: "espaco3.png", alt: "Estrutura Clínica Singulare 3" },
        { id: 4, src: "espaco4.png", alt: "Estrutura Clínica Singulare 4" }
    ],
    allImages: [
        { id: 1, src: "espaco1.png", alt: "Estrutura Clínica Singulare 1" },
        { id: 2, src: "espaco2.png", alt: "Estrutura Clínica Singulare 2" },
        { id: 3, src: "espaco3.png", alt: "Estrutura Clínica Singulare 3" },
        { id: 4, src: "espaco4.png", alt: "Estrutura Clínica Singulare 4" },
        { id: 5, src: "espaco5.png", alt: "Estrutura Clínica Singulare 5" },
        { id: 6, src: "espaco6.png", alt: "Estrutura Clínica Singulare 6" }
    ]
};

// Processamento dos dados dinâmicos
const processedGallery: GalleryData | null = dynamicGallery ? {
    textoBotao: dynamicGallery.textoBotao || staticGallery.textoBotao,
    linkBotao: dynamicGallery.linkBotao || staticGallery.linkBotao,
    previewImages: (dynamicGallery.images || []).slice(0, 4).map((img: any, idx: number) => ({
        ...img,
        id: img.id || idx + 1
    })),
    allImages: (dynamicGallery.images || []).map((img: any, idx: number) => ({
        ...img,
        id: img.id || idx + 1
    }))
} : null;

export const galleryData: GalleryData = processedGallery || staticGallery;
