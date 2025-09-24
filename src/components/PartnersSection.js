import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLactaprodInfo } from '../context/SiteContext';

const PaginatedCard = ({ title, blocks }) => {
  const [page, setPage] = React.useState(0);

  // Content-length-based pagination to ensure equal heights and full coverage
  const charLimit = typeof window !== 'undefined' && window.innerWidth < 768 ? 1400 : 2100;

  const paginateBlocks = React.useMemo(() => {
    const pages = [];
    let current = [];
    let count = 0;

    const pushChunk = (type, text, bullet) => {
      current.push({ type, text, bullet });
      count += (text || '').length + 8;
    };

    const flush = () => {
      if (current.length) {
        pages.push(current);
        current = [];
        count = 0;
      }
    };

    const splitText = (text, maxLen) => {
      const chunks = [];
      let remaining = text;
      while (remaining.length > maxLen) {
        // try to break on sentence or word boundary
        let idx = remaining.lastIndexOf('. ', maxLen);
        if (idx === -1) idx = remaining.lastIndexOf('; ', maxLen);
        if (idx === -1) idx = remaining.lastIndexOf(', ', maxLen);
        if (idx === -1) idx = remaining.lastIndexOf(' ', maxLen);
        if (idx === -1) idx = maxLen;
        chunks.push(remaining.slice(0, idx + 1).trim());
        remaining = remaining.slice(idx + 1).trim();
      }
      if (remaining) chunks.push(remaining);
      return chunks;
    };

    blocks.forEach(block => {
      const bullet = block.bullet;
      const texts = splitText(block.text, Math.max(300, Math.floor(charLimit * 0.6))); // split very long paragraphs
      texts.forEach((t, i) => {
        const estimated = t.length + 8;
        if (count + estimated > charLimit && current.length) {
          flush();
        }
        pushChunk(block.type, t, bullet);
      });
    });
    flush();
    return pages.length ? pages : [blocks];
  }, [blocks]);

  const totalPages = paginateBlocks.length;
  const currentPageBlocks = paginateBlocks[Math.min(page, totalPages - 1)] || [];
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 relative flex flex-col max-w-xl w-full mx-auto self-start">
      <h2 className="text-2xl font-semibold mb-4 text-primary">{title}</h2>

      <div className="min-h-[620px] max-h-[620px] overflow-hidden">
        {currentPageBlocks.map((block, idx) => (
          block.type === 'li' ? (
            <div key={idx} className="flex items-start text-gray-700 dark:text-gray-300 mb-3">
              <span className="text-primary mr-2">{block.bullet || '•'}</span>
              <span className="leading-relaxed text-left">{block.text}</span>
            </div>
          ) : (
            <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed text-left mb-4">{block.text}</p>
          )
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => setPage(p => Math.max(0, p - 1))}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-md border transition-colors ${canPrev ? 'text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-gray-400 border-gray-200 dark:border-gray-800 cursor-not-allowed'}`}
          >
            <span>←</span>
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400 select-none">{page + 1}/{totalPages}</span>
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            className={`inline-flex items-center justify-center w-9 h-9 rounded-md border transition-colors ${canNext ? 'text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-gray-400 border-gray-200 dark:border-gray-800 cursor-not-allowed'}`}
          >
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
};

const PartnersSection = () => {
  const { t } = useTranslation();
  const lactaprodInfo = useLactaprodInfo();

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">
            {t('partners.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            {t('partners.description')}
          </p>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {/* Card 1: Lider de parteneriat */}
            <PaginatedCard
              title={t('partners.lider.title')}
              blocks={(t('partners.lider.paragraphs', { returnObjects: true }) || []).map(text => ({ type: 'p', text }))}
            />

            {/* Card 2: Partener 1 */}
            <PaginatedCard
              title={t('partners.partener1.title')}
              blocks={[
                { type: 'p', text: t('partners.partener1.intro') },
                ...((t('partners.partener1.projects', { returnObjects: true }) || []).map(text => ({ type: 'li', text, bullet: '•' }))),
                ...((t('partners.partener1.involvement', { returnObjects: true }) || []).map(text => ({ type: 'p', text }))),
                { type: 'p', text: t('partners.partener1.processing') }
              ]}
            />

            {/* Card 3: Partener 2 */}
            <PaginatedCard
              title={t('partners.partener2.title')}
              blocks={[
                ...((t('partners.partener2.intro', { returnObjects: true }) || []).map(text => ({ type: 'p', text }))),
                ...((t('partners.partener2.projects', { returnObjects: true }) || []).map(text => ({ type: 'li', text, bullet: '•' }))),
                ...((t('partners.partener2.involvement', { returnObjects: true }) || []).map(text => ({ type: 'p', text }))),
                { type: 'p', text: t('partners.partener2.innovationTitle') },
                ...((t('partners.partener2.innovationItems', { returnObjects: true }) || []).map(text => ({ type: 'li', text, bullet: '-' })))
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
