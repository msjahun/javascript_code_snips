<!DOCTYPE html>
<html>
<body>

<p>Click the button to write some text in the new window and the source (parent) window.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var myWindow = window.open("", "myWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'myWindow'</p> <button onclick=\"myFunction2()\">Try it</button><script>function myFunction2() { this.opener.document.write(\"<p>This is the source window!</p>\"); alert(\"hello\");}<\/script>");
 //   myWindow.opener.document.write("<p>This is the source window!</p>");
}
</script>

</body>
</html>
