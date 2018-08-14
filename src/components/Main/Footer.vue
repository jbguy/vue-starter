<template>
    <footer class="footer">
        <div class="container">
            <span class="text-muted float-right">
                <font-awesome-icon icon="user" class="icon-user" />jbguy.github.fr
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
}

.icon-user {
    margin-right: 10px;
}
</style>
