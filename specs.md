GIVEN a CMS-style blog site
<p>WHEN I visit the site for the first time
<br><input type="checkbox"/> THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
<p>WHEN I click on the homepage option
<br><input type="checkbox"/> THEN I am taken to the homepage
<p>WHEN I click on any other links in the navigation
<br><input type="checkbox"/> THEN I am prompted to either sign up or sign in
<p>WHEN I choose to sign up
<br><input type="checkbox"/> THEN I am prompted to create a username and password
<p>WHEN I click on the sign-up button
<br><input type="checkbox"/> THEN my user credentials are saved and I am logged into the site
<p>WHEN I revisit the site at a later time and choose to sign in
<br><input type="checkbox"/> THEN I am prompted to enter my username and password
<p>WHEN I am signed in to the site
<br><input type="checkbox"/> THEN I see navigation links for the homepage, the dashboard, and the option to log out
<p>WHEN I click on the homepage option in the navigation
<br><input type="checkbox"/> THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
<p>WHEN I click on an existing blog post
<br><input type="checkbox"/> THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
<p>WHEN I enter a comment and click on the submit button while signed in
<br><input type="checkbox"/> THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
<p>WHEN I click on the dashboard option in the navigation
<br><input type="checkbox"/> THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
<p>WHEN I click on the button to add a new blog post
<br><input type="checkbox"/> THEN I am prompted to enter both a title and contents for my blog post
<p>WHEN I click on the button to create a new blog post
<br><input type="checkbox"/> THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
<p>WHEN I click on one of my existing posts in the dashboard
<br><input type="checkbox"/> THEN I am able to delete or update my post and taken back to an updated dashboard
<p>WHEN I click on the logout option in the navigation
<br><input type="checkbox"/> THEN I am signed out of the site
<p>WHEN I am idle on the site for more than a set time
<br><input type="checkbox"/> THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments