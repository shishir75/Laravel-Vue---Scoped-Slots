<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Scoped Slots</div>

                    <div class="card-body">
                        <ul>
                            <li v-for="item in items">
                                <slot name="menu-item" :item = 'item'>{{ item }}</slot>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: ['items'],

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
