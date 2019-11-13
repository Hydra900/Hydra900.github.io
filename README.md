
<!DOCTYPE html>

<html>
    
    <head>
        <title>Mason's Cursid Lands</title>
          <style>
            body {
                background: url("images/bg-matrix.jpg");
                padding: 10px;
                font-family: arial;
            }
            header {
                font-size: 1.5em;
                font-weight: bold;
            }
            #all-contents {
                max-width: 800px;
                margin: auto;
            }
    
            /* navigation menu */
            nav {
                background: rgb(0, 0, 0 );
                margin: 0 auto;
                margin-bottom: 20px;
                display: flex;
                padding: 10px;
                border: 5px;
                border-radius: 25px;
                
            }
            nav header {
                display: flex;
                align-items: center;
                color: rgb(255, 255, 255);
                flex: 1;
            }
            nav ul {
                list-style-image: none;
            }
            nav li {
                display: inline-block;
                padding: 0 10px;
            }
            nav a {
                text-decoration: none;
                color: #fff;
                
            }
    
            /* main container area beneath menu */
            main {
                background: rgb(46,139,87);
                display: flex;
            }
            .sidebar {
                margin-right: 25px;
                padding: 10px;
            }
            .sidebar img {
                width: 300px;
            }
            .content {
                flex: 1;
                padding: 15px;
            }
            .interests header {
                font-size: 1.25em;
            }
        </style>
        
        
    </head>
    
    <body>
        
        
        <div id = "all-contents">
            
            <nav>
            
            <header><a href="index.html">Mason's Website</a></header>
            
            <ul>
                <li><a href="index.html">Home</a>
                </li>
                <li><a href="portfolio.html">Portfolio</a></li>
              
            </ul>
            
            </nav>
            
            <main>
                               <div class = "sidebar"> 
                   <div class="imageContainer">
                   
                        <img src = "https://jpams.stpsb.org/progress/PictureServlet?district=052&year=1920&sidno=20202364">
                    </div>
                </div>
            =
                
               <div class="content">
                    <h1>Christine Scheller</h1>
                        
                    <p><h3>Student At NHS High School</h3></p>
                         <section class="interests">
                            <h2>Interests</h2>
                                <ul>
                                   <h3><li>Honeslty I Could Go For Some Spaghetti</li>
                                    <li>Video Games</li>
                                    <li>World Domination</li></h3>
                                </ul>
                               
                         </section>
                </div>
              <div class="content">
                <h1>Portfolio</h1>  
                 <ul id = "portfolio">
                 </ul>
              </div>
              
              
            </main>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script id="portfolioScript">$(document).ready(function() {$.getJSON('projects/projects.json').then(function(data) { data.projects.forEach(function(project){ $('#portfolio').append('<li><a href="projects/' + project.name + '/">' + project.title + ' : ' + project.description + '</a></li>'); }); }); });</script>

</html> 
