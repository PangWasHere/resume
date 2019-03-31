<!DOCTYPE html>
<head>
	<title>Pang, The Writer</title>
	<link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Major+Mono+Display|Monoton|Noto+Sans|Nanum+Brush+Script|Press+Start+2P|Special+Elite|Unkempt" rel="stylesheet">
	<link href="personal-styles.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
	<script type="text/javascript" src="personal-scripts.js"></script>
</head>
	
	<body>
		<header>
		<nav></nav>
		<h1 class="literary-text">Pang as a writer</h1>
		<nav>
			<a href="./" id="btn-Back" class="nav-btn">&lt;</a>
			<a href="#Overview" id="btn-Overview" page="Overview" class="nav-btn rect-btn">Overview</a>
			<a href="#Story" id="btn-Story" page="Story" class="nav-btn rect-btn">Story</a>
			<a href="#Contact" id="btn-Contact" page="Contact" class="nav-btn rect-btn">Contact</a>
		</nav>
	</header>
	<main>
		<div id="div-Overview" page="Overview" class="main-div">
			<h2 class="literary-text">Words</h2>
			<p style="text-align: center;" class="literary-text">by Farrah Marie Chavez</p>
			<br />
			<p style="text-align: center;">
			You will find my literary works here: <br />
			<a href="https://pangthewriter.wordpress.com/" target="_blank">Pang Writes</a>
			<br />
			<br />
			If you are interested in programming, you can visit my blog here:<br />
			<a href="http://programming-error.blogspot.com/" target="_blank">Programming Error</a>
			</p>
		</div>
		<div id="div-Story" page="Story" class="main-div" style="display: none;">
			<h2 class="literary-text">Once upon a time..</h2>
			<p>
			.. there was a girl who wanted to be a writer.<br />
			<br />
			As she started learning to hold a pen to write, her mind was anxious for stories. She would grab any book she could find and read to her heart&rsquo;s content. When she turned 10, a teacher opened the door to the world of written thoughts. She began writing for competitions as a feature writer, both in her homeland language, Filipino, and the global lingua franca, English. She was thrilled as she wrote: fiction and fact, academic and creative, short and long. <br />
			<br />
			When she stepped into high school, she started writing her hidden feelings through short stories and poems. She held the guitar for the first time when she was thirteen and realized the beauty of her thoughts in melody. College taught her the different styles of writing and research papers became interesting articles for her to write. When she graduated with her bachelor&rsquo;s degree, she could write words understood by humans and computers. Now, she longs to write not just to tell but to encourage, not for grades but for awareness, not only to remember but to instill.<br />
			<br />
			Her cabinet is filled with diaries but her mind still has lots to convey. Would there be enough space in this digital world for what she wishes to say?
			</p>
			<p style="text-align: right;">Taken from <a href="https://pangthewriter.wordpress.com/about/" target="_blank">Pang Writes</a>
		</div>
		<div id="div-Contact" class="main-div" style="display: none;">
			<?php 
				include 'contact.php';
			?>
		</div>
	</main>	
	</body>
</html>