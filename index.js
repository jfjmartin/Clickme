


let text = "Zero Clicks"

function printClicks(){
    console.log('printClicks ran')
  $(".clicks").html(text)
}



function buttonClicked() {
    let counter = 0;
    $(".clicker").click(function(event) {
        counter += 1;
        $(".clicks").html(`${counter} Clicks`)
        if (counter > 5) {
            $(".clicks").html("enough already")
        }
    })
}



function allClicks() {
      printClicks();
      buttonClicked();
  }
  
  // when the page loads, call `handleShoppingList`
  $(allClicks);