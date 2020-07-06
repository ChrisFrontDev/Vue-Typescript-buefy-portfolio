<template>
  <fragment>
    <MainSectionAbout />
    <section>
      <br />
      <div>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu
          reclamis. Pra lá , depois divoltis porris, paradis. Casamentiss faiz
          malandris se pirulitá. Suco de cevadiss, é um leite divinis, qui tem
          lupuliz, matis, aguis e fermentis.
        </p>
        <p>
          Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
          tristique interdum. A ordem dos tratores não altera o pão duris. Copo
          furadis é disculpa de bebadis, arcu quam euismod magna. Posuere libero
          varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas
          purus nec aliquet elementum. Fusce maximus semper eleifend. Aenean
          bibendum enim id dolor ornare tincidunt. Duis hendrerit, enim vel
          ornare mattis, dui magna vestibulum sem, sed mattis sem urna vel erat.
          Maecenas at finibus felis. Sed faucibus metus non mauris lacinia
          mattis. Cras fringilla in sem a varius. Aliquam pretium neque ipsum,
          at lacinia tellus laoreet sit amet. Curabitur sit amet nibh libero. Ut
          condimentum, enim a dapibus tincidunt, felis elit condimentum mauris,
          a luctus dolor purus non augue.
        </p>
      </div>

      <iframe
        src="https://open.spotify.com/embed/track/5isHndEunT9J7bv4Mz9jgs"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </section>
  </fragment>
</template>

<script>
// @ is an alias to /src
import MainSectionAbout from '@/components/MainSectionAbout.vue';

export default {
  name: 'About',
  components: {
    MainSectionAbout,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
  }

  iframe {
    margin-top: 32px;
  }
}
</style>
