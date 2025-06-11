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
]

// ---------------------- Functions --------------------------

export function getProduct(id) {
  return products.find(item => item.id === id)
}