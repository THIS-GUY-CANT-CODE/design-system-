import svgPaths from "./svg-96ticid8sn";

function Group() {
  return (
    <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-[24.003px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0028 24">
        <g id="Group">
          <path d={svgPaths.p2dc66280} fill="var(--fill-0, #2ED3B7)" id="Vector" />
          <path d={svgPaths.pa772a80} fill="var(--fill-0, #1DAF9C)" id="Vector_2" />
          <path d={svgPaths.p2847a000} fill="var(--fill-0, #1DAF9C)" id="Vector_3" />
          <path d={svgPaths.p13257cf0} fill="var(--fill-0, #1DAF9C)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[15.512px] ml-[29.19%] mt-[17.68%] relative row-1 w-[71.121px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.121 15.5118">
        <g id="Logo Text">
          <path d={svgPaths.p24401970} fill="var(--fill-0, #2ED3B7)" id="Vector" />
          <path d={svgPaths.p2680e300} fill="var(--fill-0, #0E9384)" id="Vector_2" />
          <path d={svgPaths.p24d14a00} fill="var(--fill-0, #0E9384)" id="Vector_3" />
          <path d={svgPaths.p1b962a00} fill="var(--fill-0, #0E9384)" id="Vector_4" />
          <path d={svgPaths.p25e0f680} fill="var(--fill-0, #34D1BD)" id="Vector_5" />
          <path d={svgPaths.p28949f00} fill="var(--fill-0, #2ED3B7)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group1 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="Left">
      <Group2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Admin Tools</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Workspaces</p>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center opacity-0 relative shrink-0" data-name="Menu Items">
      <div className="bg-[#f5f7fa] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="_nav-item">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="admin-tools-icon">
          <div className="absolute inset-[15%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0004 14">
              <path d={svgPaths.p22726200} fill="var(--fill-0, #1DAF9C)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text />
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="_nav-item">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="workspaces-2-icon">
          <div className="absolute inset-[15%_10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path d={svgPaths.p33bff600} fill="var(--fill-0, #99A0AE)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text1 />
      </div>
    </div>
  );
}

function MainMenu() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Main Menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[80px] relative w-full">
          <MenuItems />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Docs</p>
      </div>
    </div>
  );
}

function DefaultButtons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Default Buttons">
      <div className="bg-[#cac0ff] relative rounded-[618.131px] shrink-0 size-[24px]" data-name="Avatars">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-0 not-italic right-0 text-[#351a75] text-[11px] text-center top-1/2 tracking-[0.22px] uppercase" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
          <p className="leading-[12px] whitespace-pre-wrap">M</p>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Right">
      <div className="bg-white content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_nav-item">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="documentation-icon">
          <div className="absolute inset-[10%_15%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
              <path d={svgPaths.p21b10200} fill="var(--fill-0, #99A0AE)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text2 />
      </div>
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex h-[4px] items-center justify-center py-[1.5px] relative w-[16px]" data-name="Content Divider [1.0]">
            <div className="bg-[#e1e4ea] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Line" />
          </div>
        </div>
      </div>
      <DefaultButtons />
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-[1728px]" data-name="Header Navigation">
      <div className="content-stretch flex gap-[16px] items-center overflow-clip px-[44px] py-[20px] relative rounded-[inherit] size-full">
        <Left />
        <MainMenu />
        <Right />
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content Divider [1.0]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[12px] tracking-[0.48px] uppercase whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
              ADMIN TOOLS
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="menu-icon">
        <div className="absolute inset-[20%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
            <path d={svgPaths.p79e7000} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconMenuItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="tracking-icon">
        <div className="absolute inset-[10%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <path d={svgPaths.p5851200} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Tracking</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem />
    </div>
  );
}

function IconMenuItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="model-bundle-2-icon">
        <div className="absolute inset-[15%_10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
            <path d={svgPaths.p1d00100} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Registered Models</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem1 />
    </div>
  );
}

function IconMenuItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="model-bundle-3-icon">
        <div className="absolute inset-[10.3%_10%_10.29%_10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15.8812">
            <path d={svgPaths.p3637b500} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Model Bundles</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem2 />
    </div>
  );
}

function IconMenuItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="deployment-icon">
        <div className="absolute inset-[15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p8097600} fill="var(--fill-0, #1DAF9C)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Deployments</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem3 />
    </div>
  );
}

function IconMenuItem4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="jobs-icon">
        <div className="absolute inset-[20%_15%_15%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
            <path d={svgPaths.p1d278500} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Jobs</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem4 />
    </div>
  );
}

function IconMenuItem5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="benchmarking-icon">
        <div className="absolute inset-[12.5%_-0.01%_12.51%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0016 14.9973">
            <path d={svgPaths.p2451f400} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Benchmarks</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem5 />
    </div>
  );
}

function IconMenuItem6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="user-governance-icon">
        <div className="absolute inset-[10%_0.02%_10%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9969 16">
            <path d={svgPaths.p19c8aff0} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Human Feedback</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem6 />
    </div>
  );
}

function IconMenuItem7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="blueprint-icon">
        <div className="absolute inset-[15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p1d493900} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Blueprints</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem7 />
    </div>
  );
}

function IconMenuItem8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dataset-icon">
        <div className="absolute inset-[15%_20%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p7576d00} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Datasets</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem8 />
    </div>
  );
}

function IconMenuItem9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="notebook-icon">
        <div className="absolute inset-[10%_15%_10%_10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
            <path d={svgPaths.p4713c0} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Notebook</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem9 />
    </div>
  );
}

function IconMenuItem10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Icon + Menu Item">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="settings-1-icon">
        <div className="absolute inset-[10%_12.31%_10.02%_12.29%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0805 15.9969">
            <path d={svgPaths.p220c6e80} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Settings</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <IconMenuItem10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Sidebar List Item">
        <Content />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 18">
        <Content1 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 20">
        <Content2 />
      </div>
      <div className="bg-[#f5f7fa] content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 4">
        <Content3 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 5">
        <Content4 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Sidebar List Item">
        <Content5 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 16">
        <Content6 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 21">
        <Content7 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 22">
        <Content8 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 23">
        <Content9 />
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Menu Item 24">
        <Content10 />
      </div>
    </div>
  );
}

function Workspaces() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[240px]" data-name="Workspaces">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function LeftDashboard() {
  return (
    <div className="bg-white h-full relative shrink-0" data-name="Left Dashboard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] h-full items-start pb-[16px] pt-[20px] px-[20px] relative">
          <Workspaces />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ededed] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BreadcrumbsGroup() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-start left-[24px] top-[10px]" data-name="_Breadcrumbs Group">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Breadcrumb Items">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="home-smile-2-line">
          <div className="absolute inset-[12.51%_16.25%_16.25%_16.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 14.248">
              <path d={svgPaths.p291c6200} fill="var(--fill-0, #99A0AE)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] text-center tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
          Deployments
        </p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#cacfd8] text-[14px] text-center tracking-[-0.084px] w-[20px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        /
      </p>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb Items">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] text-center tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
          Start a Deployment
        </p>
      </div>
    </div>
  );
}

function BreadcrumbMenuTracking() {
  return (
    <div className="bg-[#f5f7fa] h-[40px] overflow-clip relative shrink-0 w-full" data-name="Breadcrumb Menu / Tracking">
      <BreadcrumbsGroup />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation">
      <BreadcrumbMenuTracking />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[#0e121b] text-[24px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Deploy Your Model
      </p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Page Title">
      <Frame27 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Configure and launch your model for production use with optimal settings.
      </p>
    </div>
  );
}

function TopPart() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Top Part">
      <PageTitle />
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[16px] pt-[40px] px-[24px] relative w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[920px]" data-name="Page Headings">
            <TopPart />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Model Selection</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Resource Allocation</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e4fbf8] left-1/2 overflow-clip rounded-[11998.801px] size-[19.2px] top-1/2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#1daf61] text-[12px] text-center top-1/2 tracking-[0.48px] uppercase w-[16px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[16px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Deployment Configuration</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f5f7fa] left-1/2 overflow-clip rounded-[11998.801px] size-[19.2px] top-1/2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#99a0ae] text-[12px] text-center top-1/2 tracking-[0.48px] uppercase w-[16px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[16px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#99a0ae] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">{`Review & Deploy`}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[216px]">
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Stepper">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="success-icon">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
              <path d={svgPaths.p3b0d38f0} fill="var(--fill-0, #1FC16B)" id="Vector" />
            </svg>
          </div>
        </div>
        <Frame3 />
      </div>
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Stepper">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="success-icon">
          <div className="absolute inset-[10%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 19.2">
              <path d={svgPaths.p3b0d38f0} fill="var(--fill-0, #1FC16B)" id="Vector" />
            </svg>
          </div>
        </div>
        <Frame4 />
      </div>
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Stepper">
        <Frame2 />
        <Frame5 />
      </div>
      <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Stepper">
        <Frame7 />
        <Frame10 />
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[10px] top-[22px] w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex h-[4px] items-center justify-center py-[1.5px] relative w-[31px]" data-name="Content Divider [1.0]">
            <div className="bg-[#e1e4ea] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Line" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[10px] top-[73px] w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex h-[4px] items-center justify-center py-[1.5px] relative w-[31px]" data-name="Content Divider [1.0]">
            <div className="bg-[#e1e4ea] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Line" />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[10px] top-[124px] w-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex h-[4px] items-center justify-center py-[1.5px] relative w-[31px]" data-name="Content Divider [1.0]">
            <div className="bg-[#e1e4ea] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Line" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#99a0ae] text-[11px] tracking-[0.22px] uppercase w-full" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[12px] whitespace-pre-wrap">Step 3</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0e121b] text-[18px] tracking-[-0.27px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Deployment Configuration
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Configure how your model will be served in production
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-[169px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Model Server Framework</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info-icon">
        <div className="absolute inset-[10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p18050e80} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputLabel() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="_Input Label">
      <Frame />
    </div>
  );
}

function Basic() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Select a server type</p>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down-icon">
              <div className="absolute inset-[37.5%_28.14%_37.5%_28.1%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00098 4">
                  <path d={svgPaths.p36553300} fill="var(--fill-0, #99A0AE)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function InputsDropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[319px]" data-name="Inputs/Dropdown">
      <InputLabel />
      <Basic />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-[54px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Version</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="info-icon">
        <div className="absolute inset-[10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p18050e80} fill="var(--fill-0, #99A0AE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputLabel1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="_Input Label">
      <Frame11 />
    </div>
  );
}

function Basic1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Select a vesrion</p>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down-icon">
              <div className="absolute inset-[37.5%_28.14%_37.5%_28.1%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00098 4">
                  <path d={svgPaths.p36553300} fill="var(--fill-0, #99A0AE)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function InputsDropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[319px]" data-name="Inputs/Dropdown">
      <InputLabel1 />
      <Basic1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">
      <InputsDropdown />
      <InputsDropdown1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Advanced Server Settings
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text">
      <Title1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#525866] text-[12px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Configure advanced settings for selected model server
      </p>
    </div>
  );
}

function RadioLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Radio Label">
      <Text3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <RadioLabel />
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-up-icon">
          <div className="absolute flex inset-[37.5%_28.14%_37.5%_28.1%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[5px] w-[8.751px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00098 4">
                  <path d={svgPaths.p36553300} fill="var(--fill-0, #99A0AE)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525866] text-[14px] text-center tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Quick Settings
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] text-center tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Advanced Editor
      </p>
    </div>
  );
}

function TabMenuMloPsTracking() {
  return (
    <div className="bg-white content-stretch flex gap-[24px] items-start py-[14px] relative shrink-0 w-full" data-name="Tab Menu  / MLOPs / Tracking">
      <div aria-hidden="true" className="absolute border-[#e1e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="sub-nav-item">
        <Text4 />
        <div className="absolute bottom-[-14px] h-0 left-0 right-0" data-name="Line">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Line" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="sub-nav-item">
        <Text5 />
        <div className="absolute bottom-[-14px] h-0 left-0 right-0" data-name="Line">
          <div className="absolute inset-[-2px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 2">
              <line id="Line" stroke="var(--stroke-0, #1DAF9C)" strokeWidth="2" x2="110" y1="1" y2="1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0" data-name="sub-nav-item">
        <div className="absolute bottom-[-14px] h-0 left-0 right-0" data-name="Line">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Line" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-[169px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Model Server Arguments</p>
      </div>
    </div>
  );
}

function InputLabel2() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="_Input Label">
      <Frame13 />
    </div>
  );
}

function Basic2() {
  return (
    <div className="bg-white h-[226px] relative rounded-[8px] shrink-0 w-full" data-name="Basic">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="font-['Inter:Regular',sans-serif] font-normal h-[74px] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#99a0ae] text-[14px] text-ellipsis tracking-[-0.084px] w-[347px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="mb-0">Lorem Ipsum sit dolores:</p>
            <p>
              {`{Value 1} = {Value 2}`}
              <br aria-hidden="true" />
              {`{Value 1} = {Value 2}`}
              <br aria-hidden="true" />
              {`{Value 1} = {Value 2} {Value 1} = {Value 2}`}
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function InputsDropdown2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Inputs/Dropdown">
      <InputLabel2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#525866] text-[12px] w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>{`{Description to be added here}`}</p>
      <Basic2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <InputsDropdown2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[12px] relative w-full">
          <Frame28 />
          <TabMenuMloPsTracking />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Enviroment Variables
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-h-px min-w-px relative" data-name="Text">
      <Title2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#525866] text-[12px] w-[min-content] whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        Configure advanced settings for selected model server
      </p>
    </div>
  );
}

function RadioLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-h-px min-w-px relative" data-name="Radio Label">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text6 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <RadioLabel1 />
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-up-icon">
          <div className="absolute flex inset-[37.5%_28.14%_37.5%_28.1%] items-center justify-center">
            <div className="-scale-y-100 flex-none h-[5px] w-[8.751px]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00098 4">
                  <path d={svgPaths.p36553300} fill="var(--fill-0, #99A0AE)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-[90px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Key</p>
      </div>
    </div>
  );
}

function Basic3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Add Key Value</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e121b] text-[14px] tracking-[-0.084px] w-[90px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Value</p>
      </div>
    </div>
  );
}

function Basic4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Basic">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
            <p className="leading-[20px] whitespace-pre-wrap">Select</p>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down-icon">
              <div className="absolute inset-[37.5%_28.14%_37.5%_28.1%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00098 4">
                  <path d={svgPaths.p36553300} fill="var(--fill-0, #99A0AE)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[558px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[271px]" data-name="Inputs/Dropdown">
        <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="_Input Label">
          <Frame14 />
        </div>
        <Basic3 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[271px]" data-name="Inputs/Dropdown">
        <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="_Input Label">
          <Frame15 />
        </div>
        <Basic4 />
      </div>
    </div>
  );
}

function Basic5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[43px]" data-name="Basic">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[12px] pr-[8px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="delete-permanent-icon">
            <div className="absolute inset-[15%_20%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 11.2">
                <path d={svgPaths.p33575500} fill="var(--fill-0, #99A0AE)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0">
      <Frame31 />
      <Basic5 />
    </div>
  );
}

function Basic6() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[106px]" data-name="Basic">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip pl-[12px] pr-[8px] py-[8px] relative rounded-[inherit] size-full">
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#99a0ae] text-[14px] tracking-[-0.084px]" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Add new</p>
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] shrink-0" data-name="Compact buttons">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="plus-circle">
            <div className="absolute inset-[5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
                <path d={svgPaths.p3265e180} fill="var(--fill-0, #99A0AE)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[12px] relative w-full">
          <Frame30 />
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content Divider [1.0]">
            <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="line">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682 1">
                  <line id="line" stroke="var(--stroke-0, #E1E4EA)" x2="682" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
          <Frame32 />
          <Basic6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525866] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">Back</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cacfd8] text-[14px] tracking-[-0.084px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv09', 'ss11', 'calt' 0, 'liga' 0" }}>
        <p className="leading-[20px]">{`Next: Review & Deploy`}</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Default Buttons">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
          <Text7 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)]" />
      </div>
      <div className="bg-[#f5f7fa] content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Default Buttons">
        <Text8 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame24 />
      <Frame19 />
    </div>
  );
}

function Forms() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative" data-name="Forms">
      <Title />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Content Divider [1.0]">
        <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative" data-name="line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 682 1">
              <line id="line" stroke="var(--stroke-0, #E1E4EA)" x2="682" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-[920px]">
      <Frame6 />
      <Forms />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[730px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[295px] py-[24px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1578px] items-start min-h-px min-w-px relative">
      <Navigation />
      <Content11 />
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[1070px] items-start relative shrink-0 w-full">
      <LeftDashboard />
      <Frame17 />
    </div>
  );
}

export default function Deployments() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Deployments">
      <HeaderNavigation />
      <Frame16 />
    </div>
  );
}