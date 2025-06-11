// ------------------ Declaring Products ----------------------

export const equipmentProducts = [
  {
    id: 0,
    name: 'Pioneer DJ CDJ-3000',
    price: 2169,
    type: 'player',
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
            elementContent: `What's in the box'`
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
    photos: [
      './Assets/ProductImages/DJM-A9-1.png',
      './Assets/ProductImages/DJM-A9-2.png',
      './Assets/ProductImages/DJM-A9-3.png',
      './Assets/ProductImages/DJM-A9-4.png'
    ]
  },
]

// ---------------------- Functions --------------------------

export function getProduct(id) {
  return products.find(item => item.id === id)
}

// if (!produto) return erro.


// let listaProdutos = '';

// for (const item of products) {
//   listaProdutos += '<a class="item-container player" href="productPage.html?product='+item.id+'">'
//                   + '<img class="product-image" src="Assets/ProductImages/'+item.fotos[0]+'"></img>'
//                  +'<h3>'+item.nome+'</h3>'
//                  +'</a>';
// }


// add products
// figure out how to get query parameters in js
// fix product page to make it dynamic
// fix equipment page to make it dynamic
// make cart page dynamic(decently done)