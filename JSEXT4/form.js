// проверка формы на имя, телефон и email
document.addEventListener('DOMContentLoaded', function () {


    
    
    
    
    


    // подцветить
    function colored(ident) {
        conlog(ident.name + ' colored');
        ident.style.border = '1px solid red';
        ident.style.backgroundColor = '#ffbdbd';
        //return false;
    }

    // снять подсветку
    function whited(ident) {
        conlog(ident.name + ' whited');
        ident.style.border = '1px solid #c0c0c0';
        ident.style.backgroundColor = '#fff';
        //return true;
    }


    // проверка всех инпутов
    function check_inputs(elem){

        let regexp_name = new RegExp(/([a-zA-Zа-яА-Я0-9 _-].*)/g);
        let regexp_email = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
        let regexp_tel = new RegExp(/^(\+7|8)\(\d{3}\)(\d{3})-(\d{4})$/);

        let name_ok = false;
        let tel_ok = false;
        let email_ok = false;

        
        let $name = document.querySelector('input[name="name"]');
        if(regexp_name.test($name.value)){
            name_ok = true;
            whited($name);
        }
        else {
            colored($name);
        }
    
        
        let $tel = document.querySelector('input[name="tel"]');
        if(regexp_tel.test($tel.value)){
            tel_ok = true;
            whited($tel);
        }
        else {
            colored($tel);
        }
    
        
        let $email = document.querySelector('input[name="email"]');
        if(regexp_email.test($email.value)){
            email_ok = true;
            whited($email);
        }
        else {
            colored($email);
        }
           
        
        return (name_ok && tel_ok && email_ok);
    }



    // если все проверки вернули true
    document.querySelectorAll('form input').forEach(input => {
        input.addEventListener('blur', event => {
            let check = check_inputs(event);
            conlog(check);
            if (check === true){
                // отправить форму
                document.forms[0].submit();
            }
        });
    });




    
    

    // заблокировать submit
    document.querySelector('[type="submit"]').addEventListener('click', (event) => {    
        event.preventDefault();
    });



/*
    let inp_email = new Promise((resolve, reject) => {
        $email.addEventListener('blur', (event) => {
            resolve => {
                let regexp_email = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/);
                return regexp_email.test($email.value);
            };
            reject => {
                conlog('email rejected');
                colored($email);
            }
        });
    });

    inp_email.then(value => {
        whited($email);
        conlog(value);
        conlog('email resolved');
    });



    Promise.all([inp_name, inp_tel, inp_email]).then(values => {
        conlog('promise all');
        document.forms[0].submit();
    }, reason => {
        console.log(reason)
    });
*/


});