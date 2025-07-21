    let items = [];

    function addItem() {


        
      const input = document.getElementById("userInput").value;
      if (input) {
        items.push(input);
        alert(`Added "${input}" at index ${items.length - 1}`);
        document.getElementById("userInput").value = "";
      }
    }

    function del_last_entry() {


      if (items.length > 0) {
        const removed = items.pop();
        alert(`Removed "${removed}"`);
      } else {
        alert("No entries to delete.");
      }


    }

    function display_items() {
      document.getElementById("displayArea").innerHTML = items.join("<br>");
    }