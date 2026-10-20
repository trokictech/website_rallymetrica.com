import katex from 'katex'
import 'katex/dist/katex.min.css'

export type Formula = { id: string; label: string; tex: string; note?: string }

/* Typeset at build time: the published page needs only KaTeX's CSS and fonts. */
export function Math({ tex, display = false }: { tex: string; display?: boolean }) {
  const html = katex.renderToString(tex, {
    displayMode: display,
    output: 'htmlAndMathml',
    throwOnError: true,
    strict: 'error',
    trust: false,
    maxExpand: 1000,
    maxSize: 20,
  })
  return display
    ? <div className="math-display" dangerouslySetInnerHTML={{ __html: html }} />
    : <span className="math-inline" dangerouslySetInnerHTML={{ __html: html }} />
}

export function MathText({ text }: { text: string }) {
  return <>{text.split(/(\$[^$]+\$)/g).map((part, index) => part.startsWith('$') && part.endsWith('$')
    ? <Math key={index} tex={part.slice(1, -1)} />
    : part)}</>
}

export function MathFormulas({ formulas }: { formulas: readonly Formula[] }) {
  return <div className="math-formulas rounded-2xl border border-line bg-ground/70 p-5 text-ink sm:p-6">
    {formulas.map(item => <figure key={item.id} className="math-formula">
      <figcaption className="text-xs font-semibold text-muted">{item.label}</figcaption>
      <Math tex={item.tex} display />
      {item.note && <p className="text-xs leading-6 text-muted"><MathText text={item.note} /></p>}
    </figure>)}
  </div>
}
