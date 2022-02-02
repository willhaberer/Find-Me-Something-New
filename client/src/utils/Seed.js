export const getRandomSeed = async () => {
  var seedList = [
    //50landing, re:birth
    {
      artist: "5aTRa02UP1y6PW5klZiTt0",
      track: "5bwSx1hwmUivlUgY9UhfEB",
      genre: "sad%20lo-fi",
      market: "ES",
    },
    //93FeetofSmoke, PPL THT I LUV THE MOST
    {
      artist: "0plNgbIlOc13T8ot3vyK79",
      track: "3NvHc9CBl9U1o80jcEcgAP",
      genre: "emo%20rap",
      market: "ES",
    },
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
      genre: "emo%20rap",
      market: "ES",
    },
    //aries, riding
    {
      artist: "3hOdow4ZPmrby7Q1wfPLEy",
      track: "4JnX8tY9me7jHqDwgifhwU",
      genre: "pop",
      market: "ES",
    },
    //asl, elevate
    {
      artist: "2XxgHIPXNgHGbvtBBGZrKm",
      track: "0BLR9Bfj4rEdp2LK7sACfY",
      genre: "vapor%20soul",
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
    //august 08, 21
    {
      artist: "2iB8eFB6flwQculkUrRssi",
      track: "0yhaMbopctRNQOhMvJxa5M",
      genre: "la%20pop",
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
    //bibi, bad sad and mad
    {
      artist: "6UbmqUEgjLA6jAcXwbM1Z9",
      track: "0zPbUxvYRlCGwruakkXPLI",
      genre: "korean%20r%26b",
      market: "ES",
    },
    //bibi, kazino
    {
      artist: "6UbmqUEgjLA6jAcXwbM1Z9",
      track: "245onUPHGD1DYuiacxTuW0",
      genre: "korean%20hip%20hop",
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
    //brent faiyaz, trust
    {
      artist: "3tlXnStJ1fFhdScmQeLpuG",
      track: "0oufSLnKQDoBFX5mgkDCgR",
      genre: "dmv%20rap",
      market: "ES",
    },
    //call me karizma, frank ocean
    {
      artist: "5fENlrINIVP0gJOtKxvORt",
      track: "1jKBiK0Yk6VCcBfJOgBUbs",
      genre: "minnesota%20hip%20hop",
      market: "ES",
    },
    //caroline polachek, bunny is a rider
    {
      artist: "4Ge8xMJNwt6EEXOzVXju9a",
      track: "1rYABrDmfqVmJMwaNJBUUb",
      genre: "art%20pop",
      market: "ES",
    },
    //cavetown, juliet
    {
      artist: "2hR4h1Cao2ueuI7Cx9c7V8",
      track: "45ROR8UMn60YEVQnDy0uVF",
      genre: "indie%20pop",
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
    //chloe george, ghost town (voice memo)
    {
      artist: "5VZn4mB8pS40aE0kujdX2Y",
      track: "0PKAijroHpnEtdY20bkGdr",
      genre: "bedroom%20pop",
      market: "ES",
    },
    //coa, akiba
    {
      artist: "6cHHFikz4JtK0BmU86vnvo",
      track: "6Uh6sqPKqPUxvKue0rZSaP",
      genre: "future%20funk",
      market: "ES",
    },
    //cody fry, underground
    {
      artist: "7dOCnyDR2oEa1hQlvTXvdT",
      track: "4An9H5fsEyJZTXtclokIaL",
      genre: "indiecoustica",
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
    //destiny rogers, tomboy
    {
      artist: "6gezkje7GoJlQbHBgLXHuu",
      track: "5Ti3fqGTfjUsSdylFNy0Ng",
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
    //epik high, rosario
    {
      artist: "5snNHNlYT2UrtZo5HCJkiw",
      track: "0OWBz5FCeATA2zhHgAk7Uh",
      genre: "k-rap",
      market: "ES",
    },
    //eryn martin, kid
    {
      artist: "58nhaWrZa0dN2OxZ1Pr2Ph",
      track: "39raAY35hOHPt5MeAGhN4x",
      genre: "witch%20house",
      market: "ES",
    },
    //eryn martin, ball
    {
      artist: "58nhaWrZa0dN2OxZ1Pr2Ph",
      track: "3CL4OEx96xE6eO9vrHunJY",
      genre: "drift%20phonk",
      market: "ES",
    },
    //eskelite, real bad
    {
      artist: "2rmjTX3kwY6K9Oc8f20lyI",
      track: "2xriQdMi94ARzvXR7sRLZK",
      genre: "alt%20z",
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
    //guardin, i think your really cool like
    {
      artist: "6zqcGQ6MH6yetBUoquMnL7",
      track: "78cIbVjU1xn7mbQ9i35avl",
      genre: "sad%20rap",
      market: "ES",
    },
    //guardin, it rained and it poured
    {
      artist: "6zqcGQ6MH6yetBUoquMnL7",
      track: "43vw4OMZIpjQ4KKcIWKVcl",
      genre: "lo-fi",
      market: "ES",
    },
    //hakone, iko
    {
      artist: "7CWzXEtz9IgGotcYUQuixF",
      track: "2Xk7sNFHnDIhnbMgzjGG7m",
      genre: "japanese%20chillhop",
      market: "ES",
    },
    //happybirthdaycalvin, no friends
    {
      artist: "6NkldyBEgC6gnCjJeAbM9F",
      track: "0DiOkFvGcmb4s6uRiGgtYH",
      genre: "melodic%20rap",
      market: "ES",
    },
    //headband andy, level up
    {
      artist: "1yGHqqvb0V7V4u2PBaprSm",
      track: "4A5R3goR8BvAr85pK4IvDK",
      genre: "pluggnb",
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
    //iyla, juice
    {
      artist: "4LXBFNxqvOcdBVpbgKn6op",
      track: "2wG9CUSBZaF15R2ohLAnoe",
      genre: "pop%20soul",
      market: "ES",
    },
    //johan bach, violin concerto in a minor
    {
      artist: "5aIqB5nVVvmFsvSdExz408",
      track: "28XMNc5If5BmJWYDU42gkw",
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
    //jvke, this is what falling in love feels like
    {
      artist: "164Uj4eKjl6zTBKfJLFKKK",
      track: "4UG2Fm0E98LhE2dlNxiAXx",
      genre: "modern%20indie%20pop",
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
    //kygo, higher love
    {
      artist: "23fqKkggKUBHNkbKtXEls4",
      track: "1kKYjjfNYxE0YYgLa7vgVY",
      genre: "edm",
      market: "ES",
    },
    //leanna firestone, diet coke
    {
      artist: "31431J9PD3bfNsPKkezt0d",
      track: "2e2Yza515Src4ljQmj6VnE",
      genre: "alt%20z",
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
    //lova, you me and the silence
    {
      artist: "1l2NYhptmHjo64MDOcej1x",
      track: "1GMahQSDyvcn5TIQWxZW0Z",
      genre: "swedish%20pop",
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
    //lund, fiction
    {
      artist: "5uLkZ7FWMTBUg1corQqdkR",
      track: "31Z75ehoSqIwC1bsRESbKM",
      genre: "sad%20rap",
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
    //maasho, fresh air
    {
      artist: "1JREmglx633MGQB73njWtE",
      track: "1NFNa1nGPnwdmcHO5XQ7Ui",
      genre: "chill%20r%26b",
      market: "ES",
    },
    //mac miller, self care
    {
      artist: "4LLpKhyESsyAXpc4laK94U",
      track: "5bJ1DrEM4hNCafcDd1oxHx",
      genre: "pittsburgh%20rap",
      market: "ES",
    },
    //maggie lindemann, scissors
    {
      artist: "0uGk2czvcpWQA383Im6ajf",
      track: "3FYFaLFmpwKFb5MNAvoHH0",
      genre: "dark%20pop",
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
    //misogi, heart chained
    {
      artist: "778Snztf3N5DXp0kHGFl3g",
      track: "6VubQcwYpNlhdOLDCdOLQp",
      genre: "vapor%20twitch",
      market: "ES",
    },
    //monsieur perine, nuestra cancion
    {
      artist: "36KsCCwgI0Dep97yVJWmkK",
      track: "5reQI13tWWYDLMrGcUF4Mk",
      genre: "gypsy%20jazz",
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
    //nina cbham, sola
    {
      artist: "4ETeWE9SAfaNU7XQ1RB2wq",
      track: "52LsiDJXROMrUGE5tMyXk9",
      genre: "chill%20pop",
      market: "ES",
    },
    //nyk, faded
    {
      artist: "009SHiJ9rvFm3vNwL4SjZx",
      track: "6WpTM7rYFQ4AxBal6B5QHu",
      genre: "malaysian%20hip%20hop",
      market: "ES",
    },
    //oasis, wonderwall
    {
      artist: "2DaxqgrOhkeH0fpeiQq2f4",
      track: "7ygpwy2qP3NbrxVkHvUhXY",
      genre: "beatlesque",
      market: "ES",
    },
    //old crow medicine show, wagon wheel
    {
      artist: "4DBi4EYXgiqbkxvWUXUzMi",
      track: "359krpyCKcFF8SFvqWES9L",
      genre: "bluegrass",
      market: "ES",
    },
    //panucci's pizza, naruto themed sexting
    {
      artist: "5GLpYMkUSUNq5kLLeBovSi",
      track: "3yoGVIY5OrRIBvNA9PYOS7",
      genre: "lo-fi%20indie",
      market: "ES",
    },
    //passion pit, take a walk
    {
      artist: "7gjAu1qr5C2grXeQFFOGeh",
      track: "4Sfa7hdVkqlM8UW5LsSY3F",
      genre: "indietronica",
      market: "ES",
    },
    //payday, beam
    {
      artist: "6I7IZDntAGBmzkCANUmtV0",
      track: "1IIw5oVR1xE4bzdl4JgGsc",
      genre: "modern%20alternative%20pop",
      market: "ES",
    },
    //peachy, falling for u
    {
      artist: "7gvbCoLA8lJUktp8G2xIRR",
      track: "2xhGZ3WzOa3tir28y7Cb88",
      genre: "bedroom%20pop",
    },
    //peter mcpoland, romeo & jules
    {
      artist: "23E65IfLBGQv0FBrMwCcG2",
      track: "1VyA8mbSyXOdJx2lguR8Uu",
      genre: "indie%20pop",
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
    //rendevous at two, fuck me and feed me
    {
      artist: "2EcDZA7LVlXzUhOqYzhNGK",
      track: "5XsOabntixaKUgvZT5ZzBO",
      genre: "bedroom%20soul",
      market: "ES",
    },
    //rina sawayama, xs
    {
      artist: "2KEqzdPS7M5YwGmiuPTdr5",
      track: "1TWNKyNQOBfNUkWWs7FooF",
      genre: "electropop",
      market: "ES",
    },
    //ritto, go okinawa
    {
      artist: "0JfcwgDA6dft6cPZy1kyZZ",
      track: "63XKpMN97iDaZp7xVwzWxf",
      genre: "japanese%20underground%20rap",
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
    //sheet boss, rush e
    {
      artist: "3637OEmwj1q0HinT4YIx5f",
      track: "7CBN7Kwx1g8SBJZyUbhHc6",
      genre: "otacore",
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
    //sorry mom, awesome party dude
    {
      artist: "0KZzhF4tqJGaVOrXXONmCX",
      track: "1cyTyUOrmd1xrXWcowEIR4",
      genre: "indie%20punk",
    },
    //soulja boy, crank that
    {
      artist: "6GMYJwaziB4ekv1Y6wCDWS",
      track: "66TRwr5uJwPt15mfFkzhbi",
      genre: "viral%20rap",
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
    //the blossom, still with you
    {
      artist: "7lq7hz0Z6rG6v9zbJRRn4K",
      track: "2rH5V5b9LaYu3NhGKqigd8",
      genre: "modern%20alternative%20pop",
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
      genre: "sea%20shanty",
      market: "ES",
    },
    //the lumineers, ophelia
    {
      artist: "16oZKvXb6WkQlVAjwo2Wbg",
      track: "3d8y0t70g7hw2FOWl9Z4Fm",
      genre: "folk-pop",
      market: "ES",
    },
    //the smashing pumpkins, zero
    {
      artist: "40Yq4vzPs9VNUrIBG5Jr2i",
      track: "4YFcGTdgmEuw8xTO4XrxbB",
      genre: "alternative%20rock",
      market: "ES",
    },
    //the submarines, 1940 amplive remix
    {
      artist: "6D9Y5lqXKgJv8CV6Ur59oS",
      track: "6CTbvxcE6JlTM4cdHZry58",
      genre: "la%20indie",
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
