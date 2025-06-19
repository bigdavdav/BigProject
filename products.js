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
    name: 'AlphaTheta DDJ-GRV6',
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
  {
    id: 4,
    name: 'AlphaTheta XDJ-AZ',
    price: 2799,
    type: 'all-in-one',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/XDJ-AZ-1.png',
      './Assets/ProductImages/XDJ-AZ-2.png',
      './Assets/ProductImages/XDJ-AZ-3.png',
      './Assets/ProductImages/XDJ-AZ-4.png'
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
            elementContent: `The AlphaTheta XDJ‑AZ is a professional-grade, 4-channel standalone DJ system that brings flagship club performance to your studio or booth.`
          },
          {
            elementType: 'p',
            elementContent: `Merging the iconic workflow of CDJ/DJM setups with modern streaming and wireless features, the XDJ‑AZ is perfect for DJs who want seamless USB performance, laptop integration, and cloud-based access packed into one powerhouse unit.`
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
            elementContent: 'Built-in Wi‑Fi + Streaming and Cloud Play'
          },
          {
            elementType: 'ul',
            listContent: [
              `CloudDirectPlay for accessing your Rekordbox library and Hot Cue data directly from the unit.`,
              `Beatport StreamingDirectPlay brings curated dance music tracks with full BPM and waveform data on-screen.`,
              `Apple Music support (since March 25, 2025)—now you can DJ with over 100 million tracks and curated playlists.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Club‑Standard Layout & Touchscreen`
          },
          {
            elementType: 'ul',
            listContent: [
              `Large 10.1-inch capacitive touchscreen for fast browsing, peak track visibility, and up to 13 playlist views.`,
              `Full-size jog wheels with OLED in-jog displays show artwork, cue, BPM, and waveform indicators.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Hybrid Integration with Rekordbox & Serato'
          },
          {
            elementType: 'ul',
            listContent: [
              `Fully standalone with USB drives, plus seamless Rekordbox Link Export, Performance Mode, and Serato DJ Pro unlock (activated December 2024).`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Wireless Monitoring with SonicLink'
          },
          {
            elementType: 'ul',
            listContent: [
              `Built-in SonicLink transmitter provides ultra-low latency (9 ms) audio to compatible HDJ‑F10 TX headphones—ditch the cable and roam free.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Pro-level Audio & Effects'
          },
          {
            elementType: 'ul',
            listContent: [
              `32-bit ESS DAC delivers crystal-clear sound suitable for large venues.`,
              `Access to Beat FX and Sound Color FX, with intuitive pad and knob control.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Flexible Connectivity'
          },
          {
            elementType: 'ul',
            listContent: [
              `Inputs: 2 × USB-A (USB drives), 1 × USB-C (laptop), 2 × Line/Phono RCA (turntables), 2 × Mic (XLR/¼″ combo).`,
              `Outputs: 1 × Master XLR + RCA, 1 × Booth TRS, 2 × Headphones (¼″ + 3.5 mm), LAN, Bluetooth 5.3 .`,
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
              `Channels:	4 standalone decks`,
              `Touchscreen:	10.1″ capacitive`,
              `Jog Wheels: Full size with OLED display`,
              `Performance Pads: 16 velocity-sensitive pads`,
              `Networking: Wi-Fi (2.4/5 GHz), Bluetooth 5.3`,
              `Audio Quality:	32-bit DAC, 115 dB S/N (USB)`,
              `Dimensions:	895 × 504 × 133 mm`,
              `Weight: 	13.5 kg`,
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
              `XDJ‑AZ Controller`,
              `Power Cable`,
              `USB-C Cable`,
              `Quick Start Guide`,
              `Warranty Card`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 5,
    name: 'AlphaTheta OMNIS-DUO',
    price: 1099,
    type: 'all-in-one',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/OMNIS-DUO-1.png',
      './Assets/ProductImages/OMNIS-DUO-2.png',
      './Assets/ProductImages/OMNIS-DUO-3.png',
      './Assets/ProductImages/OMNIS-DUO-4.png'
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
            elementContent: `Meet the AlphaTheta OMNIS‑DUO, the first truly portable, battery-powered, two-deck DJ system that delivers all-in-one performance anywhere.`
          },
          {
            elementType: 'p',
            elementContent: `This sleek, compact powerhouse combines standalone mixing, cloud streaming, Bluetooth, and wireless control into a backpack-ready package—perfect for outdoor gigs, house parties, or spontaneous sets where flexibility meets style.`
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
            elementContent: 'Built-In Long-Lasting Battery'
          },
          {
            elementType: 'ul',
            listContent: [
              `Up to 5 hours of wireless DJing—extendable via Eco Mode. Recharge via AC adapter or a 45 W+ USB‑C power bank.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Stream + Play Multiple Sources`
          },
          {
            elementType: 'ul',
            listContent: [
              `Direct access to Apple Music, Beatport Streaming, and TIDAL with Waveform/BPM grid analysis, no subscription needed for cloud play.`,
              `Support for USB-A drives, SD cards, PC/Mac via USB‑C (rekordbox Phono/Performance Mode), Wi‑Fi streaming.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Intuitive 2‑Deck Layout'
          },
          {
            elementType: 'ul',
            listContent: [
              `Compact deck+mixer layout with large jog wheels (206 mm), 16 performance pads, 8 Beat FX, 6 Sound Color FX, Beat Jump & Loop controls.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Wireless Flexibility'
          },
          {
            elementType: 'ul',
            listContent: [
              `First-ever controller with Bluetooth master output, ideal for wireless speakers or headphones.`,
              `Bluetooth input allows guests to DJ with full control over EQ, FX, tempo, and hot cues directly via touchscreen`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Pro-Level Connectivity'
          },
          {
            elementType: 'ul',
            listContent: [
              `Dual mic inputs (XLR+¼″, and TRS), Master outputs (XLR & RCA), Booth out, dual headphone jacks.`,
              `Wireless LAN (2.4/5 GHz) and Bluetooth 5.2 support (SBC, AAC).`,
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
              `Channels/Deck:	2 decks / 4 channels via USB`,
              `Jog Wheels: 206 mm, responsive for scratching`,
              `FX & Pads:	8 Beat FX, 6 Color FX, 16 performance pads`,
              `Audio Quality: 24-bit/44.1 kHz; S/N ratio ~112 dB (USB/SD); THD <0.003%`,
              `Battery: 47.52 Wh Li-ion, ~5 hr runtime, ~3 hr charge`,
              `Dimensions:	~500 × 307 × 71 mm (19.7 × 12.1 × 2.8 in)`,
              `Weight:	4.6 kg (10.1 lb)`,
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
              `AlphaTheta OMNIS‑DUO Controller`,
              `AC Power Adapter`,
              `USB-C Cable`,
              `Quick Start Guide`,
              `Warranty Card`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 6,
    name: 'AlphaTheta HDJ-F10',
    price: 369,
    type: 'headphone',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/HDJ-F10-1.png',
      './Assets/ProductImages/HDJ-F10-2.png',
      './Assets/ProductImages/HDJ-F10-3.png',
      './Assets/ProductImages/HDJ-F10-4.png'
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
            elementContent: `Experience the ultimate in wireless DJ monitoring with the AlphaTheta HDJ‑F10, the brand’s flagship over-ear headphones designed to revolutionize your performance. Featuring SonicLink ultra-low latency wireless, Bluetooth convenience, and wired fallback, these headphones blend club-grade audio fidelity with touring durability.`
          },
          {
            elementType: 'p',
            elementContent: `Built for pros and audiophiles, the HDJ‑F10 delivers high-resolution sound, robust build quality, and versatile connectivity—redefining freedom in the booth and beyond.`
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
            elementContent: 'SonicLink Ultra-Low Latency Wireless'
          },
          {
            elementType: 'ul',
            listContent: [
              `Proprietary wireless tech delivers just 9 ms latency—perfect for DJ cueing and mixing without delay.`,
              `HDJ‑F10‑TX bundle includes the HP‑TX01 transmitter, which plugs into a mixer’s headphone output.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Seamless Bluetooth & Wired Modes`
          },
          {
            elementType: 'ul',
            listContent: [
              `Bluetooth 5.2 (SBC/AAC), offering up to 30 hours of playback—ideal for library prep or casual listening.`,
              `Use wired mode any time with the included detachable cable for latency‑free operation.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Rich Sound with Studio-Level Detail'
          },
          {
            elementType: 'ul',
            listContent: [
              `New 40 mm PEEK‑PU‑PEEK composite diaphragm drivers deliver deep lows, clear mids, and detailed highs across 5 Hz–30 kHz.`,
              `Punchy bass response and smooth treble deliver balanced audio ideal for live performance and production.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Rugged Build & Comfort'
          },
          {
            elementType: 'ul',
            listContent: [
              `MIL‑STD‑810H tested for durability—built to withstand the rigours of touring.`,
              `Weighted at approximately 356 g, with plush memory‑foam cushions and firm clamp for noise isolation and comfort.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Extended Battery Life'
          },
          {
            elementType: 'ul',
            listContent: [
              `Up to 9 hours of wireless use via SonicLink; 30 hours via Bluetooth.`,
              `Fully charges in approx. 2.5 hours (headphones) and 2 hours for the transmitter.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'ANC, Transparency & Suitability for Daily Use'
          },
          {
            elementType: 'ul',
            listContent: [
              `Features active noise cancellation and Transparency mode for non-DJ environments.`,
              `Built-in mic allows phone calls and voice assistant access.`,
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
              `Driver: 40 mm PEEK‑PU‑PEEK composite film`,
              `Frequency Range: 5 Hz – 30 kHz`,
              `SPL: 105 dB`,
              `Impedance: 32 Ω`,
              `Weight: 356 g (without cable)`,
              `Wireless: Latency (SonicLink)	9 ms, 15 m range`,
              `Bluetooth Version: 5.2 (SBC/AAC)`,
              `Battery Life:	9 hrs (SonicLink), 30 hrs (Bluetooth)`,
              `Charge Time: ~2.5 hrs (headphones), ~2 hrs (transmitter)`,
              `Durability:	Meets MIL‑STD‑810H shock test`,
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
              `HDJ‑F10 Headphones`,
              `1.2 m coiled cable + 6.35 mm adapter`,
              `USB-C Charging Cable`,
              `Spare Ear ads`,
              `Carrying Pouch`,
              `Quick Start Guide`,
              `Warranty Card`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 7,
    name: 'AlphaTheta Wave-Eight',
    price: 859,
    type: 'speaker',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/WAVE-EIGHT-1.png',
      './Assets/ProductImages/WAVE-EIGHT-2.png',
      './Assets/ProductImages/WAVE-EIGHT-3.png',
      './Assets/ProductImages/WAVE-EIGHT-4.png'
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
            elementContent: `Bring the party anywhere with the Wave‑Eight, a rugged, battery-powered DJ speaker delivering ultimate portability and professional-grade sound.`
          },
          {
            elementType: 'p',
            elementContent: `Using ultra-low-latency SonicLink wireless audio, this high-performance PA is perfect for outdoor gigs, pop-up sets, and cable-free performances.`
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
            elementContent: 'SonicLink Ultra-Low Latency'
          },
          {
            elementType: 'ul',
            listContent: [
              `Proprietary wireless protocol (~9 ms latency), far faster than Bluetooth—perfect for mixing without delay.`,
              `Includes transmit module storing inside the unit—simply plug into your DJ gear and go.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Pro-Level Sound & Modes`
          },
          {
            elementType: 'ul',
            listContent: [
              `Powered 8″ woofer + 1″ tweeter with Class D amp and “Vortex Bass Accelerator” delivering clear, powerful low-end and crisp highs.`,
              `Switchable EQ modes: Mono, Stereo, and Subwoofer, enabling flexible system setups.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Battery & Weather Toughness'
          },
          {
            elementType: 'ul',
            listContent: [
              `Built-in battery offers around 8 hrs runtime, recharge in ~4 hrs (off) / ~6 hrs (on).`,
              `Rated IPX4 waterproof, ideal for outdoor events.`,
              `USB-C port available for charging mobile devices on the go.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Built for Travel'
          },
          {
            elementType: 'ul',
            listContent: [
              `Weighs only 12.7 kg, with wheels, retractable handle, side grips, and pole-mount socket for effortless transport and setup.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Flexible Connectivity'
          },
          {
            elementType: 'ul',
            listContent: [
              `Inputs: 2× XLR/TRS combo, 1× TRS ¼″, 1× 3.5 mm aux.`,
              `Output: 1× XLR for daisy-chaining additional units.`,
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
              `Dimensions: (W×H×D): 300 × 554 × 337 mm`,
              `Weight: 12.7 kg`,
              `Wireless: SonicLink over 2.4 GHz (~9 ms latency)`,
              `Battery: Approx. 8 hrs; recharge: 4 hrs (off), 6 hrs (on)`,
              `EQ Modes: Music, Music (Low‑Cut), Flat, Flat (Low‑Cut), Vocal, Subwoofer`,
              `Dimensions:	~500 × 307 × 71 mm (19.7 × 12.1 × 2.8 in)`,
              `Ingress Protection: IPX4 rated splash resistance`,
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
              `Wave‑Eight Speaker`,
              `SonicLink Transmitter + Cable`,
              `Power Cable`,
              `RCA Audio Cable`,
              `Quick Start Guide`,
              `Warranty Card`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 8,
    name: 'SanDisk Cruzer Blade USB Drive',
    price: 7,
    type: 'accessory',
    digitalProduct: false,
    photos: [
      './Assets/ProductImages/CRUZER-BLADE-1.png',
      './Assets/ProductImages/CRUZER-BLADE-2.png',
      './Assets/ProductImages/CRUZER-BLADE-3.png',
      './Assets/ProductImages/CRUZER-BLADE-4.png'
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
            elementContent: `The SanDisk Cruzer Blade 16GB is a compact, lightweight USB flash drive designed for quick, reliable storage - perfect for DJs who need to carry essential tracks, rekordbox libraries, or set backups on the go.`
          },
          {
            elementType: 'p',
            elementContent: `With plug-and-play simplicity and universal USB 2.0 compatibility, it’s ideal for CDJs, DJ controllers, and any system with a USB input.`
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
            elementContent: 'Optimized for DJ Use'
          },
          {
            elementType: 'ul',
            listContent: [
              `Perfect capacity for storing gig-ready playlists, rekordbox exports, and backup folders.`,
              `Compatible with Pioneer DJ CDJs, XDJs, and most standalone players.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Plug-and-Play Simplicity`
          },
          {
            elementType: 'ul',
            listContent: [
              `USB 2.0 interface ensures seamless integration with CDJs, laptops, and audio gear.`,
              `No drivers required - just plug in and perform.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Compact & Durable Design'
          },
          {
            elementType: 'ul',
            listContent: [
              `Ultra-small form factor fits easily into USB ports without obstructing adjacent gear.`,
              `Tough plastic casing for portable protection.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'SecureAccess Software Included'
          },
          {
            elementType: 'ul',
            listContent: [
              `Optional encryption software lets you password-protect private files—handy for tour riders or contract documents.`,
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
              `Capacity: 16GB`,
              `USB Type: USB 2.0`,
              `Max Read Speed: Up to 15MB/s`,
              `Dimensions: 41.5 x 17.6 x 7.4 mm`,
              `Weight: 2.5g`,
              `Dimensions:	~500 × 307 × 71 mm (19.7 × 12.1 × 2.8 in)`,
              `Compatibility: Windows, macOS, Pioneer CDJs/XDJs, rekordbox`,
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
              `SanDisk Cruzer Blade 16GB USB Flash Drive`,
              `SanDisk SecureAccess Software (downloadable)`,
              `Quick Start Guide`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 9,
    name: 'Learn to Mix from Scratch',
    price: 89,
    type: 'beginner',
    digitalProduct: true,
    photos: [
      './Assets/ProductImages/MIX-FROM-SCRATCH-1.png',
      './Assets/ProductImages/MIX-FROM-SCRATCH-2.png',
      './Assets/ProductImages/MIX-FROM-SCRATCH-3.png',
      './Assets/ProductImages/MIX-FROM-SCRATCH-4.png'
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
            elementContent: `Start your DJ journey with the Beginner DJ Course, a complete, easy-to-follow program designed to take you from absolute beginner to confident bedroom DJ. Learn how to use industry-standard gear, beatmatch, mix, and build full sets—taught by a professional instructor with real-world experience.`
          },
          {
            elementType: 'p',
            elementContent: `Perfect for aspiring DJs who want to master the basics on Pioneer DJ gear, rekordbox, or Serato - without needing prior musical knowledge.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: `What You’ll Learn`
          },
          {
            elementType: 'h3',
            elementContent: 'DJ Equipment 101',
          },
          {
            elementType: 'ul',
            listContent: [
              `Understanding controllers, mixers, CDJs & audio setup.`,
              `How to connect and configure your gear (rekordbox or Serato).`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Beatmatching & Mixing Basics`
          },
          {
            elementType: 'ul',
            listContent: [
              `Manual beatmatching with jog wheels and tempo.`,
              `Crossfader control, EQ blending, transitions.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Effects & Performance Skills'
          },
          {
            elementType: 'ul',
            listContent: [
              `Using loops, hot cues, and FX.`,
              `Basic scratching & drop transitions.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Final Project'
          },
          {
            elementType: 'ul',
            listContent: [
              `Record and submit your first 15-minute DJ mix.`,
              `Get instructor feedback or peer review (optional).`,
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
              `Access: 24/7 Lifetime Access (via web or mobile app)`,
              `Compatibility: Works with any DJ setup: Pioneer DDJ, CDJ, XDJ, Numark, Serato, rekordbox`,
              `Instructor: Professional DJ with 10+ years experience`,
              `Platform: Private student dashboard with progress tracking`,
              `Included Files: Practice tracks, PDF cheat sheets, setup guides`,
              `Language: English (subtitles available)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in included`
          },
          {
            elementType: 'ul',
            listContent: [
              `Full Access to All 6 Modules`,
              `Downloadable Lesson Materials`,
              `Curated Practice Music Pack (MP3)`,
              `Bonus: DJ Gear Buyer’s Guide`,
              `Completion Certificate`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 10,
    name: 'Take Your Sets to the Next Level',
    price: 129,
    type: 'intermediate',
    digitalProduct: true,
    photos: [
      './Assets/ProductImages/NEXT-LEVEL-SETS-1.png',
      './Assets/ProductImages/NEXT-LEVEL-SETS-2.png',
      './Assets/ProductImages/NEXT-LEVEL-SETS-3.png',
      './Assets/ProductImages/NEXT-LEVEL-SETS-4.png'
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
            elementContent: `The Intermediate DJ Course is designed for DJs who already know the basics and want to level up their performance, creativity, and confidence behind the decks. Whether you started on a controller or CDJs, this course unlocks pro-level techniques that help you stand out - from creative transitions to crowd control and live performance tips.`
          },
          {
            elementType: 'p',
            elementContent: `Ideal for DJs looking to play parties, clubs, or livestreams with flair and technical control. Taught by experienced instructors using industry-standard gear and software (rekordbox, Serato, Traktor, or USB-based CDJs).`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: `What You'll Learn`
          },
          {
            elementType: 'h3',
            elementContent: 'Pro Mixing Techniques',
          },
          {
            elementType: 'ul',
            listContent: [
              `Energy-based transitions (EQ swaps, filter blends, echo outs).`,
              `Harmonic mixing & key matching for smoother sets.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Track Curation & Set Building`
          },
          {
            elementType: 'ul',
            listContent: [
              `Creating high-impact playlists for different venues or moods.`,
              `How to build tension and release in your set.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Creative FX & Performance Tricks'
          },
          {
            elementType: 'ul',
            listContent: [
              `Advanced use of FX units (delay, echo, reverb, roll, spiral).`,
              `Live looping, beat jumps, and hot cue routines.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Hybrid Setup & Workflow Expansion'
          },
          {
            elementType: 'ul',
            listContent: [
              `Mixing across multiple sources (USB + laptop, controller + CDJ).`,
              `Optimizing audio routing and latency-free setups.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Club-Ready Preparation'
          },
          {
            elementType: 'ul',
            listContent: [
              `How to prep and export to USB for CDJs.`,
              `Reading the room and adjusting in real-time.`,
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
              `Access: 24/7 Lifetime Access (via web or mobile app)`,
              `Compatibility: Works with any DJ setup: Pioneer DDJ, CDJ, XDJ, Numark, Serato, rekordbox`,
              `Instructor: Touring DJ with club/festival experience`,
              `Platform: Private student dashboard with progress tracking`,
              `Included Files: Practice tracks, PDF cheat sheets, setup guides`,
              `Language: English (subtitles available)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in included`
          },
          {
            elementType: 'ul',
            listContent: [
              `Full Video Course (10 modules, 50+ lessons)`,
              `Downloadable DJ Tools & FX Templates`,
              `Music Pack for Mixing Practice (MP3 format)`,
              `Bonus: USB export checklist, FX cheat sheets, rekordbox master guide`,
              `Completion Certificate`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 11,
    name: 'Master Club-Grade Mixing',
    price: 199,
    type: 'advanced',
    digitalProduct: true,
    photos: [
      './Assets/ProductImages/CLUB-GRADE-MIXING-1.png',
      './Assets/ProductImages/CLUB-GRADE-MIXING-2.png',
      './Assets/ProductImages/CLUB-GRADE-MIXING-3.png',
      './Assets/ProductImages/CLUB-GRADE-MIXING-4.png'
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
            elementContent: `The Advanced DJ Course is built for serious DJs ready to refine their sound, elevate their creativity, and perform with full confidence on any setup - from festivals to clubs to live streams. This is not just about transitions - it’s about musical storytelling, technical mastery, and professional workflow.`
          },
          {
            elementType: 'p',
            elementContent: `Taught by elite - level touring DJs, this course explores hybrid setups, 4 - deck mixing, USB performance prep, and advanced FX strategies. Designed to push boundaries, unlock inspiration, and help you craft a signature sound that turns heads.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: `What You’ll Learn`
          },
          {
            elementType: 'h3',
            elementContent: 'Creative 4-Deck Mixing & Layering',
          },
          {
            elementType: 'ul',
            listContent: [
              `Advanced phrasing, syncopation, and build/drop control.`,
              `Layering acapellas, loops, instrumentals & textures.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Pro FX, Looping & Live Remixing`
          },
          {
            elementType: 'ul',
            listContent: [
              `FX chains, multi-FX timing, and “build-drop-cut” techniques.`,
              `On-the-fly remixing using hot cues, beat jump, and roll.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Club-Ready Set Structure & Flow'
          },
          {
            elementType: 'ul',
            listContent: [
              `Peak-time set construction for club/festival formats.`,
              `Building momentum through harmonic storytelling.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Hybrid Performance Workflows'
          },
          {
            elementType: 'ul',
            listContent: [
              `Combining controllers, DVS, and CDJs.`,
              `Using external FX units, drum machines, and samplers.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Advanced rekordbox/USB Preparation'
          },
          {
            elementType: 'ul',
            listContent: [
              `Custom tag filters, memory cues, and color coding.`,
              `Pro-level export and back-to-back set organization.`,
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
              `Access: 24/7 Lifetime Access (via web or mobile app)`,
              `Compatibility: Works with any DJ setup: Pioneer DDJ, CDJ, XDJ, Numark, Serato, rekordbox`,
              `Instructor: Pro DJ/Producer with 15+ Years Club & Festival Experience`,
              `Platform: Private student dashboard with progress tracking`,
              `Included Files: FX Cheat Sheets, Set Templates, Mix Breakdown Videos`,
              `Language: English (subtitles available)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in included`
          },
          {
            elementType: 'ul',
            listContent: [
              `12 Advanced Video Modules`,
              `rekordbox & Serato Pro Workflow Files`,
              `Practice Tracks for Layering & Loops`,
              `Bonus Mix Templates & DJ Tools (MP3s, PDFs)`,
              `Completion Certificate`,
              `Exclusive Discord Access for Course Grads`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 12,
    name: 'Drum & Bass Essentials DJ Course',
    price: 149,
    type: 'genre-specific',
    digitalProduct: true,
    photos: [
      './Assets/ProductImages/DNB-COURSE-1.png',
      './Assets/ProductImages/DNB-COURSE-2.png',
      './Assets/ProductImages/DNB-COURSE-3.png',
      './Assets/ProductImages/DNB-COURSE-4.png'
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
            elementContent: `High tempo, heavy basslines, and razor-sharp precision - this is Drum & Bass, and this course is your gateway to dominating the genre behind the decks. Whether you're into jungle rollers, neurofunk, or liquid DnB, this course teaches you how to mix, blend, and perform drum & bass sets with absolute confidence.`
          },
          {
            elementType: 'p',
            elementContent: `You’ll learn professional - level techniques for double drops, phrasing, harmonic layering, and how to build tension and release in fast-paced, club-ready sets. Built for DJs using rekordbox, Serato, or USB on CDJs.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: `What You’ll Learn`
          },
          {
            elementType: 'h3',
            elementContent: 'Genre-Specific Mixing Techniques',
          },
          {
            elementType: 'ul',
            listContent: [
              `Mixing at 170–180 BPM with surgical timing.`,
              `Double drops, tease mixing, and phrase flipping.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Track Selection & Set Building for DnB`
          },
          {
            elementType: 'ul',
            listContent: [
              `Liquid, jungle, rollers, techstep, jump-up, neuro - how to structure genre-spanning sets.`,
              `Energy mapping, flow control, and drop placement.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Precision FX for DnB Transitions'
          },
          {
            elementType: 'ul',
            listContent: [
              `Echoes, filters, and roll FX for tight build-ups and breakdowns.`,
              `Loops & cue juggling to rework intros/outros.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Advanced Deck Work'
          },
          {
            elementType: 'ul',
            listContent: [
              `Loop roll breakdowns, live re-edits, multi-deck setups.`,
              `Beat jumping, cue drifting, and scratch fills.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Rekordbox/Serato Workflow for DnB'
          },
          {
            elementType: 'ul',
            listContent: [
              `Fast cue point prep, grid correction for complex intros.`,
              `Custom tagging for subgenres and energy levels.`,
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
              `Access: 24/7 Lifetime Access (via web or mobile app)`,
              `Compatibility: Works with any DJ setup: Pioneer DDJ, CDJ, XDJ, Numark, Serato, rekordbox`,
              `Instructor: Pro DnB DJ with 10+ years of club and festival experience`,
              `Platform: Private student dashboard with progress tracking`,
              `Included Files: FX cheat sheet, DnB energy chart, mix templates`,
              `Language: English (subtitles available)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in included`
          },
          {
            elementType: 'ul',
            listContent: [
              `9 Professional Modules Covering Every Style of DnB`,
              `Practice Tracks (Liquid, Neuro, Jungle)`,
              `Pro DnB rekordbox & Serato Template Files`,
              `Bonus DnB DJ Tools: Cue Maps, Loop Packs, FX Guides`,
              `Completion Certificate`,
            ]
          },
        ]
      },
    ]
  },
  {
    id: 13,
    name: 'Create, Arrange & Release Tracks',
    price: 179,
    type: 'production',
    digitalProduct: true,
    photos: [
      './Assets/ProductImages/PRODUCTION-COURSE-1.png',
      './Assets/ProductImages/PRODUCTION-COURSE-2.png',
      './Assets/ProductImages/PRODUCTION-COURSE-3.png',
      './Assets/ProductImages/PRODUCTION-COURSE-4.png'
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
            elementContent: `Turn your musical ideas into finished tracks with the Music Production Course - a complete, step-by-step guide for aspiring producers who want to create professional - quality music from home. Whether you're into house, techno, drum & bass, hip hop, or trap, this course teaches you how to build beats, design sounds, arrange full tracks, and mix your music to release-ready quality.`
          },
          {
            elementType: 'p',
            elementContent: `Perfect for DJs transitioning into production, beginners with zero experience, or bedroom producers ready to level up.`
          },
        ]
      },
      {
        divID: 'info-key-features',
        content: [
          {
            elementType: 'h2',
            elementContent: `What You’ll Learn`
          },
          {
            elementType: 'h3',
            elementContent: 'DAW Fundamentals & Studio Setup',
          },
          {
            elementType: 'ul',
            listContent: [
              `How to use Ableton Live, FL Studio, or Logic Pro.`,
              `Audio interface setup, MIDI devices, and plugins.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: `Beat Making & Drum Programming`
          },
          {
            elementType: 'ul',
            listContent: [
              `Creating grooves with kicks, snares, and percussion.`,
              `Humanizing drums and layering techniques.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Basslines, Synths & Melody Writing'
          },
          {
            elementType: 'ul',
            listContent: [
              `Sound design using VSTs like Serum, Vital & Sylenth1.`,
              `Chord progressions, lead melodies, and arpeggios.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Arrangement & Structure'
          },
          {
            elementType: 'ul',
            listContent: [
              `How to build intros, breakdowns, drops, and outros.`,
              `Genre-specific song structures.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Mixing & Basic Mastering'
          },
          {
            elementType: 'ul',
            listContent: [
              `EQ, compression, reverb, delay, and stereo imaging.`,
              `Loudness balancing for streaming and club play.`,
            ]
          },
          {
            elementType: 'h3',
            elementContent: 'Release Preparation'
          },
          {
            elementType: 'ul',
            listContent: [
              `Export settings, demo tips, and submitting to labels.`,
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
              `Access: 24/7 Lifetime Access (via web or mobile app)`,
              `Compatibility: Ableton Live, FL Studio, Logic Pro (cross-platform excluding Logic Pro)`,
              `Instructor: Professional Music Producer with 10+ years experience`,
              `Platform: Private student dashboard with progress tracking`,
              `Included Files: FX cheat sheet, DnB energy chart, mix templates`,
              `Language: English (subtitles available)`,
            ]
          },
        ]
      },
      {
        divID: 'info-included-in-box',
        content: [
          {
            elementType: 'h1',
            elementContent: `What's in included`
          },
          {
            elementType: 'ul',
            listContent: [
              `10 Complete Modules Covering All Aspects of Production`,
              `Downloadable Sample Pack (Drums, FX, Synths)`,
              `Genre Templates for House, DnB, Techno & Trap`,
              `Plugin Presets (Serum, Vital, Sylenth1)`,
              `Bonus Materials: 	Project files, sample packs, MIDI files, plugin presets`,
              `Completion Certificate`,
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