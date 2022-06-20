<template>
  <header>
    <NavBar></NavBar>
  </header>

  <main class="container">



    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 pt-4 mb-4 fst-italic border-bottom">
          Publicaciones
        </h3>
        <LinkPost v-for="post in posts" :key="post.id" :data="post.data"></LinkPost>
      </div>

      <!-- TODO: hacer estos elementos componentes (About y Archive) -->
      <div class="col-md-4">
        <div class="position-sticky pt-4" style="top: 10rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">Sobre esta página</h4>
            <p class="mb-0">Periodiss es una aplicación que te permite compartir links y revisar links que te interesen
              publicados por otras personas.</p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Archivo</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">En otros lugares</h4>
            <ol class="list-unstyled">
              <li><a href="https://github.com/jmainhard">GitHub</a></li>
              <li><a href="mailto:jmainhard@outlook.com">Mail me!</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4>Haz tu publicación</h4>
      <form>
        <div class="form-group">
          <label for="title">Título:</label>
          <input type="text" class="form-control" required placeholder="Ingresa un título" v-model="newPost.data.title">
        </div>
        <div class="form-group">
          <label for="url">URL:</label>
          <input type="text" class="form-control" required placeholder="Ingresa tu url" v-model="newPost.data.link">
        </div>
        <div class="form-group">
          <label>Nombre:</label>
          <input type="text" class="form-control" placeholder="Ingresa tu nombre (opcional)"
            v-model="newPost.data.author">
        </div>
        <div class="form-group p-4">
          <input @click="addPost(this.newPost)" class="btn btn-primary" value="Publicar">
        </div>
      </form>
    </div>



  </main>

  <footer>
    <FooterComponent></FooterComponent>
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'
import LinkPost from './components/LinkPost.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent,
    LinkPost
  },
  data() {
    return {
      posts: [
        {
          id: 1, data: {
            title: 'Lorem Ipsum',
            author: 'John Doe',
            timeElapsed: '17 mins ago',
            link: '',
            upvoted: true
          }
        },
        {
          id: 2, data: {
            title: 'Etiam et enim placerat',
            author: 'Lilian Soprano',
            timeElapsed: '11 day ago',
            link: '',
            upvoted: false
          }
        },
        {
          id: 3, data: {
            title: 'Ipsum primis in faucibus orci lactus',
            author: 'Frank Valli',
            timeElapsed: '12 hours ago',
            link: '',
            upvoted: false
          }
        }
      ],
      newPost: {
        id: 0, data: {
          title: '',
          author: '',
          timeElapsed: 'just now',
          link: '',
          upvoted: true
        }
      }
    }
  },
  methods: {
    addPost: function (newPost) {
      if (newPost.data.author.length == 0) {
        newPost.data.author = 'Anónimo';
      }
      newPost.id = this.posts[this.posts.length - 1].id + 1;
      this.posts.push(newPost);
    }
  }
}
</script>

<style>
</style>
