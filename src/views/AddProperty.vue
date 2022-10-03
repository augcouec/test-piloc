<template>
  <div>
    <h1>Ajouter une propriétée</h1>
    <div>
      <form action="post">
        <p>
          <label for="name">Nom de la propriétée *</label>
          <input id="name" type="text" name="name" />
        </p>
        <p>
          <label for="adresse">Adresse *</label>
          <input id="adresse" type="text" adresse="adresse" />
        </p>
        <p>
          <label for="price">Prix mensuel (CC) *</label>
          <input id="price" type="number" price="price" />
        </p>
        <p>
          <label for="image">Image *</label>
          <input id="image" type="file" image="image" />
        </p>
        <p>
          <label for="name">Date de location</label>
          <input id="name" type="text" name="name" />
        </p>
        <p>
          <input class="button" type="submit" value="Ajouter" />
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  margin: 1rem 10%;
  display: flex;
  flex-direction: column;
  width: 80%;
}
label {
  font-size: 1rem;
  padding: 1rem;
}
input {
  border: none;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
  padding: 1rem;
}
.button {
  width: 40%;
  padding: 1rem;
  border: 1px solid #c4c4c4;
  background-color: #40b983;
  border-radius: 5px;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
  align-self: center;
}
</style>
