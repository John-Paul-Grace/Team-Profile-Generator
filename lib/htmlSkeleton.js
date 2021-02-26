const htmlSkeleton = 
`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Team Profile Generator</title>

    <!-- Link to Bootstrap 4.5 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <style>
        #card-container {display: flex; flex-wrap: wrap;}
        .card {width: 18rem; margin: 5px;}
    </style>
</head>
<body>
    <header class="jumbotron jumbotron-fluid" style="background-color: red;">
        <div class="container">
            <h1 class="display-4" style="text-align: center; color: white; font-weight: bold;">My Team</h1>
        </div>
    </header>

    <main class="container">
        <div class="row">
            <div class="col-lg-1"></div>

            <div class="col-lg-10" id="card-container">
                
                
            </div>
        </div>
    </main>
</body>
</html>`;

module.exports = htmlSkeleton;
