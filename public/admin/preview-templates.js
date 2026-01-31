/* CMS Preview Templates - Robust Final Version */
console.log('CMS Preview Templates Loading...');

// Detection of 'h' from various possible global locations in Decap/Netlify CMS
const getH = () => {
    if (typeof window.h === 'function') return window.h;
    if (window.React && typeof window.React.createElement === 'function') return window.React.createElement;
    if (window.parent && typeof window.parent.h === 'function') return window.parent.h;
    if (window.parent && window.parent.React && typeof window.parent.React.createElement === 'function') return window.parent.React.createElement;
    return null;
};

const h = getH();

if (!h) {
    console.error('CRITICAL: React h (createElement) NOT FOUND! Previews will be broken.');
}

const BlogPreview = ({ entry, widgetFor, getAsset }) => {
    if (!h) return 'Erro: Sistema de renderização não encontrado.';

    const data = entry.getIn(['data']).toJS();
    const rawImage = data.image;
    const image = rawImage ? getAsset(rawImage) : null;

    return h('div', { className: 'blog-preview' },
        h('div', { className: 'blog-header' },
            data.category && h('span', { className: 'blog-category' }, data.category),
            h('h1', { className: 'blog-title' }, data.title || 'Título do Post'),
            h('div', { className: 'blog-meta' },
                data.date && h('span', {}, new Date(data.date).toLocaleDateString()),
                data.readTime && h('span', {}, ` • ${data.readTime} min de leitura`)
            )
        ),
        image && h('img', { src: image.toString(), className: 'blog-image', alt: data.title }),
        h('div', { className: 'blog-content' }, widgetFor('content')),
        data.author && h('div', { style: { marginTop: '40px', padding: '20px', background: '#f9f9f9', borderRadius: '8px' } },
            h('strong', {}, 'Autor: '), `${data.author.name} - ${data.author.role}`
        )
    );
};

const TeamPreview = ({ entry, getAsset }) => {
    if (!h) return 'Erro: Sistema de renderização não encontrado.';

    const data = entry.getIn(['data']).toJS();
    const rawFoto = data.foto;
    const image = rawFoto ? getAsset(rawFoto) : null;

    return h('div', { className: 'team-preview' },
        image ?
            h('img', { src: image.toString(), className: 'team-image', alt: data.nome }) :
            h('div', { className: 'team-image', style: { background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, 'Sem Foto'),
        h('h2', { className: 'team-name' }, data.nome || 'Nome do Profissional'),
        h('div', { className: 'team-role' }, data.cargo || 'Cargo'),
        h('p', { className: 'team-bio' }, data.descricao || 'Biografia aparecerá aqui...'),
        data.especialidades && h('div', { className: 'specialties' },
            data.especialidades.map((s, i) => h('span', { key: i, className: 'specialty-tag' }, s))
        )
    );
};

const TreatmentPreview = ({ entry, getAsset }) => {
    if (!h) return 'Erro: Sistema de renderização não encontrado.';

    const data = entry.getIn(['data']).toJS();
    const rawImage = data.imagem;
    const image = rawImage ? getAsset(rawImage) : null;

    return h('div', { className: 'treatment-preview' },
        h('div', { className: 'treatment-header', style: { borderBottom: `4px solid ${data.cor || '#12B2C9'}` } },
            h('i', { className: data.icone || 'fas fa-heartbeat', style: { fontSize: '2rem', color: data.cor || '#12B2C9' } }),
            h('h2', { className: 'treatment-title' }, data.titulo || 'Título do Tratamento')
        ),
        h('p', { className: 'treatment-short' }, data.descricaoCurta),
        image && h('img', { src: image.toString(), className: 'treatment-image', alt: data.titulo }),
        h('div', { className: 'treatment-section' },
            h('h3', {}, 'Descrição Completa'),
            h('p', {}, data.descricaoCompleta)
        ),
        data.beneficios && h('div', { className: 'treatment-section' },
            h('h3', {}, 'Benefícios'),
            h('ul', { className: 'treatment-list' },
                data.beneficios.map((b, i) => h('li', { key: i }, b))
            )
        )
    );
};

// Injection of styles directly into the iframe to ensure CSS loads
const injectPreviewStyles = () => {
    const styles = `
    .blog-preview { padding: 20px; max-width: 800px; margin: auto; font-family: sans-serif; }
    .blog-category { background: #12B2C9; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; }
    .blog-title { color: #143557; font-size: 2rem; margin: 10px 0; }
    .blog-image { width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .team-preview { text-align: center; padding: 30px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 500px; margin: auto; }
    .team-image { width: 180px; height: 180px; border-radius: 50%; object-fit: cover; margin-bottom: 15px; border: 3px solid #12B2C9; }
    .team-name { color: #143557; margin-bottom: 5px; }
    .team-role { color: #12B2C9; font-weight: bold; margin-bottom: 15px; }
    .specialty-tag { background: #E8F4F8; color: #143557; padding: 4px 10px; border-radius: 4px; margin: 4px; display: inline-block; font-size: 0.8rem; }
    
    .treatment-preview { padding: 30px; background: white; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); max-width: 800px; margin: auto; }
    .treatment-header { display: flex; align-items: center; gap: 20px; padding-bottom: 15px; margin-bottom: 20px; }
    .treatment-title { margin: 0; color: #143557; }
    .treatment-image { width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin: 20px 0; }
    .treatment-section { margin-top: 25px; border-top: 1px solid #eee; padding-top: 15px; }
    .treatment-list { padding-left: 20px; }
    .treatment-list li { margin-bottom: 8px; color: #555; }
  `;
    if (typeof CMS !== 'undefined') {
        CMS.registerPreviewStyle(styles, { raw: true });
        CMS.registerPreviewStyle('./preview.css');
    }
};

// Registration Logic
if (typeof CMS !== 'undefined') {
    CMS.registerPreviewTemplate('blog', BlogPreview);
    CMS.registerPreviewTemplate('equipe', TeamPreview);
    CMS.registerPreviewTemplate('tratamentos', TreatmentPreview);
    injectPreviewStyles();
    console.log('CMS Preview Templates Registered Successfully');
} else {
    console.error('CMS Global NOT FOUND!');
}
