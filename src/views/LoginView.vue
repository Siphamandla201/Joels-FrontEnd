<template>
    <div class="page-inner">
        <form class="col container form" @submit.prevent="login">
        <div class="form-control-wrapper">
            <h5>
                Email
            </h5>
            <span class="inline">
              <input type="email" class="form-control" placeholder="Email">
            </span>        
        </div>
        <div class="form-control-wrapper"> 
            <h5>
                Password
            </h5> 
           <span class="inline">
              <input type="password" class="form-control" placeholder="Password">
           </span>        
        </div>
        <div>
            <button>Submit</button>
        </div>
        <div class="links">
           <a class="pin" href="">Forgot pin ?</a>
        </div>
      </form>
        <div class="col empty">
            <h4>Hi Are you New Here ?</h4> <br>
            <p>
               <strong> Sign up</strong> now to enjoy the latest music with us. <br> Click button below to get started now
            </p> <br>
            <button>
                <a href="/register">Sing up</a>
            </button>

        </div>
  </div>

</template>
<script>
export default {
    
}
</script>
<style>
.page-inner {
    display: flex;

}


.empty {
    border: 2px solid black;
    /* width: 40%; */
}

.form {
    /* width: 55%; */
    /* position: absolute;
    top: 40%;
    left: 10%; */
    border: 2px solid red;
}


.form-control-wrapper {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
}

.links {
    margin-top: 15px;
}

.links > .pin {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: end;
    justify-content: end;
}


</style>