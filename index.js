var espacoPokemon = $('#poke-info')

$('#pesquisar').click(function(event){
    event.preventDefault();

    var nome = $('#pk-name').val()

    $.ajax({url: `https://pokeapi.co/api/v2/pokemon/${nome}`,
         success: function (resultado){
            console.log(resultado)

            $('#nomePokemon').html(`Nome: ${resultado.name}`)
            var img = resultado.sprites.front_default;
            $('#fotoPokemon').attr('src', img)
            $('#codigoPokemon').html(`ID: ${resultado.id}`)
            $('#tipoPokemon').html(`Tipo: ${resultado.types[0].type.name}`)
           
         }})

        
    }
)

