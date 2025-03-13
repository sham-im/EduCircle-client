// will have all the assignments created by any user using “create assignment” form. Every individual assignment will have a thumbnail, title, marks, assignment difficulty level and a delete, update, and view assignment button. It's up to you how you will display the cards of the assignment
// o	Delete button functionality
// •	Only the user is able to delete an assignment who has created the assignment. A user is not able to delete assignments which are created by other users. Show a confirmation modal to confirm the delete action while pressing the delete button.
// Hint: While a user will create an assignment you have to store the user email with the assignment data [followed Assignment creation requirement]. And then while a user will be trying to delete an assignment you will compare the current user email with the assignment
// creator email. And if it matches then the assignment will be deleted. 
// •	A successful message will be shown when the assignment will be deleted successfully.
// •	An error message will be shown when a user tries to delete an assignment which is not created by himself.
// o	Update button functionality
// •	Any user can update any assignment. But If you want to make it like, only the user can update an assignment if he/she is the creator of the assignment. Then you can do it as well. See create assignment part.
// •	While a user will try to update an assignment the input fields of the updated assignment form will be filled automatically with currently stored data of the assignment. Users can change the input field data and can update by clicking on the update assignment button.
// •	While the assignment will be updated, show a success message and redirect the user to the assignments page. [Redirecting is optional]
// o	View assignment button functionality
// •	By clicking on the view assignment button the user will be navigated to the assignment details page (this page will be a private dynamic page) where the user will see the assignment details which are provided while the assignment was created. And the “Take assignment” button will be shown.
// •	Users are able to submit an assignment by clicking on the “Take assignment” button and it will open a modal [Or you may open a new page, it's up to you] with the assignment submission form.
// •	The assignment submission form will have input fields for google docs link submission and another text area for giving a quick note text.
// •	By default, every submitted assignment will be in pending status. Save the user email with the submitted assignment so that it can be determined who has submitted it.
