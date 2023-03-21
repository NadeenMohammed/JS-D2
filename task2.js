var str = "this is a javaScript string demo"
var i = str.split(' ')
let arr = [i]
 console.log(arr);
longest_word = i.reduce(
    function(currentItem , longestItem){
        if(currentItem.length > longestItem.length)
        {
            return currentItem;
        }else{
            return longestItem;
        }
    }
)
console.log(longest_word);

document.write("<h2>"+longest_word+"</h2>")