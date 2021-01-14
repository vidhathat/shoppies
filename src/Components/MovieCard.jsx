
        <html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>movieCard</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<style>
		*{
			font-family: 'Poppins', sans-serif;
			 -webkit-user-select: none;
    		-moz-user-select: -moz-none;
    		-o-user-select: none;
    		user-select: none;
		}
		img {
  			-webkit-user-drag: none;
  			-moz-user-drag: none;
  			-o-user-drag: none;
  			user-drag: none;
		}
		img {
			pointer-events: none;
		}
		.movie_card{
			padding: 0 !important;
			width: 22rem;
			margin:14px; 
			border-radius: 10px;
			box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
		}
		.movie_card img{
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			height: 33rem;
		}
		.movie_info{
			color: #5e5c5c;
		}

		.movie_info i{
			font-size: 20px;
		}
		.card-title{
			width: 80%;
			height: 4rem;
		}
		.play_button{
			background-color: #ff3d49;
   			position: absolute;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			right: 20px;
			bottom: 111px;
			font-size: 27px;
			padding-left: 21px;
			padding-top: 16px;
			color: #FFFFFF;
			cursor: pointer;
		}

		.credits{
			margin-top: 20px;
			margin-bottom: 20px;
			border-radius: 8px;
			border: 2px solid #8e24aa;
			font-size: 18px;
		}
		.credits .card-body{
			padding: 0;
		}
		.credits p{
			padding-top: 15px;
			padding-left: 18px;
		}
		.credits .card-body i{
			color: #8e24aa;
		}
	</style>
</head>
<body>
	
</body>
<div class="container mt-5">
	<h2 class="text-center">Bootstrap movie cards</h2>
	<div class="row justify-content-center">

		<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">POKEMON Detective Pikachu</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

				<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">Toy Story 4</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

				<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/captin-marvel-poster-international.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">Captain Marvel</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

				<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Spider-Man-Far-From-Home-poster-1.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">Spider-Man: Far From Home</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

				<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">Alita: Battle Angel</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

				<div class="card movie_card">
		  <img src="https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg" class="card-img-top" alt="...">
		  <div class="card-body">
		  	<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
		    <h5 class="card-title">Spider-Man: Into the Spider-Verse</h5>
		   		<span class="movie_info">2019</span>
		   		<span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
		  </div>
		</div>

		

	</div>

			<div class="row col-md-12 justify-content-center">
				<div class="card credits col-md-4 ">
		  			<div class="card-body">
		      			<p>Made with <i class="fas fa-heart"></i> by Sukhmeet Singh.</p>
		  			</div>
				</div>
			</div>
</div>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

	<script>
		$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})
	</script>

</html>

