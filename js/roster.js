document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')
    const info = document.getElementById('rosterInfo')

    const render = list => {
        grid.innerHTML = ''
        info.innerHTML = ''

        //Roster
        list.forEach(c => {
            const col = document.createElement('div')

            /* Image BG Colors */
            if (c.aff === 'Electro Rodeo') {
                c.teamColor = 'electro'
            } else if (c.aff === 'NanabClan') {
                c.teamColor = 'nanab'
            } else if (c.aff === 'RoseliClan') {
                c.teamColor = 'roseli'
            } else if (c.aff === 'YacheClan') {
                c.teamColor = 'yache'
            } else if (c.aff === 'PayapaClan') {
                c.teamColor = 'payapa'
            } else if (c.aff === 'PechaClan') {
                c.teamColor = 'pecha'
            } else if (c.aff === 'StarClan') {
                c.teamColor = 'star'
            } else if (c.aff === 'Place of No Stars') {
                c.teamColor = 'dark'
            } else if (c.aff === 'Ghost') {
                c.teamColor = 'ghost'
            } else if (c.aff === 'Pokepet') {
                c.teamColor = 'pet'
            } else if (c.aff === 'Rogue') {
                c.teamColor = 'rogue'
            } else if (c.aff === 'Loner') {
                c.teamColor = 'loner'
            } else if (c.aff === 'None') {
                c.teamColor = 'none'
            }
            
            /* Card Colors */
            if (c.universe === 'Destruction Call') {
                c.au = 'dc'
            } else if (c.universe === 'Silent Eclipse Redux') {
                c.au = 'ser'
            } else {
                c.au = 'noUni'
            }

            col.className = 'col-6 col-md-3 col-xl-2'
            col.innerHTML = `
                <div class="card h-100 shadow-sm ${c.au}" id="${c.teamColor}">
                    <img src="${c.photo}" class="card-img-top" alt="${c.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0"><a href="${c.link}">${c.name}</a></h5>
                        <span class="pokespecies small mb-0" style="opacity: 50%">${c.species.totalSpecies()}</span>
                        <br>
                        <div class="badge badge-type badge-${c.types.t1}">${c.types.t1}</div>
                        <div class="badge badge-type badge-${c.types.t2}">${c.types.t2}</div>
                        <div class="badge badge-type badge-${c.types.t3}">${c.types.t3}</div>
                        <div class="badge badge-type badge-${c.types.t4}">${c.types.t4}</div>
                        <br>
                        <span><b>Affiliation:</b> ${c.aff}</span><br>
                        <span class="small mb-0" style="opacity: 50%">Level ${c.level}</span>
                        <p class="small" style="opacity: 50%">${c.gen}</p>
                        
                        <!-- Button trigger modal -->
                        <button type="button" class="btn" id="modalbtn" data-bs-toggle="modal" data-bs-target="#${c.name}Modal">
                        More information
                        </button>

                        </div>
                    </div>
                </div>

            `

            const mod = document.createElement('div')
            mod.innerHTML = `
            <!-- Modal -->
                        <div class="modal fade text-center" id="${c.name}Modal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content ${c.au}">
                                    <div class="modal-header divider justify-content-between">
                                        <h1 class="modal-title fs-5 mx-lg-5" id="${c.name}ModalLabel">Additional Information on ${c.name}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container-fluid">
                                            <div class="row mx-auto">
                                                <div class="col-md-4">
                                                    <img src="${c.photo}" class="img-fluid mb-0" style="background: transparent">
                                                    <hr class="my-0 w-100 divider">
                                                    <span class="small"><b>Ability:</b><br> ${c.ability}</span><br>
                                                    <span class="small"><b>Universe:</b><br> ${c.universe}</span><br>
                                                </div>
                                                <div class="col-md-8">
                                                    <p class="small">${c.blurb}</p>
                                                    <div class="row justify-content-between mx-auto" style="font-size: 80%">
                                                        <div class="col-md-5 mx-auto my-1 ${c.moves.m1.mtype} charmove">${c.moves.m1.mname}</div>
                                                        <div class="col-md-5 mx-auto my-1 ${c.moves.m2.mtype} charmove">${c.moves.m2.mname}</div>
                                                        <div class="col-md-5 mx-auto my-1 ${c.moves.m3.mtype} charmove">${c.moves.m3.mname}</div>
                                                        <div class="col-md-5 mx-auto my-1 ${c.moves.m4.mtype} charmove">${c.moves.m4.mname}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            `

            grid.appendChild(col)
            info.appendChild(mod)
        })
    }

    render(characters)
})