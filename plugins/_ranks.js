
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "Novato", level: 0 }, { name: "Aprendiz", level: 4 }, 
      { name: "Adapto", level: 8 }, { name: "Mago", level: 12 }, 
      { name: "Mestre", level: 16 }, { name: "Guardião", level: 20 }, 
      { name: "Campião", level: 24 }, { name: "Herói", level: 28 }, 
      { name: "Lendário", level: 32 }, { name: "Mito", level: 36 },
      { name: "Bruxo", level: 48 }, { name: "Arquimago", level: 52 }, 
      { name: "Sábio", level: 56 }, { name: "Divino", level: 60 }, 
      { name: "Pai de todos", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}
