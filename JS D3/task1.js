// document.body.style.backgroundColor = "lightblue";
// // document.write("<h1 class='header' style='color:magenta ; padding:2.5px 10px 0 ;'>TODO LIST</h1><hr>")
// let head = document.querySelector(".header");
// head.innerText="TODO LIST"
// head.style.color='magenta '
// // head.style.='center'


// // head.style.textAligne = "center";


// function ADD()
// {
//     let inp = document.querySelector(".inp").value

//     console.log(inp);
//     let empty = document.querySelector(".empty")
//     empty.style.backgroundColor="red"
//     empty.style.fontsize='50px'
//     console.log(empty);
//     empty.innerHTML = inp;
// }

window.addEventListener('load', () => {
    const form = document.querySelector('#TODO');
    const inp = document.querySelector('#inp');
    const list = document.querySelector('#tasks')
    // console.log(form);


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // console.log("Submit from");

        let task = inp.value;

        if (!task) {
            window.alert("please add task")
            return
        }

        var list_inp = document.createElement('div');
        list_inp.classList.add('task');

        var inp_content = document.createElement('div');
        inp_content.classList.add('content');
        inp_content.innerText = task;


        list_inp.appendChild(inp_content);




        let task_inp_el = document.createElement('input');
        task_inp_el.classList.add("text");
        task_inp_el.type = "text";
        // task_inp_el.value = task;
        task_inp_el.setAttribute("readonly", "readonly");
        
        inp_content.appendChild(task_inp_el)

        const task_action = document.createElement("div")
        task_action.classList.add('actions');


        let task_Done = document.createElement("button");
        task_Done.classList.add("Done");
        task_Done.innerHTML = "Done"
        console.log(task_Done.innerHTML);

        let task_delete = document.createElement("button");
        task_delete.classList.add("delet");
        task_delete.innerHTML = 'delet'


        


        task_action.appendChild(task_Done);
        task_action.appendChild(task_delete);

        list_inp.appendChild(task_action);

        
        list.appendChild(task_inp_el);

        list.appendChild(list_inp);


        inp.value= '';


        task_Done.addEventListener('click' , () =>
        {
            if(task_Done.innerText.toLocaleLowerCase()== "Done")
            {
                task_inp_el.removeAttribute("readonly");
                task_inp_el.focus();
                task_Done.innerText = 'save'
            }else{
            inp_content.style.backgroundColor='green'            }
        })


    task_delete.addEventListener('click' , () =>
    {
        list.removeChild(list_inp)
    })
        

    })
})
