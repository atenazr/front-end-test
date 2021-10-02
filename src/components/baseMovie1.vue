<template>
    <div class="col-12 col-md-6 col-lg-4 ">
        <div class="border rounded my-2 p-3 text-center d-flex justify-content-center flex-column align-items-center">
            <div  id="img-container" class="rounded overflow-hidden my-2"><img  class="img-fluid h-100" :src="srcImg" alt=""></div>
            <div id="name" class="text-warning rounded mx-auto">
            <h3 class="text-decoration-underline">{{ nameMovie }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'baseMovie1',
    props:[
        'idM',
        'nameMovie',
        'yearMovie',
        'srcImg'
    ],
}
</script>

<style scoped>
#img-container{
    width: 20vw;
    height: 20vw;
    min-width: 200px;
    min-height: 200px;
}
#img-container img{
    object-fit: cover;
}
</style>