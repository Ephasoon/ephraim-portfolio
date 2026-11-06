import { useId, useState, type FormEvent } from 'react'
import { socials } from '../data/site'
import { Icon } from './Icon'

const projectTypes = [
  'Web application',
  'Business management system',
  'Backend or API',
  'AI integration or automation',
  'CRM or sales tool',
  'Startup MVP',
  'Something else',
]

interface FormValues {
  name: string
  type: string
  building: string
  problem: string
  context: string
}

type FieldName = keyof FormValues
type Errors = Partial<Record<FieldName, string>>
type CopyState = 'idle' | 'copying' | 'copied' | 'manual'

const emptyValues: FormValues = { name: '', type: '', building: '', problem: '', context: '' }

function validate(values: FormValues): Errors {
  const errors: Errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!values.type) {
    errors.type = 'Choose the closest project type.'
  }
  if (values.building.trim().length < 20) {
    errors.building = 'Describe what you want to build in at least 20 characters.'
  }
  if (values.problem.trim().length < 15) {
    errors.problem = 'Describe the problem in at least 15 characters.'
  }

  return errors
}

function buildBrief(values: FormValues): string {
  const lines = [
    `Project brief — ${values.type}`,
    '',
    `Name: ${values.name.trim()}`,
    '',
    'What I want to build:',
    values.building.trim(),
    '',
    'Problem to solve:',
    values.problem.trim(),
  ]

  const context = values.context.trim()
  if (context) {
    lines.push('', 'Additional context:', context)
  }

  lines.push('', '---', 'Prepared via ephraim.withunion.net', 'Not submitted automatically.')

  return lines.join('\n')
}

export function BriefComposer() {
  const baseId = useId().replace(/:/g, '')
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<Errors>({})
  const [brief, setBrief] = useState('')
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const [submitted, setSubmitted] = useState(false)

  const fieldId = (name: FieldName) => `${baseId}-${name}`
  const errorId = (name: FieldName) => `${baseId}-${name}-error`

  const linkedin = socials.find((social) => social.icon === 'linkedin')?.href ?? ''
  const upwork = socials.find((social) => social.icon === 'upwork')?.href ?? ''

  const update = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
    if (submitted) {
      setSubmitted(false)
      setCopyState('idle')
      setBrief('')
    }
  }

  const copyBrief = async (text: string) => {
    setCopyState('copying')
    try {
      await navigator.clipboard.writeText(text)
      setCopyState('copied')
    } catch {
      setCopyState('manual')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstError = (Object.keys(nextErrors) as FieldName[])[0]
    if (firstError) {
      setSubmitted(false)
      setCopyState('idle')
      setBrief('')
      document.getElementById(fieldId(firstError))?.focus()
      return
    }

    const text = buildBrief(values)
    setBrief(text)
    setSubmitted(true)
    await copyBrief(text)
  }

  const statusText =
    copyState === 'copying'
      ? 'Copying the brief to your clipboard…'
      : copyState === 'copied'
        ? 'Brief copied. Paste it into a LinkedIn or Upwork message to start the conversation. Nothing has been sent automatically.'
        : 'Clipboard access was blocked. Select the brief below and copy it manually. Nothing has been sent automatically.'

  return (
    <div className="composer card">
      <div className="composer__head">
        <span className="eyebrow">Project brief</span>
        <h3 className="composer__title">Prepare a project brief</h3>
        <p className="composer__intro">
          Answer a few questions to prepare a short brief. Nothing is sent from this page; copy the
          brief into LinkedIn or Upwork when you are ready.
        </p>
      </div>

      <form className="composer__form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor={fieldId('name')}>Your name</label>
          <input
            id={fieldId('name')}
            className="input"
            type="text"
            name="name"
            autoComplete="name"
            maxLength={80}
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? errorId('name') : undefined}
            placeholder="How should I address you?"
          />
          {errors.name ? (
            <p className="field__error" id={errorId('name')}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor={fieldId('type')}>Project type</label>
          <div className="select-wrap">
            <select
              id={fieldId('type')}
              className="input"
              name="type"
              value={values.type}
              onChange={(event) => update('type', event.target.value)}
              aria-invalid={errors.type ? true : undefined}
              aria-describedby={errors.type ? errorId('type') : undefined}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <Icon name="arrow-up" size={14} className="select-wrap__icon" />
          </div>
          {errors.type ? (
            <p className="field__error" id={errorId('type')}>
              {errors.type}
            </p>
          ) : null}
        </div>

        <div className="field">
          <div className="field__label-row">
            <label htmlFor={fieldId('building')}>What do you want to build?</label>
            <span className="field__count">{values.building.length}/800</span>
          </div>
          <textarea
            id={fieldId('building')}
            className="input composer__textarea"
            name="building"
            rows={4}
            maxLength={800}
            value={values.building}
            onChange={(event) => update('building', event.target.value)}
            aria-invalid={errors.building ? true : undefined}
            aria-describedby={errors.building ? errorId('building') : undefined}
            placeholder="A booking system for a hotel, a client portal, an internal dashboard…"
          />
          {errors.building ? (
            <p className="field__error" id={errorId('building')}>
              {errors.building}
            </p>
          ) : null}
        </div>

        <div className="field">
          <div className="field__label-row">
            <label htmlFor={fieldId('problem')}>What problem should it solve?</label>
            <span className="field__count">{values.problem.length}/600</span>
          </div>
          <textarea
            id={fieldId('problem')}
            className="input composer__textarea"
            name="problem"
            rows={4}
            maxLength={600}
            value={values.problem}
            onChange={(event) => update('problem', event.target.value)}
            aria-invalid={errors.problem ? true : undefined}
            aria-describedby={errors.problem ? errorId('problem') : undefined}
            placeholder="The workflow that is slow, manual, or hard to manage today."
          />
          {errors.problem ? (
            <p className="field__error" id={errorId('problem')}>
              {errors.problem}
            </p>
          ) : null}
        </div>

        <div className="field">
          <div className="field__label-row">
            <label htmlFor={fieldId('context')}>Anything else I should know? (optional)</label>
            <span className="field__count">{values.context.length}/400</span>
          </div>
          <textarea
            id={fieldId('context')}
            className="input composer__textarea"
            name="context"
            rows={3}
            maxLength={400}
            value={values.context}
            onChange={(event) => update('context', event.target.value)}
            placeholder="Timeline, existing tools, links, or constraints."
          />
        </div>

        <button type="submit" className="btn btn--primary composer__submit">
          Prepare project brief
          <Icon name="copy" size={16} />
        </button>
      </form>

      {submitted ? (
        <div className="composer__result">
          <p className="composer__status" role="status" aria-live="polite">
            {statusText}
          </p>
          <textarea
            className="input composer__output"
            value={brief}
            readOnly
            rows={9}
            aria-label="Prepared project brief"
            onFocus={(event) => event.currentTarget.select()}
          />
          <div className="composer__result-actions">
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => copyBrief(brief)}>
              <Icon name="copy" size={15} />
              Copy brief
            </button>
            <a className="btn btn--quiet btn--sm" href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <Icon name="arrow-up-right" size={15} />
            </a>
            <a className="btn btn--quiet btn--sm" href={upwork} target="_blank" rel="noopener noreferrer">
              Upwork
              <Icon name="arrow-up-right" size={15} />
            </a>
          </div>
          <p className="composer__next">
            Paste the brief into a LinkedIn or Upwork message to start the conversation. This page
            does not send anything.
          </p>
        </div>
      ) : null}

      <p className="composer__note">
        <Icon name="lock" size={14} />
        Early ideas are treated as confidential. Prefer a direct message? Reach out on LinkedIn or
        Upwork.
      </p>
    </div>
  )
}
