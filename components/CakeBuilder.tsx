'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, MessageCircle, Upload } from 'lucide-react'
import { wa } from '@/lib/data'

type BuilderValues = {
  Shape: string
  Size: string
  Layers: string
  Flavour: string
  Filling: string
  Colour: string
  Finish: string
  Decorations: string[]
  Occasion: string
  message: string
  date: string
  time: string
  location: string
}

const steps: Array<[string, string[]]> = [
  ['Shape', ['Round', 'Heart', 'Square', 'Rectangle', 'Custom']],
  ['Size', ['0.5 KG', '1 KG', '1.5 KG', '2 KG', '3 KG+']],
  ['Layers', ['Single Layer', 'Two Layers', 'Three Layers']],
  ['Flavour', ['Chocolate', 'Vanilla', 'Strawberry', 'Red Velvet', 'Butterscotch', 'Coffee', 'Mango', 'Custom']],
  ['Filling', ['Chocolate Ganache', 'Cream Cheese', 'Strawberry', 'Butterscotch', 'Vanilla Cream']],
  ['Colour', ['Ivory', 'Blush Pink', 'Lavender', 'Sage', 'Butter Yellow', 'Cocoa', 'Black']],
  ['Finish', ['Minimal', 'Vintage', 'Floral', 'Luxury', 'Cute', 'Photo']],
  ['Decorations', ['Fresh Flowers', 'Fresh Fruits', 'Gold Details', 'Candles', 'Ribbons', 'Chocolate Decorations', 'Character Topper', 'Pearl Details']],
  ['Occasion', ['Birthday', 'Anniversary', 'Wedding', 'Baby Shower', 'Graduation', 'Corporate', 'Other']],
]

const colours: Record<string, string> = {
  Ivory: '#eee6da',
  'Blush Pink': '#e8c4c0',
  Lavender: '#cbb8df',
  Sage: '#b8c5ad',
  'Butter Yellow': '#eadb9d',
  Cocoa: '#755244',
  Black: '#25211f',
}

const initialValues: BuilderValues = {
  Shape: 'Round',
  Size: '1 KG',
  Layers: 'Single Layer',
  Flavour: 'Chocolate',
  Filling: 'Chocolate Ganache',
  Colour: 'Ivory',
  Finish: 'Minimal',
  Decorations: [],
  Occasion: 'Birthday',
  message: '',
  date: '',
  time: '',
  location: '',
}

export default function CakeBuilder() {
  const [stepIndex, setStepIndex] = useState(0)
  const [values, setValues] = useState<BuilderValues>(initialValues)

  const currentStep = steps[stepIndex]
  const currentField = currentStep[0] as keyof BuilderValues
  const currentOptions = currentStep[1]
  const isLastStep = stepIndex === steps.length - 1
  const isFirstStep = stepIndex === 0

  const setValue = <K extends keyof BuilderValues>(key: K, value: BuilderValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  const toggleDecoration = (value: string) => {
    setValues((prev) => {
      const nextDecorations = prev.Decorations.includes(value)
        ? prev.Decorations.filter((item) => item !== value)
        : [...prev.Decorations, value]

      return { ...prev, Decorations: nextDecorations }
    })
  }

  const price = useMemo(() => {
    let total = 999
    const selectedSize = values.Size

    if (selectedSize === '0.5 KG') total = 799
    if (selectedSize === '1.5 KG') total = 1499
    if (selectedSize === '2 KG') total = 1999
    if (selectedSize === '3 KG+') total = 2899

    if (values.Layers === 'Two Layers') total += 700
    if (values.Layers === 'Three Layers') total += 1400
    if (values.Finish === 'Luxury') total += 350
    if (values.Finish === 'Photo') total += 250

    total += values.Decorations.length * 100

    return total
  }, [values])

  const messageText = `Hi Custom Cakes! I designed a cake. Shape: ${values.Shape}; Size: ${values.Size}; Layers: ${values.Layers}; Flavour: ${values.Flavour}; Filling: ${values.Filling}; Colour: ${values.Colour}; Finish: ${values.Finish}; Decorations: ${values.Decorations.join(', ') || 'None'}; Occasion: ${values.Occasion}; Message: ${values.message || 'None'}; Date: ${values.date || 'TBD'}; Time: ${values.time || 'TBD'}; Location: ${values.location || 'Bangalore'}. Please confirm final price and availability.`

  const nextStep = () => {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="min-h-screen bg-[#efe7dc] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="eyebrow text-wine/70">The Custom Cake Builder</div>
            <h1 className="serif mt-2 text-5xl md:text-7xl">Create your cake.</h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black/50">
              Choose every detail. Your final design will be reviewed and confirmed by our team before baking.
            </p>
          </div>

          <div className="text-right">
            <div className="eyebrow text-black/35">Estimated Price</div>
            <div className="serif mt-2 text-5xl text-wine">₹{price.toLocaleString('en-IN')}</div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-5 shadow-soft md:p-8">
          <div className="flex gap-1.5 overflow-x-auto pb-5">
            {steps.map(([label], index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStepIndex(index)}
                className={`h-1.5 min-w-10 rounded-full transition ${index <= stepIndex ? 'bg-wine' : 'bg-black/10'}`}
                aria-label={`Go to ${label} step`}
              />
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-[1.75rem] border border-black/5 bg-[#f7f2ee] p-5 md:p-7">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="eyebrow text-black/35">Step {stepIndex + 1}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl">{currentStep[0]}</h2>
                </div>
                <div className="rounded-full bg-white px-3 py-1 text-sm text-black/55">
                  {currentOptions.length} options
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep[0]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {currentOptions.map((option) => {
                    const isSelected = currentField === 'Decorations'
                      ? values.Decorations.includes(option)
                      : (values[currentField] as string) === option

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          if (currentField === 'Decorations') {
                            toggleDecoration(option)
                            return
                          }

                          setValue(currentField, option as BuilderValues[typeof currentField])
                        }}
                        className={`group relative flex min-h-[56px] items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                          isSelected
                            ? 'border-wine bg-wine text-white'
                            : 'border-black/10 bg-white text-black hover:border-wine/50'
                        }`}
                      >
                        {currentField === 'Colour' ? (
                          <span className="flex items-center gap-3">
                            <span
                              className="h-5 w-5 rounded-full border border-black/10"
                              style={{ backgroundColor: colours[option] || '#ddd' }}
                            />
                            {option}
                          </span>
                        ) : (
                          option
                        )}

                        {isSelected && <Check className="h-4 w-4" />}
                      </button>
                    )
                  })}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isFirstStep}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black/70 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isLastStep}
                  className="inline-flex items-center gap-2 rounded-full bg-wine px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <aside className="rounded-[1.75rem] bg-[#f4ece4] p-5 md:p-6">
              <div className="mb-5">
                <div className="eyebrow text-black/35">Cake preview</div>
                <div className="mt-3 rounded-[1.5rem] bg-[#efe7dc] p-4">
                  <div
                    className="mx-auto flex h-48 items-center justify-center rounded-[1.5rem] border border-black/10"
                    style={{ backgroundColor: colours[values.Colour] || '#eee6da' }}
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-[12px] border-white/80 bg-white/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.08)]">
                      <span className="text-lg font-semibold text-black/70">{values.Shape}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-black/70">
                <div className="flex items-center justify-between gap-4"><span>Style</span><span className="font-medium text-black">{values.Finish}</span></div>
                <div className="flex items-center justify-between gap-4"><span>Layers</span><span className="font-medium text-black">{values.Layers}</span></div>
                <div className="flex items-center justify-between gap-4"><span>Flavour</span><span className="font-medium text-black">{values.Flavour}</span></div>
                <div className="flex items-center justify-between gap-4"><span>Occasion</span><span className="font-medium text-black">{values.Occasion}</span></div>
              </div>

              <div className="mt-6 space-y-3">
                <label className="block text-sm font-medium text-black/60">Custom message</label>
                <textarea
                  value={values.message}
                  onChange={(event) => setValue('message', event.target.value)}
                  placeholder="Write a personal message"
                  className="min-h-[90px] w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none ring-0 placeholder:text-black/35"
                />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <label className="block text-sm text-black/60">
                  <span className="mb-2 block">Date</span>
                  <input
                    type="date"
                    value={values.date}
                    onChange={(event) => setValue('date', event.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none"
                  />
                </label>

                <label className="block text-sm text-black/60">
                  <span className="mb-2 block">Time</span>
                  <input
                    type="time"
                    value={values.time}
                    onChange={(event) => setValue('time', event.target.value)}
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none"
                  />
                </label>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-black/60">
                  <span className="mb-2 block">Delivery location</span>
                  <input
                    type="text"
                    value={values.location}
                    onChange={(event) => setValue('location', event.target.value)}
                    placeholder="e.g. Bangalore"
                    className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm text-black outline-none placeholder:text-black/35"
                  />
                </label>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={wa(messageText)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black"
                >
                  <Upload className="h-4 w-4" />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
