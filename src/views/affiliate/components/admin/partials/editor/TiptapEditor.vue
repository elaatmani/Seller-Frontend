<template>
  <div>
    <editor-toolbar :editor="editor" />
    <editor-content :editor="editor" class="tw-w-full tw-min-h-[300px] tw-outline-none no-tailwind" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import Underline from "@tiptap/extension-underline"
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import EditorToolbar from './EditorToolbar'

const editor = useEditor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
        Underline,
        Image,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      editorProps: {
        attributes: {
          class: 'tw-outline-none tw-border tw-border-solid tw-border-gray-200 tw-min-h-[250px] tw-p-5 tw-rounded-b',
        },
      },
    })
</script>

<style>
.no-tailwind h1, .no-tailwind h2, .no-tailwind h3, .no-tailwind h4, .no-tailwind h5, .no-tailwind h6, .no-tailwind ul, .no-tailwind ol, .no-tailwind li  {
      font-size: revert !important;
      list-style: revert !important;
      padding: revert !important;
}
</style>