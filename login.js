        let user=document.querySelector('#user');
        let email=document.querySelector('#email');
        let pass=document.querySelector('#pass');
        let reenter=document.querySelectorAll('#reenter');
        let login=document.querySelector('#login');
        let title=document.querySelector('.title');
        let icon3=document.querySelector('icon-3');
        let forget=document.querySelector('#forget');
        let icon2=document.querySelector('#icon-2');
        let div=document.querySelector('hide');
        let button=document.getElementById('button');
        let nav=document.querySelector('nav');
        login.addEventListener('click',()=>{
            title.innerHTML='Signin';
            // 
            document.getElementById('reenter').style.display='none';
            document.getElementById('icon-3').style.display='none';
            document.getElementsByClassName('extra').style.marginTop="100px";
            // document.querySelector('nav').style.display='block';
        })
        login.addEventListener('click',()=>{
            document.querySelector('nav').style.display='block';
        })
        forget.addEventListener('click',()=>{
            document.getElementById('reenter').style.display='none';
            document.getElementById('pass').style.display='none';
            document.getElementById('icon-3').style.display='none';
            document.getElementById('icon-2').style.display='none';
            document.getElementById('hide').style.marginBottom='100px';
            document.querySelector('button').style.display='block';
            document.querySelector("button").style.bottom='56%';
            document.querySelector('nav').style.display='none';
            document.querySelector('nav').style.marginTop="100px";
        })
