import React, { Component } from 'react';

function Pokemons(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

class Peticiones_ajax_api extends Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
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
                            let pokemons = [...this.state.pokemons, pokemon];
                            this.setState({ pokemons });
                        });
                });
            });
    }

    render() {
        return (
            <div>
                <h2>Peticiones asincronas</h2>
                {this.state.pokemons.map((el) => (
                    <Pokemons key={el.id} name={el.name} avatar={el.avatar} />
                ))}
            </div>
        );
    }
}

export default Peticiones_ajax_api;
