const characters = [
    {
        name: 'Bolt',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Bolt.png',
        link: 'https://toyhou.se/28659751.bolt'
    },
    {
        name: 'Jolt',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Jolt.png',
        link: 'https://toyhou.se/28659761.jolt'
    },
    {
        name: 'Virus',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Virus.png',
        link: 'https://toyhou.se/5812319.virus/28681988.destruction-call-au'
    },
    {
        name: 'Covalent',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Covalent.png',
        link: 'https://toyhou.se/7750271.covalent/28772617.destruction-call-au'
    },
    {
        name: 'Heather',
        aff: 'Electro Rodeo',
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
                mname: 'Double aff',
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
        photo: 'imgs/Destruction Call/Heather.png',
        link: 'https://toyhou.se/7764835.heather/28773012.destruction-call-au'
    },
    {
        name: 'Mia',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Mia.png',
        link: 'https://toyhou.se/5679002.'
    },
    {
        name: 'Vanilla',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Vanilla.png',
        link: 'https://toyhou.se/8895097.'
    },
    {
        name: 'Zee',
        aff: 'Electro Rodeo',
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
        photo: 'imgs/Destruction Call/Zee.png',
        link: 'https://toyhou.se/24378519.z/30830702.zee'
    },
    {
        name: 'Blossom',
        aff: 'None',
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
        photo: 'imgs/Destruction Call/Blossom.png',
        link: 'https://toyhou.se/21663252.blossom'
    },
    {
        name: 'Flutura',
        aff: 'None',
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
        aff: 'None',
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
        photo: 'imgs/Destruction Call/Aurora.png',
        link: 'https://toyhou.se/7588474.aurora/28772287.destruction-call-au'
    },
    {
        name: 'Cloudy',
        aff: 'None',
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
        aff: 'None',
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
        aff: 'None',
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
        aff: 'None',
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
        aff: 'None',
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
        photo: 'imgs/Destruction Call/Ashen.png',
        link: 'https://toyhou.se/22950741'
    },
    {
        name: 'Bark',
        aff: 'None',
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
        photo: 'imgs/Destruction Call/Bark.png',
        link: 'https://toyhou.se/28818273.bark'
    },
    {
        name: 'Bouncepaw',
        aff: 'RoseliClan',
        level: 11,
        species: {
            s1: 'Spheal',
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
            t1: 'Ice',
            t2: 'Water',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Oblivious',
        moves: {
            m1: {
                mname: 'Rollout',
                mtype: 'Rock'
            },
            m2: {
                mname: 'Defense Curl',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Growl',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Water Gun',
                mtype: 'Water'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27298577?1715893451',
        link: 'https://toyhou.se/27298577'
    },
    {
        name: 'Fogpaw',
        aff: 'PechaClan',
        level: 11,
        species: {
            s1: 'Meditite',
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
            t1: 'Fighting',
            t2: 'Psychic',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Pure Power',
        moves: {
            m1: {
                mname: 'Confusion',
                mtype: 'Psychic'
            },
            m2: {
                mname: 'Workup',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Pound',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Low Kick',
                mtype: 'Fighting'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27299003?1716327500',
        link: 'https://toyhou.se/27299003'
    },
    {
        name: 'Flamekit',
        aff: 'StarClan',
        level: 5,
        species: {
            s1: 'Litten',
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
        gen: 'Male',
        blurb: '',
        ability: 'Blaze',
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
                mname: 'Protect',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Rest',
                mtype: 'Psychic'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/29922957?1730165354',
        link: 'https://toyhou.se/29922957'
    },
    {
        name: 'Rubypaw',
        aff: 'YacheClan',
        level: 34,
        species: {
            s1: 'Dewott',
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
        gen: 'Female',
        blurb: '',
        ability: 'Torrent',
        moves: {
            m1: {
                mname: 'Razor Shell',
                mtype: 'Water'
            },
            m2: {
                mname: 'Fury Cutter',
                mtype: 'Bug'
            },
            m3: {
                mname: 'Aerial Ace',
                mtype: 'Flying'
            },
            m4: {
                mname: 'Aqua Jet',
                mtype: 'Water'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/16785074?1717467457',
        link: 'https://toyhou.se/16785074'
    },
    {
        name: 'Shatterpaw',
        aff: 'YacheClan',
        level: 30,
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
        gen: 'male',
        blurb: '',
        ability: 'Run Away',
        moves: {
            m1: {
                mname: 'Endure',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Nuzzle',
                mtype: 'Electric'
            },
            m3: {
                mname: 'Swift',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Electro Ball',
                mtype: 'Electric'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/19507841?1675271477',
        link: 'https://toyhou.se/19507841'
    },
    {
        name: 'Flightpaw',
        aff: 'PayapaClan',
        level: 5,
        species: {
            s1: 'Sentret',
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
        gen: 'female',
        blurb: '',
        ability: 'Keen Eye',
        moves: {
            m1: {
                mname: 'Scratch',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Defense Curl',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Growl',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Thief',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27559190?1717276959',
        link: 'https://toyhou.se/27559190'
    },
    {
        name: 'Divepaw',
        aff: 'NanabClan',
        level: 5,
        species: {
            s1: 'Popplio',
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
        gen: 'male',
        blurb: '',
        ability: 'Liquid Voice',
        moves: {
            m1: {
                mname: 'Growl',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Pound',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Water Gun',
                mtype: 'Water'
            },
            m4: {
                mname: 'Charm',
                mtype: 'Fairy'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27751783?1718318126',
        link: 'https://toyhou.se/27751783'
    },
    {
        name: 'Orbpaw',
        aff: 'PayapaClan',
        level: 5,
        species: {
            s1: 'Natu',
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
            t1: 'Psychic',
            t2: 'Flying',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Early Bird',
        moves: {
            m1: {
                mname: 'Leer',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Peck',
                mtype: 'Flying'
            },
            m3: {
                mname: 'Stored Power',
                mtype: 'Psychic'
            },
            m4: {
                mname: 'Light Screen',
                mtype: 'Psychic'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27594598?1717463525',
        link: 'https://toyhou.se/27594598'
    },
    {
        name: 'Aerialpaw',
        aff: 'PayapaClan',
        level: 23,
        species: {
            s1: 'Minun',
            s2: 'Glameow',
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
            t2: 'Normal',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: '',
        ability: 'Own Tempo',
        moves: {
            m1: {
                mname: 'Helping Hand',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Switcheroo',
                mtype: 'Dark'
            },
            m3: {
                mname: 'Fury Swipes',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Aerial Ace',
                mtype: 'Flying'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/19848267?1675561975',
        link: 'https://toyhou.se/19848267'
    },
    {
        name: 'Driftpaw',
        aff: 'NanabClan',
        level: 59,
        species: {
            s1: 'Venomoth',
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
            t1: 'Bug',
            t2: 'Poison',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Shield Dust',
        moves: {
            m1: {
                mname: 'Quiver Dance',
                mtype: 'Bug'
            },
            m2: {
                mname: 'Bug Buzz',
                mtype: 'Bug'
            },
            m3: {
                mname: 'Psychic',
                mtype: 'Psychic'
            },
            m4: {
                mname: 'Poison Fang',
                mtype: 'Poison'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/15707291?1673739877',
        link: 'https://toyhou.se/15707291'
    },
    {
        name: 'Clearpaw',
        aff: 'RoseliClan',
        level: 19,
        species: {
            s1: 'Dragonite',
            s2: 'Venonat',
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
            t1: 'Dragon',
            t2: 'Flying',
            t3: 'Bug',
            t4: 'Poison'
        },
        gen: 'male',
        blurb: '',
        ability: 'Tinted Lense',
        moves: {
            m1: {
                mname: 'Wing Attack',
                mtype: 'Flying'
            },
            m2: {
                mname: 'Dragon Tail',
                mtype: 'Dragon'
            },
            m3: {
                mname: 'Supersonic',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Psybeam',
                mtype: 'Psychic'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8052446?1673743703',
        link: 'https://toyhou.se/8052446'
    },
    {
        name: 'Axel',
        aff: 'Loner',
        level: 11,
        species: {
            s1: 'Nudibun',
            s2: 'Eevee',
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
            t2: 'Normal',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Adaptability',
        moves: {
            m1: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Rain Dance',
                mtype: 'Water'
            },
            m3: {
                mname: 'Mud-Slap',
                mtype: 'Ground'
            },
            m4: {
                mname: 'Facade',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/10682105?1620350949',
        link: 'https://toyhou.se/10682105'
    },
    {
        name: 'Chia',
        aff: 'Loner',
        level: 11,
        species: {
            s1: 'Mareep',
            s2: 'Shaymin',
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
            t2: 'Grass',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Natural Cure',
        moves: {
            m1: {
                mname: 'Thunder Shock',
                mtype: 'Electric'
            },
            m2: {
                mname: 'Cotton Spore',
                mtype: 'Grass'
            },
            m3: {
                mname: 'Growth',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Magical Leaf',
                mtype: 'Grass'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8422875?1606951453',
        link: 'https://toyhou.se/8422875'
    },
    {
        name: 'Snowpaw',
        aff: 'YacheClan',
        level: 12,
        species: {
            s1: 'Beadrizzle',
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
            t1: 'Ice',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'male',
        blurb: '',
        ability: 'Storm Drain',
        moves: {
            m1: {
                mname: 'Water Gun',
                mtype: 'Water'
            },
            m2: {
                mname: 'Tackle',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Bite',
                mtype: 'Dark'
            },
            m4: {
                mname: 'Rain Dance',
                mtype: 'Water'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8023976?1598580382',
        link: 'https://toyhou.se/8023976'
    },
    {
        name: 'Twirlpaw',
        aff: 'RoseliClan',
        level: 12,
        species: {
            s1: 'Vulpix',
            s2: 'Zorua',
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
            t2: 'Dark',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Flash Fire',
        moves: {
            m1: {
                mname: 'Ember',
                mtype: 'Fire'
            },
            m2: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Hone Claws',
                mtype: 'Dark'
            },
            m4: {
                mname: 'Fury Swipes',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/7168231?1591585731',
        link: 'https://toyhou.se/7168231'
    },
    {
        name: 'Blazepaw',
        aff: 'RoseliClan',
        level: 5,
        species: {
            s1: 'Vulpix',
            s2: 'Eevee',
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
            t2: 'Normal',
            t3: '',
            t4: ''
        },
        gen: 'female',
        blurb: '',
        ability: 'Anticipation',
        moves: {
            m1: {
                mname: 'Helping Hand',
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
                mname: 'Disable',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8420998?1601845210',
        link: 'https://toyhou.se/8420998'
    },
    {
        name: 'Scarletpaw',
        aff: 'RoseliClan',
        level: 14,
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
                mname: 'Disable',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Spite',
                mtype: 'Ghost'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/8369414?1601415214',
        link: 'https://toyhou.se/8369414'
    },
    {
        name: 'Prismatic',
        aff: 'Pokepet',
        level: 11,
        species: {
            s1: 'Hachuloid',
            s2: 'Eevee',
            s3: 'Lepiva',
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
            t2: 'Bug',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Adaptability',
        moves: {
            m1: {
                mname: 'Tail Whip',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Sand Attack',
                mtype: 'Ground'
            },
            m3: {
                mname: 'Leech Life',
                mtype: 'Bug'
            },
            m4: {
                mname: 'Tackle',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27766746?1718402512',
        link: 'https://toyhou.se/27766746'
    },
    {
        name: 'Patchpaw',
        aff: 'PechaClan',
        level: 5,
        species: {
            s1: 'Cranidos',
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
            t1: 'Rock',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Mold Breaker',
        moves: {
            m1: {
                mname: 'Headbutt',
                mtype: 'Normal'
            },
            m2: {
                mname: 'Leer',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Scary Face',
                mtype: 'Normal'
            },
            m4: {
                mname: 'Fling',
                mtype: 'Dark'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/27599395?1717504309',
        link: 'https://toyhou.se/27599395'
    },
    {
        name: 'Clickpaw',
        aff: 'PechaClan',
        level: 9,
        species: {
            s1: 'Adorimp',
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
            t1: 'Fairy',
            t2: '',
            t3: '',
            t4: ''
        },
        gen: 'n/a',
        blurb: '',
        ability: 'Cute Charm',
        moves: {
            m1: {
                mname: 'Baby-Doll Eyes',
                mtype: 'Fairy'
            },
            m2: {
                mname: 'Swift',
                mtype: 'Normal'
            },
            m3: {
                mname: 'Charm',
                mtype: 'Fairy'
            },
            m4: {
                mname: 'Quick Attack',
                mtype: 'Normal'
            },
        },
        universe: 'Silent Eclipse Redux',
        photo: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/19305520?1671371874',
        link: 'https://toyhou.se/19305520'
    },
]

//Template
/*
    {
        name: '',
        aff: '',
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