import svgPaths from "./svg-gji4u63h3d";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.png";
import { imgRectangle } from "./svg-0amzp";

function MaskGroup() {
  return (
    <div className="absolute contents left-[134.27px] top-0" data-name="Mask group">
      <div className="absolute h-[68.642px] left-[133.66px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.604px_0.754px] mask-size-[38.621px_67.436px] top-[-0.75px] w-[39.684px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-y-1/2 absolute contents left-0 top-1/2">
      <MaskGroup />
      <div className="absolute inset-[45.04%_9.88%_9.48%_73.2%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.8319 31.8319">
          <path d={svgPaths.pe536a00} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[46.315px] left-0 top-[23.69px] w-[123.104px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123.104 46.3147">
          <path d={svgPaths.p3bc61c40} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Link() {
  return (
    <div className="relative size-full" data-name="Link">
      <Group />
    </div>
  );
}