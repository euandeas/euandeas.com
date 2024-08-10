# Ideas

Start on main screen with main options but then when item clicked scroll down to it and collapse into header bar

1 page

about then projects and then blog then footer

nav just scrolls to correct bit

collpasing header bar

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sticky Header Example</title>
    <style>
        /*reset */
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

header {
  position: fixed;
  width: 100%;
  font-family: 'PT Sans', sans-serif;
  transition: all 0.4s ease;
  color: #fff;

  font-size: 72px;
  line-height: 108px;
  height: 100vh;
  background: #335C7D;
  text-align: center;
}
header.sticky {
  font-size: 24px;
  line-height: 48px;
  height: 48px;
  background: #efc47D;
  padding-left: 20px;
}
    </style>
</head>
<body>
    <header><h1>Sticky Header</h1></header>
	<p>Scroll down to see the header resize.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.</p>
 <script>
window.addEventListener('scroll', function() {
  var belowTop = window.scrollY > 30;
  document.querySelector('header').classList.toggle('sticky', belowTop);
});
</script>
</body>
</html>
```
