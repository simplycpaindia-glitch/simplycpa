"use client";

import { useState } from "react";
import Link from "next/link";
import { INDIA_BOARDS } from "@/lib/india-boards";
import { formatIsoDate } from "@/lib/utils";

type Education = "ug3" | "ug3pg" | "ug4" | "ug3ca" | "ug3pgca";
type Region = "india" | "us" | "other";
type Goal = "exam" | "licence";
type Background = "commerce" | "some" | "little";

const EDUCATION: { id: Education; label: string; years: number; ca: boolean }[] = [
  { id: "ug3", label: "Three-year bachelor's (B.Com, BBA, BA, B.Sc)", years: 3, ca: false },
  { id: "ug3pg", label: "Three-year bachelor's + two-year master's (M.Com, MBA)", years: 5, ca: false },
  { id: "ug4", label: "Four-year bachelor's (B.Tech, BE, four-year honours)", years: 4, ca: false },
  { id: "ug3ca", label: "Three-year bachelor's + CA, CMA or CS (no master's)", years: 3, ca: true },
  { id: "ug3pgca", label: "Bachelor's + master's + CA, CMA or CS", years: 5, ca: true },
];

/** Board names to look at first, by profile. Mirrors the table on /indian-candidates. */
function boardsFor(hours: number, ca: boolean): string[] {
  if (hours < 120) return ca ? ["Montana", "Alaska", "Guam"] : ["Alaska", "Guam", "Montana"];
  return ["Colorado", "Washington", "New Hampshire", "Montana"];
}

const select = "w-full rounded-md border border-ink-950/15 bg-paper-50 px-3 py-2.5 text-sm text-ink-950";

export function EligibilityNavigator({ boardsChecked }: { boardsChecked: string }) {
  const [region, setRegion] = useState<Region>("india");
  const [education, setEducation] = useState<Education>("ug3");
  const [background, setBackground] = useState<Background>("commerce");
  const [goal, setGoal] = useState<Goal>("licence");

  const edu = EDUCATION.find((e) => e.id === education)!;
  const hours = edu.years * 30;
  const boards = boardsFor(hours, edu.ca)
    .map((n) => INDIA_BOARDS.find((b) => b.name === n))
    .filter((b): b is (typeof INDIA_BOARDS)[number] => !!b);

  return (
    <div className="grid gap-10 lg:grid-cols-[20rem_minmax(0,1fr)]">
      <form className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
          Where did you study?
          <select className={select} value={region} onChange={(e) => setRegion(e.target.value as Region)}>
            <option value="india">India</option>
            <option value="us">United States</option>
            <option value="other">Another country</option>
          </select>
        </label>
        {region === "india" && (
          <>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
              Your education
              <select className={select} value={education} onChange={(e) => setEducation(e.target.value as Education)}>
                {EDUCATION.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
              How much accounting and business did your degree cover?
              <select className={select} value={background} onChange={(e) => setBackground(e.target.value as Background)}>
                <option value="commerce">Mostly accounting and business (commerce stream)</option>
                <option value="some">Some accounting or business subjects</option>
                <option value="little">Little or none (science, engineering, arts)</option>
              </select>
            </label>
          </>
        )}
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink-950">
          What do you want?
          <select className={select} value={goal} onChange={(e) => setGoal(e.target.value as Goal)}>
            <option value="licence">The full CPA licence</option>
            <option value="exam">To pass the exam first and decide later</option>
          </select>
        </label>
        <p className="rounded-lg bg-paper-100 p-3 text-xs leading-relaxed text-ink-400">
          Nothing you enter leaves your browser. This is guidance, not an eligibility decision. Only a state board, working from a
          formal credential evaluation, can tell you whether you qualify.
        </p>
      </form>

      <div className="flex flex-col gap-6" aria-live="polite">
        {region === "us" && (
          <Panel title="Studied in the United States">
            <p>
              Your transcripts are read directly by the state board, with no foreign credential evaluation. Most boards let you sit
              the exam with a bachelor&apos;s degree and 120 semester hours that include set accounting and business courses, and
              some let you sit shortly before you graduate.
            </p>
            <p>
              For the licence, most boards now offer two routes: 150 hours plus one year of experience, or a bachelor&apos;s degree
              (120 hours) plus two years. Check which routes your state has, and from when, in our tracker.
            </p>
            <Links links={[["120 vs 150 by state", "/cpa-licensure-pathways"], ["How the exam works", "/start-here"]]} />
          </Panel>
        )}

        {region === "other" && (
          <Panel title="Studied outside India and the United States">
            <p>
              The route is the same as for Indian candidates: a state board decides your eligibility from a credential evaluation
              that converts your education into US semester hours. Each board names the evaluators it accepts; NASBA&apos;s own
              service, NIES, is widely accepted.
            </p>
            <p>
              As a rough guide, evaluators often count about 30 US semester hours for each year of full-time university study, so a
              three-year degree is usually short of 120 and a four-year degree is usually close to it. Your evaluation may differ.
            </p>
            <p>If you plan to sit outside the US, also check that your country is an international testing location and that your board takes part.</p>
            <Links links={[["Step-by-step roadmap", "/roadmap"], ["120 vs 150 by state", "/cpa-licensure-pathways"]]} />
          </Panel>
        )}

        {region === "india" && (
          <>
            <Panel title="Where you probably stand">
              <div className="grid gap-4 sm:grid-cols-3">
                <Stat label="Likely evaluation" value={`About ${hours} hours`} note="US semester hours, before any professional qualification" />
                <Stat label="Against 120 hours" value={hours >= 120 ? "Likely meets" : `About ${120 - hours} short`} good={hours >= 120} note="Needed to sit the exam at most boards" />
                <Stat label="Against 150 hours" value={hours >= 150 ? "Likely meets" : `About ${150 - hours} short`} good={hours >= 150} note="The traditional licensure route" />
              </div>
              <p className="text-sm text-ink-400">
                Rule of thumb only: evaluators often count about 30 US semester hours for each year of full-time university study.
                Your own evaluation can come out higher or lower.
              </p>
            </Panel>

            <Panel title="What that means for you">
              {hours < 120 && (
                <p>
                  A three-year degree on its own is usually short of the 120 hours that most boards require to sit the exam. You have
                  two routes: apply to a board whose rule is written around accounting and business hours rather than total hours, or
                  add credits (an M.Com, an MBA or recognised bridge courses) to reach 120.
                </p>
              )}
              {hours >= 120 && hours < 150 && (
                <p>
                  Around 120 hours is enough to sit the exam at most boards, provided the accounting and business course requirements
                  are met. For the licence, look at boards with the newer route: a bachelor&apos;s degree plus two years of experience.
                </p>
              )}
              {hours >= 150 && (
                <p>
                  Around 150 hours usually meets the total-hours requirement for both the exam and the traditional licensure route at
                  most boards. Your choice of board then turns on course requirements, the credit window and the experience rules.
                </p>
              )}
              {edu.ca && (
                <p>
                  <strong>About your CA, CMA or CS:</strong> most boards do not count professional qualifications as academic credit.
                  Montana says professional training may be acceptable alongside a completed academic pathway. Don&apos;t assume the
                  qualification adds hours until an evaluator confirms it.
                </p>
              )}
              {background !== "commerce" && (
                <p>
                  <strong>About your subjects:</strong> boards set minimum accounting hours (often 24 to 30) and business hours as well
                  as a total. {background === "little" ? "With little accounting in your degree you will almost certainly need extra accounting courses, whatever your total hours." : "Check your transcript against the board's list; you may need a few extra courses."}
                </p>
              )}
              {goal === "licence" ? (
                <p>
                  <strong>For the licence</strong> you also need experience verified by a licensed CPA (one year on the 150-hour route,
                  two on the 120-hour route at boards that offer it), and many boards require an ethics exam. Ask early how you would
                  get experience verified if you work in India.
                </p>
              ) : (
                <p>
                  <strong>Exam first:</strong> you can pass all four sections before meeting the licensure requirements. Your passed
                  sections can later be transferred to another board for licensing, subject to that board&apos;s rules.
                </p>
              )}
            </Panel>

            <Panel title="Boards to look at first">
              <p className="text-sm text-ink-400">
                Summarised from each board&apos;s page on nasba.org, checked {formatIsoDate(`${boardsChecked}-01`).replace(/^1 /, "")}. Read the board&apos;s own page before you
                apply; rules change.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink-950/15 text-xs uppercase tracking-wider text-ink-400">
                      <th scope="col" className="py-2 pr-4 font-medium">Board</th>
                      <th scope="col" className="py-2 pr-4 font-medium">Education to sit</th>
                      <th scope="col" className="py-2 pr-4 font-medium">Evaluator</th>
                      <th scope="col" className="py-2 font-medium">Credit window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-950/10">
                    {boards.map((b) => (
                      <tr key={b.name} className="align-top">
                        <th scope="row" className="py-3 pr-4 font-medium text-ink-950">{b.name}</th>
                        <td className="py-3 pr-4 text-ink-800">{b.educationToSit}</td>
                        <td className="py-3 pr-4 text-ink-800">{b.evaluator}</td>
                        <td className="py-3 text-ink-800">{b.creditWindow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Links links={[["Compare all boards for Indian candidates", "/indian-candidates#boards"], ["120 vs 150 by state", "/cpa-licensure-pathways"]]} />
            </Panel>

            <Panel title="Your next three steps">
              <ol className="list-decimal pl-5">
                <li>Shortlist two boards from the table and read each board&apos;s own requirements page.</li>
                <li>Order a credential evaluation from an evaluator your first-choice board accepts. This is the only step that gives you a real answer.</li>
                <li>Estimate the full cost before you pay anything, then plan your first section.</li>
              </ol>
              <Links links={[["Fee estimator", "/fees"], ["Step-by-step roadmap", "/roadmap"], ["Study planner", "/study-planner"]]} />
            </Panel>
          </>
        )}
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-ink-950/10 p-5 sm:p-6">
      <h2 className="font-display text-xl font-medium text-ink-950">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 leading-relaxed text-ink-800">{children}</div>
    </section>
  );
}

function Stat({ label, value, note, good }: { label: string; value: string; note: string; good?: boolean }) {
  return (
    <div className="rounded-lg bg-paper-100 p-4">
      <p className="text-xs uppercase tracking-wider text-ink-400">{label}</p>
      <p className={`mt-1 font-display text-xl font-medium ${good === undefined ? "text-ink-950" : good ? "text-signal-green" : "text-signal-red"}`}>{value}</p>
      <p className="mt-1 text-xs text-ink-400">{note}</p>
    </div>
  );
}

function Links({ links }: { links: [string, string][] }) {
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
      {links.map(([label, href]) => (
        <Link key={href} href={href} className="font-medium text-gold-700 underline underline-offset-2">
          {label}
        </Link>
      ))}
    </p>
  );
}
