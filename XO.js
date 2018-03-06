window.onload = function() {
  // 1.default value (x||o)
  var default_value = "X" ;

  // 2.kaxel click bolor tdneri vra
  var buttons = document.getElementsByClassName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
      // console.log(this);
      // 2.1 stugel vandak@ datark e te voch
      //2.1.2 default valuen poxel hajord nshanov,add anel contentum
      if(this.textContent == ""){
          this.textContent = default_value;
          default_value = default_value == 'X' ? "O" : "X";

      //2.1.1 ete datark e avelacnel default value (x||o) ev
      }else{
        console.log("vandak@ zbaxvaca");
      }
    }
  }
}
