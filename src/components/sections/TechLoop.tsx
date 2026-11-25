import {
  SiAntdesign,
  SiAppium,
  SiBlender,
  SiFigma,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPostman,
  SiUnity,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import LogoLoop from "@/components/ui/LogoLoop";

const TECH_LOGOS = [
  {
    node: <SiPhp />,
    title: "PHP",
    href: "https://www.php.net",
    hoverColor: "#777bb4",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
    hoverColor: "#4479a1",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    hoverColor: "#f7df1e",
  },
  {
    node: <SiVuedotjs />,
    title: "Vue.js",
    href: "https://vuejs.org",
    hoverColor: "#4fc08d",
  },
  {
    node: <SiAntdesign />,
    title: "Ant Design Vue",
    href: "https://antdv.com",
    hoverColor: "#0170fe",
  },
  {
    node: <SiPostman />,
    title: "Postman",
    href: "https://www.postman.com",
    hoverColor: "#ff6c37",
  },
  {
    node: <SiAppium />,
    title: "Appium",
    href: "https://appium.io",
    hoverColor: "#ee376d",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
    hoverColor: "#f24e1e",
  },
  {
    node: <SiBlender />,
    title: "Blender",
    href: "https://www.blender.org",
    hoverColor: "#e87d0d",
  },
  {
    node: <SiUnity />,
    title: "unity",
    href: "https://www.unity.com",
    hoverColor: "#00c4cc",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org/",
    hoverColor: "#00c4cc",
  },
];

export default function TechLoop() {
  return (
    <div className="relative h-24 overflow-hidden text-muted">
      <LogoLoop
        logos={TECH_LOGOS}
        speed={80}
        direction="left"
        logoHeight={40}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Tools and technologies"
      />
    </div>
  );
}
