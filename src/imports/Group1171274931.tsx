import svgPaths from "./svg-k8552v1ra5";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";
import { imgRectangle } from "./svg-uhdqn";

function MaskGroup() {
  return (
    <div className="absolute contents left-[247.35px] top-0" data-name="Mask group">
      <div className="absolute h-[126.453px] left-[246.24px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.115px_1.389px] mask-size-[71.147px_124.229px] top-[-1.39px] w-[73.106px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[247.35px] top-0">
      <MaskGroup />
      <div className="absolute left-[253.74px] size-[58.641px] top-[58.09px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.6408 58.6408">
          <path d={svgPaths.p2311a040} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
      <div className="absolute h-[85.321px] left-0 top-[43.63px] w-[226.781px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226.781 85.3209">
          <path d={svgPaths.p7e24e80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}