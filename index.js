let espacoPokemon = $('#poke-info')


$('#pesquisar').click(function(event){
    event.preventDefault();

    let nome = $('#pk-name').val().toLowerCase();
    const url = "https://pokeapi.co/api/v2/pokemon/"
    $.ajax({url: `${url}${nome}`,
         success: function (resultado){
            console.log(resultado)
            
            $('#nomePokemon').html(`Nome: ${resultado.name}`)
            let img = resultado.sprites.front_default;
            $('#fotoPokemon').attr('src', img)
            $('#codigoPokemon').html(`ID: ${resultado.id}`)
            $('#tipoPokemon').html(`Tipo: ${resultado.types[0].type.name}`)
           
         }})

        
    }
)

