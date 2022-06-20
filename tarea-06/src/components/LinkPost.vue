<template>
    <article class="blog-post">

        <a class="post-anchor" href="#">
            <div class="row border rounded post ">

                <!-- TODO: hacer este div clickeable @click para actualizar estado de upvoted -->
                <div class="col-1">
                    <div v-if="data.upvoted">
                        <UpvotedIcon></UpvotedIcon>
                    </div>
                    <div v-else>
                        <UpvoteIcon></UpvoteIcon>
                    </div>
                </div>
                <div class="col-10">
                    <h2 class="blog-post-title mb-1">{{ data.title }}</h2>
                    <p class="blog-post-meta">
                        {{ data.author }} | {{ data.timeElapsed }}
                    </p>
                </div>
            </div>
        </a>
    </article>
</template>

<script>
import UpvoteIcon from './icons/UpvoteIcon.vue'
import UpvotedIcon from './icons/UpvotedIcon.vue'

export default {
    props: ["data"],
    components: {
        UpvoteIcon, UpvotedIcon
    }
}
</script>

<style>
/* stylelint-disable selector-list-comma-newline-after */

.blog-header {
    border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif
        /*rtl:Amiri, Georgia, "Times New Roman", serif*/
    ;
    font-size: 2.25rem;
}

.blog-header-logo:hover {
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Playfair Display", Georgia, "Times New Roman", serif
        /*rtl:Amiri, Georgia, "Times New Roman", serif*/
    ;
}

.display-4 {
    font-size: 2.5rem;
}

@media (min-width: 768px) {
    .display-4 {
        font-size: 3rem;
    }
}

.flex-auto {
    flex: 0 0 auto;
}

.h-250 {
    height: 250px;
}

@media (min-width: 768px) {
    .h-md-250 {
        height: 250px;
    }
}

/* Pagination */
.blog-pagination {
    margin-bottom: 4rem;
}

/*
 * Blog posts
 */
.blog-post {
    margin-bottom: 4rem;
}

.blog-post-title {
    font-size: 2.5rem;
}

.blog-post-meta {
    margin-bottom: 1.25rem;
    color: #727272;
}

/*
 * Footer
 */
.blog-footer {
    padding: 2.5rem 0;
    color: #727272;
    text-align: center;
    background-color: #f9f9f9;
    border-top: .05rem solid #e5e5e5;
}

.blog-footer p:last-child {
    margin-bottom: 0;
}

img {
    max-width: 30px;
}

.post {
    padding-top: 15px;
}

.post-anchor {
    color: black;
    text-decoration: none;
}
</style>