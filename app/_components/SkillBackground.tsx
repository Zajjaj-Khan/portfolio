import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mysql",
  "electrondotjs",
  "tailwindcss",
  "bootstrap",
  "django",
  "mongodb",
  "graphql",
  "supabase",
  "react-native",
  "expo",
  "python",
  "cplusplus",
];
export function SkillBackground() {
  return (
    <div className="hidden md:absolute md:flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 opacity-25">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
