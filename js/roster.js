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

            col.className = 'col-6 col-lg-3'
            col.innerHTML = `
                <div class="card h-100 shadow-sm" id="${c.teamColor}">
                    <img src="${c.photo} class="card-img-top" alt="${c.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title"><a href="${c.link}">${c.name}</a></h5>
                        <span class="pokespecies">${c.species.s1}</span>
                        <span class="pokespecies">${c.species.s2}</span>
                        <span class="pokespecies">${c.species.s3}</span>
                        <span class="pokespecies">${c.species.s4}</span>
                        <br>
                        <div class="badge badge-type badge-${c.types.t1}">${c.types.t1}</div>
                        <div class="badge badge-type badge-${c.types.t2}">${c.types.t2}</div>
                        <div class="badge badge-type badge-${c.types.t3}">${c.types.t3}</div>
                        <div class="badge badge-type badge-${c.types.t4}">${c.types.t4}</div>
                        <br>
                        <span><b>Team:</b> ${c.team}</span><br>
                        <span>Level ${c.level}</span>
                        <p class="small text-muted mb-0">${c.gen}</p>
                    </div>
                </div>
            `

            //Modals
            /* const btn = document.getElementById('infoBtn')
            var span = document.getElementsByClassName("close")[0];
            const charInfo = document.createElement('div')

            charInfo.className = 'col-8 mx-auto '

            charInfo.innerHTML = `
            <div id="charModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>

                    <div class="card h-100 shadow-sm">

                        <div class="card-body">
                            <h5>${c.name}'s Info</h5>

                            <div class="row">
                                <div class="col-6">
                                    <img src="${c.photo}" alt="${c.name}">
                                    <p>
                                        <b>Ability:</b> ${c.ability}
                                    </p>
                                </div>
                                <div class="col-6">
                                    <p>info text here</p>

                                    <div class="row">
                                        <div class="col-md-6 ${c.moves.m1.mtype}">${c.moves.m1.mname}</div>
                                        <div class="col-md-6 ${c.moves.m2.mtype}">${c.moves.m2.mname}</div>
                                        <div class="col-md-6 ${c.moves.m3.mtype}">${c.moves.m3.mname}</div>
                                        <div class="col-md-6 ${c.moves.m4.mtype}">${c.moves.m4.mname}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            `
            info.appendChild(charInfo)

            btn.onclick = function () {
                charInfo.style.display = "block";
            }

            span.onclick = function () {
                charInfo.style.display = "none";
            }
                */

            grid.appendChild(col)
        })
    }

    render(characters)
})