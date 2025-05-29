const characters = [
    {
        name: 'Bolt',
        team: 'Electro Rodeo',
        level: 43,
        species: {
            s1: 'Plusle',
            s2: 'Yamper',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: 'The leader of Electro Rodeo. Bolt landed in Krongar after a series of events, and is now looking to adjust to life in this new world he\'s arrived in.',
        ability: 'Ball Fetch',
        moves: {
            m1: {
                mname: 'Swift',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Electro Ball',
                mtype: 'Electric'
            },
            m3: {
                mname: 'Thunderbolt',
                mtype: 'Electric'
            },
            m4: {
                mname: 'Wild Charge',
                mtype: 'Electric'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/thumbnails/86741940_eB0.png?1723150365',
        link: 'https://toyhou.se/28659751.bolt'
    },
    {
        name: 'Jolt',
        team: 'Electro Rodeo',
        level: 26,
        species: {
            s1: 'Minun',
            s2: 'Yamper',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: 'The co-founder of Electro Rodeo. He\'s currently trying to find a way home after landing in Krongar, and is hoping to bring his brother home with him.',
        ability: 'Volt Absorb',
        moves: {
            m1: {
                mname: 'Encore',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Spark',
                mtype: 'Electric'
            },
            m3: {
                mname: 'Switcheroo',
                mtype: 'Dark'
            },
            m4: {
                mname: 'Roar',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28659761?1723150368',
        link: 'https://toyhou.se/28659761.jolt'
    },
    {
        name: 'Virus',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Skitty',
            s2: 'Zeraora',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Normal',
            t2: 'Electric',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: 'A native of Krongar. She\'s primarily lived in isolation out of personal comfort, but occasionally joins on Electro Rodeo expeditions.',
        ability: 'Wonder Skin',
        moves: {
            m1: {
                mname: 'Fake Out',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Power-Up Punch',
                mtype: 'Fighting'
            },
            m3: {
                mname: 'Snarl',
                mtype: 'Dark'
            },
            m4: {
                mname: 'Spark',
                mtype: 'Electric'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28681988?1723674222',
        link: 'https://toyhou.se/5812319.virus/28681988.destruction-call-au'
    },
    {
        name: 'Covalent',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Togedemaru',
            s2: 'Minun',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: 'Steel',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: 'A native of Krongar. He tends to play pranks on others, but can get his act together when necessary. He helps guide Bolt and Jolt around Krongar alongside Virus.',
        ability: 'Lightning Rod',
        moves: {
            m1: {
                mname: 'Play Nice',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Thunder Wave',
                mtype: 'Electric'
            },
            m4: {
                mname: 'Nuzzle',
                mtype: 'Electric'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/7750271?1596429501',
        link: 'https://toyhou.se/7750271.covalent/28772617.destruction-call-au'
    },
    {
        name: 'Heather',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Fomantis',
            s2: 'Rotom',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Grass',
            t2: 'Electric',
            t3: 'Ghost',
            t4: ''
        },
        gen: 'female',
        blurb: 'A member of Electro Rodeo. She arrived in Krongar one day and decided that it was to be her home. She hasn\'t really thought of leaving.',
        ability: 'Contrary',
        moves: {
            m1: {
                mname: 'Leafage',
                mtype: 'Grass'
            },
            m2: {
                mname: 'Double Team',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Fury Cutter',
                mtype: 'Bug'
            },
            m4: {
                mname: 'Thunder Shock',
                mtype: 'Electric'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/7764835?1596561860',
        link: 'https://toyhou.se/7764835.heather/28773012.destruction-call-au'
    },
    {
        name: 'Mia',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Plusle',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: 'A native of Krongar and "camp mom" of Electro Rodeo. Being afflicted with Dungeon Madness, she rarely goes into dungeon explorations, and will only go if she\'s not certain that it\'s safe.',
        ability: 'Plus',
        moves: {
            m1: {
                mname: 'Thunder Wave',
                mtype: 'Electric'
            },
            m2: {
                mname: 'Helping Hand',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Nuzzle',
                mtype: 'Electric'
            },
            m4: {
                mname: 'Play Nice',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/5679002?1606757028',
        link: 'https://toyhou.se/5679002.'
    },
    {
        name: 'Vanilla',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Pachirisu',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: 'A native of Krongar. She was created by an ice cream store owner who wanted a mascot for their store. However, the store owner grew to love Vanilla as their own child, and thus allows her to pursue her own path.',
        ability: 'Pickup',
        moves: {
            m1: {
                mname: 'Growl',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Baby-Doll Eyes',
                mtype: 'Fairy'
            },
            m3: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8895097?1605632371',
        link: 'https://toyhou.se/8895097.'
    },
    {
        name: 'Zee',
        team: 'Electro Rodeo',
        level: 5,
        species: {
            s1: 'Jolteon',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Electric',
            t2: 'Bug',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: 'A Krongar native. He doesn\'t exactly like to hang around others. He joined Electro Rodeo in hopes to be able to make new friends.',
        ability: 'Quick Feet',
        moves: {
            m1: {
                mname: 'Thunder Shock',
                mtype: 'Electric'
            },
            m2: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Double-Edge',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Sand Attack',
                mtype: 'Ground'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/30830702?1735415197',
        link: 'https://toyhou.se/24378519.z/30830702.zee'
    },
    {
        name: 'Blossom',
        team: 'None',
        level: 25,
        species: {
            s1: 'Litten',
            s2: 'Sprigatito',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Fire',
            t2: 'Grass',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: 'Blossom moved to Krongar from another region. As young as she is, her parents are never far from view. Being the child of explorers, Blossom also strives to go down the same destiny.',
        ability: 'Protean',
        moves: {
            m1: {
                mname: 'Scratch',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Ember',
                mtype: 'Fire'
            },
            m3: {
                mname: 'Leafage',
                mtype: 'Grass'
            },
            m4: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/21663252?1729370838',
        link: 'https://toyhou.se/21663252.blossom'
    },
    {
        name: 'Flutura',
        team: 'None',
        level: 5,
        species: {
            s1: 'Butterfree',
            s2: 'Skwovet',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Bug',
            t2: 'Flying',
            t3: 'Normal',
            t4: ''
        },
        gen: 'n/a',
        blurb: 'A Krongar native. Flutura usually hangs around the shopping district, hoping to find a good bargin.',
        ability: 'Compound Eyes',
        moves: {
            m1: {
                mname: 'Bug Bite',
                mtype: 'Bug'
            },
            m2: {
                mname: 'Supersonic',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Bite',
                mtype: 'Dark'
            },
            m4: {
                mname: 'Tackle',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28772339?1723698154',
        link: 'https://toyhou.se/8747259.flutura/28772339.destruction-call-au'
    },
    {
        name: 'Aurora',
        team: 'None',
        level: 5,
        species: {
            s1: 'Seel',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Water',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Thick Fat',
        moves: {
            m1: {
                mname: 'Headbutt',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Growl',
                mtype: 'Normal'
            },
            m3: {
                mname: '',
                mtype: ''
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28772287?1723697888',
        link: 'https://toyhou.se/7588474.aurora/28772287.destruction-call-au'
    },
    {
        name: 'Cloudy',
        team: 'None',
        level: 5,
        species: {
            s1: 'Eevee',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Flying',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Adaptability',
        moves: {
            m1: {
                mname: 'Swift',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Calm Mind',
                mtype: 'Psychic'
            },
            m3: {
                mname: 'Fly',
                mtype: 'Flying'
            },
            m4: {
                mname: 'Aerial Ace',
                mtype: 'Flying'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28772312?1723698003',
        link: 'https://toyhou.se/7096453.cloudy/28772312.destruction-call-au'
    },
    {
        name: 'Wolf',
        team: 'None',
        level: 5,
        species: {
            s1: 'Vulpix',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Fire',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Drought',
        moves: {
            m1: {
                mname: 'Ember',
                mtype: 'Fire'
            },
            m2: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Disable',
                mtype: 'Normal'
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/26390128?1712681237',
        link: 'https://toyhou.se/26390128'
    },
    {
        name: 'Yiang',
        team: 'None',
        level: 5,
        species: {
            s1: 'Eevee',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Normal',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: '',
        ability: 'Adaptability',
        moves: {
            m1: {
                mname: 'Helping Hand',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Tackle',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Sand Attack',
                mtype: 'Ground'
            },
            m4: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27332580?1719011129',
        link: 'https://toyhou.se/27332580'
    },
    {
        name: 'Chipper',
        team: 'None',
        level: 5,
        species: {
            s1: 'Fennekin',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Fire',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Magician',
        moves: {
            m1: {
                mname: 'Scratch',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Ember',
                mtype: 'Fire'
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28772552?1723698958',
        link: 'https://toyhou.se/9737533.chipper/28772552.destruction-call-au'
    },
    {
        name: 'Ashen',
        team: 'None',
        level: 5,
        species: {
            s1: 'Fennekin',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Fire',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Blaze',
        moves: {
            m1: {
                mname: 'Ember',
                mtype: 'Fire'
            },
            m2: {
                mname: 'Scratch',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/22950741?1715022945',
        link: 'https://toyhou.se/22950741'
    },
    {
        name: 'Bark',
        team: 'None',
        level: 5,
        species: {
            s1: 'Ninetales',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: 'Fire',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Flash Fire',
        moves: {
            m1: {
                mname: 'Incinerate',
                mtype: 'Fire'
            },
            m2: {
                mname: 'Confuse Ray',
                mtype: 'Ghost'
            },
            m3: {
                mname: 'Inferno',
                mtype: 'Fire'
            },
            m4: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
        },
        universe: 'Destruction Call',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28818273?1725360597',
        link: 'https://toyhou.se/28818273.bark'
    },
]

//Template
/*
    {
        name: '',
        team: '',
        level: 5,
        species: {
            s1: '',
            s2: '',
            s3: '',
            s4: '',
            totalSpecies: function () {
                if (this.s2 === '' && this.s3 === '' && this.s4 === '') {
                    return this.s1
                } else if (this.s3 === '' && this.s4 === '') {
                    return this.s1 + '+' + this.s2
                } else if (this.s4 == '') {
                    return this.s1 + '+' + this.s2 + '+' + this.s3
                } else {
                    return this.s1 + '+' + this.s2 + '+' + this.s3 + '+' + this.s4
                }
            }
        },
        types: {
            t1: '',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: '',
        blurb: '',
        ability: '',
        moves: {
            m1: {
                mname: '',
                mtype: ''
            },
            m2: {
                mname: '',
                mtype: ''
            },
            m3: {
                mname: '',
                mtype: ''
            },
            m4: {
                mname: '',
                mtype: ''
            },
        },
        universe: '',
        photo: '',
        link: ''
    },
*/