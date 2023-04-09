let menu = [
    {
        'groupName' : 'Frabric', 
        'configName' : ['rojo', 'blue', 'nero', 'tierra']
    },
    {
        'groupName' : 'Frame', 
        'configName' : ['ruby_red', 'mountain_fjord', 'creamy_yellow']
    },
    {
        'groupName' : 'Mesh Material', 
        'configName' : ['roso', 'blue', 'nero', 'blanco'],
    }
]

menu_element = document.querySelector('.menu')

for (let n = 0; n < menu.length; n++){
    // create ul with groupname in h3
    let ul=document.createElement('ul');
    ul.classList.add('configuration_ul')
    let h3=document.createElement('h3')
    menu_element.appendChild(ul);
    h3.innerHTML = menu[n].groupName
    ul.appendChild(h3)

    // create li with configname
   for (let config_name = 0; config_name < menu[n].configName.length; config_name++){
        let li = document.createElement('li')
        li.classList.add('btn')
        li.classList.add('btn-primary')
        li.classList.add('btn-sm')
        li.classList.add('status')
        li.innerHTML = menu[n].configName[config_name]
        ul.appendChild(li)
   }
}