"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type EstimatorFees = {
  application: number;
  evaluation: number;
  registration: number;
  examSection: number;
  intlCore: number;
  intlDiscipline: number;
};

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const inr = (n: number) =>
  n.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export function FeeEstimator({ fees }: { fees: EstimatorFees }) {
  const [coreAttempts, setCoreAttempts] = useState(3);
  const [disciplineAttempts, setDisciplineAttempts] = useState(1);
  const [inIndia, setInIndia] = useState(true);
  const [rate, setRate] = useState("");

  const attempts = coreAttempts + disciplineAttempts;
  const lines = [
    { label: "Credential evaluation (one-time)", amount: fees.evaluation },
    { label: "Initial application (one-time)", amount: fees.application },
    { label: `Registration × ${attempts}`, amount: fees.registration * attempts },
    { label: `Exam section fee × ${attempts}`, amount: fees.examSection * attempts },
    ...(inIndia
      ? [
          { label: `International admin, Core × ${coreAttempts}`, amount: fees.intlCore * coreAttempts },
          {
            label: `International admin, Discipline × ${disciplineAttempts}`,
            amount: fees.intlDiscipline * disciplineAttempts,
          },
        ]
      : []),
  ];
  const total = lines.reduce((sum, l) => sum + l.amount, 0);
  const rateNum = Number(rate);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <Card className="p-6">
        <h2 className="font-semibold text-ink-950">Your plan</h2>

        <Stepper
          label="Core section attempts"
          hint="3 if you pass FAR, AUD and REG first time. Add one for each retake."
          value={coreAttempts}
          min={3}
          max={12}
          onChange={setCoreAttempts}
        />
        <Stepper
          label="Discipline section attempts"
          hint="1 for BAR, ISC or TCP. Add one for each retake."
          value={disciplineAttempts}
          min={1}
          max={6}
          onChange={setDisciplineAttempts}
        />

        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-ink-950">Where will you test?</legend>
          <div className="mt-2 inline-flex rounded-lg border border-ink-950/10 p-1">
            {[
              { value: true, label: "India" },
              { value: false, label: "United States" },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                aria-pressed={inIndia === opt.value}
                onClick={() => setInIndia(opt.value)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium",
                  inIndia === opt.value ? "bg-ink-950 text-paper-50" : "text-ink-400 hover:text-ink-950"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 block">
          <span className="text-sm font-medium text-ink-950">USD → INR rate (optional)</span>
          <span className="block text-xs text-ink-400">Enter today&apos;s rate to see a rupee figure.</span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 88.50"
            className="mt-2 w-40 rounded-md border border-ink-950/15 bg-paper-50 px-3 py-2 text-sm"
          />
        </label>
      </Card>

      <Card className="p-6">
        <h2 className="font-semibold text-ink-950">Estimated total</h2>
        <p className="mt-2 font-display text-4xl font-medium tabular-nums text-ink-950">{usd(total)}</p>
        {rateNum > 0 && <p className="mt-1 text-lg text-ink-400 tabular-nums">≈ {inr(total * rateNum)}</p>}

        <dl className="mt-6 divide-y divide-ink-950/10 text-sm">
          {lines.map((l) => (
            <div key={l.label} className="flex justify-between gap-4 py-2">
              <dt className="text-ink-400">{l.label}</dt>
              <dd className="font-medium tabular-nums">{usd(l.amount)}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-ink-400 leading-relaxed">
          Excludes review courses, travel, rescheduling fees, the ethics exam, and licensing fees.
          Registration uses the standard per-section figure; your state may charge more or less.
        </p>
      </Card>
    </div>
  );
}

function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  const btn =
    "size-9 rounded-md border border-ink-950/15 text-lg leading-none text-ink-800 hover:bg-ink-950/5 disabled:opacity-30";
  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-ink-950">{label}</p>
      <p className="text-xs text-ink-400">{hint}</p>
      <div className="mt-2 flex items-center gap-3">
        <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`}>
          −
        </button>
        <span className="w-6 text-center font-medium tabular-nums" aria-live="polite">{value}</span>
        <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`}>
          +
        </button>
      </div>
    </div>
  );
}
