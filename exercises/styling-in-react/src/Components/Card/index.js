import React from 'react'
import Product from './Product'

const Card = () => {
    const styles = {
    display: "flex",  
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginLeft: "10%"
    }

    return (
         <div  style = {styles}>
            <Product title = "Squirtle" subtitle = "Water" information = "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38909582_979122685604980_7393976535834689536_o.jpg?_nc_cat=1&oh=5b85726d05c7238a9238f1719f061477&oe=5BF1A0A5"/>
            <Product title = "Charmander" subtitle = "Fire" information = "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38894796_979011288949453_7221184916275331072_o.jpg?_nc_cat=1&oh=b927be13ba4bddf4ae74396c1563840d&oe=5C0A090E"/>
            <Product title = "Bulbasaur" subtitle = "Grass" information = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38923060_979555162228399_4765342188588498944_o.jpg?_nc_cat=1&oh=781bb06d019cfe4359c23f2438da46c0&oe=5C3B9075"/>
            <Product title = "Pikachu" subtitle = "Electric" information = "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38862582_979072575609991_5077087184268296192_o.jpg?_nc_cat=1&oh=a66cd416c49fafc024d1891df8a00aac&oe=5BF33EC4"/>
            <Product title = "Cubone" subtitle = "Normal" information = "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/39022804_979072788943303_97873280949551104_o.jpg?_nc_cat=1&oh=6876053a3113d29594fc9a0628d48e10&oe=5BF8A5F1"/>
            <Product title = "Pidgey" subtitle = "Normal" information = "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38872006_979072695609979_3369514324610514944_n.jpg?_nc_cat=1&oh=dbb2b976e817d6f6e438bbc02b8f3bba&oe=5BF77790"/>
            <Product title = "Gengar" subtitle = "Ghost" information = "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/39086617_981178665399382_2146449252371398656_n.jpg?_nc_cat=0&oh=9e01d33207e8204ddb08ca555886758e&oe=5BF7EDD7"/>
            <Product title = "Mew" subtitle = "Psychic" information = "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38875059_979071925610056_1264243157088862208_o.jpg?_nc_cat=1&oh=39f863443f2fbf5ccfeb19fbfe0e36d7&oe=5BF49A60"/>
            <Product title = "MewTwo" subtitle = "Psychic" information = "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38885381_979554822228433_3813245366103441408_o.jpg?_nc_cat=1&oh=706702f120a79fa003025db1f8deb02e&oe=5C00FAB0"/>
            <Product title = "Abra" subtitle = "Psychic" information = "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38935515_979554942228421_581921743090745344_n.jpg?_nc_cat=0&oh=403b0ceb5bd2acd6dbca28f98e5ad27a&oe=5BED03DC"/>
            <Product title = "Sandshrew" subtitle = "Rock" information = "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/38908266_980009325516316_7334392214019112960_o.jpg?_nc_cat=1&oh=e55e151b4af1b0cc2dd12517f3ad1702&oe=5C3690A6"/>
            <Product title = "Seal" subtitle = "Ice" information = "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head." image = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/39306849_985749314942317_2113579176165376_o.jpg?_nc_cat=1&oh=763ef214b59471c3fc3e9c11932cda12&oe=5BF297A9"/>
        </div>
    )
}

export default Card