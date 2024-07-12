<template>
    <div v-if="loading" class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]">
        <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Delivery</p>
            <p class="tw-px-1 tw-bg-sky-500 tw-text-white tw-text-sm tw-rounded"><icon icon="eos-icons:three-dots-loading" class="tw-text-xl" /></p>
        </div>

        <div class="tw-flex tw-gap-x">
            <div class="tw-w-[50%] tw-p-5 tw-h-[280px] tw-flex tw-items-center tw-justify-center">
                <div class="tw-w-[90%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-aspect-square tw-animate-pulse">
                </div>
            </div>
            <div class="tw-w-[50%] tw-p-2 tw-h-[280px] tw-flex tw-justify-center tw-flex-col tw-gap-5">
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
                <div class="tw-w-[60%] tw-p-2 tw-bg-gray-100 tw-rounded-full tw-animate-pulse"></div>
            </div>
        </div>
    </div>
    <div v-else class="tw-bg-white tw-p-2 tw-border tw-border-solid tw-border-gray-200 tw-h-[350px]">
      <div class="tw-flex tw-items-center tw-gap-2">
            <p class="tw-p-2 tw-font-bold tw-text-lg">Delivery</p>
            <p class="tw-px-1 tw-bg-sky-500 tw-text-white tw-text-sm tw-rounded">{{ new Intl.NumberFormat().format(total)  }}</p>
        </div>
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
import { ref, computed } from 'vue';
import Analytics from '@/api/Analytics'

const loading = ref(true);
const total = ref(0);
const totalDelivered = ref(0);

const data = ref({
    deliveries: [
        // { name: 'Total', value: 45032, percentage: '100%', color: '#000' },
        // { name: 'Delivered', value: 2254, percentage: '77%', color: '#10b981' },
        // { name: 'Shipped', value: 2252, percentage: '77%', color: '#8b5cf6' },
        // { name: 'Canceled', value: 22511, percentage: '77%', color: '#e11d48' },
        // { name: 'No Answer', value: 2252, percentage: '77%', color: '#f59e0b' },
        // { name: 'Others', value: 225, percentage: '77%', color: '#64748b' },
    ]
})

const series = ref([27]);

const options = computed(() => ({
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
}));


const getData = async () => {
    loading.value = true;
    await Analytics.getDeliveriesCount()
    .then(
        res => {
            if(res.data.code == 'SUCCESS') {
                handleData(res.data.data)
            }
        },
        err => {
            console.log(err)
        }
    )
    loading.value = false
}

const handleData = dt => {
    total.value = dt.reduce((p, n) => p + n.count, 0)

    let result = [];

    // total
    let totalCount = total.value
    let totalPercentage = 100;
    let totalOrders = { name: 'Total', value: totalCount, percentage: `${totalPercentage}%`, color: '#000' };
    // result.push(totalOrders)
    totalOrders

    // new
    let newCount = dt.find(o => o.delivery == null)?.count ?? 0;
    let newPercentage = newCount > 0 ? ((newCount / total.value) * 100).toFixed(0) : 0;
    let newOrders = { name: 'Not Selected', value: newCount, percentage: `${newPercentage}%`, color: '#000' };
    result.push(newOrders)

    // paid
    let paidCount = dt.find(o => o.delivery == 'paid')?.count ?? 0;
    let paidPercentage = paidCount > 0 ? ((paidCount / total.value) * 100).toFixed(0) : 0;
    let paid = { name: 'Paid', value: paidCount, percentage: `${paidPercentage}%`, color: '#06b6d4' };

    // cleared
    let clearedCount = dt.find(o => o.delivery == 'cleared')?.count ?? 0;
    let clearedPercentage = clearedCount > 0 ? ((clearedCount / total.value) * 100).toFixed(0) : 0;
    let cleared = { name: 'Cleared', value: clearedCount, percentage: `${clearedPercentage}%`, color: '#38bdf8' };


    // delivered
    let deliveredCount = dt.find(o => o.delivery == 'livrer')?.count ?? 0;
    let deliveredPercentage = deliveredCount > 0 ? ((deliveredCount / total.value) * 100).toFixed(0) : 0;
    let delivered = { name: 'Delivered', value: deliveredCount, percentage: `${deliveredPercentage}%`, color: '#10b981' };
    result.push(delivered)
    totalDelivered.value = deliveredCount
    series.value = [(parseFloat(deliveredPercentage) + parseFloat(paidPercentage) + parseFloat(clearedPercentage)).toFixed(2)]
    console.log(series.value)

    // transfer
    let transferCount = dt.find(o => o.delivery == 'transfer')?.count ?? 0;

    // shipped
    let shippedCount = dt.find(o => o.delivery == 'expidier')?.count ?? 0 + transferCount;
    let shippedPercentage = shippedCount > 0 ? ((shippedCount / total.value) * 100).toFixed(0) : 0;
    let shipped = { name: 'Shipped', value: shippedCount, percentage: `${shippedPercentage}%`, color: '#8b5cf6' };
    result.push(shipped)

    
    result.push(paid)

    
    result.push(cleared)

    // dispatched
    let dispatchedCount = dt.find(o => o.delivery == 'dispatcher')?.count ?? 0;
    let dispatchedPercentage = dispatchedCount > 0 ? ((dispatchedCount / total.value) * 100).toFixed(0) : 0;
    let dispatched = { name: 'Dispatched', value: dispatchedCount, percentage: `${dispatchedPercentage}%`, color: '#f59e0b' };
    result.push(dispatched)

    // others
    let othersCount = total.value - (newCount + deliveredCount + shippedCount + paidCount + clearedCount + dispatchedCount);
    let othersPercentage = othersCount > 0 ? ((othersCount / total.value) * 100).toFixed(0) : 0;
    let others = { name: 'Others', value: othersCount, percentage: `${othersPercentage}%`, color: '#64748b' };
    result.push(others)

    data.value.deliveries = result;
}

getData();

</script>

<style>
/* Add any custom styles here */
</style>