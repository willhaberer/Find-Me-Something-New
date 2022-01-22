export const getRandomSeed = async () => {
  var seedList = [
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
    //balue, man in the sixties
    {
      artist: "06dIgxVtLtZPa5FUIJxqtc",
      track: "1s9U4QrS2iqXEPuKK7PPLS",
      genre: "indie%20garage%20rock",
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
    //kenny hoopla, estella
    {
      artist: "5ObBtv5VunwwhQaXXnUrsM",
      track: "4v2Bq0xDB7uNN73I5b44Du",
      genre: "modern%20rock",
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
    //lxst, last time
    {
      artist: "2vxh38hZKAV0DlSpnv7cqT",
      track: "2nYbkkGVP8jK2ER1RYOOm4",
      genre: "emo%20rap",
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
    //tm88, slayerr
    {
      artist: "5RMUeKq0dZxg9RHE1f0B9P",
      track: "5X2I1TVUkchLBggRTCMYem",
      genre: "trap",
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
    //wet, larabar
    {
      artist: "2i9uaNzfUtuApAjEf1omV8",
      track: "40AqvlNZuYdCyo9gbCzOlw",
      genre: "indie",
      market: "ES",
    },
  ];

  return seedList[Math.floor(Math.random() * seedList.length)];
};
