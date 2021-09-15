// Import stylesheets
import './style.css';

// Write Javascript code!
const input = document.querySelector('.search');
const button = document.getElementById('btn');
button.addEventListener('click', requestData);

// function 
function requestData() {
  input.classList.add('active');
  // api link
  const API_LINK = 'https://randomuser.me/api/?results=20';
  let template = ''
  const responseTable = document.querySelector('.response');

  // ajax
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', API_LINK, true);
  xhttp.send();

  xhttp.onreadystatechange = function (){
    if(this.status == 200 && this.readyState == 4){
      const users = JSON.parse(this.responseText).results;
      for(let user of users){
        const gender = (user.gender == 'female') ? '#ff22b9' : '#00aae4 '
        template += `
          <tr>
            <td>${user.name.first}</td>
            <td>${user.name.last}</td>
            <td>${user.email}</td>
            <td style="color:${gender};">${user.gender}</td>
            <td><img src="${user.picture.medium}"></td>
          </tr>
        `;
      }
      responseTable.innerHTML = template;
    }
  }
}



