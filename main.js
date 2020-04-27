function searchMv () {
    $('#movie-list').html('')
        
    $.ajax({
        type: 'get',
        url: 'http://www.omdbapi.com/', 
        dataType: 'json',
        data: {
            'apikey': '587f59cd',
            's': $('#search-input').val()
            
        },
        success: hsl => {
            if (hsl.Response === "True"){
                let movies = hsl.Search;
                $.each(movies, function (i, data){
                   $('#movie-list').append(`
            <div class="col-md-4">       
                <div class="card text-black bg-success mb-3">
                    <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">"`+ data.Title +`"</h5>
                        <h6 class="card-subtitle mb-2 text-black">`+ data.Year +`</h6>
                        <a href="#" class="card-link Detail-Movie text-white" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">Detail-Movie</a>
                    </div>
                </div>
            </div>    
                   `);
                });

                $('#search-input').val('');
            }else{
                $('#movie-list').html('<h2 align="center">Movie Not Found!</h2>')
            }
        }
    })

}
$('#search-button').on('click', function () {
   searchMv()
})
$('#search-input').on('keyup', function (x) {
    if (x.keyCode === 13) {
        searchMv()
    }
    });


$('#movie-list').on('click', '.Detail-Movie', function(){
    $.ajax({
        type: 'get',
        url: 'http://www.omdbapi.com/', 
        dataType: 'json',
        data: {
            'apikey': '587f59cd',
            'i': $(this).data('id')
        },
        success: mvi =>{
            if (mvi.Response === "True"){
            $('.modal-body').html(`
            <div class ="container-fluid">
              <div class="row">
                <div class="col-md-4">
                    <img src="`+ mvi.Poster +`" class="img-fluid">
                </div>
                <div class="col-md-8">
                <ul class="list-group">
                 <li class="list-group-item"><h5>`+ mvi.Title+`</h5></li>
                 <li class="list-group-item"><h5>Released: `+ mvi.Released+`</h5></li>
                 <li class="list-group-item"><h5>Rated: `+ mvi.Rated+`</h5></li>
                 <li class="list-group-item"><h5>Runtime: `+ mvi.Runtime+`</h5></li>
                 <li class="list-group-item"><h5>Genre: `+ mvi.Genre+`</h5></li>
                 <li class="list-group-item"><h5>Director: `+ mvi.Director+`</h5></li>
                 <li class="list-group-item"><h5>Actors: `+ mvi.Actors+`</h5></li>
                 <li class="list-group-item"><h5>Plot: `+ mvi.Plot+`</h5></li>
                 <li class="list-group-item"><h5>Language: `+ mvi.Language+`</h5></li>
                 <li class="list-group-item"><h5>Country: `+ mvi.Country+`</h5></li>
                 <li class="list-group-item"><h5>Awards: `+ mvi.Awards+`</h5></li>                 
                </ul>
                </div>
            </div>
            `)
            }
        } 
        })
})