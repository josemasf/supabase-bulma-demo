
<script>
import {supabase} from '../service/supabase.service'

let email= ''
let password= ''
let loginSended = false
let userLogined 
let errorLogin 

    async function signup() {
		let { user, error } = await supabase.auth.signUp({
        email,
        password
        })
    
        if(user) {
            userLogined = user; 
            loginSended = true;
        }
        if(error) errorLogin = error
	}

    function closeNotification(){
        loginSended = false
    }

</script>

  
  <div class="field">
    <label class="label" for="email">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input id="email" class="input is-danger" type="email" placeholder="Email input" bind:value={email}>      
    </div>    
  </div>
  
  <div class="field">
    <label class="label" for="pass">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input id="pass" class="input is-danger" type="password" placeholder="Password input" bind:value={password}>
    </div>    
  </div>
{#if loginSended}
    <div class="notification is-success">
    <button class="delete" on:click={closeNotification}></button>
    Wellcome use your email: {userLogined.email}
  </div>  
{/if}
{#if errorLogin}
    <div class="notification is-danger">
    <button class="delete" on:click={closeNotification}></button>
    {errorLogin.message}    
  </div>  
{/if}
  
  
  
  
  
  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" on:click|once={signup}>Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>