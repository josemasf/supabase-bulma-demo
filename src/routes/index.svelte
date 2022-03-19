<script>
import * as faker  from '@faker-js/faker';

import {supabase} from '../service/supabase.service'

 async function  readTable(){
   let { data: table1, error } = await supabase
  .from('table1')
  .select('*')

  return table1
}

let promise = readTable();

async function  writeTable(){   
    const { data, error } = await supabase
    .from('table1')
    .insert([
        { name: faker.name.findName()},
    ])

    promise = readTable();
}


</script>
<section class="hero">
    <div class="hero-body">
      <p class="title">
        Supabase demo 
      </p>
      <p class="subtitle">
        Bulma UI change 
      </p>
    </div>

    <button on:click={writeTable} class="button is-primary">Añadir item</button>

    {#await promise}
    <p>...waiting</p>
    {:then items}

    <table class="table">
        <thead>
          <tr>
            <th><abbr title="Position">Name</abbr></th>
          </tr>
        </thead>
        <tbody>
            {#each items as item}
                <tr>
              <th>{item.name}</th>
            </tr>
            {/each}
            
        </tbody>
    </table>
    {/await}
  </section>