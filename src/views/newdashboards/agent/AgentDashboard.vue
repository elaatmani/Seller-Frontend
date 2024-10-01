<template>
  <div>
    <div class="tw-grid tw-grid-cols-12 tw-gap-3 tw-mb-4">
      <div class="tw-col-span-12 md:tw-col-span-4">
        <AssignedPerDayChart  />
      </div>

      <div class="tw-col-span-12 md:tw-col-span-4">
        <ConfirmedPerDayChart />
      </div>

      <div class="tw-col-span-12 md:tw-col-span-4">
        <AgentsRankingChart />
      </div>

    </div>

    <IndexFilters @update="updateFilters" @filter="applyFilters" />
    <div class="tw-flex tw-flex-wrap tw-justify-center md:tw-flex-nowrap tw-items-center tw-gap-2">
      <ConfirmationChart :filters="appliedFilters" />
      <IndexStatistics :statistics="statistics" :fetching="fetching" />
    </div>
  </div>
</template>

<script>
import IndexStatistics from "@/views/newdashboards/agent/partials/statistics/IndexStatistics";
import ConfirmationChart from "@/views/newdashboards/agent/chart/ConfirmationChart";
import IndexFilters from "@/views/newdashboards/agent/partials/filters/IndexFilters";
import AssignedPerDayChart from "./chart/AssignedPerDayChart.vue";
import ConfirmedPerDayChart from "./chart/ConfirmedPerDayChart.vue";
import AgentsRankingChart from "./chart/AgentsRankingChart.vue";
import Agent from "@/api/Agent";

export default {
  components: { IndexStatistics, IndexFilters, ConfirmationChart, AssignedPerDayChart, ConfirmedPerDayChart, AgentsRankingChart },

  data() {
    return {
      currentFilters: {
        dropped_from: null,
        dropped_to: null,
        treated_from: null,
        treated_to: null,
      },
      appliedFilters: {
        dropped_from: null,
        dropped_to: null,
        treated_from: null,
        treated_to: null,
      },
      statistics: null,
      fetching: true,
    };
  },

  methods: {
    updateFilters(newFilters) {
      this.currentFilters = newFilters;
    },

    async applyFilters() {
      this.appliedFilters = { ...this.currentFilters };
      this.fetching = true;

      try {
        const res = await Agent.statistics(this.appliedFilters);
        if (res.data.code === "SUCCESS") {
          this.statistics = res.data.data.statistics;
        }
      } catch (error) {
        console.error("Error fetching statistics:", error);
        this.$handleApiError(error);
      } finally {
        this.fetching = false;
      }
    },
  },
};
</script>
