<template>
  <h2 class="tw-font-medium tw-text-gray-800 darkx:tw-text-white tw-flex tw-items-center tw-gap-2">
    <span class="tw-text-gray-700">{{ item.factorisation_id }}</span>
    <button class="tw-h-full tw-w-[28px] tw-aspect-square tw-border tw-border-solid tw-shadowx tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-7 tw-duration-200 tw-justify-center hover:tw-bg-gray-100 tw-rounded tw-p-0.5" @click="download(item.id)">
      <icon icon="ci:arrow-down-sm" class="tw-text-xl" />
    </button>
    <a target="_blank" :href="$backend(item.attachement_image.startsWith('/') ? item.attachement_image.substring(1) : item.attachement_image)" v-if="item.close && item.paid & !!item.attachement_image" class="tw-h-full tw-w-[28px] tw-aspect-square tw-border tw-border-solid tw-border-cyan-200 tw-shadowx tw-flex tw-items-center tw-text-gray-500 hover:tw-text-gray-7 tw-duration-200 tw-justify-center hover:tw-bg-gray-100 tw-rounded tw-p-0.5" >
      <icon icon="uim:image-v" class="tw-text-xl tw-text-cyan-400" />
    </a>
  </h2>
</template>

<script>
import { serverUrl } from "@/config/config";

export default {
  props: {
    item: {
      required: true,
    },
  },

  methods: {
    download(id) {
      const url = serverUrl + "api/factorisations/generate-pdf/" + id;
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.setAttribute("download", "dd.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
};

</script>
