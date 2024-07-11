<template>
    <div class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]">
        <p class="tw-p-2 tw-font-bold tw-text-lg">Delivery</p>
        <div class="tw-h-fullx tw-flex tw-gap-2">
            <div class="tw-w-fit">
                <apexchart type="radialBar" height="300" :options="options" :series="series"></apexchart>
            </div>
            <div class="tw-flex-1 tw-p-2 tw-flex tw-flex-col tw-gap-4 tw-justify-center">
                <div v-for="c in data.deliveries" :key="c" class="tw-flex tw-items-center tw-gap-2">
                    <div :style="{ background: c.color }" class="tw-p-0 tw-px-1 tw-rounded tw-text-[10px] tw-font-bold tw-text-white tw-text-center tw-w-[35px]">{{ c.percentage }}</div>
                    <p class="tw-text-smx tw-font-semibold">{{ c.name }} <span class="tw-text-xs">({{ new Intl.NumberFormat().format(c.value)  }})</span></p>
                </div> 
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref({
    deliveries: [
        { name: 'Total', value: 45032, percentage: '100%', color: '#000' },
        { name: 'Delivered', value: 2254, percentage: '77%', color: '#10b981' },
        { name: 'Shipped', value: 2252, percentage: '77%', color: '#8b5cf6' },
        { name: 'Canceled', value: 22511, percentage: '77%', color: '#e11d48' },
        { name: 'No Answer', value: 2252, percentage: '77%', color: '#f59e0b' },
        { name: 'Others', value: 225, percentage: '77%', color: '#64748b' },
    ]
})

const series = ref([27]);

const options = ref({
  chart: {
    type: 'radialBar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function (val) {
            return parseInt(val) + '%';
          },
          color: '#111',
          fontSize: '36px',
          show: true
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    colors: series.value[0] > 50 ? ['#38bdf8'] : ['#f43f5e'],
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: series.value[0] > 50 ? ['#38bdf8', '#06b6d4'] : ['#f43f5e', '#e11d48'],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Delivered']
});
</script>

<style>
/* Add any custom styles here */
</style>