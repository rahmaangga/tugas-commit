let todoName = document.getElementById('todo');
let btnsave = document.getElementById('btn');
    btnsave.addEventListener('click',function(){
        
        if(todoName.value == ''){
            alert('please input something!!');
        }else{
           let todoBox = document.querySelector('.list-group');
           let todoHTML = todoBox.innerHTML;
           todoHTML += `
           <li class="list-group-item d-flex justify-content-between">
           ${todoName.value}
           
           <button class="badge border-0 bg-danger btn-del ">Delete</button>
         </li>
           `;
           todoBox.innerHTML = todoHTML;
           todoName.value = '';
           todoName.focus();
        }

        let btnDel = document.querySelectorAll('.btn-del');
        for (let x = 0; x < btnDel.length; x++) {
            const hapus = btnDel[x];
        hapus.addEventListener('click',function(){
            this.parentElement.remove();
        })  
        }
    })
