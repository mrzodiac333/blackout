window.HAZARD_DATA = {
  "hazards": {
    "flood": {
      "label": "Flood",
      "guide": "flood.html",
      "action": "Move to higher ground. Never walk or drive through moving water.",
      "source": "ndma-flood"
    },
    "cyclone": {
      "label": "Cyclone",
      "guide": "cyclone.html",
      "action": "Evacuate early if told. Shelter from wind and storm surge; avoid the eye.",
      "source": "ndma-cyclone"
    },
    "earthquake": {
      "label": "Earthquake",
      "guide": "earthquake.html",
      "action": "Drop, cover and hold on. After shaking, check for gas leaks and damage.",
      "source": "bmtpc-earthquake"
    },
    "heat": {
      "label": "Heat",
      "guide": "heatwave.html",
      "action": "Drink water, seek shade and check on older people and outdoor workers.",
      "source": "imd-heat"
    },
    "landslide": {
      "label": "Landslide",
      "guide": "landslide.html",
      "action": "Move sideways, away from the slope. Do not try to outrun a slide downhill.",
      "source": "bmtpc-landslide"
    },
    "tsunami": {
      "label": "Tsunami",
      "guide": "tsunami.html",
      "action": "Move inland or to high ground immediately. Do not wait for an official warning.",
      "source": "incois-tsunami"
    },
    "wildfire": {
      "label": "Wildfire",
      "guide": "wildfire.html",
      "action": "Leave early if warned. Close windows and protect your lungs from smoke.",
      "source": "fsi-fire"
    },
    "air": {
      "label": "Air quality",
      "guide": "air-quality.html",
      "action": "Limit outdoor exertion, keep windows closed on bad days and use a clean indoor space.",
      "source": "cpcb-air"
    }
  },
  "sources": {
    "ndma-flood": {
      "label": "NDMA Flood Affected Area Atlas 2023 and MoJS flood data",
      "url": "https://ndma.gov.in/sites/default/files/PDF/FHA/Flood_Affected_Area_Atlas_of_India.pdf",
      "note": "Historical flood-affected areas; local flash and urban flooding can exceed state totals."
    },
    "ndma-cyclone": {
      "label": "NDMA / IMD cyclone-prone districts",
      "url": "https://ndma.gov.in/sites/default/files/PDF/cyclone/cyclonepronedistrict.pdf",
      "note": "District-level cyclone hazard proneness for coastal states and UTs."
    },
    "bmtpc-earthquake": {
      "label": "BMTPC Vulnerability Atlas of India 2019 and BIS seismic zones",
      "url": "https://vai.bmtpc.org/",
      "note": "Seismic Zone V and IV areas are treated as a higher preparedness priority."
    },
    "imd-heat": {
      "label": "India Meteorological Department heatwave guidance",
      "url": "https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf",
      "note": "Core heatwave zone and IMD heatwave criteria."
    },
    "bmtpc-landslide": {
      "label": "NDMA National Landslide Hazard Atlas and BMTPC landslide incidence maps",
      "url": "https://ndma.gov.in/landslide-hazard-atlas",
      "note": "Himalayan and Western Ghats states carry the highest landslide incidence."
    },
    "incois-tsunami": {
      "label": "INCOIS tsunami warning and NCCR tsunami hazard maps",
      "url": "https://tsunami.incois.gov.in/",
      "note": "All coastal states and UTs are treated as tsunami-exposed."
    },
    "fsi-fire": {
      "label": "Forest Survey of India, India State of Forest Report 2023",
      "url": "https://fsi.nic.in/uploads/isfr2023/isfr_book_eng-vol-1_2023.pdf",
      "note": "Forest-fire proneness and recent fire detections by state."
    },
    "cpcb-air": {
      "label": "Central Pollution Control Board non-attainment cities",
      "url": "https://cpcb.nic.in/list-of-non-attainment-cities",
      "note": "Cities exceeding national ambient air-quality standards; state priorities are a simplification."
    }
  },
  "states": [
    {
      "code": "AP",
      "name": "Andhra Pradesh",
      "type": "state",
      "grid": [
        6,
        6
      ],
      "hazards": [
        [
          "cyclone",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "tsunami",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Godavari and Krishna floods, cyclone landfalls and coastal tsunami; forest fires inland."
    },
    {
      "code": "AR",
      "name": "Arunachal Pradesh",
      "type": "state",
      "grid": [
        9,
        2
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; flash floods, landslides and forest fires; hill roads can isolate communities."
    },
    {
      "code": "AS",
      "name": "Assam",
      "type": "state",
      "grid": [
        8,
        3
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ]
      ],
      "note": "Zone V; Brahmaputra floods and erosion; landslides and forest fires.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ]
      ]
    },
    {
      "code": "BR",
      "name": "Bihar",
      "type": "state",
      "grid": [
        6,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "North Bihar has Zone V pockets; floods, heat and winter air quality; forest fires in hills."
    },
    {
      "code": "CT",
      "name": "Chhattisgarh",
      "type": "state",
      "grid": [
        5,
        5
      ],
      "hazards": [
        [
          "heat",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Heat and forest fires; local floods; industrial air quality."
    },
    {
      "code": "GA",
      "name": "Goa",
      "type": "state",
      "grid": [
        2,
        7
      ],
      "hazards": [
        [
          "flood",
          "watch"
        ],
        [
          "cyclone",
          "watch"
        ],
        [
          "landslide",
          "watch"
        ],
        [
          "heat",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ]
      ],
      "note": "Monsoon and coastal flooding; Western Ghats landslides; cyclone and tsunami watch."
    },
    {
      "code": "GJ",
      "name": "Gujarat",
      "type": "state",
      "grid": [
        1,
        5
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "cyclone",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Kutch is Zone V; Saurashtra cyclones, floods and heat; tsunami watch on the coast.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ]
      ]
    },
    {
      "code": "HR",
      "name": "Haryana",
      "type": "state",
      "grid": [
        3,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ]
      ],
      "note": "Zone IV; Ghaggar floods; heat and winter air quality."
    },
    {
      "code": "HP",
      "name": "Himachal Pradesh",
      "type": "state",
      "grid": [
        4,
        2
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Zone IV/V; landslides, flash floods and forest fires; winter cold and avalanche risk.",
      "extra": [
        [
          "Cold waves and avalanches",
          "climate.html#cold"
        ]
      ]
    },
    {
      "code": "JH",
      "name": "Jharkhand",
      "type": "state",
      "grid": [
        6,
        5
      ],
      "hazards": [
        [
          "heat",
          "higher"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Heat; local floods; forest fires; urban air quality."
    },
    {
      "code": "KA",
      "name": "Karnataka",
      "type": "state",
      "grid": [
        3,
        7
      ],
      "hazards": [
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "watch"
        ],
        [
          "landslide",
          "watch"
        ],
        [
          "cyclone",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Floods and Western Ghats landslides; coastal cyclones and tsunami watch; northern heat.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ]
      ]
    },
    {
      "code": "KL",
      "name": "Kerala",
      "type": "state",
      "grid": [
        3,
        8
      ],
      "hazards": [
        [
          "flood",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "cyclone",
          "watch"
        ],
        [
          "heat",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Monsoon floods and Western Ghats landslides; coastal cyclone and tsunami watch; occasional heat."
    },
    {
      "code": "MP",
      "name": "Madhya Pradesh",
      "type": "state",
      "grid": [
        4,
        5
      ],
      "hazards": [
        [
          "heat",
          "higher"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Heat; forest fires; local floods; urban air quality."
    },
    {
      "code": "MH",
      "name": "Maharashtra",
      "type": "state",
      "grid": [
        3,
        6
      ],
      "hazards": [
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "cyclone",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Mumbai/Konkan floods; Vidarbha heat; Western Ghats landslides; coastal cyclone and tsunami watch; Koyna seismic zone.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ],
        [
          "Koyna seismic zone",
          "seismic-zones.html"
        ]
      ]
    },
    {
      "code": "MN",
      "name": "Manipur",
      "type": "state",
      "grid": [
        10,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; landslides and forest fires; local floods."
    },
    {
      "code": "ML",
      "name": "Meghalaya",
      "type": "state",
      "grid": [
        8,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; landslides, flash floods and forest fires.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ]
      ]
    },
    {
      "code": "MZ",
      "name": "Mizoram",
      "type": "state",
      "grid": [
        10,
        5
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; landslides, forest fires and flash floods."
    },
    {
      "code": "NL",
      "name": "Nagaland",
      "type": "state",
      "grid": [
        10,
        3
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; landslides, forest fires and flash floods.",
      "extra": [
        [
          "Air quality",
          "air-quality.html"
        ]
      ]
    },
    {
      "code": "OD",
      "name": "Odisha",
      "type": "state",
      "grid": [
        7,
        5
      ],
      "hazards": [
        [
          "cyclone",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Cyclones and floods on the coast; heat and forest fires; tsunami and air-quality watch."
    },
    {
      "code": "PB",
      "name": "Punjab",
      "type": "state",
      "grid": [
        2,
        3
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ]
      ],
      "note": "Zone IV; floods; heat; stubble and winter air pollution."
    },
    {
      "code": "RJ",
      "name": "Rajasthan",
      "type": "state",
      "grid": [
        1,
        4
      ],
      "hazards": [
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Heat and winter air quality; flash floods; forest fires."
    },
    {
      "code": "SK",
      "name": "Sikkim",
      "type": "state",
      "grid": [
        7,
        3
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Zone IV; landslides, GLOF/flash floods and forest fires."
    },
    {
      "code": "TN",
      "name": "Tamil Nadu",
      "type": "state",
      "grid": [
        4,
        8
      ],
      "hazards": [
        [
          "cyclone",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "tsunami",
          "higher"
        ],
        [
          "heat",
          "watch"
        ],
        [
          "landslide",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Cyclones, coastal floods and tsunami; interior heat; Nilgiris landslides; urban air."
    },
    {
      "code": "TG",
      "name": "Telangana",
      "type": "state",
      "grid": [
        5,
        6
      ],
      "hazards": [
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Urban floods; heat; forest fires; air quality; cyclone remnants."
    },
    {
      "code": "TR",
      "name": "Tripura",
      "type": "state",
      "grid": [
        9,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ]
      ],
      "note": "Zone V; floods, landslides and forest fires."
    },
    {
      "code": "UP",
      "name": "Uttar Pradesh",
      "type": "state",
      "grid": [
        5,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Zone IV; floods; heat; winter air quality; forest fires."
    },
    {
      "code": "UK",
      "name": "Uttarakhand",
      "type": "state",
      "grid": [
        5,
        2
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "wildfire",
          "higher"
        ]
      ],
      "note": "Zone IV/V; landslides, flash floods and forest fires; cold waves and avalanche risk.",
      "extra": [
        [
          "Cold waves and avalanches",
          "climate.html#cold"
        ]
      ]
    },
    {
      "code": "WB",
      "name": "West Bengal",
      "type": "state",
      "grid": [
        7,
        4
      ],
      "hazards": [
        [
          "cyclone",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "earthquake",
          "higher"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "air",
          "watch"
        ]
      ],
      "note": "Cyclones and floods; heat; northern districts have seismic risk; Darjeeling landslides; Kolkata air quality.",
      "extra": [
        [
          "Landslides",
          "landslide.html"
        ]
      ]
    },
    {
      "code": "AN",
      "name": "Andaman and Nicobar Islands",
      "type": "ut",
      "grid": [
        9,
        8
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "cyclone",
          "higher"
        ],
        [
          "tsunami",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone V; cyclones, tsunami and coastal flooding."
    },
    {
      "code": "CH",
      "name": "Chandigarh",
      "type": "ut",
      "grid": [
        3,
        3
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ],
        [
          "flood",
          "watch"
        ]
      ],
      "note": "Zone IV; heat and winter air quality; urban flooding."
    },
    {
      "code": "DH",
      "name": "Dadra and Nagar Haveli and Daman and Diu",
      "type": "ut",
      "grid": [
        2,
        6
      ],
      "hazards": [
        [
          "flood",
          "watch"
        ],
        [
          "cyclone",
          "watch"
        ],
        [
          "heat",
          "watch"
        ],
        [
          "earthquake",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ]
      ],
      "note": "Coastal floods and cyclones; heat; local seismic risk; tsunami watch."
    },
    {
      "code": "DL",
      "name": "Delhi",
      "type": "ut",
      "grid": [
        4,
        4
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "heat",
          "higher"
        ],
        [
          "air",
          "higher"
        ]
      ],
      "note": "Zone IV; Yamuna and urban floods; heat; severe winter air pollution."
    },
    {
      "code": "JK",
      "name": "Jammu and Kashmir",
      "type": "ut",
      "grid": [
        3,
        2
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "higher"
        ],
        [
          "flood",
          "higher"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Zone V; landslides, flash floods and forest fires; winter cold and avalanche risk.",
      "extra": [
        [
          "Cold waves and avalanches",
          "climate.html#cold"
        ]
      ]
    },
    {
      "code": "LA",
      "name": "Ladakh",
      "type": "ut",
      "grid": [
        4,
        1
      ],
      "hazards": [
        [
          "earthquake",
          "higher"
        ],
        [
          "landslide",
          "watch"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "wildfire",
          "watch"
        ]
      ],
      "note": "Zone IV; GLOF/flash floods, landslides and forest fires; extreme cold and avalanche risk.",
      "extra": [
        [
          "Cold waves and avalanches",
          "climate.html#cold"
        ]
      ]
    },
    {
      "code": "LD",
      "name": "Lakshadweep",
      "type": "ut",
      "grid": [
        2,
        9
      ],
      "hazards": [
        [
          "cyclone",
          "watch"
        ],
        [
          "tsunami",
          "watch"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "heat",
          "watch"
        ]
      ],
      "note": "Islands; cyclone, tsunami and coastal-flood watch; heat and humidity."
    },
    {
      "code": "PY",
      "name": "Puducherry",
      "type": "ut",
      "grid": [
        5,
        8
      ],
      "hazards": [
        [
          "cyclone",
          "higher"
        ],
        [
          "tsunami",
          "higher"
        ],
        [
          "flood",
          "watch"
        ],
        [
          "heat",
          "watch"
        ]
      ],
      "note": "Cyclones, tsunami and coastal floods; heat."
    }
  ]
};
