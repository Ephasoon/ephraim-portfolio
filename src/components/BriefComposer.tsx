import { useId, useState, type FormEvent } from 'react'
import { socials } from '../data/site'
import { Icon } from './Icon'

const projectTypes = [
  'Web application',
  'Business management system',
  'CRM or sales tool',
  'AI-enabled tool',
  'Startup MVP',
  'Something else',
]

interface FormValues {
  name: string
  type: string
  message: string
}

type FieldName = keyof FormValues
type Errors = Partial<Record<FieldName, string>>

const emptyValues: FormValues = { name: '', type: '', message: '' }

function validate(values: FormValues): Errors {
  const errors: Errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name.'
  }
  if (!values.type) {
    errors.type = 'Choose the closest project type.'
  }

  const messageLength = values.message.trim().length
  if (messageLength < 20) {
    errors.message = 'Describe the project in at least 20 characters.'
  } else if (messageLength > 1200) {
    errors.message = 'Keep the message under 1,200 characters.'
  }

  return errors
}

function buildBrief(values: FormValues): string {
  return [
    `Project brief — ${values.type}`,
    '',
    `Name: ${values.name.trim()}`,
    '',
    values.message.trim(),
    '',
    '---',
    'Prepared via ephraim.withunion.net',
  ].join('\n')
}

export function BriefComposer() {
  const baseId = useId().replace(/:/g, '')
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<Errors>({})
  const [brief, setBrief] = useState('')
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')
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
      document.getElementById(fieldId(firstError))?.focus()
      return
    }

    const text = buildBrief(values)
    setBrief(text)
    setSubmitted(true)
    await copyBrief(text)
  }

  return (
    <div className="composer card">
      <div className="composer__head">
        <span className="eyebrow">Project brief</span>
        <h3 className="composer__title">Compose a message</h3>
        <p className="composer__intro">
          Write a short brief here and copy it into LinkedIn or Upwork. Nothing is submitted from
          this page.
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
            <label htmlFor={fieldId('message')}>What are you building?</label>
            <span className="field__count">{values.message.length}/1200</span>
          </div>
          <textarea
            id={fieldId('message')}
            className="input composer__textarea"
            name="message"
            rows={5}
            maxLength={1200}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? errorId('message') : undefined}
            placeholder="The problem, the users, and what a first version should achieve."
          />
          {errors.message ? (
            <p className="field__error" id={errorId('message')}>
              {errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" className="btn btn--primary composer__submit">
          Prepare project brief
          <Icon name="copy" size={16} />
        </button>
      </form>

      {submitted ? (
        <div className="composer__result">
          <p className="composer__status" role="status" aria-live="polite">
            {copyState === 'copied'
              ? 'Brief copied to your clipboard. Open LinkedIn or Upwork and paste it into a message.'
              : 'Clipboard access was blocked. Select the brief below and copy it manually.'}
          </p>
          <textarea
            className="input composer__output"
            value={brief}
            readOnly
            rows={7}
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
