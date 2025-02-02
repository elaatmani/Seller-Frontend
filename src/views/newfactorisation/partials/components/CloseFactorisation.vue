<template>
    <div>
        <div class="tw-flex tw-items-center tw-w-full tw-text-neutral-600 dark:tw-text-neutral-200 tw-text-md tw-py-1">
            <label class="tw-relative tw-inline-flex tw-items-center tw-cursor-pointer tw-w-fit tw-scale-75">
                <input
                    :disabled="isLoadingClose"
                    v-model="close"
                    type="checkbox"
                    class="tw-sr-only tw-peer"
                    @change="onCloseChange"
                />
                <div class="tw-flex tw-items-center peer-checked:tw-bg-emerald-500 tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none tw-rounded-full tw-peer dark:tw-bg-neutral-600 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600"></div>
            </label>
            <v-icon v-if="isLoadingClose" color="green" size="small" class="tw-animate-spin">mdi-loading</v-icon>
        </div>

        <!-- Dialog Popup -->
        <v-dialog v-model="showPopup" max-width="400">
            <v-card>
                <v-card-title class="tw-text-center">Add USDT</v-card-title>
                <v-card-text class="tw-flex tw-items-center">
                    <p class="!text-neutral-600">1 USD = &nbsp;</p>
                    <v-text-field
                        v-model="exchangeRate"
                        label="USDT"
                        type="number"
                        :rules="[v => !!v || 'Exchange rate is required']"
                        required
                    ></v-text-field>
                </v-card-text>
                <v-card-actions class="tw-flex tw-justify-end">
                    <v-btn @click="cancelUpdate" color="gray">Cancel</v-btn>
                    <v-btn @click="confirmUpdate" variant="tonal" color="primary-color">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Factorisation from '@/api/Factorisation'

export default {
    props: {
        item: {
            required: true,
        }
    },

    data() {
        return {
            isLoadingClose: false,
            showPopup: false,
            close: this.item.close, // Initialize with prop value
            exchangeRate: 0, // Add exchange rate input field
        }
    },
    emits: ['update'], // Declare the 'update' event
    methods: {
        onCloseChange() {
            // Show the popup only if the checkbox is changing from false to true
            if (!this.item.close && this.close) {
                this.showPopup = true;
            } else if (this.item.close && !this.close) {
                // If changing from true to false, update directly without showing the popup
                this.updateClose(this.close);
            }
        },

        cancelUpdate() {
            this.showPopup = false; // Hide the dialog on cancel
            this.close = this.item.close; // Reset to the initial value
            this.exchangeRate = 0; // Clear the exchange rate input
        },

        confirmUpdate() {
            if (this.exchangeRate <= 0) {
                this.$alert({
                    title: 'Error',
                    text: 'Exchange rate is required.',
                    type: 'error',
                });
                return;
            }

            // Call the update method with the new value and exchange rate
            this.updateClose(this.close, this.exchangeRate);
            this.showPopup = false;  // Hide the dialog after confirming
        },

        updateClose(value , exchangeRate) {
            this.isLoadingClose = true;
            Factorisation.updateClose(this.item.id, value, exchangeRate)
            .then((response) => {
                if (response.data.code == "FACTORISATION_UPDATED") {
                    const newFucktorisation = response.data.data.factorisation;
                    this.$emit('update', newFucktorisation);
                    // this.$store.dispatch(
                    //     "factorisation/update",
                    //     response.data.data.factorisation
                    // );
                    this.$alert({
                        title: 'Updated Successfully !',
                        type: 'success'
                    })
                }
            }, this.$handleApiError)
            .finally(() => {
                this.isLoadingClose = false;
            });

        }

    }
}
</script>