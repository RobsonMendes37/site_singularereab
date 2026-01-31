/**
 * Utilitários para carregar dados do CMS (JSON) dinamicamente
 */

/**
 * Carrega todos os arquivos JSON de um contexto do Webpack (require.context)
 * e retorna um array com os dados e o slug (nome do arquivo)
 */
/**
 * Carrega todos os arquivos JSON de um contexto do Webpack (require.context)
 * e retorna um array com os dados e o slug (nome do arquivo)
 */
export const loadCollection = <T>(context: any): T[] => {
    return context.keys().map((key: string) => {
        const data = context(key);
        // Remove './' inicial e '.json' final do nome do arquivo para usar como fallback de slug
        const slug = key.replace(/^\.\//, '').replace(/\.json$/, '');

        return {
            ...data,
            slug: data.slug || slug // Usa o slug do arquivo se não houver no JSON
        } as T;
    });
};
