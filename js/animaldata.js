var animalinfo = `[
  {
    "id": 1,
    "animal": {
      "English": "Field flicker",
      "Latin": "Colaptes campestroides"
    },
    "owner": "Luella Heining"
  },
  {
    "id": 2,
    "animal": {
      "English": "Lemur, brown",
      "Latin": "Lemur fulvus"
    },
    "owner": "Turner Churchin"
  },
  {
    "id": 3,
    "animal": {
      "English": "Cat, native",
      "Latin": "Dasyurus viverrinus"
    },
    "owner": "Klaus Pavolini"
  },
  {
    "id": 4,
    "animal": {
      "English": "Cape white-eye",
      "Latin": "Zosterops pallidus"
    },
    "owner": "Susan Killeen"
  },
  {
    "id": 5,
    "animal": {
      "English": "Loris, slender",
      "Latin": "Loris tardigratus"
    },
    "owner": "Belinda Petts"
  },
  {
    "id": 6,
    "animal": {
      "English": "Yellow-throated sandgrouse",
      "Latin": "Pterocles gutturalis"
    },
    "owner": "Monah Claremont"
  },
  {
    "id": 7,
    "animal": {
      "English": "Spider, wolf",
      "Latin": "Lycosa godeffroyi"
    },
    "owner": "Shanan Whitmell"
  },
  {
    "id": 8,
    "animal": {
      "English": "Red hartebeest",
      "Latin": "Alcelaphus buselaphus caama"
    },
    "owner": "Beverley Messam"
  },
  {
    "id": 9,
    "animal": {
      "English": "Black-tailed deer",
      "Latin": "Odocoileus hemionus"
    },
    "owner": "Josselyn Nangle"
  },
  {
    "id": 10,
    "animal": {
      "English": "Eastern dwarf mongoose",
      "Latin": "Helogale undulata"
    },
    "owner": "Stanton Zotto"
  },
  {
    "id": 11,
    "animal": {
      "English": "Carmine bee-eater",
      "Latin": "Merops nubicus"
    },
    "owner": "Amaleta Yanyshev"
  },
  {
    "id": 12,
    "animal": {
      "English": "Civet cat",
      "Latin": "Bassariscus astutus"
    },
    "owner": "Darcee Hallor"
  },
  {
    "id": 13,
    "animal": {
      "English": "Goose, greylag",
      "Latin": "Anser anser"
    },
    "owner": "Irene Rowbotham"
  },
  {
    "id": 14,
    "animal": {
      "English": "Richardson's ground squirrel",
      "Latin": "Spermophilus richardsonii"
    },
    "owner": "Marylin Pilfold"
  },
  {
    "id": 15,
    "animal": {
      "English": "Armadillo, seven-banded",
      "Latin": "Dasypus septemcincus"
    },
    "owner": "Hugh Linay"
  },
  {
    "id": 16,
    "animal": {
      "English": "Macaw, blue and gold",
      "Latin": "Ara ararauna"
    },
    "owner": "Addi Maidment"
  },
  {
    "id": 17,
    "animal": {
      "English": "White-throated monitor",
      "Latin": "Varanus albigularis"
    },
    "owner": "Hamilton Betonia"
  },
  {
    "id": 18,
    "animal": {
      "English": "American woodcock",
      "Latin": "Scolopax minor"
    },
    "owner": "Trescha Fanton"
  },
  {
    "id": 19,
    "animal": {
      "English": "American bison",
      "Latin": "Bison bison"
    },
    "owner": "Chuck Mapam"
  },
  {
    "id": 20,
    "animal": {
      "English": "American buffalo",
      "Latin": "Bison bison"
    },
    "owner": "Virgina McElvogue"
  },
  {
    "id": 21,
    "animal": {
      "English": "Columbian rainbow boa",
      "Latin": "Epicrates cenchria maurus"
    },
    "owner": "Mathian Thackston"
  },
  {
    "id": 22,
    "animal": {
      "English": "Madagascar fruit bat",
      "Latin": "Pteropus rufus"
    },
    "owner": "Osgood Ionesco"
  },
  {
    "id": 23,
    "animal": {
      "English": "African snake (unidentified)",
      "Latin": "unavailable"
    },
    "owner": "Ashbey Shetliff"
  },
  {
    "id": 24,
    "animal": {
      "English": "Insect, stick",
      "Latin": "Leprocaulinus vipera"
    },
    "owner": "Rance Beardwell"
  },
  {
    "id": 25,
    "animal": {
      "English": "Porcupine, tree",
      "Latin": "Coendou prehensilis"
    },
    "owner": "Deonne Ionesco"
  },
  {
    "id": 26,
    "animal": {
      "English": "Llama",
      "Latin": "Lama glama"
    },
    "owner": "Thorndike Benardette"
  },
  {
    "id": 27,
    "animal": {
      "English": "Snowy sheathbill",
      "Latin": "Chionis alba"
    },
    "owner": "Putnam Parsons"
  },
  {
    "id": 28,
    "animal": {
      "English": "Brown antechinus",
      "Latin": "Antechinus flavipes"
    },
    "owner": "Nicolai Francklyn"
  },
  {
    "id": 29,
    "animal": {
      "English": "Baboon, gelada",
      "Latin": "Theropithecus gelada"
    },
    "owner": "Pierrette Axcel"
  },
  {
    "id": 30,
    "animal": {
      "English": "American bison",
      "Latin": "Bison bison"
    },
    "owner": "Jim Fewless"
  },
  {
    "id": 31,
    "animal": {
      "English": "Spectacled caiman",
      "Latin": "Caiman crocodilus"
    },
    "owner": "Carole MacMaster"
  },
  {
    "id": 32,
    "animal": {
      "English": "Little brown bat",
      "Latin": "Myotis lucifugus"
    },
    "owner": "Lindsey Ablitt"
  },
  {
    "id": 33,
    "animal": {
      "English": "Jabiru stork",
      "Latin": "Ephippiorhynchus mycteria"
    },
    "owner": "Blair Oldam"
  },
  {
    "id": 34,
    "animal": {
      "English": "Worm snake (unidentified)",
      "Latin": "Carphophis sp."
    },
    "owner": "Dukey Andrivel"
  },
  {
    "id": 35,
    "animal": {
      "English": "Southern sea lion",
      "Latin": "Otaria flavescens"
    },
    "owner": "Randene Bulpitt"
  },
  {
    "id": 36,
    "animal": {
      "English": "Quoll, eastern",
      "Latin": "Dasyurus viverrinus"
    },
    "owner": "Spence Tunney"
  },
  {
    "id": 37,
    "animal": {
      "English": "Bustard, stanley",
      "Latin": "Neotis denhami"
    },
    "owner": "Antony Force"
  },
  {
    "id": 38,
    "animal": {
      "English": "Lion, galapagos sea",
      "Latin": "Zalophus californicus"
    },
    "owner": "Greg Ilchenko"
  },
  {
    "id": 39,
    "animal": {
      "English": "Southern brown bandicoot",
      "Latin": "Isoodon obesulus"
    },
    "owner": "Jule Daubeny"
  },
  {
    "id": 40,
    "animal": {
      "English": "Sun gazer",
      "Latin": "Cordylus giganteus"
    },
    "owner": "Asia Lesser"
  },
  {
    "id": 41,
    "animal": {
      "English": "Beaver, eurasian",
      "Latin": "Castor fiber"
    },
    "owner": "Ingar Lasslett"
  },
  {
    "id": 42,
    "animal": {
      "English": "Ring dove",
      "Latin": "Columba palumbus"
    },
    "owner": "Tally Broinlich"
  },
  {
    "id": 43,
    "animal": {
      "English": "Cape fox",
      "Latin": "Vulpes chama"
    },
    "owner": "George Mott"
  },
  {
    "id": 44,
    "animal": {
      "English": "Marshbird, brown and yellow",
      "Latin": "Pseudoleistes virescens"
    },
    "owner": "Sibeal Avramovsky"
  },
  {
    "id": 45,
    "animal": {
      "English": "Marshbird, brown and yellow",
      "Latin": "Pseudoleistes virescens"
    },
    "owner": "Rurik Froschauer"
  },
  {
    "id": 46,
    "animal": {
      "English": "Water moccasin",
      "Latin": "Agkistrodon piscivorus"
    },
    "owner": "Joeann Pearce"
  },
  {
    "id": 47,
    "animal": {
      "English": "Dolphin, bottle-nose",
      "Latin": "Tursiops truncatus"
    },
    "owner": "Ranee McKimmey"
  },
  {
    "id": 48,
    "animal": {
      "English": "Wagtail, african pied",
      "Latin": "Motacilla aguimp"
    },
    "owner": "Saunder Garden"
  },
  {
    "id": 49,
    "animal": {
      "English": "Horned lark",
      "Latin": "Eremophila alpestris"
    },
    "owner": "Carce Horsey"
  },
  {
    "id": 50,
    "animal": {
      "English": "Skunk, western spotted",
      "Latin": "Spilogale gracilis"
    },
    "owner": "Bevan Tether"
  },
  {
    "id": 51,
    "animal": {
      "English": "House sparrow",
      "Latin": "Passer domesticus"
    },
    "owner": "Inez Blackwood"
  },
  {
    "id": 52,
    "animal": {
      "English": "Dusky rattlesnake",
      "Latin": "Crotalus triseriatus"
    },
    "owner": "Krissie Eads"
  },
  {
    "id": 53,
    "animal": {
      "English": "Genet, small-spotted",
      "Latin": "Genetta genetta"
    },
    "owner": "Nari Fasson"
  },
  {
    "id": 54,
    "animal": {
      "English": "Andean goose",
      "Latin": "Chloephaga melanoptera"
    },
    "owner": "Odetta Morffew"
  },
  {
    "id": 55,
    "animal": {
      "English": "Brocket, red",
      "Latin": "Mazama americana"
    },
    "owner": "Griffie Bettis"
  },
  {
    "id": 56,
    "animal": {
      "English": "Greater flamingo",
      "Latin": "Phoenicopterus ruber"
    },
    "owner": "Cherida De Francisci"
  },
  {
    "id": 57,
    "animal": {
      "English": "Common melba finch",
      "Latin": "Pytilia melba"
    },
    "owner": "Tab Munkley"
  },
  {
    "id": 58,
    "animal": {
      "English": "Killer whale",
      "Latin": "Orcinus orca"
    },
    "owner": "Aurie Climson"
  },
  {
    "id": 59,
    "animal": {
      "English": "Hartebeest, coke's",
      "Latin": "Alcelaphus buselaphus cokii"
    },
    "owner": "Liliane Povey"
  },
  {
    "id": 60,
    "animal": {
      "English": "Starfish, crown of thorns",
      "Latin": "Acanthaster planci"
    },
    "owner": "Quillan Trill"
  },
  {
    "id": 61,
    "animal": {
      "English": "Elk, Wapiti",
      "Latin": "Cervus canadensis"
    },
    "owner": "Sheffy Lambricht"
  },
  {
    "id": 62,
    "animal": {
      "English": "Kangaroo, brush-tailed rat",
      "Latin": "Bettongia penicillata"
    },
    "owner": "Adrian Coombs"
  },
  {
    "id": 63,
    "animal": {
      "English": "Paradoxure",
      "Latin": "Paradoxurus hermaphroditus"
    },
    "owner": "Kristofer Scuffham"
  },
  {
    "id": 64,
    "animal": {
      "English": "Snake (unidentified)",
      "Latin": "unavailable"
    },
    "owner": "Brigit Skitt"
  },
  {
    "id": 65,
    "animal": {
      "English": "Goat, mountain",
      "Latin": "Oreamnos americanus"
    },
    "owner": "Gardiner Prestwich"
  },
  {
    "id": 66,
    "animal": {
      "English": "Eagle, long-crested hawk",
      "Latin": "Lophoaetus occipitalis"
    },
    "owner": "Olag Reason"
  },
  {
    "id": 67,
    "animal": {
      "English": "Tinamou, elegant crested",
      "Latin": "Eudromia elegans"
    },
    "owner": "Clemmie Lyard"
  },
  {
    "id": 68,
    "animal": {
      "English": "Cattle egret",
      "Latin": "Bubulcus ibis"
    },
    "owner": "Rae Allworthy"
  },
  {
    "id": 69,
    "animal": {
      "English": "Small Indian mongoose",
      "Latin": "Herpestes javanicus"
    },
    "owner": "Thomas Brokenshaw"
  },
  {
    "id": 70,
    "animal": {
      "English": "Hummingbird (unidentified)",
      "Latin": "unavailable"
    },
    "owner": "Dunc Zannutti"
  },
  {
    "id": 71,
    "animal": {
      "English": "Echidna, short-beaked",
      "Latin": "Tachyglossus aculeatus"
    },
    "owner": "Esther Bendelow"
  },
  {
    "id": 72,
    "animal": {
      "English": "Baleen whale",
      "Latin": "Eubalaena australis"
    },
    "owner": "Starr Matuszinski"
  },
  {
    "id": 73,
    "animal": {
      "English": "Black-cheeked waxbill",
      "Latin": "Estrilda erythronotos"
    },
    "owner": "Dun Wilcocks"
  },
  {
    "id": 74,
    "animal": {
      "English": "Wildebeest, blue",
      "Latin": "Connochaetus taurinus"
    },
    "owner": "Sean Carrington"
  },
  {
    "id": 75,
    "animal": {
      "English": "Sugar glider",
      "Latin": "Petaurus breviceps"
    },
    "owner": "Marcos Saing"
  },
  {
    "id": 76,
    "animal": {
      "English": "Collared peccary",
      "Latin": "Tayassu tajacu"
    },
    "owner": "Carmelita Bernadot"
  },
  {
    "id": 77,
    "animal": {
      "English": "Shelduck, common",
      "Latin": "Tadorna tadorna"
    },
    "owner": "Freeman Upstell"
  },
  {
    "id": 78,
    "animal": {
      "English": "Egyptian viper",
      "Latin": "Naja haje"
    },
    "owner": "Sybyl Jedrysik"
  },
  {
    "id": 79,
    "animal": {
      "English": "Crested porcupine",
      "Latin": "Hystrix cristata"
    },
    "owner": "Blaine Taylder"
  },
  {
    "id": 80,
    "animal": {
      "English": "Knob-nosed goose",
      "Latin": "Sarkidornis melanotos"
    },
    "owner": "Anne-corinne Whittles"
  },
  {
    "id": 81,
    "animal": {
      "English": "Manatee",
      "Latin": "Trichechus inunguis"
    },
    "owner": "Eba Brunner"
  },
  {
    "id": 82,
    "animal": {
      "English": "Plains zebra",
      "Latin": "Equus burchelli"
    },
    "owner": "Jamima Siddaley"
  },
  {
    "id": 83,
    "animal": {
      "English": "Chipmunk, least",
      "Latin": "Eutamias minimus"
    },
    "owner": "Roz Saice"
  },
  {
    "id": 84,
    "animal": {
      "English": "Godwit, hudsonian",
      "Latin": "Limosa haemastica"
    },
    "owner": "Howard Paddon"
  },
  {
    "id": 85,
    "animal": {
      "English": "Magistrate black colobus",
      "Latin": "Colobus guerza"
    },
    "owner": "Kelvin Fussie"
  },
  {
    "id": 86,
    "animal": {
      "English": "Wombat, southern hairy-nosed",
      "Latin": "Lasiorhinus latifrons"
    },
    "owner": "Loleta Accum"
  },
  {
    "id": 87,
    "animal": {
      "English": "Deer, white-tailed",
      "Latin": "Odocoilenaus virginianus"
    },
    "owner": "Demetria Corke"
  },
  {
    "id": 88,
    "animal": {
      "English": "Coqui partridge",
      "Latin": "Francolinus coqui"
    },
    "owner": "Lusa Berfoot"
  },
  {
    "id": 89,
    "animal": {
      "English": "Turtle, long-necked",
      "Latin": "Chelodina longicollis"
    },
    "owner": "Skipp Rusling"
  },
  {
    "id": 90,
    "animal": {
      "English": "Snake, western patch-nosed",
      "Latin": "Salvadora hexalepis"
    },
    "owner": "Brenna Lowing"
  },
  {
    "id": 91,
    "animal": {
      "English": "African ground squirrel (unidentified)",
      "Latin": "Xerus sp."
    },
    "owner": "Serene Shevelin"
  },
  {
    "id": 92,
    "animal": {
      "English": "Fork-tailed drongo",
      "Latin": "Dicrurus adsimilis"
    },
    "owner": "Dulsea Innwood"
  },
  {
    "id": 93,
    "animal": {
      "English": "Horned rattlesnake",
      "Latin": "Crotalus cerastes"
    },
    "owner": "Chandal Scamal"
  },
  {
    "id": 94,
    "animal": {
      "English": "Bobcat",
      "Latin": "Felis rufus"
    },
    "owner": "Karon Redmire"
  },
  {
    "id": 95,
    "animal": {
      "English": "Dog, bush",
      "Latin": "Speothos vanaticus"
    },
    "owner": "Dinny Kenvin"
  },
  {
    "id": 96,
    "animal": {
      "English": "Wood pigeon",
      "Latin": "Columba palumbus"
    },
    "owner": "Nydia Colbeck"
  },
  {
    "id": 97,
    "animal": {
      "English": "Jungle cat",
      "Latin": "Felis chaus"
    },
    "owner": "Terri McIleen"
  },
  {
    "id": 98,
    "animal": {
      "English": "Trumpeter, green-winged",
      "Latin": "Psophia viridis"
    },
    "owner": "Guillemette Andreu"
  },
  {
    "id": 99,
    "animal": {
      "English": "Lion, asian",
      "Latin": "Panthera leo persica"
    },
    "owner": "Bink Wheelton"
  },
  {
    "id": 100,
    "animal": {
      "English": "Beaver, eurasian",
      "Latin": "Castor fiber"
    },
    "owner": "Essa Stemson"
  }
]`;