import { treatments } from './treatmentData';

describe('treatmentData', () => {
  describe('treatments array', () => {
    it('should export treatments array', () => {
      expect(Array.isArray(treatments)).toBe(true);
      expect(treatments.length).toBeGreaterThan(0);
    });

    it('should have all required fields for each treatment', () => {
      treatments.forEach(treatment => {
        // Core fields
        expect(treatment).toHaveProperty('id');
        expect(treatment).toHaveProperty('title');
        expect(treatment).toHaveProperty('slug');
        expect(treatment).toHaveProperty('icon');
        expect(treatment).toHaveProperty('color');
        expect(treatment).toHaveProperty('shortDescription');
        expect(treatment).toHaveProperty('fullDescription');
        expect(treatment).toHaveProperty('image');
        
        // Additional fields
        expect(treatment).toHaveProperty('benefits');
        expect(treatment).toHaveProperty('howItWorks');
        expect(treatment).toHaveProperty('steps');
      });
    });

    it('should have valid data types', () => {
      treatments.forEach(treatment => {
        expect(typeof treatment.id).toBe('number');
        expect(typeof treatment.title).toBe('string');
        expect(typeof treatment.slug).toBe('string');
        expect(typeof treatment.icon).toBe('string');
        expect(typeof treatment.color).toBe('string');
        expect(typeof treatment.shortDescription).toBe('string');
        expect(typeof treatment.fullDescription).toBe('string');
        expect(typeof treatment.image).toBe('string');
        
        expect(Array.isArray(treatment.benefits)).toBe(true);
        expect(Array.isArray(treatment.steps)).toBe(true);
        expect(typeof treatment.howItWorks).toBe('string');
      });
    });

    it('should have unique IDs', () => {
      const ids = treatments.map(t => t.id);
      const uniqueIds = new Set(ids);
      
      expect(uniqueIds.size).toBe(treatments.length);
    });

    it('should have unique slugs', () => {
      const slugs = treatments.map(t => t.slug);
      const uniqueSlugs = new Set(slugs);
      
      expect(uniqueSlugs.size).toBe(treatments.length);
    });

    it('should have valid slug format (lowercase, no spaces)', () => {
      treatments.forEach(treatment => {
        expect(treatment.slug).toMatch(/^[a-z0-9-]+$/);
        expect(treatment.slug).not.toContain(' ');
        expect(treatment.slug).not.toContain('_');
      });
    });

    it('should have valid color format (hex color)', () => {
      treatments.forEach(treatment => {
        expect(treatment.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });

    it('should have non-empty arrays', () => {
      treatments.forEach(treatment => {
        expect(treatment.benefits.length).toBeGreaterThan(0);
        expect(treatment.steps.length).toBeGreaterThan(0);
      });
    });

    it('should have meaningful descriptions', () => {
      treatments.forEach(treatment => {
        expect(treatment.shortDescription.length).toBeGreaterThan(20);
        expect(treatment.fullDescription.length).toBeGreaterThan(50);
      });
    });
  });

  describe('specific treatments', () => {
    it('should include Fisioterapia Pediátrica', () => {
      const fisio = treatments.find(t => t.slug === 'fisioterapia-pediatrica');
      
      expect(fisio).toBeDefined();
      expect(fisio?.title).toContain('Fisioterapia');
    });

    it('should include Terapia Ocupacional', () => {
      const to = treatments.find(t => t.slug === 'terapia-ocupacional');
      
      expect(to).toBeDefined();
      expect(to?.title).toContain('Terapia Ocupacional');
    });

    it('should include Fonoaudiologia', () => {
      const fono = treatments.find(t => t.slug === 'fonoaudiologia');
      
      expect(fono).toBeDefined();
      expect(fono?.title).toContain('Fonoaudiologia');
    });

    it('should include Psicologia Infantil', () => {
      const psico = treatments.find(t => t.slug === 'psicologia-infantil');
      
      expect(psico).toBeDefined();
      expect(psico?.title).toContain('Psicologia');
    });
  });

  describe('data consistency', () => {
    it('should have consistent benefit structure', () => {
      treatments.forEach(treatment => {
        treatment.benefits.forEach(benefit => {
          expect(typeof benefit).toBe('string');
          expect(benefit.length).toBeGreaterThan(5);
        });
      });
    });

    it('should have consistent steps structure', () => {
      treatments.forEach(treatment => {
        treatment.steps.forEach(step => {
          expect(typeof step).toBe('string');
          expect(step.length).toBeGreaterThan(5);
        });
      });
    });

    it('should have consistent howItWorks', () => {
      treatments.forEach(treatment => {
        expect(typeof treatment.howItWorks).toBe('string');
        expect(treatment.howItWorks.length).toBeGreaterThan(20);
      });
    });
  });
});

