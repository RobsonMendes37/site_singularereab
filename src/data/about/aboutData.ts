/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA SEÇÃO SOBRE NÓS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para trocar vídeo: altere o nome do arquivo em "videoArquivo"
 * 3. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "titulo:", "texto:", etc.
 */

export interface AboutData {
  titulo: string;
  texto: string;
  textoBotao: string;
  linkBotao: string;
  videoArquivo: string; // Nome do arquivo na pasta src/assets/videos/
  galeria: string[]; // Lista de imagens da galeria (pasta espaco)
}

export const aboutData: AboutData = {
  titulo: "Sobre nós",
  texto: "Somos uma clínica de referência em reabilitação de crianças com necessidades específicas e especiais. Nosso maior objetivo é torná-las capazes de desenvolver o máximo do seu potencial, promovendo mais autonomia nas tarefas diárias, gerando uma maior autoestima através de atendimento lúdico, encantamento e muito amo",
  textoBotao: "Conheça Nossa História",
  linkBotao: "/sobre/historia",
  videoArquivo: "about2.mp4",
  galeria: [
    "espaco1.png",
    "espaco2.png",
    "espaco3.png",
    "espaco4.png",
    "espaco5.png",
    "espaco6.png"
  ]
};
// 💡 DICAS:
// - Para trocar vídeo: coloque o novo arquivo em src/assets/videos/ e altere "videoArquivo"
// - Para alterar texto: modifique o conteúdo entre aspas
// - Para trocar link do botão: altere "linkBotao" (ex: "/contato", "/tratamentos")
