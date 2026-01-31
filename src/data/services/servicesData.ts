/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DA SEÇÃO SERVIÇOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo serviço: copie um bloco { } e cole no final
 * 3. Para remover serviço: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "titulo:", etc.
 */

export interface Service {
  id: number;
  titulo: string;
  descricao: string;
  icone: string; // Classe do FontAwesome (ex: "fas fa-heart")
  cor: string;   // Cor em hexadecimal (ex: "#FF6B9D")
}

// Carregamento dinâmico via JSON (CMS)
let dynamicServices: any = null;
try {
  dynamicServices = require('./services.json');
} catch (e) {
  console.warn('Erro ao carregar dados de serviços dinâmicos:', e);
}

// Dados estáticos (mantidos como backup/fallback)
const staticServices: Service[] = [
  {
    id: 1,
    titulo: "Especialistas que Acolhem",
    descricao: "Unimos conhecimento técnico de ponta com o carinho que seu filho merece. Aqui, ele é tratado pelo nome e com afeto.",
    icone: "fas fa-smile-beam",
    cor: "#007bff"
  },
  {
    id: 2,
    titulo: "Respeito ao Ritmo",
    descricao: "Não existe \"receita de bolo\". Criamos um plano único para o seu filho, respeitando o tempo e a individualidade dele.",
    icone: "fas fa-heart",
    cor: "#dc3545"
  },
  {
    id: 3,
    titulo: "Conquistas Reais",
    descricao: "Usamos a ciência para gerar autonomia. O objetivo não é apenas a terapia, mas ver seu filho evoluindo no dia a dia.",
    icone: "fas fa-star",
    cor: "#ffc107"
  },
  {
    id: 4,
    titulo: "Aprender Brincando",
    descricao: "Um espaço seguro e divertido. Transformamos exercícios terapêuticos em brincadeira para que a criança ame vir pra cá.",
    icone: "fas fa-shapes",
    cor: "#17a2b8"
  }
];

export const servicesData: Service[] = (dynamicServices && dynamicServices.cards) || staticServices;
export const servicesSectionData = {
  titulo: (dynamicServices && dynamicServices.titulo) || "Nossos Serviços",
  descricao: (dynamicServices && dynamicServices.descricao) || "Oferecemos uma abordagem multidisciplinar completa...",
  imagem: (dynamicServices && dynamicServices.imagem) || "site/hero-img.jpg"
};

// 💡 DICAS:
// - Para adicionar novo serviço: copie um bloco { } e altere as informações
// - Para trocar ícone: use classes do FontAwesome (ex: "fas fa-star", "fas fa-check")
// - Para trocar cor: use código hexadecimal (ex: "#FF0000" para vermelho)
// - Para remover serviço: delete o bloco { } inteiro
