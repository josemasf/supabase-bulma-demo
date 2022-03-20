
<script>
    import {supabase} from '../service/supabase.service'
    
    let email= ''
    let password= ''
    let loginSended = false
    let userLogined 
    let errorLogin 

    getUser() 

    async function getUser() {
        const user = supabase.auth.user()
        
            if(user) {
                userLogined = user; 
                loginSended = true;
            }
            
        }
    
        async function login() {
            let { user, error } = await supabase.auth.signIn({
            email,
            password
            })
        
            if(user) {
                userLogined = user; 
                loginSended = true;
            }
            if(error) errorLogin = error
        }  
        
        async function logout() {
            let { error } = await supabase.auth.signOut()
        
            loginSended = false;
            userLogined = undefined;
            email= ''
            password= ''
            if(error) errorLogin = error
        }
    
        function closeNotification(){
            loginSended = false
        }
    
    </script>
    
    {#if !userLogined}
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

      
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" on:click|once={login}>Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    {/if}  
     
    {#if loginSended}
        <div class="notification is-success">
        <button class="delete" on:click={closeNotification}></button>
        Hi {userLogined.email} last sign in at {new Date(userLogined.last_sign_in_at).toLocaleString()}
        <button class="button is-link" on:click|once={logout}>Logout</button>
      </div>  
    {/if}
    {#if errorLogin}
        <div class="notification is-danger">
        <button class="delete" on:click={closeNotification}></button>
        {errorLogin.message}    
      </div>  
    {/if}
      
      
      
      
      