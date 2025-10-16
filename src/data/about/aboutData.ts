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
}

export const aboutData: AboutData = {
  titulo: "Sobre nós",
  texto: "Vancleid e Victor enfrentaram uma árdua jornada, testemunhando a triste realidade da falta de estrutura e tratamentos de excelência para crianças neuroatípicas, como o seu amado filho Ezequiel. Foi desse desafio que nasceu o sonho do Centro de Reabilitação infantil Singulare.",
  textoBotao: "Conheça Nossa História",
  linkBotao: "/sobre/historia",
  videoArquivo: "about.mp4"
};

// 💡 DICAS:
// - Para trocar vídeo: coloque o novo arquivo em src/assets/videos/ e altere "videoArquivo"
// - Para alterar texto: modifique o conteúdo entre aspas
// - Para trocar link do botão: altere "linkBotao" (ex: "/contato", "/tratamentos")
