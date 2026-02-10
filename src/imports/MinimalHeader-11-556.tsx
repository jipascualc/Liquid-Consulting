import svgPaths from "./svg-xzm3t70tl4";
import imgImage from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.png";

function Group() {
  return <div className="absolute left-0 size-0 top-0" data-name="Group" />;
}

function Image() {
  return (
    <div className="h-[44.112px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44.112px] items-start left-[373.5px] overflow-clip top-[18.61px] w-[25.501px]" data-name="MaskGroup">
      <Image />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20.456px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4555 20.4555">
        <path d={svgPaths.p3b750700} fill="var(--fill-0, white)" fillOpacity="0.8" id="Vector" />
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[376.12px] size-[20.456px] top-[39.36px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[29.761px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.1098 29.761">
        <path d={svgPaths.p30979800} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[29.761px] items-start left-[287.6px] top-[34.31px] w-[79.11px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[287.6px] top-[18.61px]">
      <MaskGroup />
      <Container />
      <Container1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[-287.6px] size-0 top-[-20px]" data-name="Group1">
      <Group />
      <Group2 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[40px] relative shrink-0 w-[120px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[21.6px] relative shrink-0 w-[39.55px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff6c19] border-b-[1.6px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[14px] text-center text-white top-[0.6px]">Home</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.225px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20.5px] not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-center top-[0.6px]">About</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[21.6px] relative shrink-0 w-[111.775px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ff6c19] h-[36.8px] relative shrink-0 w-[123.287px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[24px] py-[10px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Get Started</p>
      </div>
    </div>
  );
}

export default function MinimalHeader() {
  return (
    <div className="bg-[rgba(13,28,54,0.95)] content-stretch flex items-center justify-between px-[35px] relative size-full" data-name="MinimalHeader">
      <Button />
      <Navigation />
      <Link />
    </div>
  );
}