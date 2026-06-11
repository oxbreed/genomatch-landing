'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'

export default function RelumeFaq({
  items,
}: {
  items: { q: string; a: string }[]
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`}>
          <AccordionTrigger className="font-heading text-left text-md font-normal text-text-primary md:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent>
            <p className="max-w-[58ch] font-body text-sm leading-relaxed text-text-secondary md:text-base">
              {item.a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
