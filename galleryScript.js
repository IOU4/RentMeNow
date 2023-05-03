const data = {
  "vehicles": [
    {
      "id": 1,
      "name": "Cruiser",
      "image": "./assets/images/gta-moto.jpg",
      "brand": "Bently",
      "type": "moto",
      "boite-a-vitess": "automatique",
      "carburant": "essence",
      "price": 20
    },
    {
      "id": 2,
      "name": "old BMW",
      "image": "./assets/images/old-bmw.jpg",
      "brand": "renult",
      "type": "berline",
      "boite-a-vitess": "automatique",
      "carburant": "diesel",
      "price": 30
    },
    {
      "id": 3,
      "name": "Model s",
      "image": "./assets/images/tesla.jpg",
      "brand": "Tesla",
      "type": "citadin",
      "boite-a-vitess": "manuelle",
      "carburant": "electric",
      "price": 90
    },
    {
      "id": 4,
      "name": "balck r8",
      "image": "./assets/images/black-audi.jpg",
      "brand": "audi",
      "type": "berline",
      "boite-a-vitess": "automatique",
      "carburant": "hybrid",
      "price": 70
    },
    {
      "id": 5,
      "name": "mini Cooper",
      "image": "./assets/images/electric-mini.jpg",
      "brand": "cooper",
      "type": "compact",
      "boite-a-vitess": "manuelle",
      "carburant": "diesel",
      "price": 40
    },
    {
      "id": 6,
      "name": "tmax",
      "image": "./assets/images/tmax.jpg",
      "brand": "tmax",
      "type": "moto",
      "boite-a-vitess": null,
      "carburant": "diesel",
      "price": 20
    },
    {
      "id": 7,
      "name": "big-truck",
      "image": "./assets/images/truck-big.jpg",
      "brand": "volvo",
      "type": "camion",
      "boite-a-vitess": "automatique",
      "carburant": "diesel",
      "price": 94
    },
    {
      "id": 8,
      "name": "mutshi",
      "image": "./assets/images/mutshi.jpg",
      "brand": "audi",
      "type": "utilitaire",
      "boite-a-vitess": "manuelle",
      "carburant": "diesel",
      "price": 50
    },
    {
      "id": 9,
      "name": "Snow Mercedes",
      "image": "./assets/images/snow-mercedes.jpg",
      "brand": "mercedes",
      "type": "Berline",
      "boite-a-vitess": "automatique",
      "carburant": "essence",
      "price": 50
    }
  ]
};
const priceList = {
  'moto': 10,
  'citadin': 12,
  'compact': 14,
  'berline': 20,
  'utilitaire': 16,
  'engine-de-chantier': 900,
  'camion': 250
}

const carburantPercentage = {
  'electric': 5,
  'hybrid': 9,
  'essence': 14,
  'diesel': 21
}

const boitePercentage = {
  'automatique': 19,
  'manuelle': 0
}

const availablitys = {
  'moto': {
    'carburant': ['electric', 'essence'],
    'boite': null
  },
  'citadin': {
    'carburant': ['electric', 'hybrid', 'essence', 'diesel'],
    'boite': 'manuelle'
  },
  'compact': {
    'carburant': ['hybrid', 'essence', 'diesel'],
    'boite': 'manuelle'
  },
  'berline': {
    'carburant': ['hybrid', 'essence', 'diesel'],
    'boite': 'automatique'
  },
  'utilitaire': {
    'carburant': ['diesel'],
    'boite': 'manuelle'
  },
  'engine-de-chantier': {
    'carburant': ['essence', 'diesel'],
    'boite': 'manuelle'
  },
  'camion': {
    'carburant': ['diesel'],
    'boit': 'automatique'
  }
}

if (document.title == 'RMN-Gallery') {
  let GalleryContainer = document.querySelector('.gallery-container')
  data.vehicles.forEach(item => {
    let galleryItem = document.createElement('div')
    galleryItem.setAttribute('class', 'gallery-item')
    galleryItem.append(document.createElement('h5'), document.createElement('span'), document.createElement('div'))
    galleryItem.firstChild.innerHTML = item.name
    galleryItem.childNodes[1].innerHTML = `${item.type} - ${item.brand} - ${item["boite-a-vitess"]} - ${item['carburant']}`
    galleryItem.lastChild.className = 'gradient'
    galleryItem.style.backgroundImage = `url(${item.image})`
    GalleryContainer.append(galleryItem);
  })
}

let reservation = document.querySelector('div.reservation')
let selectType = document.querySelector('select[name="type"]')

let chooseCarburant = (type) => {
  let carburantHTML = `
      <label for="carburant">Choose the Type:</label>
      <select name='carburant' title='Carburant' class='btn btn-v select'>
        <option value="carburant" disabled selected>Carburant</option>
      `
  availablitys[type]['carburant'].forEach(e => carburantHTML += `<option value="${e}">${e}   +${carburantPercentage[e]}%</option>`)
  carburantHTML += `</select>`
  reservation.innerHTML += carburantHTML;
  const selectCarburant = document.querySelector('select[name="carburant"]')
  selectCarburant.addEventListener('change', e => {
    e.preventDefault()
    const carburant = selectCarburant.value
    chooseBoite(type, carburant)
  })
}

let chooseBoite = (type, carburant) => {
  console.log(carburant)
  let boitHTML = `
      <label for="boite-a-vitess">Choose the Boite:</label>
      <select name='boite-a-vitess' title='Boite a Vitess' class='btn btn-v select'>
        <option value="boite a vitess" disabled selected>Boite a Vitess</option>
  `
  Boite = availablitys[type]['boite']
  boitHTML += `<option value="${availablitys[type]['boite']}">${Boite}   +${boitePercentage[Boite]}%</option>`
  boitHTML += `</select>`
  reservation.innerHTML += boitHTML
  const selectBoite = document.querySelector('select[name="boite-a-vitess"]')
  selectBoite.addEventListener('change', e => {
    e.preventDefault()
    const boite = selectBoite.value
    chooseDays(type, carburant, boite)
  })
}

let chooseDays = (type, carburant, boite) => {
  console.log(boite)
  const daysHTML = `
      <label for="type">How many Days:</label>
      <input type="number" min=1 class='btn btn-v select'>
  `
  reservation.innerHTML += daysHTML
  const selectDays = document.querySelector('input.btn')
  selectDays.addEventListener('change', e => {
    e.preventDefault()
    const days = selectDays.value
    displayPrice(type, carburant, boite, days)
  })
}

let calculatePrice = (type, carburant, boite, days) => {
  let price = priceList[type]
  price += price * carburantPercentage[carburant] / 100
  price += price * boitePercentage[boite] / 100
  price *= days
  return price.toFixed(2)
}

let getPriceTicket = (type, carburant, boite, days, price) => {
  return priceHTML = `
      <div class="ticket-div">
        <span>Type:</span>
        <span class='res'>${type}</span>
        <span>Carburant:</span>
        <span class='res'>${carburant}</span>
        <span>Boite a vitess:</span>
        <span class='res'>${boite}</span>
        <span>Days</span>
        <span class='res'>${days}</span>
        <button class="btn" onclick="() => alert('congrats')">${price}$</button>
      </div>
  `
}

let displayPrice = (type, carburant, boite, days) => {
  console.log(days)
  if (document.querySelector('.ticket-div'))
    reservation.lastChild.remove()
  reservation.innerHTML += getPriceTicket(type, carburant, boite, days, calculatePrice(type, carburant, boite, days))
}

selectType.addEventListener('change', e => {
  e.preventDefault()
  const type = selectType.value
  chooseCarburant(type)
})

