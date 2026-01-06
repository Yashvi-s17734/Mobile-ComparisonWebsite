const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
var product = [
  {
    id: 0,
    title: "",
    price: "",
    description: "",
    brand: "",
    image: "images/No-Image-Placeholder.svg.png",
  },
  {
    id: 1,
    title: "Samsung Galaxy S22",
    price: "price:179999",
    description:
      "desc:Sunlight, meet Galaxy S22's bright and Galaxy S22+'s brightest display*. The stunning Dynamic AMOLED 2X display is crafted specifically for high outdoor visibility, keeping the view clear in bright daylight.",
    brand: "brand:Samsung",
    image: "images/Samsung-Galaxy-S22-Ultra-1.png",
  },
  {
    id: 2,
    title: "Honor Magic Vs2",
    price: "price:102,999",
    description:
      "desc:This is the Honor Magic V2 base model with 16 GB RAM and 256 GB of internal storage.",
    brand: "brand:MagicOs",
    image: "images/id2.webp",
  },
  {
    id: 3,
    title: "Motorola Edge 2023",
    price: "price:65,490",
    description:
      "desc:Motorola Edge Plus 2023 price in India is expected to be Rs. 65,490. Motorola Edge Plus 2023 Expected to be launched on Oct 21, 2023. This is 8 GB RAM / 256 GB internal storage base variant of Motorola Edge Plus 2023 which is expected to available in Interstellar Black colour.",
    brand: "brand:Motorola",
    image: "images/id3.jpeg",
  },
  {
    id: 4,
    title: "Oneplus Open",
    price: "price:179999",
    description:
      "desc:OnePlus Open price in India is expected to be Rs. 124,990. OnePlus Open Expected to be launched on Oct 19, 2023. This is 12 GB RAM / 256 GB internal storage base variant of OnePlus Open which is expected to available in Black, Gold colour.",
    brand: "brand:Oppo",
    image: "images/id4.webp",
  },
  {
    id: 5,
    title: "Vivo V29 Pro",
    price: "price:39,999",
    description:
      "desc:vivo V29 Pro price in India starts from Rs. 39,999. The lowest price of vivo V29 Pro is Rs. 39,999 at vivo.com. This is 8 GB RAM / 256 GB internal storage base variant of vivo V29 Pro which is available in Himalayan Blue, Space Black colour.",
    brand: "brand:Vivo",
    image: "images/id5.webp",
  },
  {
    id: 6,
    title: "Vivo V29",
    price: " price:32,999",
    description: "desc:Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
    brand: "brand:Vivo",
    image: "images/id6.webp",
  },
  {
    id: 7,
    title: "Xiaomi Redmi Note 13 Pro",
    price: "price:17,390",
    description:
      "desc:The 20:9 aspect ratio of the display gets a screen-to-body ratio of 87 percent. The smartphone features a punch-hole design at the top center of the screen.",
    brand: "brand:Redmi",
    image: "images/id7.webp",
  },
  {
    id: 8,
    title: "Oppo Find X6 Pro",
    price: "price:72,190",
    description:
      "desc:The OPPO Find X6 Pro features a 6.73-inch Full HD+ AMOLED display that has a resolution of 1080 x 2400 pixels. ",
    brand: "brand:Oppo",
    image: "images/id8.webp",
  },
  {
    id: 9,
    title: "realme GT 5",
    price: "price:34,990",
    description:
      "desc:The Chinese smartphone maker Realme is introducing a new smartphone in the Realme GT 5 series, the Realme GT 5. ",
    brand: "brand:Realme",
    image: "images/id9.webp",
  },
  {
    id: 10,
    title: "Oneplus Ace 2 Pro",
    price: "price:34,290",
    description:
      "desc:The OnePlus Ace 2 Pro boasts a big display and a high design aesthetic. The newest smartphone from the OnePlus brand has a glossy finish on the back panel and a punch-hole cutout for the selfie camera on the front panel. The phone has a modern design profile and is dust resistant.",
    brand: "brand:Oppo",
    image: "images/id10.webp",
  },
  {
    id: 11,
    title: "Oneplus 12",
    price: "price:80,990",
    description:
      "desc:The OnePlus 12 features a premium glass design at the rear panel and offers an aluminium frame. The front panel comes with a bezel-less display and offers a punch-hole cutout to house the selfie camera.",
    brand: "brand:Oppo",
    image: "images/id11.webp",
  },
  {
    id: 12,
    title: "Vivo X90 Pro",
    price: "price:84,190",
    description:
      "desc:vivo S16 Pro price in India was expected to be Rs. 39,190. This is 12 GB RAM / 256 GB internal storage base variant of vivo S16 Pro which was expected to available in Black, Green colour.",
    brand: "brand:Vivo",
    image: "images/id12.jpeg",
  },
  {
    id: 13,
    title: "Apple iPhone 14 ",
    price: "price:69,900.00",
    description:
      "desc:Rated IP68 Splash, Water and Dust Resistant A15 Bionic chip, 6‑core CPU, 5‑core GPU, 16‑core Neural EngineEnabled by TrueDepth camera for facial recognition",
    brand: "brand:Apple",
    image: "images/id13.jpeg",
  },
  {
    id: 14,
    title: "Apple iPhone 15 ",
    price: "price:1,09,900.00 ",
    description:
      "desc:15.40 cm (6.1 inch) Super Retina XDR Display Advanced dual-camera system 48MP Main Ultra Wide 12 MP Selfie Camera, iOS 17 Operating System",
    brand: "brand:Apple",
    image: "images/id14.jpeg",
  },
  {
    id: 15,
    title: "Samsung Galaxy A14",
    price: "price:19,999.00",
    description:
      "desc:Display: 16.72 cm (6.6 Inch) Infinity-V FHD+Back Camera: 50 MP Main + 2 MP Depth + 2 MP MacroFront Camera: 13 MP",
    brand: "brand:Samsung",
    image: "images/id15.jpeg",
  },
  {
    id: 16,
    title: "Apple iPhone 13",
    price: "price:59,900.00",
    description:
      "desc:Super Retina XDR Display 5G Enabled Phone A15 Bionic Chip",
    brand: "brand:Apple",
    image: "images/id16.jpeg",
  },
];
function hidd() {
  let aa = document.getElementById("nav-links-hidd");
  aa.style.display = "block";
}
function visi() {
  let aa = document.getElementById("nav-links-hidd");
  let bb = document.getElementById("sub-menu-1-hidd");
  aa.style.display = "none";
  bb.style.display = "none";
}
