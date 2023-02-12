export function Dz(d){
  const tg= "DzTangut.json"
  const nv= "DzNvs.json"

  let celo;

  fetch("db/"+tg).then(
    e=> e.json.then(
      d=> console.log(d.tangut[1])
    )
  )
}