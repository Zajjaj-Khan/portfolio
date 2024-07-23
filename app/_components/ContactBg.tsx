"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import ContactForm from "@/components/contact-form";

export function ContactBg() {
  return (
    <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <div>
        <ContactForm/>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
