<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top" aria-label="Third navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Periodiss | Periodismo independiente</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- TODO: añadir un componente que agrege esta lista, directo o en un dropdown (no harcoded) -->
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                    <li class="nav-item">
                        <!-- aquí se puede jugar con vue para pasarle active como clase sólo si essta 'active' -->
                        <a class="nav-link active" aria-current="page" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Guardados</a>
                    </li>
                </ul>
                <form role="search">
                    <input class="form-control" type="search" placeholder="Search (No implementado)"
                        aria-label="Search">
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>