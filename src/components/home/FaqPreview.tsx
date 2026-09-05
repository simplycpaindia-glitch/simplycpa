import { prisma } from "@/lib/prisma";
import { Container, SectionHeading } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export async function FaqPreview() {
  const faqs = await prisma.fAQ.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { order: "asc" },
    take: 6,
  });
  if (faqs.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Common questions" title="Frequently asked questions" />
          <Button href="/faq" variant="outline" size="sm">
            View all FAQs
          </Button>
        </div>
        <div className="mt-8 max-w-3xl">
          <Accordion items={faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))} />
        </div>
      </Container>
    </section>
  );
}
