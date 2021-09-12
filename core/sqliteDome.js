import initSqlJs from 'sql.js'

const SQL= await initSqlJs({
  // locateFile: fz=> `./mate/${fz}`
  locateFile: ()=> `./mate/du.db`
  
  const db= new SQL.Database();
  
  const rz= db.prepare("SELECT * FROM main")
  
  console.log(rz)
})