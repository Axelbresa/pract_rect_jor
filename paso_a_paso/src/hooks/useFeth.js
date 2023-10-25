import React, { useEffect, useState } from 'react';

function Pokemons(props) {
    const { avatar, name } = props; // Desestructura las props
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

function Peticiones_hooks() {
   const [pokemons, setPokemons] = useState([]);

   useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            json.results.forEach((el) => {
                fetch(el.url)
                    .then((response) => response.json())
                    .then((json) => {
                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                        };
                        setPokemons((prevPokemons) => [...prevPokemons, pokemon]);
                    });
            });
        });
   }, []);

  return (
    <div>
        <h2>Peticiones asincronas hooks</h2>
        {pokemons.map((el) => (
            <Pokemons key={el.id} name={el.name} avatar={el.avatar} />
        ))}
    </div>
  );
}

export default Peticiones_hooks;
