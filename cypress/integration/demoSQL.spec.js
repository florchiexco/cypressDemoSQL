  it('Verificar que Julian Aga tenga una sola mascota', () => {
    cy.task(
      "queryDb",
      `SELECT * FROM cypressdemo.pets p 
      INNER JOIN cypressdemo.persons pe
      ON p.owner=pe.id
      WHERE pe.name LIKE 'Julian Aga';`
    ).then(count => {
      expect(count).to.have.lengthOf(1);
    });
})

  it('Verificar que Florencia Excoffon tenga dos mascotas', () => {
    cy.task(
      "queryDb",
      `SELECT * FROM cypressdemo.pets p 
      INNER JOIN cypressdemo.persons pe
      ON p.owner=pe.id
      WHERE pe.name LIKE 'Florencia Excoffon';`
    ).then(count => {
      expect(count).to.have.lengthOf(2);
    });
})

it('Verificar que la mascota de Julián se llama Sasuke', () => {
    cy.task(
      "queryDb",
      `SELECT p.name, p.age, p.type, pe.name AS owner FROM cypressdemo.pets p 
      INNER JOIN cypressdemo.persons pe
      ON p.owner=pe.id
      WHERE pe.name LIKE 'Julian Aga';`
    ).then(array => {
      let petName = array[0].name;
      expect(petName).to.equal("Sasuke");
    });
})

it('Verificar que una de las mascotas sea perro', () => {
    cy.task(
      "queryDb",
      `SELECT type FROM cypressdemo.pets;`
    ).then(array => {
        let typeArray = array.map(({type}) => {
            return type;
          })
      expect(typeArray).to.include("Dog");
    });
})