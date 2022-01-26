export const getRandomSeed = async () => {
  var seedList = [
    //100 gecs, money machine
    {
      artist: "6PfSUFtkMVoDkx4MQkzOi3",
      track: "61bwFjzXGG1x2aZsANdLyl",
      genre: "hyperpop",
      market: "ES",
    },
    //100 gecs, ringtone remix
    {
      artist: "6PfSUFtkMVoDkx4MQkzOi3",
      track: "2T93MtJuKMzcGRTR8fdizV",
      genre: "dance%20pop",
      market: "ES",
    },
    //8485, 1:15
    {
      artist: "3LwiPwIJNshV4ItekGcIMo",
      track: "0TNFCRzOnlgu7W1K47sFnY",
      genre: "hyperpop",
      market: "ES",
    },
    //8485, instant sobriety
    {
      artist: "3LwiPwIJNshV4ItekGcIMo",
      track: "75Kx1FtkVw9EWYTWV9stYG",
      genre: "hyperpop",
      market: "ES",
    },
    //alabama, dixieland delight
    {
      artist: "6rJqqRce0Kvo2dJUXoHleC",
      track: "0bM1z18RQpr61UuI1LemIK",
      genre: "country",
      market: "ES",
    },
    //andi weiss trio
    {
      artist: "7pMhB3Lo7q9XPC4pbNdRlp",
      track: "628mswwaHdp8bFEKsOCwCa",
      genre: "jazz",
      market: "ES",
    },
    //aries, bad news
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "60ZppukPfY43NDU9meKJrz",
      genre: "emo%20rap",
      market: "ES",
    },
    //aries, eta
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "7a5TsU5Nw3VPrR1HH7mHJN",
      genre: "emo",
      market: "ES",
    },
    //aries, riding
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "4JnX8tY9me7jHqDwgifhwU",
      genre: "pop",
      market: "ES",
    },
    //audrey nuna, damn right
    {
      artist: "0Wwji82sLA0Hcvtuak3omb",
      track: "01ukVTKa6DhejzNulpoG2t",
      genre: "modern%20indie%20pop",
      market: "ES",
    },
    //audrey nuna, space
    {
      artist: "0Wwji82sLA0Hcvtuak3omb",
      track: "0mvKoOMnjfGtgTEUQAHWMs",
      genre: "chill%20r%26b",
      market: "ES",
    },
    //balue, man in the sixties
    {
      artist: "06dIgxVtLtZPa5FUIJxqtc",
      track: "1s9U4QrS2iqXEPuKK7PPLS",
      genre: "indie%20garage%20rock",
      market: "ES",
    },
    //bea miller, feels like home
    {
      artist: "1o2NpYGqHiCq7FoiYdyd1x",
      track: "0T9un1tCka7l3lwsJmmLLU",
      genre: "electropop",
      market: "ES",
    },
    //billy joel, vienna
    {
      artist: "6zFYqv1mOsgBRQbae3JJ9e",
      track: "4U45aEWtQhrm8A5mxPaFZ7",
      genre: "piano%20rock",
      market: "ES",
    },
    //brackence, argyle
    {
      artist: "4kqFrZkeqDfOIEqTWqbOOV",
      track: "5PlTDE2RLbcC9vBzbGAG4y",
      genre: "emo",
      market: "ES",
    },
    //brackence, ginger tea
    {
      artist: "4kqFrZkeqDfOIEqTWqbOOV",
      track: "6GVW5k7CvUbUCt10bSUIIW",
      genre: "emo",
      market: "ES",
    },
    //coa, akiba
    {
      artist: "6cHHFikz4JtK0BmU86vnvo",
      track: "6Uh6sqPKqPUxvKue0rZSaP",
      genre: "future%20funk",
      market: "ES",
    },
    //deb never, dissasociate
    {
      artist: "55EarwWraRQY9diMo9Oeul",
      track: "048XKTNqohTNP6C5ny0W0c",
      genre: "indie%20r%26b",
      market: "ES",
    },
    //deb never, sorry
    {
      artist: "55EarwWraRQY9diMo9Oeul",
      track: "0CvL2Y2RKLflLw7dBMemaF",
      genre: "pop",
      market: "ES",
    },
    //evisbeats, can you see it, japanese market
    {
      artist: "3dkhk6RTgOerN0NQEmt8Nc",
      track: "0kTC9iCNOcwuQOkQGGUh1J",
      genre: "j-rap",
      market: "JP",
    },
    //evisbeats, can you see it, english market
    {
      artist: "3dkhk6RTgOerN0NQEmt8Nc",
      track: "0kTC9iCNOcwuQOkQGGUh1J",
      genre: "j-rap",
      market: "ES",
    },
    //florence and the machine, never let me go
    {
      artist: "1moxjboGR7GNWYIMWsRjgG",
      track: "6cC9RY7MoUx5z3aHjDTNI6",
      genre: "barouque%20pop",
      market: "ES",
    },
    //francis and the lights, may i have this dance
    {
      artist: "23EA28263XvtIrXuySX6oI",
      track: "0VaIsQoIQY10uxBrOyZ5cQ",
      genre: "alternative%20r%26b",
      market: "ES",
    },
    //girlfriends, jessica
    {
      artist: "4Dwhb9SL7iO3L27oXvEiO7",
      track: "6yxywHX0rto296j9LsM3Pt",
      genre: "pop%20punk",
      market: "ES",
    },
    //guardin, it rained and it poured
    {
      artist: "6zqcGQ6MH6yetBUoquMnL7",
      track: "43vw4OMZIpjQ4KKcIWKVcl",
      genre: "lo-fi",
      market: "ES",
    },
    //johan bach, violin concerto in a minor
    {
      artist: "5aIqB5nVVvmFsvSdExz408",
      track: "",
      genre: "classical",
      market: "ES",
    },
    //joji run
    {
      artist: "3MZsBdqDrRTJihTHQrO6Dq",
      track: "6p8eEdiZLKJH8tcjGZuNTK",
      genre: "alternative%20r%26b",
      market: "ES",
    },
    //jon bellion, all time low
    {
      artist: "50JJSqHUf2RQ9xsHs0KMHg",
      track: "0SuLAslEMFZAXf0SwY7syi",
      genre: "pop%20rap",
      market: "ES",
    },
    //kanye, ultralight beam
    {
      artist: "5K4W6rqBFWDnAN6FQUkS6x",
      track: "1eQBEelI2NCy7AUTerX0KS",
      genre: "r%26b",
      market: "ES",
    },
    //kailee morgue, black sheep
    {
      artist: "245PKF3hKjtxJKIG153kF0",
      track: "1HVrRO2uuCl3PslkOKEdjE",
      genre: "alt%20z",
      market: "ES",
    },
    //kailee morgue, fuck you
    {
      artist: "245PKF3hKjtxJKIG153kF0",
      track: "3jmEsXBxrm4aKu2hC0TaAy",
      genre: "indie%20pop",
      market: "ES",
    },
    //kenny hoopla, estella
    {
      artist: "5ObBtv5VunwwhQaXXnUrsM",
      track: "4v2Bq0xDB7uNN73I5b44Du",
      genre: "modern%20rock",
      market: "ES",
    },
    //kero kero bonito
    {
      artist: "6OqhFYFJDnBBHas02HopPT",
      track: "3AaiEsiqHO2ylnnOdWninE",
      genre: "art%20pop",
      market: "ES",
    },
    //lil nas x, montero
    {
      artist: "7jVv8c5Fj3E9VhNjxT4snq",
      track: "1SC5rEoYDGUK4NfG82494W",
      genre: "pop%20rap",
      market: "ES",
    },
    //lil peep, beamer boy
    {
      artist: "2kCcBybjl3SAtIcwdWpUe3",
      track: "7hf89cT5FEmLV5E9fjrjG7",
      genre: "emo%20rap",
      market: "ES",
    },
    //lolo zouai, caffeine
    {
      artist: "2qDIR2WlcW3llkGqJWg9VJ",
      track: "0wEPue9rjGWgvRYNgvsUfw",
      genre: "pop",
      market: "ES",
    },
    //lolo zouai, high highs
    {
      artist: "2qDIR2WlcW3llkGqJWg9VJ",
      track: "2aGNR8A6GnHqoM78T31CCC",
      genre: "pop%2Cr%26b",
      market: "ES",
    },
    //luke combs, when it rains
    {
      artist: "718COspgdWOnwOFpJHRZHS",
      track: "1mMLMZYXkMueg65jRRWG1l",
      genre: "country",
      market: "ES",
    },
    //lustra, scotty doesnt know
    {
      artist: "3IJ770I1QPmwVp7yug0eJ4",
      track: "1LkoYGxmYpO6QSEvY5C0Zl",
      genre: "punk",
      market: "ES",
    },
    //lxst, last time
    {
      artist: "2vxh38hZKAV0DlSpnv7cqT",
      track: "2nYbkkGVP8jK2ER1RYOOm4",
      genre: "emo%20rap",
      market: "ES",
    },
    //miki fiki, the first time
    {
      artist: "1O1r2qVtIFqlTJoB4jsJKd",
      track: "2A0fhBGmHrrQ1kMQ4QpIjO",
      genre: "nashville%20indie",
      market: "ES",
    },
    //negative xp, Scott Pilgrim
    {
      artist: "6GDYGPbleLhFKnmK4TYhQ7",
      track: "7fJ727E3cIJsYCA2ZhAsAG",
      genre: "5th%20wave%20emo",
      market: "ES",
    },
    //old crow medicine show, wagon wheel
    {
      artist: "4DBi4EYXgiqbkxvWUXUzMi",
      track: "359krpyCKcFF8SFvqWES9L",
      genre: "bluegrass,country",
      market: "ES",
    },
    //panucci's pizza, naruto themed sexting
    {
      artist: "5GLpYMkUSUNq5kLLeBovSi",
      track: "3yoGVIY5OrRIBvNA9PYOS7",
      genre: "lo-fi%20indie",
      market: "ES",
    },
    //poor man's poison, feed the machine
    {
      artist: "0YHgnSkV3S5mvSSCTRWDi5",
      track: "4xe3UHiQOH2RNBXcuAKDvG",
      genre: "deathgrass",
      market: "ES",
    },
    //poor man's poison, give and take
    {
      artist: "0YHgnSkV3S5mvSSCTRWDi5",
      track: "4xe3UHiQOH2RNBXcuAKDvG",
      genre: "folk",
      market: "ES",
    },
    //pyotr tchaikovsky, six pieces
    {
      artist: "3MKCzCnpzw3TjUYs2v7vDA",
      track: "1BbQIyPnuhVIlJEqPcY3Ug",
      genre: "classical",
      market: "ES",
    },
    //rejjie snow, egyptian luvr
    {
      artist: "3lLHpTOJ11tWiUNGYN14gt",
      track: "78DC9wd9Qrikw4jWllFAvM",
      genre: "indie%20soul",
      market: "ES",
    },
    //shinigami lite brite
    {
      artist: "0ntNwPE7MYnKrTh59tU2BA",
      track: "4nHsQ4S2gIrSJMitQ2y05d",
      genre: "sad%20rap",
      market: "ES",
    },
    //slush puppy, juliette
    {
      artist: "58eJhHRICp87T2IFcP0bYh",
      track: "1Po2n7GxUAf6snaUxYekd5",
      genre: "social%20indie",
      market: "ES",
    },
    //slush puppy, eat spit
    {
      artist: "58eJhHRICp87T2IFcP0bYh",
      track: "6GVW5k7CvUbUCt10bSUIIW",
      genre: "glitchcore",
      market: "ES",
    },
    //s0cliche, ted bundy
    {
      artist: "6VFh5MDegSpfTMvGQ4RGaO",
      track: "181eeiSLgxjV7LXz4F83HX",
      genre: "emo%20rap",
      market: "ES",
    },
    //superorganism congradulations
    {
      artist: "0Wkm45quqfx3NepJpXDvwE",
      track: "0Pbvf8in42PTcbbv6EKKcG",
      genre: "art%20pop",
      market: "ES",
    },
    //the backseat lovers, kilby girl
    {
      artist: "6p2HnfM955TI1bX34dkLnI",
      track: "1170VohRSx6GwE6QDCHPPH",
      genre: "indie%20pop",
      market: "ES",
    },
    //the backseat lovers, poolhouse
    {
      artist: "6p2HnfM955TI1bX34dkLnI",
      track: "74f0dpqHhTeTJzs4pmZ1yq",
      genre: "slc%20indie",
      market: "ES",
    },
    //the longest johns, wellerman
    {
      artist: "5k979N1TnPncUyqlXlaRSv",
      track: "6ZblDQM0Gq0daaPAwuHOmD",
      genre: "shanty",
      market: "ES",
    },
    //the lumineers, ophelia
    {
      artist: "16oZKvXb6WkQlVAjwo2Wbg",
      track: "3d8y0t70g7hw2FOWl9Z4Fm",
      genre: "folk-pop",
      market: "ES",
    },
    //tm88, slayerr
    {
      artist: "5RMUeKq0dZxg9RHE1f0B9P",
      track: "5X2I1TVUkchLBggRTCMYem",
      genre: "trap",
      market: "ES",
    },
    //tobi lou, darling
    {
      artist: "4T8NIfZmVY6TJFqVzN6X49",
      track: "0eGrwX4kf5sV1faR5tZDp3",
      genre: "alternative%20r%26b",
      market: "ES",
    },
    //turnpike troubadours
    {
      artist: "1YSA4byX5AL1zoTsSTlB03",
      track: "0pghPocTwFg6ckBUs52SQ8",
      genre: "red%20dirt",
      market: "ES",
    },
    //waterparks, i miss having sex
    {
      artist: "3QaxveoTiMetZCMp1sftiu",
      track: "2Rmw7J0krEU75ffhkaK93D",
      genre: "pop%20punk",
      market: "ES",
    },
    //waterparks, royal
    {
      artist: "3QaxveoTiMetZCMp1sftiu",
      track: "1CMj3RNTdHBnLU7hoZjjKY",
      genre: "alt%20z",
      market: "ES",
    },
    //watsky, welcome to the family
    {
      artist: "3mJ9GlkLzj8Ka7Z7EQaCMi",
      track: "5RLfHNaPMYfdovGoTjqNpe",
      genre: "abstract%20hip%20hop",
      market: "ES",
    },
    //wintertime, u times 2
    {
      artist: "1XNVFs9EIrPqDsmARzDKR7",
      track: "14riV39U9xWcaDEKlaRi1L",
      genre: "underground%20hip%20hop",
      market: "ES",
    },
    //wintertime, wintertime
    {
      artist: "1XNVFs9EIrPqDsmARzDKR7",
      track: "5PhaNiFYyQSAPWkTFVwjMb",
      genre: "vapor%20trap",
      market: "ES",
    },
    //wet, larabar
    {
      artist: "2i9uaNzfUtuApAjEf1omV8",
      track: "40AqvlNZuYdCyo9gbCzOlw",
      genre: "indie",
      market: "ES",
    },
    //xxxtentacion, jocelyn flores
    {
      artist: "15UsOTVnJzReFVN1VCnxy4",
      track: "7m9OqQk4RVRkw9JJdeAw96",
      genre: "emo%20rap",
      market: "ES",
    },
    //xxxtentacion, SAD!
    {
      artist: "15UsOTVnJzReFVN1VCnxy4",
      track: "3ee8Jmje8o58CHK66QrVC2",
      genre: "emo%20rap",
      market: "ES",
    },
    //young thug, wyclef jean
    {
      artist: "50co4Is1HCEo8bhOyUWKpn",
      track: "55OdqrG8WLmsYyY1jijD9b",
      genre: "atl%20hip%20hop",
      market: "ES",
    },
    //yung pinch, nightmares
    {
      artist: "61qMnYXa1GxSBoV3IiYKjZ",
      track: "0qy1xNhQvnRhEpvKxdXYUR",
      genre: "vapor%20trap",
      market: "ES",
    },
  ];

  return seedList[Math.floor(Math.random() * seedList.length)];
};
