<template>
  <div>
    <button @click="visible = !visible" class="tw-aspect-square tw-p-0.5 tw-w-[32px] tw-flex tw-items-center tw-justify-center tw-rounded tw-border tw-border-solid tw-border-fuchsia-100 hover:tw-border-fuchsia-400 tw-bg-fuchsia-50/10 hover:tw-bg-fuchsia-100 tw-duration-200">
        <icon icon="uim:image-v" class="tw-text-xl tw-text-fuchsia-500" />
    </button>

    <popup-new :visible="visible" @cancel="visible = false" :closeable="!loading">
        <div class="tw-w-full tw-max-w-[700px] tw-mx-auto tw-p-2">
            <div
                class="tw-w-full tw-h-fit tw-bg-white tw-rounded-md tw-border tw-border-solid tw-shadow-md tw-overflow-hidden">
                <h1
                    class="tw-text-lg tw-font-medium tw-text-gray-600 tw-bg-gray-100 tw-border-b tw-border-solid tw-p-4">
                    Upload image
                </h1>

                <div class="tw-p-5">
                    <input @change="handleImageChange" ref="image-field" type="file" name="image" :id="'invoice-image-' + props.item.id" class="tw-invisible"/>
                    <div role="button" @click="toggleFileSelector" class="tw-relative tw-min-h-[350px] tw-w-full tw-cursor-pointer tw-border tw-border-dashed hover:tw-border-orange-400 tw-duration-200 tw-rounded tw-flex tw-overflow-hidden tw-items-center tw-justify-center">
                        <div class="tw-text-center tw-flex tw-items-center tw-justify-center tw-flex-col tw-gap-5">
                            <icon icon="ep:upload-filled" class="tw-text-7xl tw-text-neutral-500" />
                            <p>Click to upload</p>

                            <div v-if="props.item.attachement_image && !imageUrl" class="tw-absolute tw-h-full tw-w-full tw-left-0 tw-top-0 tw-bg-white tw-flex tw-items-center tw-justify-center">
                                <img class="tw-w-full tw-h-full tw-object-contain" :src="$backend(props.item.attachement_image.startsWith('/') ? props.item.attachement_image.substring(1) : props.item.attachement_image)" />
                            </div>
                            <div v-if="imageUrl" class="tw-absolute tw-h-full tw-w-full tw-left-0 tw-top-0 tw-bg-white tw-flex tw-items-center tw-justify-center">
                                <img class="tw-w-full tw-h-full tw-object-contain" :src="imageUrl" />
                            </div>
                            

                            <!-- Add update buttons -->
                            <div v-if="false" class="tw-absolute tw-top-0 tw-right-0 tw-w-fit tw-h-fit tw-p-5 tw-bg-red-300 tw-z-10">
                                <button>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="tw-flex tw-justify-end tw-items-center tw-p-2 tw-gap-3 dark:tw-bg-neutral-900 tw-bg-gray-100 tw-border-t tw-border-solid">
                    <button @click="visible = false" :disabled="loading"
                        class="tw-py-2 tw-px-7 tw-rounded tw-text-sm tw-border tw-border-solid tw-border-tansparent dark:tw-border-neutral-900 hover:tw-border-neutral-400 dark:hover:tw-border-neutral-500 hover:tw-bg-gray-300 tw-bg-gray-200 dark:tw-bg-neutral-600 tw-duration-300 tw-text-neutral-900 dark:tw-text-neutral-300">
                        Close
                    </button>

                    <button
                        :disabled="loading"
                        @click="handleUploadImage"
                        class="tw-py-2 tw-px-7 tw-flex tw-items-center  tw-rounded tw-text-sm tw-bg-orange-400 tw-border tw-border-solid tw-border-tansparent hover:tw-border-orange-600 dark:tw-border-neutral-900 dark:hover:tw-border-orange-500 hover:tw-bg-orange-500/80 dark:hover:tw-bg-orange-400 tw-duration-300 tw-text-white">
                        <v-icon size="small"
                            class="tw-duration-300 tw-animate-spin tw-overflow-hidden tw-max-w-0 tw-mr-0"
                            :class="[loading && '!tw-max-w-[50px] !tw-mr-3']">mdi-loading</v-icon>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        </div>
    </popup-new>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import Factorisation from '@/api/Factorisation';
import { useAlert } from '@/composables/useAlert';

const visible = ref(false);
const loading = ref(false);
const file = ref(null);
const props = defineProps(['item']);
const emit = defineEmits(['update'])
const imageUrl = ref('');

// const imageField = ref(null)

const handleUploadImage = async () => {
    if(!file.value) {
        useAlert('Add image to update', 'warning');
        return false;
    }

    loading.value = true;
    try {
        const formData = new FormData();
        formData.append('image', file.value);
        const response = await Factorisation.uploadImage(props.item.id, formData);

        console.log(response.data);
        if(response.data.code == 'SUCCESS') {
            const newfactorisation = {...props.item, attachement_image: response.data.factorisation.attachement_image }
            emit('update', newfactorisation);
            useAlert('Image attachement updated')
            visible.value = false;
        }
        // Handle success response
    } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error
    }

    loading.value = false;
}

const toggleFileSelector = () => {
    document.getElementById('invoice-image-' + props.item.id).click()
}



const handleImageChange = (e) => {
    if(e.target.files.length <= 0) return;

    file.value = e.target.files[0];
    imageUrl.value = URL.createObjectURL(file.value);
}


</script>

<style>

</style>