<template>
    <Teleport to="body">
        <div class="modal" @click="$emit('close')">
            <div class="modal-dialog" role="document">
                <div class="modal-content" @click.stop>
                    <button type="button" class="btn btn-light close-modal" @click="$emit('close')">X</button>
                    <div class="modal-header">
                        <h3 class="modal-title" v-if="$slots.title">
                            <slot name="title" />
                        </h3>
                    </div>
                    <slot name="body"/>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
export default {
    name: 'Modal',
    setup() {
        return{
        }
    }
}
</script>

<style lang="scss" scoped></style>