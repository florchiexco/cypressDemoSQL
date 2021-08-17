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

it('Verificar que ninguna de las mascotas sea gato', () => {
    cy.task(
      "queryDb",
      `SELECT type FROM cypressdemo.pets p WHERE p.type LIKE 'Cat';`
    ).then(array => {
      expect(array).to.be.empty;
    });
})

it('Verificar que todos las columnas en la tabla persona existan', () => {
    cy.task(
      "queryDb",
      `SELECT * FROM cypressdemo.persons LIMIT 1;`
    ).then(array => {
      expect(array[0]).to.have.all.keys('name', 'address','age', 'id');
    });
})

it('Insertar una nueva persona y comprobar que se haya logrado exitosamente', () => {
    cy.task(
      "queryDb",
      `INSERT INTO cypressdemo.persons (name, age, address) VALUES ('Pablo Gonzalez', 27, 'Calle 67');`
    );
    cy.task(
        "queryDb",
        `SELECT * FROM cypressdemo.persons WHERE name LIKE 'Pablo Gonzalez';`
      ).then(array => {
      expect(array[0]).to.exist;
    });
})

it('Comprobar que una persona NO exista en la tabla', () => {
    cy.task(
        "queryDb",
        `SELECT * FROM cypressdemo.persons WHERE name LIKE 'Jane Doe';`
      ).then(array => {
      expect(array[0]).to.not.exist;
    });
})