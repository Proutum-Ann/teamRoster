document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')
    const info = document.getElementById('rosterInfo')

    const render = list => {
        grid.innerHTML = ''
        info.innerHTML = ''

        //Roster
        list.forEach(c => {
            const col = document.createElement('div')

            if (c.team === 'Electro Rodeo') {
                c.teamColor = 'electro'
            } else if (c.team === 'None') {
                c.teamColor = 'none'
            }

            if (c.universe === 'Destruction Call') {
                c.au = 'dc'
            } else {
                c.au = 'noUni'
            }

            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                <div class="card h-100 shadow-sm ${c.au}" id="${c.teamColor}">
                    <img src="${c.photo} class="card-img-top" alt="${c.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0"><a href="${c.link}">${c.name}</a></h5>
                        <span class="pokespecies small text-muted mb-0">${c.species.totalSpecies()}</span>
                        <br>
                        <div class="badge badge-type badge-${c.types.t1}">${c.types.t1}</div>
                        <div class="badge badge-type badge-${c.types.t2}">${c.types.t2}</div>
                        <div class="badge badge-type badge-${c.types.t3}">${c.types.t3}</div>
                        <div class="badge badge-type badge-${c.types.t4}">${c.types.t4}</div>
                        <br>
                        <span><b>Affiliation:</b> ${c.team}</span><br>
                        <span class="small text-muted mb-0">Level ${c.level}</span>
                        <p class="small text-muted">${c.gen}</p>
                        
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${c.name}Modal">
                        Launch demo modal
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
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="${c.name}ModalLabel">Additional Information on ${c.name}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container-fluid">
                                            <div class="row mx-auto">
                                                <div class="col-md-4">
                                                    <img src="${c.photo}" class="img-fluid mb-0" style="background: transparent">
                                                    <hr class="my-0 w-100">
                                                    <span class="small"><b>Ability:</b> ${c.ability}</span><br>
                                                    <span class="small"><b>Universe:</b> ${c.universe}</span><br>
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

/* setTimeout(() => {
    window.location.href = "home.html"
}, 5000) */