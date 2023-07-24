<script lang="ts">
  // export let data;
</script>


<div class="container">
  <div style="text-align:center">
    <h1>Contact & Stuff</h1>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="https://www.w3schools.com/w3images/map.jpg" style="width:100%" alt="map">
    </div>
    <div class="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name...">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name...">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="usa">United States</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something..." style="height:170px"></textarea>
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</div>

<style lang="postcss">
  .container {
  border-radius: 1rem;
  background-color: #ffffff08;
  padding: 1rem;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  padding: 20px;
  width: 100%;
  margin-top: 0;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (min-width: 600px) {
  .column, input[type=submit] {
    width: 50%;
    margin-top: 6px;
  }
}
</style>
