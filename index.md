
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Markdown Previewer</title>
<style>
body {
  background: Crimson;
  margin-left: 26vw;
}

#editor {
  background: transparent;
  padding: 0px;
}

#preview {
  background: Coral;
}

#preview, #editor {
  display: inline-block;
  height: 60vh;
  width: 40%;
}

textarea {
  height: 55vh;
  width: 90%;
}

</style>

  <link rel="stylesheet" href="./style.css">

</head>
<body>

  <div id="editor"></div>
  <div id="preview"></div>

<div id="test"></div>

  <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.0/marked.min.js'></script>
  <script src="./script.js" type="module"></script>

</body>
</html>
