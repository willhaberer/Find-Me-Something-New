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
    //a boogie wit da hoodie, drowning
    {
      artist: "31W5EY0aAly4Qieq6OFu6I",
      track: "1f5cbQtDrykjarZVrShaDI",
      genre: "melodic%20rap",
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
    //atlas, chamomille?
    {
      artist: "395RUhnuJcbFdgp6nYZsih",
      track: "4EO7RCK5zJ9sa1CPRJgqRw",
      genre: "lo-fi%20rap",
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
    //central cee, obsessed with you
    {
      artist: "5H4yInM5zmHqpKIoMNAx4r",
      track: "4PYfFHKfjYz6dwAtZhBy1z",
      genre: "drill%20brasiliero",
      market: "ES",
    },
    //chance the rapper, blessings
    {
      artist: "1anyVhU62p31KFi8MEzkbf",
      track: "2VQc9orzwE6a5qFfy54P6e",
      genre: "chicago%20rap",
      market: "ES",
    },
    //coa, akiba
    {
      artist: "6cHHFikz4JtK0BmU86vnvo",
      track: "6Uh6sqPKqPUxvKue0rZSaP",
      genre: "future%20funk",
      market: "ES",
    },
    //convolk, these girls
    {
      artist: "3ddT1Q3KQAm1G7UcIfz5KJ",
      track: "7B2Fzyv28gmlBlr2aInFcC",
      genre: "dark%20trap",
      market: "ES",
    },
    //convolk, whatever it takes
    {
      artist: "3ddT1Q3KQAm1G7UcIfz5KJ",
      track: "5FkOlv0W1nBqs3mgbksZa4",
      genre: "sad%20lo-fi",
      market: "ES",
    },
    //cosmic boy, can i love
    {
      artist: "305pg6Bs6Mz9Tm2zK66psY",
      track: "4T2cOfemKB0owJS2JOu7dF",
      genre: "k-indie",
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
    //dijon, stranger
    {
      artist: "0knGpCTbmG4ctl1wzYRZs4",
      track: "2TfcFXI1FOsO5HCz4X6uRk",
      genre: "bedroom%20soul",
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
    //felly, sun and good feelin
    {
      artist: "2848adRcxvgWNRcz1g1tQD",
      track: "1uquWTdgoGJ02IOxzr4Zwu",
      genre: "underground%20hip%20hop",
      market: "ES",
    },
    //fleet foxes, montezuma
    {
      artist: "4EVpmkEwrLYEg6jIsiPMIb",
      track: "5Civg4JEWHLe2gqMG5vW6E",
      genre: "chamber%20pop",
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
    //girl in red, i wanna be your girl
    {
      artist: "3uwAm6vQy7kWPS2bciKWx9",
      track: "3h3pOvw6hjOvZxRUseB7h9",
      genre: "bedroom%20pop",
    },
    //g flip, hyperfine
    {
      artist: "4SdIXLzfabqU61iK7SnKAU",
      track: "4iqVQrt8pmzSn8VFkC8jAP",
      genre: "australian%20indie",
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
    //happybirthdaycalvin, no friends
    {
      artist: "6NkldyBEgC6gnCjJeAbM9F",
      track: "0DiOkFvGcmb4s6uRiGgtYH",
      genre: "melodic%20rap",
      market: "ES",
    },
    //hobo, all in my head
    {
      artist: "05SdqPzK4m3k1ljK2wrTSP",
      track: "3P8QdOcYkzETBiG1TA7mhD",
      genre: "sacramento%20hip%20hop",
      market: "ES",
    },
    //hozier, cherry wine
    {
      artist: "2FXC3k01G6Gw61bmprjgqS",
      track: "1C042FLYy7rP3MfnkOcnha",
      genre: "irish%20singer-songwriter",
      market: "ES",
    },
    //ian dior, let you
    {
      artist: "6ASri4ePR7RlsvIQgWPJpS",
      track: "7FCHDXa579YivyHrsxixRp",
      genre: "melodic%20rap",
      market: "ES",
    },
    //ilovefriday, mia khalifa
    {
      artist: "5aaYmOKQc6tyyyitvrjJNE",
      track: "3B9vJvi2Z6ws4wjNTQMYAc",
      genre: "viral%20pop",
      market: "ES",
    },
    //johan bach, violin concerto in a minor
    {
      artist: "5aIqB5nVVvmFsvSdExz408",
      track: "",
      genre: "classical",
      market: "ES",
    },
    //johnnyswim, touching heaven
    {
      artist: "4igDSX1kgfWbVTDCywcBGm",
      track: "6qONjN95Wk5zsOs7pY2Kq3",
      genre: "folk-pop",
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
    //kidd g, teenage dream
    {
      artist: "5edcHuf8pWH3I00WTorajM",
      track: "1P9JOrLMizchG5imSTQqrI",
      genre: "pop%20country",
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
    //limbo, airplane mode
    {
      artist: "13VunSzrVSmJBpUWxUajJF",
      track: "69GQG5cXGUFq4dqCbExWui",
      genre: "lo-fi%20rap",
      market: "ES",
    },
    //lincoln, st. bernard
    {
      artist: "6RcxmUOBnyAQr2rRsNfQI5",
      track: "3JPnVN4wYlmQnuD7OgDx88",
      genre: "emo",
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
    //lovejoy, sex sells
    {
      artist: "33tFkBLsl6f8TjKkV0uF0C",
      track: "6ShHxD0hoJSXajmcpQ5Ri8",
      genre: "dream%20smp",
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
    //marcos g, dancefloor
    {
      artist: "3O2UFvuhmgSDH3q6miqELN",
      track: "2D4F8zNSuIxbAGFHCefluM",
      genre: "alternative%20r%26b",
      market: "ES",
    },
    //mccafferty, brit rock
    {
      artist: "7s3OoIocX1gTOnEvCg2VV8",
      track: "3l6GcuXk1nPF7uVhQGm5iX",
      genre: "alternative%20emo",
      market: "ES",
    },
    //miki fiki, the first time
    {
      artist: "1O1r2qVtIFqlTJoB4jsJKd",
      track: "2A0fhBGmHrrQ1kMQ4QpIjO",
      genre: "nashville%20indie",
      market: "ES",
    },
    //moxas, love curse
    {
      artist: "3XYVGehxrRKN0Rt5Rp7e8w",
      track: "4PwkiQyE09iOcKameCkQAF",
      genre: "sad%20rap",
      market: "ES",
    },
    //myth city, vendetta
    {
      artist: "3JV77XEb1E7bwbZG4tsrga",
      track: "2mA2N1riUnLse8FmSs0Vas",
      genre: "dark%20trap",
      market: "ES",
    },
    //negative xp, Scott Pilgrim
    {
      artist: "6GDYGPbleLhFKnmK4TYhQ7",
      track: "7fJ727E3cIJsYCA2ZhAsAG",
      genre: "5th%20wave%20emo",
      market: "ES",
    },
    //niki, urs
    {
      artist: "2kxP07DLgs4xlWz8YHlvfh",
      track: "50oEtTUNlce4TuZXQoJzXW",
      genre: "indonesian%20r%26b",
      market: "ES",
    },
    //nyk, faded
    {
      artist: "009SHiJ9rvFm3vNwL4SjZx",
      track: "6WpTM7rYFQ4AxBal6B5QHu",
      genre: "malaysian%20hip%20hop",
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
    //peachy, falling for u
    {
      artist: "7gvbCoLA8lJUktp8G2xIRR",
      track: "2xhGZ3WzOa3tir28y7Cb88",
      genre: "bedroom%20pop",
    },
    //ph-1, homebody
    {
      artist: "2u7CP5T30c8ctenzXgEV1W",
      track: "766oOBLBihuZjYuL27CUQM",
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
    //powfu, death bed
    {
      artist: "6bmlMHgSheBauioMgKv2tn",
      track: "7eJMfftS33KTjuF7lTsMCx",
      genre: "bubblegrunge",
      market: "ES",
    },
    //pyotr tchaikovsky, six pieces
    {
      artist: "3MKCzCnpzw3TjUYs2v7vDA",
      track: "1BbQIyPnuhVIlJEqPcY3Ug",
      genre: "classical",
      market: "ES",
    },
    //rei ami, do it right
    {
      artist: "6U1dV7aL68N7Gb0Naq34V5",
      track: "6T3l1Ov2VpZdmqN7PLcMxP",
      genre: "escape%20room",
      market: "ES",
    },
    //rei ami, snowcone
    {
      artist: "6U1dV7aL68N7Gb0Naq34V5",
      track: "00P1RGdQvHcyuW1ililPdI",
      genre: "alt%20z",
      market: "ES",
    },
    //rejjie snow, egyptian luvr
    {
      artist: "3lLHpTOJ11tWiUNGYN14gt",
      track: "78DC9wd9Qrikw4jWllFAvM",
      genre: "indie%20soul",
      market: "ES",
    },
    //ryan caraveo, peanut butter waffles
    {
      artist: "1PDE2MIJ4M6uvFJDrslazf",
      track: "1qRabaD5y56JZzQSm4qB0n",
      genre: "indie%20pop%20rap",
      market: "ES",
    },
    //sam lachow, wrong man
    {
      artist: "42UrF25gDVhovYn4Dd422d",
      track: "2iCsHWWYzSCJ6Z0MyeOv6h",
      genre: "seattle%20hip-hop",
      market: "ES",
    },
    //samsa, butterflies
    {
      artist: "5FN9kuAUamAd4IadVnH4jH",
      track: "3CGAqoFwTRCC9Y8NLZCbPH",
      genre: "lo-fi%20rap",
      market: "ES",
    },
    //scarlxrd, heart attack
    {
      artist: "6rYogEVj60BCIsLukpAnwr",
      track: "7Cq27Qc3WRyQ3ddwVslpVZ",
      genre: "scream%20rap",
    },
    //rozet, rigamarole
    {
      artist: "4LyGWqMGeTHfJXbKQmk6YY",
      track: "1CFlJQumKNMHB9o634moJ9",
      genre: "chill%20pop",
      market: "ES",
    },
    //saiah, cold
    {
      artist: "5ZPYeVqoWNuukwfarvkyJX",
      track: "14FdeSXWFUosFEevBfOyPb",
      genre: "emo%20rap",
      market: "ES",
    },
    //shinigami lite brite
    {
      artist: "0ntNwPE7MYnKrTh59tU2BA",
      track: "4nHsQ4S2gIrSJMitQ2y05d",
      genre: "sad%20rap",
      market: "ES",
    },
    //slowthai, drug dealer
    {
      artist: "3r1XkJ7vCs8kHBSzGvPLdP",
      track: "5LboZSArk5bHQbqQVaI6sz",
      genre: "uk%20hip%20hop",
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
    //smino, amphetamine
    {
      artist: "1ybINI1qPiFbwDXamRtwxD",
      track: "3Zau3JcrZcBfw8aVjKGkSX",
      genre: "alternative%20r%26b",
      market: "ES",
    },
    //s0cliche, ted bundy
    {
      artist: "6VFh5MDegSpfTMvGQ4RGaO",
      track: "181eeiSLgxjV7LXz4F83HX",
      genre: "emo%20rap",
      market: "ES",
    },
    //sonreal, can i get a witness
    {
      artist: "2OlZK0VIzr7wQYSrj9bOvF",
      track: "1xq57PikDPbkU2M1WK4unF",
      genre: "canadian%20hip%20hop",
      market: "ES",
    },
    //soulja boy, crank that
    {
      artist: "6GMYJwaziB4ekv1Y6wCDWS",
      track: "66TRwr5uJwPt15mfFkzhbi",
      genre: "viral%20 rap",
    },
    //spill tab, pistolwhip
    {
      artist: "3qqkHeEhezlIaNj1vFYH2r",
      track: "5me5yFJlnKZr2spcxSbCTW",
      genre: "indie%20pop",
      market: "ES",
    },
    //sub urban. cradles
    {
      artist: "7gXb99Sf9nNmpNYeAgIQFG",
      track: "1y4jsQt7MjnZhiD1L6qFBC",
      genre: "modern%20indie%20pop",
      market: "ES",
    },
    //sueco, primadonna
    {
      artist: "4iDroUFo89Y7YBsdDTBmTD",
      track: "2mM2XCzLaXtiKbqfFqtZOh",
      genre: "cali%20rap",
      market: "ES",
    },
    //superorganism congradulations
    {
      artist: "0Wkm45quqfx3NepJpXDvwE",
      track: "0Pbvf8in42PTcbbv6EKKcG",
      genre: "art%20pop",
      market: "ES",
    },
    //syko, brooklynbloodpop
    {
      artist: "08ZqXO40nMrhBoGma4kls2",
      track: "7K9Z3yFNNLv5kwTjQYGjnu",
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
    //the glove, mr aplhabet says
    {
      artist: "75XeVX3ggxZzH9lS2UTNJa",
      track: "2r8SMYcuQJOflEykRopW8m",
      genre: "dream%20pop",
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
    //tomppabeats, emotional crank
    {
      artist: "0Q2Tc5yZFJpumLMc7Yz4e4",
      track: "34c4wiTY2MQTyVWS2Nuz9u",
      genre: "chillhop",
      market: "ES",
    },
    //trevor something, i want your love
    {
      artist: "6bWylzDlsTfR8khADRQJfd",
      track: "1Mxql2NqKz0iyMeqFJwGYh",
      genre: "popwave",
      market: "ES",
    },
    //turnpike troubadours
    {
      artist: "1YSA4byX5AL1zoTsSTlB03",
      track: "0pghPocTwFg6ckBUs52SQ8",
      genre: "red%20dirt",
      market: "ES",
    },
    //two door cinema club, undercover martian
    {
      artist: "536BYVgOnRky0xjsPT96zl",
      track: "0Hrd6CSafHHqKptyFppmqH",
      genre: "indietronica",
      market: "ES",
    },
    //tyler childers, feathered indians(i dont think thats pc buddy)
    {
      artist: "13ZEDW6vyBF12HYcZRr4EV",
      track: "2tgQaL85WoRfgEa4hFQgrE",
      genre: "kentucky%20indie",
      market: "ES",
    },
    //tyler the creator, glitter
    {
      artist: "4V8LLVI7PbaPR0K2TGSxFF",
      track: "0qtK3XwbuG153dmwB8iepL",
      genre: "hip%20hop",
      market: "ES",
    },
    //tyler the creator, yonkers
    {
      artist: "4V8LLVI7PbaPR0K2TGSxFF",
      track: "1nwkSqzTyXBk6XF796EOav",
      genre: "hip%20hop",
      market: "ES",
    },
    //typhoon, rorschach
    {
      artist: "6p6WlxIkeWH8yOYvciFfVl",
      track: "1rjZcJaoQMXY2sGfPAZ7K8",
      genre: "portland%20indie",
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
    //yeek, cleaner air
    {
      artist: "5BhFZpE8kUGZJiKOsYjLQM",
      track: "3uwrczwM9A3xX63jlcRhIC",
      genre: "alternative%20r%26b",
    },
    //yameii online,floozie
    {
      artist: "141ww9EOPLPetF8mMt1gKF",
      track: "2ZnBZWmkgLax15pVOclihg",
      genre: "glitchcore",
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
    //zoya, bad girls dream
    {
      artist: "1pgxAcdxuIlb6Ax2xioK30",
      track: "0EaOkfIACboNlmuatu20Wt",
      genre: "kentucky%20hip%20hop",
      market: "ES",
    },
  ];

  return seedList[Math.floor(Math.random() * seedList.length)];
};
