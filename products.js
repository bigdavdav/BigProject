// ------------------ Declaring Products ----------------------

export const products = [
  {
    id: 0,
    name: 'Pioneer DJ CDJ-3000',
    price: 2169,
    type: 'player',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/CDJ-3000-1.png',
      './Assets/ProductImages/CDJ-3000-2.png',
      './Assets/ProductImages/CDJ-3000-3.png',
      './Assets/ProductImages/CDJ-3000-4.png'
    ],
    description: [
      {
        divID: 'info-intro',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Product Details' 
          },
          {
            elementType: 'p',
            elementContent: `Step into the future of professional DJ performance with the Pioneer DJ CDJ-3000, the flagship multi player trusted by top DJs and clubs worldwide. Featuring groundbreaking enhancements in processing power, user interface, and audio quality, the CDJ-3000 is engineered for creative freedom and rock-solid reliability in any environment.`
          },
          {
            elementType: 'p',
            elementContent: `Whether you're mixing in a club, livestreaming, or performing at festivals, the CDJ-3000 is your ultimate performance companion.` 
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: 'Key features' 
          },
          {
            elementType: 'h3',
            elementContent: 'Next-Generation Performance with Advanced MPU' 
          },
          {
            elementType: 'ul',
            listContent: [
              `Equipped with a multi-core micro-processing unit (MPU), the CDJ-3000 delivers smoother, faster operation.`,
              `Drastically improved track loading, waveform rendering, and browsing speeds.`
            ]
          },
          {
            elementType: 'h3',
            elementContent: '9-Inch High-Resolution Touchscreen' 
          },
          {
            elementType: 'ul',
            listContent: [
              `Large, intuitive touch display with adjustable brightness.`,
              `Swipe, tap, and drag functionality for seamless track navigation and settings control.`,
              `Touch Preview and Touch Cue allow pre-listening to any part of a track without affecting the master output.`
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Pro DJ Link with Cloud Integration' 
          },
          {
            elementType: 'ul',
            listContent: [
              `Link up to six CDJ-3000 units via Ethernet using Pro DJ Link.`,
              `Supports CloudDirectPlay with rekordbox, allowing DJs to access their entire music library stored in the cloud.`,
              `Compatible with USB drives, SD cards, and external devices.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Unmatched Audio Fidelity' 
          },
          {
            elementType: 'ul',
            listContent: [
              `96kHz/32-bit float DAC for pristine audio quality.`,
              `Enhanced digital signal processing and low-jitter clock ensure crystal-clear playback, even in the loudest environments.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Redesigned Jog Wheel' 
          },
          {
            elementType: 'ul',
            listContent: [
              `Smooth, reinforced jog wheel with reduced latency and customizable tension.`,
              `Central LCD display shows artwork and playhead position.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Expanded Creative Tools' 
          },
          {
            elementType: 'ul',
            listContent: [
              `8 Hot Cue buttons placed horizontally below the screen for quick access.`,
              `Beat Jump, Beat Loop, and Slip Loop modes for intuitive live remixing.`,
              `Key Sync and Key Shift features to match harmonic key across tracks effortlessly.`
            ]
          },
        ]
      },
      {
        divID: 'info-tech-specs',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Technical Specifications' 
          },
          {
            elementType: 'ul',
            listContent: [
              `Supported Media: USB devices, SD cards, computer (rekordbox), cloud storage`,
              `Supported File Formats: MP3, AAC, WAV, AIFF, FLAC, ALAC`,
              `Display: 9-inch color touchscreen (1280 x 720)`,
              `Audio Output: 1 x analog RCA, 1 x digital coaxial (S/PDIF), 1 x RJ45 for Pro DJ Link`,
              `Dimensions: 329 x 453 x 118 mm (12.95” x 17.83” x 4.65”)`,
              `Weight: 5.5 kg (12.13 lbs)`,
              `Power Supply: AC 100-240 V, 50/60 Hz`
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in the box`
          },
          {
            elementType: 'ul',
            listContent: [
              `Pioneer DJ CDJ-3000 Multi Player`,
              `Power Cable`,
              `Audio Cable (RCA)`,
              `Digital Audio Cable`,
              `LAN Cable`,
              `Quick Start Guide`,
              `Warranty Card`
            ]
          },
        ]
      },
    ]
  },
  {
    id: 1,
    name: 'Pioneer DJ DJM-A9',
    price: 2166,
    type: 'mixer',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/DJM-A9-1.png',
      './Assets/ProductImages/DJM-A9-2.png',
      './Assets/ProductImages/DJM-A9-3.png',
      './Assets/ProductImages/DJM-A9-4.png'
    ],
    description: [
      {
        divID: 'info-intro',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Product Details'
          },
          {
            elementType: 'p',
            elementContent: `Raise the bar of your performance with the Pioneer DJ DJM-A9, the next-generation professional 4-channel mixer designed for elite-level DJs and the world’s most demanding venues. Building on the legacy of the DJM-900NXS2, the DJM-A9 delivers massive improvements in sound quality, connectivity, and creative control, making it the new industry standard for club and festival stages.`
          },
          {
            elementType: 'p',
            elementContent: `With high-grade audio components, upgraded effects, and innovative streaming and control features, the DJM-A9 gives you the power to master any set with confidence and style.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: 'Key features'
          },
          {
            elementType: 'h3',
            elementContent: 'Elite-Grade Sound Design'
          },
          {
            elementType: 'ul',
            listContent: [
              `Equipped with a 32-bit ESS Technology D/A converter on both the master and booth outputs for clear, detailed sound with rich dynamics.`,
              `Enhanced channel input audio path with upgraded analog-to-digital conversion.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Advanced Headphone Monitoring System`
          },
          {
            elementType: 'ul',
            listContent: [
              `Dual independent headphone outputs—perfect for seamless B2B sets.`,
              `Split Cue and independent cueing for each output, allowing two DJs to monitor separately.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Built-In Wi-Fi for rekordbox & Streaming'
          },
          {
            elementType: 'ul',
            listContent: [
              `Integrated Wi-Fi enables wireless connection to rekordbox on mobile or laptop.`,
              `Supports cloud-based track access and wireless setup via Bluetooth input for easy streaming.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Refined Channel Faders & MAGVEL Crossfader'
          },
          {
            elementType: 'ul',
            listContent: [
              `Newly developed fader system with smooth operation and improved durability.`,
              `The MAGVEL FADER crossfader offers ultra-responsive control for precision scratch and performance DJs.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Next-Gen Effects & Touch Controls'
          },
          {
            elementType: 'ul',
            listContent: [
              `Updated Sound Color FX with enhanced control and resonance.`,
              `14 Beat FX including new additions like Mobius, Triplet Roll, and Helix.`,
              `New Center Lock feature for Color FX ensures accurate live manipulation.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `High-Performance Mic Section`
          },
          {
            elementType: 'ul',
            listContent: [
              `Two mic inputs with separate 3-band EQ and effects like Echo and Pitch.`,
              `Feedback reducer technology ensures clear vocals, even in loud environments.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Enhanced Connectivity`
          },
          {
            elementType: 'ul',
            listContent: [
              `Dual USB Type-B and USB Type-C ports for seamless B2B and DJ switchovers.`,
              `MIDI and DVS-ready with support for rekordbox and Serato DJ Pro (license required).`,
            ]
          },
        ]
      },
      {
        divID: 'info-tech-specs',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Technical Specifications'
          },
          {
            elementType: 'ul',
            listContent: [
              `Channels: 4 Line / 4 Phono / 2 Mic`,
              `Outputs: Master (XLR & RCA), Booth (1/4"), 2 x Headphone (1/4" & 1/8"), Digital`,
              `Inputs: 4 x Line/Phono, 2 x Mic, Bluetooth Audio`,
              `USB Ports: 2 x USB-B, 2 x USB-C`,
              `DVS Support: rekordbox, Serato DJ Pro`,
              `Dimensions: 407 x 458 x 107.9 mm (16.02” x 18.03” x 4.25”)`,
              `Power Supply: AC 100-240 V, 50/60 Hz`,
              'Weight: 10.2 kg (22.49 lbs)',
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in the box`
          },
          {
            elementType: 'ul',
            listContent: [
              `Pioneer DJ DJM-A9 Mixer`,
              `Power Cable`,
              `USB Cable`,
              `Quick Start Guide`,
              `Warranty Card`
            ]
          },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'Pioneer DJ PLX-500',
    price: 315,
    type: 'player',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/PLX-500-1.png',
      './Assets/ProductImages/PLX-500-2.png',
      './Assets/ProductImages/PLX-500-3.png',
      './Assets/ProductImages/PLX-500-4.png'
    ],
    description: [
      {
        divID: 'info-intro',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Product Details'
          },
          {
            elementType: 'p',
            elementContent: `Bring the warmth of vinyl into your DJ setup or home listening space with the Pioneer DJ PLX-500, a high-quality direct drive turntable that blends analog tradition with digital convenience. Designed for DJs, music enthusiasts, and collectors, the PLX-500 offers rich sound reproduction, solid build quality, and a built-in USB output for easy digital archiving of your vinyl collection.`
          },
          {
            elementType: 'p',
            elementContent: `Whether you’re spinning records live or digitizing rare finds, the PLX-500 makes it effortless and enjoyable.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: 'Key features'
          },
          {
            elementType: 'h3',
            elementContent: 'Direct Drive Motor for Stable Playback'
          },
          {
            elementType: 'ul',
            listContent: [
              `High-torque motor ensures consistent and accurate rotation, perfect for mixing or casual listening.`,
              `Delivers quick start-up time and precise speed control.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `High-Fidelity Analog Sound`
          },
          {
            elementType: 'ul',
            listContent: [
              `Optimized sound routing minimizes distortion and delivers warm, true-to-source audio.`,
              `Built-in phono equalizer allows for direct connection to powered speakers or audio systems — no external preamp required.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'USB Output for Vinyl Archiving'
          },
          {
            elementType: 'ul',
            listContent: [
              `Easily convert your vinyl to digital files using the built-in USB output and free rekordbox software.`,
              `Plug directly into your PC/Mac and preserve your collection in high-quality WAV files.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'DJ-Ready Design'
          },
          {
            elementType: 'ul',
            listContent: [
              `Classic layout for ease of use and familiarity for DJs.`,
              `Ideal for beginners or pros looking to integrate vinyl into digital DJ setups using DVS (Digital Vinyl System).`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Includes Everything You Need'
          },
          {
            elementType: 'ul',
            listContent: [
              `Comes complete with cartridge, headshell, slipmat, and USB cable—ready to use out of the box.`,
            ]
          },
        ]
      },
      {
        divID: 'info-tech-specs',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Technical Specifications'
          },
          {
            elementType: 'ul',
            listContent: [
              `Drive Method: Direct Drive`,
              `Motor Type: DC motor`,
              `Platter: Aluminum, 332 mm diameter`,
              `Speed: 33⅓, 45, 78 RPM`,
              `USB Output: Yes (Type B)`,
              `Signal-to-Noise Ratio: >50 dB`,
              `Audio Output: RCA (Phono/Line switchable)`,
              `Dimensions: 450 x 368 x 159 mm (17.72” x 14.49” x 6.26”)`,
              `Weight: 10.7 kg (23.59 lbs)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in the box`
          },
          {
            elementType: 'ul',
            listContent: [
              `Pioneer DJ PLX-500 Turntable`,
              `Power Cable`,
              `USB Cable`,
              `RCA Audio Cable`,
              `Cartridge & Headshell`,
              `Slipmat`,
              `Dust Cover with Record Stand`,
              `User Manual`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'AlphaTheta DDJ‑GRV6',
    price: 719,
    type: 'controller',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/DDJ-GRV6-1.png',
      './Assets/ProductImages/DDJ-GRV6-2.png',
      './Assets/ProductImages/DDJ-GRV6-3.png',
      './Assets/ProductImages/DDJ-GRV6-4.png'
    ],
    description: [
      {
        divID: 'info-intro',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Product Details'
          },
          {
            elementType: 'p',
            elementContent: `Transform your performance with the AlphaTheta DDJ‑GRV6, a cutting-edge 4‑channel DJ controller that brings studio-grade remixing power and club-standard feel to your fingertips. Designed for creative DJs, the GRV6 delivers unmatched flexibility with powerful tools like Groove Circuit and Stems FX, while retaining the layout and jog wheel ergonomics of flagship CDJ‑DJM setups.`
          },
          {
            elementType: 'p',
            elementContent: `Compatible with rekordbox and Serato DJ Pro (software license included), it lets you blend vinyl-style control with modern remix functions—from home sets and livestreams to club and festival stages.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: 'Key features'
          },
          {
            elementType: 'h3',
            elementContent: 'Groove Circuit - Live drum remix tool'
          },
          {
            elementType: 'ul',
            listContent: [
              `Drum Swap: instantly replace drum tracks with genre-spanning loops.`,
              `Drum Roll/Trans: apply fills and transitions on the fly.`,
              `Drum Release: create breakdowns and drops.`,
              `Capture: extract drum stems for later use.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Stems FX (Serato DJ Pro only)`
          },
          {
            elementType: 'ul',
            listContent: [
              `Isolate and process individual track elements (drums, bass, vocals, melody) with FX like Roll, Trans, Echo Out, and Delay.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Club‑Standard Layout & Jog Wheels'
          },
          {
            elementType: 'ul',
            listContent: [
              `Full-size (206 mm) jog wheels ideal for scratching`,
              `8 performance pads per deck positioned above jogs—just like CDJ‑3000.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Smart Rotary Selector & Discover'
          },
          {
            elementType: 'ul',
            listContent: [
              `Multi-directional knob for library navigation (rekordbox).`,
              `“Discover” button suggests tracks and playlists.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Beat FX & Sound Color FX'
          },
          {
            elementType: 'ul',
            listContent: [
              `Includes effects from the flagship DJM-A9 mixer—empowering dynamic sound shaping.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Multi-Platform Compatibility'
          },
          {
            elementType: 'ul',
            listContent: [
              `Works with rekordbox (Mac/Windows/iOS/Android), Serato DJ Pro, and Algoriddim Djay Pro.`,
            ]
          },
        ]
      },
      {
        divID: 'info-tech-specs',
        content: [
          {
            elementType: 'h1',
            elementContent: 'Technical Specifications'
          },
          {
            elementType: 'ul',
            listContent: [
              `Channels:	4 deck control`,
              `Jog Wheels:	206 mm`,
              `Performance Pads:	8 per deck, multi‑colour`,
              `Inputs: 1 × Mic (¼″ TRS), 2 × Headphones (¼″ + 3.5 mm)`,
              `Outputs: 2 × Master outputs (¼″ TRS and RCA), 1 × Booth (RCA)`,
              `USB Connectivity:	2 × USB‑C`,
              `Size:	711.4 × 375.9 × 75.7 mm`,
              `Weight: 4.6 kg`,
              `Audio Quality: 24‑bit/44.1 kHz, frequency response 20 Hz–20 kHz, S/N ratio ~104 dB, THD 0.003 %`,
              `Power: USB‑powered or 9 V DC adapter`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in the box`
          },
          {
            elementType: 'ul',
            listContent: [
              `DDJ‑GRV6 DJ Controller`,
              `USB‑C Cable`,
              `Overlay sheet for Stems FX mapping`,
              `Quick Start Guide`,
              `Warranty Card`,
            ]
          },
        ]
      },
    ]
  },
]

// ---------------------- Functions --------------------------

export function getProduct(id) {
  return products.find(item => item.id === id)
}