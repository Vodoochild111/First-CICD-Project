<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
</head>
<body>
	<h1>Login</h1>
	<form id="login-form">
		<label for="username">Username:</label><br>
		<input type="text" id="username" name="username"><br>
		<label for="password">Password:</label><br>
		<input type="password" id="password" name="password"><br><br>
		<button type="submit" onclick="login()">Submit</button>
	</form> 
	<script>
		function login() {
			// Get the values of the username and password fields
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			
			// TODO: Validate the username and password

			// If the username and password are valid, log the user in
			// TODO: Log the user in
		}
	</script>
</body>
</html>
