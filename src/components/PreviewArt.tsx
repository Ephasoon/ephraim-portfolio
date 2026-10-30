interface PreviewArtProps {
  variant: 'gateway' | 'school' | 'crm'
}

function GatewayArt() {
  return (
    <svg viewBox="0 0 1200 750" className="preview-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#07182d" />
          <stop offset="1" stopColor="#040c17" />
        </linearGradient>
        <linearGradient id="gw-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e2847" />
          <stop offset="1" stopColor="#091b31" />
        </linearGradient>
        <radialGradient id="gw-glow">
          <stop offset="0" stopColor="#2f7bf6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#2f7bf6" stopOpacity="0" />
        </radialGradient>
        <pattern id="gw-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="rgba(151,179,214,0.07)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1200" height="750" fill="url(#gw-bg)" />
      <rect width="1200" height="750" fill="url(#gw-grid)" />
      <ellipse cx="600" cy="390" rx="330" ry="250" fill="url(#gw-glow)" />

      <text x="70" y="78" fill="#7f93ad" fontSize="12" letterSpacing="2.6" fontFamily="Inter Variable, sans-serif">
        AI INFRASTRUCTURE
      </text>
      <text
        x="70"
        y="118"
        fill="#eef4fd"
        fontSize="30"
        fontWeight="500"
        letterSpacing="-1"
        fontFamily="Space Grotesk Variable, sans-serif"
      >
        OpenRouter AI Server
      </text>
      <text x="70" y="146" fill="#8a9db6" fontSize="14" fontFamily="Inter Variable, sans-serif">
        One backend access layer between applications and model APIs.
      </text>

      <rect x="966" y="64" width="164" height="36" rx="18" fill="rgba(242,200,121,0.08)" stroke="rgba(242,200,121,0.28)" />
      <circle cx="986" cy="82" r="3.5" fill="#f2c879" />
      <text x="998" y="87" fill="#f2c879" fontSize="11" letterSpacing="1.3" fontFamily="Inter Variable, sans-serif">
        PRIVATE BUILD
      </text>

      <path d="M320 286 C370 286 370 336 420 336" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />
      <path d="M320 374 C370 374 372 376 420 376" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />
      <path d="M320 462 C370 462 372 416 420 416" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />

      {[
        { y: 252, title: 'Web application', sub: 'product interface' },
        { y: 340, title: 'Internal tool', sub: 'operations dashboard' },
        { y: 428, title: 'Automation', sub: 'scheduled workflows' },
      ].map((item) => (
        <g key={item.title}>
          <rect x="70" y={item.y} width="250" height="68" rx="14" fill="#0a1c32" stroke="rgba(151,179,214,0.15)" />
          <rect x="90" y={item.y + 20} width="28" height="28" rx="8" fill="rgba(91,149,248,0.12)" />
          <rect x="98" y={item.y + 28} width="12" height="12" rx="2.5" fill="none" stroke="#5b95f8" strokeWidth="1.4" />
          <text x="132" y={item.y + 32} fill="#dce8f8" fontSize="13" fontWeight="500" fontFamily="Inter Variable, sans-serif">
            {item.title}
          </text>
          <text x="132" y={item.y + 49} fill="#778ba4" fontSize="11" fontFamily="Inter Variable, sans-serif">
            {item.sub}
          </text>
        </g>
      ))}

      <path d="M780 372 C820 372 822 292 862 292" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />
      <path d="M780 380 C820 380 822 382 862 382" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />
      <path d="M780 388 C820 388 822 472 862 472" fill="none" stroke="rgba(91,149,248,0.4)" strokeWidth="1.4" />

      <rect x="420" y="248" width="360" height="304" rx="26" fill="url(#gw-panel)" stroke="rgba(91,149,248,0.5)" />
      <rect x="446" y="276" width="38" height="38" rx="11" fill="rgba(91,149,248,0.16)" />
      <text x="465" y="300" fill="#9dc0ff" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        AI
      </text>
      <text x="498" y="294" fill="#f2f7ff" fontSize="15" fontWeight="600" letterSpacing="1.1" fontFamily="Inter Variable, sans-serif">
        AI GATEWAY
      </text>
      <text x="498" y="314" fill="#8095ad" fontSize="11" fontFamily="Inter Variable, sans-serif">
        Node.js service layer
      </text>
      <circle cx="726" cy="290" r="3.5" fill="#7fe3c0" />
      <text x="736" y="294" fill="#7fe3c0" fontSize="9.5" letterSpacing="1.2" fontFamily="Inter Variable, sans-serif">
        ACTIVE
      </text>

      <line x1="446" y1="336" x2="754" y2="336" stroke="rgba(151,179,214,0.13)" />
      <line x1="446" y1="404" x2="754" y2="404" stroke="rgba(151,179,214,0.13)" />
      <line x1="446" y1="472" x2="754" y2="472" stroke="rgba(151,179,214,0.13)" />

      {[
        { y: 372, title: 'Request handling', sub: 'one request lifecycle' },
        { y: 440, title: 'Model configuration', sub: 'providers kept in one place' },
        { y: 508, title: 'PostgreSQL', sub: 'configuration and persistence' },
      ].map((row) => (
        <g key={row.title}>
          <circle cx="458" cy={row.y - 4} r="3" fill="#5b95f8" />
          <text x="474" y={row.y} fill="#dce8f8" fontSize="12.5" fontFamily="Inter Variable, sans-serif">
            {row.title}
          </text>
          <text x="474" y={row.y + 16} fill="#778ba4" fontSize="10.5" fontFamily="Inter Variable, sans-serif">
            {row.sub}
          </text>
        </g>
      ))}

      <text x="70" y="226" fill="#7f93ad" fontSize="11" letterSpacing="2" fontFamily="Inter Variable, sans-serif">
        APPLICATIONS
      </text>
      <text x="862" y="226" fill="#7f93ad" fontSize="11" letterSpacing="2" fontFamily="Inter Variable, sans-serif">
        MODEL APIS
      </text>

      {[
        { y: 260, label: 'Model endpoint 01' },
        { y: 350, label: 'Model endpoint 02' },
        { y: 440, label: 'Model endpoint 03' },
      ].map((item) => (
        <g key={item.label}>
          <rect x="862" y={item.y} width="250" height="64" rx="14" fill="#0a1c32" stroke="rgba(151,179,214,0.15)" />
          <circle cx="888" cy={item.y + 32} r="10" fill="rgba(127,227,192,0.1)" stroke="rgba(127,227,192,0.4)" />
          <circle cx="888" cy={item.y + 32} r="3" fill="#7fe3c0" />
          <text x="910" y={item.y + 29} fill="#dce8f8" fontSize="12.5" fontFamily="Inter Variable, sans-serif">
            {item.label}
          </text>
          <text x="910" y={item.y + 45} fill="#778ba4" fontSize="10.5" fontFamily="Inter Variable, sans-serif">
            AI model API
          </text>
        </g>
      ))}

      <rect x="70" y="600" width="1042" height="92" rx="18" fill="#091a2e" stroke="rgba(151,179,214,0.15)" />
      <text x="94" y="628" fill="#7f93ad" fontSize="10" letterSpacing="2" fontFamily="Inter Variable, sans-serif">
        REQUEST FLOW
      </text>
      {[
        { x: 94, label: 'Application request' },
        { x: 416, label: 'Gateway handling' },
        { x: 738, label: 'Model response' },
      ].map((step, index) => (
        <g key={step.label}>
          <circle cx={step.x + 6} cy="662" r="4" fill={index === 1 ? '#5b95f8' : '#7fe3c0'} />
          <text x={step.x + 20} y="667" fill="#c3d3e6" fontSize="12" fontFamily="Inter Variable, sans-serif">
            {step.label}
          </text>
          {index < 2 ? (
            <path
              d={`M${step.x + 222} 662h52`}
              fill="none"
              stroke="rgba(151,179,214,0.3)"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />
          ) : null}
        </g>
      ))}
      <rect x="876" y="640" width="100" height="28" rx="14" fill="rgba(91,149,248,0.1)" stroke="rgba(91,149,248,0.25)" />
      <text x="926" y="658" fill="#9dc0ff" fontSize="10" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        NODE.JS
      </text>
      <rect x="986" y="640" width="102" height="28" rx="14" fill="rgba(127,227,192,0.08)" stroke="rgba(127,227,192,0.22)" />
      <text x="1037" y="658" fill="#8ee7c7" fontSize="10" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        POSTGRESQL
      </text>
    </svg>
  )
}

function SchoolArt() {
  return (
    <svg viewBox="0 0 1200 750" className="preview-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#08182c" />
          <stop offset="1" stopColor="#050e19" />
        </linearGradient>
        <pattern id="sc-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0H0V44" fill="none" stroke="rgba(151,179,214,0.055)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1200" height="750" fill="url(#sc-bg)" />
      <rect width="1200" height="750" fill="url(#sc-grid)" />

      <rect x="60" y="54" width="1080" height="640" rx="20" fill="#071627" stroke="rgba(151,179,214,0.18)" />
      <path d="M60 74a20 20 0 0 1 20-20h1040a20 20 0 0 1 20 20v36H60z" fill="#0a1c31" />
      <circle cx="88" cy="82" r="4" fill="#33465e" />
      <circle cx="104" cy="82" r="4" fill="#33465e" />
      <circle cx="120" cy="82" r="4" fill="#33465e" />
      <rect x="470" y="70" width="260" height="24" rx="12" fill="#06111f" stroke="rgba(151,179,214,0.12)" />
      <text x="600" y="86" fill="#6f849c" fontSize="10" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        abugida.school / dashboard
      </text>

      <path d="M280 110v584" stroke="rgba(151,179,214,0.14)" />
      <rect x="60" y="110" width="220" height="584" fill="#081a2e" />

      <rect x="84" y="140" width="34" height="34" rx="10" fill="rgba(91,149,248,0.16)" />
      <path d="M93 149h16v3H97v3h9v3h-9v3h12v3H93z" fill="#8ab4ff" />
      <text x="130" y="157" fill="#eef4fd" fontSize="15" fontWeight="600" fontFamily="Space Grotesk Variable, sans-serif">
        Abugida
      </text>
      <text x="130" y="173" fill="#778ba4" fontSize="9.5" letterSpacing="0.8" fontFamily="Inter Variable, sans-serif">
        SCHOOL MANAGEMENT
      </text>

      {[
        { y: 226, label: 'Dashboard', active: true },
        { y: 270, label: 'Students' },
        { y: 314, label: 'Classes' },
        { y: 358, label: 'Staff' },
        { y: 402, label: 'Reports' },
        { y: 446, label: 'Settings' },
      ].map((item) => (
        <g key={item.label}>
          {item.active ? (
            <rect x="82" y={item.y - 20} width="176" height="38" rx="10" fill="rgba(91,149,248,0.12)" stroke="rgba(91,149,248,0.28)" />
          ) : null}
          <rect x="98" y={item.y - 9} width="12" height="12" rx="3" fill="none" stroke={item.active ? '#7fa9f9' : '#5b708a'} strokeWidth="1.2" />
          <text x="122" y={item.y + 2} fill={item.active ? '#e8f0fc' : '#8a9db6'} fontSize="12" fontFamily="Inter Variable, sans-serif">
            {item.label}
          </text>
        </g>
      ))}

      <rect x="82" y="600" width="176" height="62" rx="12" fill="rgba(242,200,121,0.06)" stroke="rgba(242,200,121,0.22)" />
      <circle cx="100" cy="622" r="3.5" fill="#f2c879" />
      <text x="112" y="626" fill="#f2c879" fontSize="10" fontFamily="Inter Variable, sans-serif">
        IN DEVELOPMENT
      </text>
      <text x="100" y="646" fill="#778ba4" fontSize="9.5" fontFamily="Inter Variable, sans-serif">
        Preview build
      </text>

      <text x="320" y="168" fill="#7f93ad" fontSize="10" letterSpacing="2" fontFamily="Inter Variable, sans-serif">
        DASHBOARD
      </text>
      <text x="320" y="202" fill="#eef4fd" fontSize="26" fontWeight="500" letterSpacing="-0.8" fontFamily="Space Grotesk Variable, sans-serif">
        Term overview
      </text>
      <text x="320" y="224" fill="#8095ad" fontSize="11.5" fontFamily="Inter Variable, sans-serif">
        Academic administration at a glance.
      </text>

      <rect x="1010" y="174" width="106" height="30" rx="15" fill="rgba(242,200,121,0.08)" stroke="rgba(242,200,121,0.26)" />
      <text x="1063" y="193" fill="#f2c879" fontSize="9.5" textAnchor="middle" letterSpacing="1" fontFamily="Inter Variable, sans-serif">
        PREVIEW
      </text>

      {[
        { x: 320, label: 'Students' },
        { x: 496, label: 'Classes' },
        { x: 672, label: 'Staff' },
        { x: 848, label: 'Attendance' },
      ].map((tile, index) => (
        <g key={tile.label}>
          <rect x={tile.x} y="250" width="160" height="92" rx="14" fill="#0a1c32" stroke="rgba(151,179,214,0.14)" />
          <text x={tile.x + 18} y="274" fill="#8095ad" fontSize="10.5" fontFamily="Inter Variable, sans-serif">
            {tile.label}
          </text>
          <rect x={tile.x + 18} y="290" width={index % 2 === 0 ? 58 : 44} height="16" rx="6" fill="rgba(190,212,238,0.16)" />
          <path
            d={`M${tile.x + 18} 326h40l10-8 12 5 16-12`}
            fill="none"
            stroke={index === 3 ? '#f2c879' : '#5b95f8'}
            strokeWidth="1.5"
            opacity="0.75"
          />
        </g>
      ))}

      <rect x="320" y="366" width="510" height="302" rx="16" fill="#0a1c32" stroke="rgba(151,179,214,0.14)" />
      <text x="344" y="396" fill="#e4edfa" fontSize="13" fontWeight="500" fontFamily="Inter Variable, sans-serif">
        Recent student records
      </text>
      <rect x="730" y="380" width="76" height="24" rx="12" fill="rgba(91,149,248,0.1)" stroke="rgba(91,149,248,0.22)" />
      <text x="768" y="396" fill="#9dc0ff" fontSize="9" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        View all
      </text>
      <line x1="344" y1="416" x2="806" y2="416" stroke="rgba(151,179,214,0.12)" />

      {[0, 1, 2, 3, 4].map((row) => {
        const y = 442 + row * 42
        return (
          <g key={row}>
            <circle cx="358" cy={y + 8} r="10" fill={row % 2 === 0 ? 'rgba(91,149,248,0.2)' : 'rgba(127,227,192,0.16)'} />
            <rect x="378" y={y + 2} width={row % 3 === 0 ? 130 : 108} height="9" rx="4.5" fill="rgba(190,212,238,0.2)" />
            <text x="378" y={y + 24} fill="#6f849c" fontSize="8.5" fontFamily="Inter Variable, sans-serif">
              Student record
            </text>
            <text x="570" y={y + 15} fill="#93a7bf" fontSize="9.5" fontFamily="Inter Variable, sans-serif">
              Class {row + 1}
            </text>
            <rect
              x="690"
              y={y + 2}
              width={row % 2 === 0 ? 58 : 70}
              height="20"
              rx="10"
              fill={row % 3 === 0 ? 'rgba(127,227,192,0.1)' : 'rgba(242,200,121,0.09)'}
              stroke={row % 3 === 0 ? 'rgba(127,227,192,0.25)' : 'rgba(242,200,121,0.22)'}
            />
            <text
              x={row % 2 === 0 ? 719 : 725}
              y={y + 16}
              fill={row % 3 === 0 ? '#8ee7c7' : '#f2c879'}
              fontSize="8"
              textAnchor="middle"
              fontFamily="Inter Variable, sans-serif"
            >
              {row % 3 === 0 ? 'ACTIVE' : 'PENDING'}
            </text>
            <line x1="344" y1={y + 32} x2="806" y2={y + 32} stroke="rgba(151,179,214,0.07)" />
          </g>
        )
      })}

      <rect x="848" y="366" width="268" height="302" rx="16" fill="#0a1c32" stroke="rgba(151,179,214,0.14)" />
      <text x="872" y="396" fill="#e4edfa" fontSize="13" fontWeight="500" fontFamily="Inter Variable, sans-serif">
        Term progress
      </text>
      <text x="872" y="414" fill="#778ba4" fontSize="9.5" fontFamily="Inter Variable, sans-serif">
        Reporting period
      </text>

      <line x1="872" y1="522" x2="1092" y2="522" stroke="rgba(151,179,214,0.14)" />
      {[0, 1, 2, 3, 4, 5].map((bar) => {
        const height = 42 + ((bar * 23) % 54)
        return (
          <g key={bar}>
            <rect
              x={880 + bar * 35}
              y={522 - height}
              width="18"
              height={height}
              rx="5"
              fill={bar === 4 ? 'rgba(242,200,121,0.55)' : 'rgba(91,149,248,0.4)'}
            />
            <text x={889 + bar * 35} y="540" fill="#6f849c" fontSize="8" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
              W{bar + 1}
            </text>
          </g>
        )
      })}

      <line x1="872" y1="566" x2="1092" y2="566" stroke="rgba(151,179,214,0.12)" />
      <text x="872" y="590" fill="#778ba4" fontSize="9.5" letterSpacing="1" fontFamily="Inter Variable, sans-serif">
        UPCOMING
      </text>
      <circle cx="880" cy="612" r="3" fill="#f2c879" />
      <text x="892" y="616" fill="#a9b9cd" fontSize="10" fontFamily="Inter Variable, sans-serif">
        Term reports
      </text>
      <circle cx="880" cy="636" r="3" fill="#5b95f8" />
      <text x="892" y="640" fill="#a9b9cd" fontSize="10" fontFamily="Inter Variable, sans-serif">
        Records review
      </text>
    </svg>
  )
}

function CrmArt() {
  return (
    <svg viewBox="0 0 1200 750" className="preview-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="crm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#081a2e" />
          <stop offset="1" stopColor="#050d18" />
        </linearGradient>
        <pattern id="crm-grid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M44 0H0V44" fill="none" stroke="rgba(151,179,214,0.055)" strokeWidth="1" />
        </pattern>
        <linearGradient id="crm-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#2f7bf6" stopOpacity="0.25" />
          <stop offset="1" stopColor="#7fb1ff" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      <rect width="1200" height="750" fill="url(#crm-bg)" />
      <rect width="1200" height="750" fill="url(#crm-grid)" />

      <rect x="60" y="54" width="1080" height="640" rx="20" fill="#071627" stroke="rgba(151,179,214,0.18)" />
      <path d="M60 74a20 20 0 0 1 20-20h1040a20 20 0 0 1 20 20v36H60z" fill="#0a1c31" />
      <circle cx="88" cy="82" r="4" fill="#33465e" />
      <circle cx="104" cy="82" r="4" fill="#33465e" />
      <circle cx="120" cy="82" r="4" fill="#33465e" />
      <rect x="470" y="70" width="260" height="24" rx="12" fill="#06111f" stroke="rgba(151,179,214,0.12)" />
      <text x="600" y="86" fill="#6f849c" fontSize="10" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
        wisionary.app / pipeline
      </text>

      <path d="M260 110v584" stroke="rgba(151,179,214,0.14)" />
      <rect x="60" y="110" width="200" height="584" fill="#081a2e" />

      <rect x="82" y="140" width="34" height="34" rx="10" fill="rgba(91,149,248,0.16)" />
      <path d="M93 150h8l4 4 4-4h8v3.5H93z" fill="#8ab4ff" />
      <path d="M93 158h17v3.5H93z" fill="#8ab4ff" opacity="0.7" />
      <text x="128" y="157" fill="#eef4fd" fontSize="15" fontWeight="600" fontFamily="Space Grotesk Variable, sans-serif">
        Wisionary
      </text>
      <text x="128" y="173" fill="#778ba4" fontSize="9.5" letterSpacing="0.8" fontFamily="Inter Variable, sans-serif">
        SALES CRM
      </text>

      {[
        { y: 226, label: 'Dashboard' },
        { y: 270, label: 'Lead Tracker', active: true },
        { y: 314, label: 'Clients' },
        { y: 358, label: 'Projects' },
        { y: 402, label: 'Commission' },
        { y: 446, label: 'Weekly Reports' },
        { y: 490, label: 'Settings' },
      ].map((item) => (
        <g key={item.label}>
          {item.active ? (
            <rect x="80" y={item.y - 20} width="160" height="38" rx="10" fill="rgba(91,149,248,0.12)" stroke="rgba(91,149,248,0.28)" />
          ) : null}
          <rect x="96" y={item.y - 9} width="12" height="12" rx="3" fill="none" stroke={item.active ? '#7fa9f9' : '#5b708a'} strokeWidth="1.2" />
          <text x="120" y={item.y + 2} fill={item.active ? '#e8f0fc' : '#8a9db6'} fontSize="11.5" fontFamily="Inter Variable, sans-serif">
            {item.label}
          </text>
        </g>
      ))}

      <rect x="80" y="600" width="160" height="62" rx="12" fill="rgba(242,200,121,0.06)" stroke="rgba(242,200,121,0.22)" />
      <circle cx="98" cy="622" r="3.5" fill="#f2c879" />
      <text x="110" y="626" fill="#f2c879" fontSize="9" letterSpacing="0.8" fontFamily="Inter Variable, sans-serif">
        PRIVATE BUILD
      </text>
      <text x="98" y="646" fill="#778ba4" fontSize="9" fontFamily="Inter Variable, sans-serif">
        Internal preview
      </text>

      <text x="294" y="160" fill="#7f93ad" fontSize="10" letterSpacing="2" fontFamily="Inter Variable, sans-serif">
        SALES PIPELINE
      </text>
      <text x="294" y="194" fill="#eef4fd" fontSize="26" fontWeight="500" letterSpacing="-0.8" fontFamily="Space Grotesk Variable, sans-serif">
        Lead tracker
      </text>

      <rect x="928" y="164" width="160" height="34" rx="10" fill="#0a1c32" stroke="rgba(151,179,214,0.16)" />
      <circle cx="950" cy="181" r="4" fill="none" stroke="#778ba4" strokeWidth="1.2" />
      <line x1="953" y1="184" x2="958" y2="189" stroke="#778ba4" strokeWidth="1.2" />
      <text x="968" y="185" fill="#778ba4" fontSize="9.5" fontFamily="Inter Variable, sans-serif">
        Search records
      </text>

      {[
        { x: 294, label: 'NEW', count: 3 },
        { x: 462, label: 'QUALIFIED', count: 2 },
        { x: 630, label: 'PROPOSAL', count: 2 },
        { x: 798, label: 'WON', count: 1 },
      ].map((column) => (
        <g key={column.label}>
          <rect x={column.x} y="228" width="150" height="406" rx="14" fill="rgba(10,28,50,0.7)" stroke="rgba(151,179,214,0.1)" />
          <text x={column.x + 16} y="252" fill="#778ba4" fontSize="9" letterSpacing="1.4" fontFamily="Inter Variable, sans-serif">
            {column.label}
          </text>
          <rect x={column.x + 112} y="240" width="22" height="17" rx="8" fill="rgba(91,149,248,0.12)" />
          <text x={column.x + 123} y="252" fill="#8ab4ff" fontSize="8" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
            {column.count}
          </text>
        </g>
      ))}

      {[
        { x: 306, y: 270, label: 'Lead record', tag: 'New' },
        { x: 306, y: 366, label: 'Lead record', tag: 'New' },
        { x: 306, y: 462, label: 'Lead record', tag: 'New' },
        { x: 474, y: 270, label: 'Client record', tag: 'Follow-up' },
        { x: 474, y: 366, label: 'Client record', tag: 'Follow-up' },
        { x: 642, y: 270, label: 'Project brief', tag: 'Proposal' },
        { x: 642, y: 366, label: 'Project brief', tag: 'Proposal' },
        { x: 810, y: 270, label: 'Client record', tag: 'Won' },
      ].map((card, index) => (
        <g key={`${card.x}-${card.y}-${index}`}>
          <rect x={card.x} y={card.y} width="126" height="78" rx="10" fill="#0c2038" stroke="rgba(151,179,214,0.14)" />
          <circle cx={card.x + 18} cy={card.y + 20} r="7" fill={card.tag === 'Won' ? 'rgba(127,227,192,0.2)' : 'rgba(91,149,248,0.18)'} />
          <text x={card.x + 32} y={card.y + 24} fill="#c3d3e6" fontSize="9.5" fontFamily="Inter Variable, sans-serif">
            {card.label}
          </text>
          <rect x={card.x + 12} y={card.y + 36} width="84" height="6" rx="3" fill="rgba(190,212,238,0.14)" />
          <rect x={card.x + 12} y={card.y + 48} width="52" height="6" rx="3" fill="rgba(190,212,238,0.08)" />
          <rect
            x={card.x + 12}
            y={card.y + 60}
            width="52"
            height="9"
            rx="4.5"
            fill={card.tag === 'Won' ? 'rgba(127,227,192,0.1)' : 'rgba(91,149,248,0.1)'}
          />
        </g>
      ))}

      <rect x="968" y="228" width="152" height="120" rx="14" fill="#0a1c32" stroke="rgba(151,179,214,0.14)" />
      <text x="984" y="252" fill="#778ba4" fontSize="8.5" letterSpacing="1" fontFamily="Inter Variable, sans-serif">
        COMMISSION
      </text>
      <text x="984" y="278" fill="#eef4fd" fontSize="17" fontWeight="500" fontFamily="Space Grotesk Variable, sans-serif">
        Calculator
      </text>
      <rect x="984" y="294" width="88" height="7" rx="3.5" fill="rgba(190,212,238,0.14)" />
      <rect x="984" y="308" width="112" height="7" rx="3.5" fill="rgba(190,212,238,0.09)" />
      <rect x="984" y="326" width="54" height="10" rx="5" fill="rgba(242,200,121,0.2)" />

      <rect x="968" y="366" width="152" height="268" rx="14" fill="#0a1c32" stroke="rgba(151,179,214,0.14)" />
      <text x="984" y="390" fill="#778ba4" fontSize="8.5" letterSpacing="1" fontFamily="Inter Variable, sans-serif">
        WEEKLY REPORT
      </text>
      <line x1="984" y1="516" x2="1104" y2="516" stroke="rgba(151,179,214,0.14)" />
      {[0, 1, 2, 3, 4, 5, 6].map((bar) => {
        const height = 28 + ((bar * 17) % 62)
        return (
          <g key={bar}>
            <rect
              x={986 + bar * 17}
              y={516 - height}
              width="9"
              height={height}
              rx="4"
              fill={bar === 5 ? '#f2c879' : 'url(#crm-bar)'}
              opacity={bar === 5 ? 0.75 : 1}
            />
            <text x={990 + bar * 17} y="532" fill="#6f849c" fontSize="7" textAnchor="middle" fontFamily="Inter Variable, sans-serif">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][bar]}
            </text>
          </g>
        )
      })}
      <text x="984" y="562" fill="#778ba4" fontSize="8.5" letterSpacing="1" fontFamily="Inter Variable, sans-serif">
        MODULES
      </text>
      {['Clients', 'Projects', 'Reports'].map((label, index) => (
        <g key={label}>
          <circle cx="990" cy={582 + index * 17} r="2.5" fill="#5b95f8" />
          <text x="1000" y={585 + index * 17} fill="#a9b9cd" fontSize="8.5" fontFamily="Inter Variable, sans-serif">
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function PreviewArt({ variant }: PreviewArtProps) {
  if (variant === 'gateway') return <GatewayArt />
  if (variant === 'school') return <SchoolArt />
  return <CrmArt />
}
