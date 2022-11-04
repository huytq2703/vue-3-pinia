<template>
  <div>
    <div class="grid">
      <div class="col-12">
        <div class="card">
          <h5>Validation Message</h5>
          <div class="formgroup-inline" style="margin-bottom: 0.5rem">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" class="p-invalid" />
            <InlineMessage style=" margin-left: 10px;">Username is required</InlineMessage>
          </div>
          <div class="formgroup-inline">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" class="p-invalid" />
            <InlineMessage  style=" margin-left: 10px;"/>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>


<style>

</style>