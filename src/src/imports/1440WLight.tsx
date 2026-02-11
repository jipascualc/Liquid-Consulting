import svgPaths from "./svg-fvhqpjym4x";
import imgLiquidHeroWebm from "../../assets/37924a4e8637f08e9ce2cf094e682ac9bf64f3d0.webp";
import imgRectangle1 from "../../assets/08f531c289052fa27e5ab01769f8c20f9e30f073.webp";
import imgClient1Jpg from "../../assets/29fe148fce8935431e062d6a7905a780364a21ec.webp";
import imgClient2Jpg from "../../assets/ecd85f3e366b711f135575fb5ab290c6928ad877.webp";
import imgClient3Jpg from "../../assets/de8db03f585829b36adf7a464c98b8f56b1199b5.webp";
import imgClient4Jpg from "../../assets/432a495d39838960af3082bfc68ef142a612cfb8.webp";
import imgClient5Jpg from "../../assets/627d7c5be7fc455a01371b26fa24d1119a8e8007.webp";
import imgClient6Jpg from "../../assets/78a4cd2745334d6c80666b74061c2c795ee67d54.webp";
import imgImage1Jpg from "../../assets/1c9ec8aeebb00a6059b4b11353db67f92bae7471.webp";
import imgLinkedinLogoPng from "../../assets/d28eb6f86c94a90ca460280a0a6c487c7998f48d.webp";
import { imgRectangle } from "./svg-3m1pc";

function LiquidHeroWebm() {
  return (
    <div className="-translate-y-1/2 absolute h-[900px] left-[-84.97px] top-1/2 w-[1609.94px]" data-name="liquid_hero.webm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLiquidHeroWebm} />
      </div>
    </div>
  );
}

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

function Link() {
  return (
    <div className="-translate-y-1/2 absolute h-[70px] left-[32px] top-1/2 w-[188.16px]" data-name="Link">
      <Group />
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[40px] left-0 right-[98.71px] top-0" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#ff6c19] text-[16px] top-[19.5px] w-[42.138px]">
        <p className="leading-[24px] whitespace-pre-wrap">About</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[40px] left-[73.81px] right-[16.01px] top-0" data-name="Item → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#ff6c19] text-[16px] top-[19.5px] w-[51.055px]">
        <p className="leading-[24px] whitespace-pre-wrap">Join us</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute bottom-[27px] left-[860.08px] top-[35px] w-[156.52px]" data-name="List">
      <ItemLink />
      <ItemLink1 />
    </div>
  );
}

function ListItemButton() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ff6c19] border border-[#ff6c19] border-solid h-[38px] left-[1016.59px] rounded-[100px] top-[calc(50%+3px)] w-[151.41px]" data-name="List → Item → Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[74.9px] not-italic text-[16px] text-center text-white top-[calc(50%-0.5px)] w-[117.792px]">
        <p className="leading-[24px] whitespace-pre-wrap">Request support</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[102px] left-1/2 top-[calc(50%-383px)] w-[1200px]" data-name="Container">
      <Link />
      <List />
      <ListItemButton />
    </div>
  );
}

function WeMakeItEasierSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[254.769px] left-1/2 top-1/2 w-[450px]" data-name="we_make_it_easier.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 450 254.769">
        <g id="we_make_it_easier.svg">
          <path d={svgPaths.p436ac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WeMakeItEasierSvgFill() {
  return (
    <div className="absolute h-[254.77px] left-0 overflow-clip top-0 w-[450px]" data-name="we_make_it_easier.svg fill">
      <WeMakeItEasierSvg1 />
    </div>
  );
}

function WeMakeItEasierSvg() {
  return (
    <div className="-translate-y-1/2 absolute h-[254.77px] left-[495px] overflow-clip top-[calc(50%+2.99px)] w-[450px]" data-name="we_make_it_easier.svg">
      <WeMakeItEasierSvgFill />
    </div>
  );
}

function ArrowDownSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="arrow_down.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g clipPath="url(#clip0_1_268)" id="arrow_down.svg">
          <path clipRule="evenodd" d={svgPaths.pacd1e80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p9d44900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_268">
            <rect fill="white" height="40" width="40" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ArrowDownSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[40px] top-0" data-name="arrow_down.svg fill">
      <ArrowDownSvg1 />
    </div>
  );
}

function ArrowDownSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[700px] overflow-clip size-[40px] top-[calc(50%+222.38px)]" data-name="arrow_down.svg">
      <ArrowDownSvgFill />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#2a2a2a] h-[900px] left-0 overflow-clip top-0 w-[1440px]" data-name="Background">
      <LiquidHeroWebm />
      <Container />
      <WeMakeItEasierSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[594.59px] not-italic text-[#f8f9fa] text-[16px] top-[591.88px] w-[251.195px]">
        <p className="leading-[24px] whitespace-pre-wrap">Delivering sustainable performance</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[586.58px] not-italic text-[#f8f9fa] text-[16px] top-[615.88px] w-[267.134px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`across all aspects of food & beverage`}</p>
      </div>
      <ArrowDownSvg />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute bottom-[16px] left-[1.33%] right-1/2 top-[16px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col h-[25.52px] justify-center leading-[0] left-[16px] text-[23.2px] top-[28.76px] w-[122.64px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">What we do</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[113px] justify-center leading-[24px] left-[16px] text-[16px] top-[117.02px] w-[546.269px] whitespace-pre-wrap">
        <p className="mb-0">At Liquid, we optimize food industry operations with long-term maintenance,</p>
        <p className="mb-0">rapid troubleshooting, and turnkey solutions. Specializing in aseptic</p>
        <p className="mb-0">knowledge, we minimize downtime and maintain product integrity. Our goal is</p>
        <p className="mb-0">to reduce costs and improve production performance, offering innovative and</p>
        <p>tailored solutions for excellence and profitability.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute bottom-[16px] left-1/2 right-[1.33%] top-[16px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col h-[25.52px] justify-center leading-[0] left-[16px] text-[23.2px] top-[28.76px] w-[114.92px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Why Liquid</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[113px] justify-center leading-[24px] left-[16px] text-[16px] top-[117.02px] w-[551.932px] whitespace-pre-wrap">
        <p className="mb-0">Choosing Liquid means partnering with a responsive team that prioritizes your</p>
        <p className="mb-0">{`needs. Our "make it easier" approach ensures seamless and efficient`}</p>
        <p className="mb-0">processes, delivering top solutions with utmost care and professionalism.</p>
        <p className="mb-0">Elevate your operations effortlessly with Liquid, enhancing your success with</p>
        <p>a smile.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[1747.54px] font-['Arial:Regular',sans-serif] left-1/2 not-italic text-black top-[24px] w-[1200px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Client1Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[176.38px] left-[28px] right-[806.67px] top-[calc(50%-88.5px)]" data-name="client1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient1Jpg} />
      </div>
    </div>
  );
}

function Client2Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[176.08px] left-[417.33px] right-[417.34px] top-[calc(50%-88.51px)]" data-name="client2.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient2Jpg} />
      </div>
    </div>
  );
}

function Client3Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[176.08px] left-[806.66px] right-[28.01px] top-[calc(50%-88.51px)]" data-name="client3.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient3Jpg} />
      </div>
    </div>
  );
}

function Client4Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[177px] left-[28px] right-[806.67px] top-[calc(50%+88.18px)]" data-name="client4.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient4Jpg} />
      </div>
    </div>
  );
}

function Client5Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[176.7px] left-[417.33px] right-[417.34px] top-[calc(50%+88.17px)]" data-name="client5.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient5Jpg} />
      </div>
    </div>
  );
}

function Client6Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[176.7px] left-[806.66px] right-[28.01px] top-[calc(50%+88.17px)]" data-name="client6.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgClient6Jpg} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[24px] left-1/2 top-[24px] w-[1200px]" data-name="Container">
      <Client1Jpg />
      <Client2Jpg />
      <Client3Jpg />
      <Client4Jpg />
      <Client5Jpg />
      <Client6Jpg />
    </div>
  );
}

function Background1() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[433.38px] left-1/2 top-[249.52px] w-[1440px]" data-name="Background">
      <Container2 />
    </div>
  );
}

function Component1SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="1-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_258)" id="1-square-fill.svg">
          <path d={svgPaths.p118aab00} fill="var(--fill-0, #FFC224)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_258">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component1SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="1-square-fill.svg fill">
      <Component1SquareFillSvg1 />
    </div>
  );
}

function Component1SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="1-square-fill.svg">
      <Component1SquareFillSvgFill />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute inset-[16px_66.22%_327.51px_1.33%]" data-name="Container">
      <Component1SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[237.33px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Proactive Field Service</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[137px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[175.02px] w-[342.723px] whitespace-pre-wrap">
        <p className="mb-0">{`Liquid's Proactive Field Service provides`}</p>
        <p className="mb-0">comprehensive technical support and</p>
        <p className="mb-0">maintenance, ensuring peak efficiency for liquid</p>
        <p className="mb-0">food production systems. Our expert technicians</p>
        <p className="mb-0">minimize downtime and maximize productivity</p>
        <p>through tailored, proactive solutions.</p>
      </div>
    </div>
  );
}

function Component2SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="2-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_252)" id="2-square-fill.svg">
          <path d={svgPaths.pa7e1600} fill="var(--fill-0, #FF6C19)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_252">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="2-square-fill.svg fill">
      <Component2SquareFillSvg1 />
    </div>
  );
}

function Component2SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="2-square-fill.svg">
      <Component2SquareFillSvgFill />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute inset-[16px_33.78%_327.51px_33.78%]" data-name="Container">
      <Component2SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[238.65px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Maintenance Contracts</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[185px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[199.02px] w-[353.448px] whitespace-pre-wrap">
        <p className="mb-0">Liquid offers customized long-term maintenance</p>
        <p className="mb-0">contracts to enhance line efficiency, building trust</p>
        <p className="mb-0">and reliability in your production. Our hands-on</p>
        <p className="mb-0">approach lets our expert team tailor preventive</p>
        <p className="mb-0">maintenance to prevent breakdowns and optimize</p>
        <p className="mb-0">costs. With internationally recognized expertise,</p>
        <p className="mb-0">we deliver unmatched service, ensuring smooth</p>
        <p>operations and satisfied customers.</p>
      </div>
    </div>
  );
}

function Component3SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="3-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_255)" id="3-square-fill.svg">
          <path d={svgPaths.p21dbfe10} fill="var(--fill-0, #EC1200)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_255">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component3SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="3-square-fill.svg fill">
      <Component3SquareFillSvg1 />
    </div>
  );
}

function Component3SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="3-square-fill.svg">
      <Component3SquareFillSvgFill />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute inset-[16px_1.33%_327.51px_66.22%]" data-name="Container">
      <Component3SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[230.89px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Reactive Field Service</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[161px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[187.02px] w-[351.677px] whitespace-pre-wrap">
        <p className="mb-0">{`Liquid's Reactive Field Service specializes in`}</p>
        <p className="mb-0">providing comprehensive emergency technical</p>
        <p className="mb-0">support with broad resources for a range of</p>
        <p className="mb-0">troubleshooting. We swiftly address plant</p>
        <p className="mb-0">breakdowns, getting production lines back up and</p>
        <p className="mb-0">running to maximize your profitability and ensure</p>
        <p>minimal disruption.</p>
      </div>
    </div>
  );
}

function Component4SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="4-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_248)" id="4-square-fill.svg">
          <path d={svgPaths.p33ab1600} fill="var(--fill-0, #03CA0B)" id="Vector" />
          <path d={svgPaths.p8b60d80} fill="var(--fill-0, #03CA0B)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_248">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component4SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="4-square-fill.svg fill">
      <Component4SquareFillSvg1 />
    </div>
  );
}

function Component4SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="4-square-fill.svg">
      <Component4SquareFillSvgFill />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute inset-[327.52px_66.22%_15.99px_1.33%]" data-name="Container">
      <Component4SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[247.7px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Aseptic Troubleshooting</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[137px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[175.01px] w-[353.418px] whitespace-pre-wrap">
        <p className="mb-0">At Liquid, we provide rapid response and expert</p>
        <p className="mb-0">solutions for microbiological contamination in food</p>
        <p className="mb-0">production, ensuring minimal downtime. Our</p>
        <p className="mb-0">unique, on-demand expertise helps safeguard</p>
        <p className="mb-0">your reputation and maintain the trust of your</p>
        <p>customers, without the delays and red tape.</p>
      </div>
    </div>
  );
}

function Component5SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="5-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_241)" id="5-square-fill.svg">
          <path d={svgPaths.p2f7a5a00} fill="var(--fill-0, #0254D1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_241">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component5SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="5-square-fill.svg fill">
      <Component5SquareFillSvg1 />
    </div>
  );
}

function Component5SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="5-square-fill.svg">
      <Component5SquareFillSvgFill />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute inset-[327.52px_33.78%_15.99px_33.78%]" data-name="Container">
      <Component5SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[323.68px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Optimizing for a Cleaner Future</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[185px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[199.01px] w-[353.398px] whitespace-pre-wrap">
        <p className="mb-0">At Liquid, our dedicated team makes a tangible</p>
        <p className="mb-0">difference for corporate offices and plants. We</p>
        <p className="mb-0">deliver savings by reducing product losses,</p>
        <p className="mb-0">optimizing energy and water use, minimizing</p>
        <p className="mb-0">compressed air consumption, and cutting down</p>
        <p className="mb-0">the solids and water sent to drains. Our expertise</p>
        <p className="mb-0">results in significant cost reductions and improved</p>
        <p>operational efficiency across your facilities.</p>
      </div>
    </div>
  );
}

function Component6SquareFillSvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[30px] top-1/2" data-name="6-square-fill.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_244)" id="6-square-fill.svg">
          <path d={svgPaths.pf130d80} fill="var(--fill-0, #02B1F2)" id="Vector" />
          <path d={svgPaths.p3c1f3900} fill="var(--fill-0, #02B1F2)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_244">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component6SquareFillSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[30px] top-0" data-name="6-square-fill.svg fill">
      <Component6SquareFillSvg1 />
    </div>
  );
}

function Component6SquareFillSvg() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] overflow-clip size-[30px] top-[calc(50%-124.76px)]" data-name="6-square-fill.svg">
      <Component6SquareFillSvgFill />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute inset-[327.52px_1.33%_15.99px_66.22%]" data-name="Container">
      <Component6SquareFillSvg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[25.52px] justify-center leading-[0] left-[16px] not-italic text-[#f8f9fa] text-[23.019px] top-[74.76px] w-[248.93px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Milk Fat Standardization</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[161px] justify-center leading-[24px] left-[16px] not-italic text-[#f8f9fa] text-[16px] top-[187.01px] w-[334.73px] whitespace-pre-wrap">
        <p className="mb-0">Our MFS is an extremely user-friendly</p>
        <p className="mb-0">standardization unit. It’s intuitive interface,</p>
        <p className="mb-0">significantly reduce operator errors and training</p>
        <p className="mb-0">needs. This system ensures quick and easy</p>
        <p className="mb-0">operation, allowing for efficient and precise</p>
        <p className="mb-0">adjustments, ultimately minimizing cream give-</p>
        <p>away and maximizing profits.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[24px] left-1/2 top-[24px] w-[1200px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0d1c36] h-[703.03px] left-1/2 top-[682.89px] w-[1440px]" data-name="Background">
      <Container3 />
    </div>
  );
}

function Image1Jpg() {
  return (
    <div className="-translate-y-1/2 absolute h-[611.14px] left-0 right-0 top-1/2" data-name="image1.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage1Jpg} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#002429] h-[611.14px] left-1/2 top-[1385.92px] w-[1440px]" data-name="Background">
      <Image1Jpg />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white h-[1997.06px] left-0 right-0 top-[900px]" data-name="Main">
      <Container1 />
      <Background1 />
      <Background2 />
      <Background3 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[17px] left-[16px] top-[19px] w-[233.25px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[8.5px] w-[233.631px]">
        <p className="leading-[24px] whitespace-pre-wrap">contact.us@liquidconsulting.com</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[17px] left-[16px] top-[43px] w-[132.11px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-0 not-italic text-[16px] text-black top-[8.5px] w-[132.412px]">
        <p className="leading-[24px] whitespace-pre-wrap">+1 (407) 721-1750</p>
      </div>
    </div>
  );
}

function LinkedinLogoPng() {
  return (
    <div className="absolute left-[16px] size-[15px] top-[72px]" data-name="linkedin_logo.webp">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLinkedinLogoPng} />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[16px] right-[354px] top-[68px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[19px] not-italic text-[#02b1f2] text-[16px] top-[11.5px] w-[60.886px]">
        <p className="leading-[24px] whitespace-pre-wrap">LinkedIn</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[16px] left-1/2 right-[1.33%] top-[16px]" data-name="Container">
      <Link1 />
      <Link2 />
      <LinkedinLogoPng />
      <Link3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[24px] left-1/2 top-[24px] w-[1200px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[26px] justify-center leading-[0] left-[32px] not-italic text-[23.019px] text-black top-[44px] w-[221.92px]">
        <p className="leading-[25.52px] whitespace-pre-wrap">Liquid Consulting Inc.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[41px] justify-center leading-[24px] left-[32px] not-italic text-[16px] text-black top-[82.5px] w-[149.62px] whitespace-pre-wrap">
        <p className="mb-0">P.O. Box #951959</p>
        <p>Lake Mary, FL 32795</p>
      </div>
      <Container11 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-white h-[204px] left-0 right-0 top-0" data-name="Background">
      <Container10 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute bottom-0 left-0 top-0 w-[225.27px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[8px] not-italic text-[#212529] text-[16px] top-[19.5px] w-[209.633px]">
        <ul className="ml-[-1.5em]">
          <li className="list-disc ms-[24px] whitespace-pre-wrap">
            <span className="leading-[24px]">© 2024 Liquid Consulting Inc.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ItemButton() {
  return (
    <div className="absolute h-[40px] left-[233.27px] top-0 w-[120.03px]" data-name="Item → Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#ff6c19] text-[16px] text-center top-[19.5px] w-[104.391px]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Terms & policy`}</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute h-[40px] left-[152px] right-[152px] top-[64px]" data-name="List">
      <Item />
      <ItemButton />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-white h-[160px] left-0 right-0 top-[204px]" data-name="Background">
      <List1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[364px] left-0 right-0 top-[2897.06px]" data-name="Footer">
      <Background4 />
      <Background5 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[3261.06px] left-0 right-0 top-0" data-name="Body">
      <Background />
      <Main />
      <Footer />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div className="bg-[#2a2a2a] relative size-full" data-name="1440w light">
      <Body />
    </div>
  );
}