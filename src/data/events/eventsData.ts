/**
 * ════════════════════════════════════════════════════════════════════════════
 * 🎯 DADOS DOS EVENTOS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * 📝 COMO EDITAR:
 * 1. Altere os textos entre aspas "assim"
 * 2. Para adicionar novo evento: copie um bloco { } e cole no final
 * 3. Para remover evento: delete o bloco { } inteiro
 * 4. Salve o arquivo (Ctrl+S)
 * 
 * ⚠️ IMPORTANTE: Não altere as chaves como "id:", "titulo:", etc.
 */

export interface Event {
  id: number;
  titulo: string;
  descricao: string;
  data: string; // Formato: "DD MMM" (ex: "15 Dez")
  horario: string; // Formato: "HH:MM - HH:MM" (ex: "14:00 - 16:00")
  local: string;
  imagem: string; // Nome do arquivo na pasta src/assets/images/
  link?: string; // Opcional - link para mais informações
}

export const eventsData: Event[] = [
  {
    id: 1,
    titulo: "Workshop de Desenvolvimento Infantil",
    descricao: "Evento educativo para pais e cuidadores sobre técnicas de estimulação precoce e desenvolvimento infantil.",
    data: "15 Dez",
    horario: "14:00 - 16:00",
    local: "São Paulo",
    imagem: "events/event-1.jpg",
    link: "/eventos/workshop-desenvolvimento"
  },
  {
    id: 2,
    titulo: "Palestra sobre Autismo",
    descricao: "Palestra informativa sobre sinais precoces do autismo e estratégias de intervenção precoce.",
    data: "22 Dez",
    horario: "19:00 - 21:00",
    local: "São Paulo",
    imagem: "events/event-2.jpg",
    link: "/eventos/palestra-autismo"
  },
  {
    id: 3,
    titulo: "Feira de Saúde Infantil",
    descricao: "Evento com stands informativos sobre saúde infantil, desenvolvimento e terapias disponíveis.",
    data: "29 Dez",
    horario: "09:00 - 17:00",
    local: "São Paulo",
    imagem: "events/event-3.jpg",
    link: "/eventos/feira-saude"
  }
];

// 💡 DICAS:
// - Para adicionar novo evento: copie um bloco { } e altere as informações
// - Para trocar imagem: coloque o arquivo em src/assets/images/ e altere o nome
// - Para alterar data: use formato "DD MMM" (ex: "15 Jan", "22 Fev")
// - Para alterar horário: use formato "HH:MM - HH:MM"
// - Para adicionar link: adicione a linha "link: '/caminho'"
// - Para remover evento: delete o bloco { } inteiro
