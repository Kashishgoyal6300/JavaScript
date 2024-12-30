const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("confirm-password");
const submit=document.getElementById("submit");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
})
const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const cPasswordValue=cpassword.value.trim();

    if(usernameValue===''){
        setError(username,"username is required")
    }
    else{
        setSuccess(username);
    }

    if(emailValue===''){
        setError(email,"email is required");
    }
    else if(!isValidEmail(emailValue)){
        setError(email,"Provide a valid email address");
    }
    else{
        setSuccess(email);
    }


    if(passwordValue===''){
        setError(password,'Password is rerquired');
    }
    else if(passwordValue.length<4){
        setError(password,'Password must be atleast 5 character');
    }
    else{
        setSuccess(password);
    }
    if (cPasswordValue === '') {
        setError(cpassword, 'Please confirm your password');
    } 
    else if (cPasswordValue !== passwordValue) {
        setError(password, "Passwords don't match");
    } 
    else {
        setSuccess(cpassword);
    }
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success'); 
};
const setSuccess=(element)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText="";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
 function isValidEmail(e){
    var reg=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}


