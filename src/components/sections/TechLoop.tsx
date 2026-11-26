import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiAntdesign,
  SiAppium,
  SiBlender,
  SiFigma,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostman,
  SiUnity,
  SiVuedotjs,
} from "react-icons/si";

interface TechLogo {
  Icon: IconType;
  title: string;
  color: string;
}

const LOGOS: readonly TechLogo[] = [
  { Icon: SiPhp, title: "PHP", color: "#777bb4" },
  { Icon: SiMysql, title: "MySQL", color: "#4479a1" },
  { Icon: SiJavascript, title: "JavaScript", color: "#f7df1e" },
  { Icon: SiVuedotjs, title: "Vue.js", color: "#4fc08d" },
  { Icon: SiNextdotjs, title: "Next.js", color: "#ffffff" },
  { Icon: SiAntdesign, title: "Ant Design Vue", color: "#0170fe" },
  { Icon: SiUnity, title: "Unity", color: "#ffffff" },
  { Icon: SiPostman, title: "Postman", color: "#ff6c37" },
  { Icon: SiAppium, title: "Appium", color: "#ee376d" },
  { Icon: SiFigma, title: "Figma", color: "#f24e1e" },
  { Icon: SiBlender, title: "Blender", color: "#e87d0d" },
];

const FADE_MASK =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

export default function TechLoop() {
  // Daftar digandakan agar putarannya tanpa putus
  const row = [...LOGOS, ...LOGOS];

  return (
    <div
      role="region"
      aria-label="Tools and technologies"
      className="marquee-container overflow-hidden py-4"
      style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
    >
      <ul className="marquee-track flex w-max text-4xl text-muted will-change-transform">
        {row.map(({ Icon, title, color }, index) => (
          <li
            key={`${title}-${index}`}
            title={title}
            aria-hidden={index >= LOGOS.length}
            className="shrink-0 pr-14 transition-colors duration-300 hover:text-[var(--hover)]"
            style={{ "--hover": color } as CSSProperties}
          >
            <Icon />
          </li>
        ))}
      </ul>
    </div>
  );
}
