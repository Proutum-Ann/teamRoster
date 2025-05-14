document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''

        list.forEach(c => {
            const col = document.createElement('div')

            col.className = 'col-6 col-lg-3'
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
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

            grid.appendChild(col)
        })
    }

    render(characters)
})