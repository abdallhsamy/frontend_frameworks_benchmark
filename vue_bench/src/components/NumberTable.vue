<script setup>
import {onMounted, ref} from "vue";

const numbers = ref([])
const maxNumber = ref(10001000)

const initTable = onMounted(() => {
  // generateNumberRange()

  setInterval(() => {
    numbers.value = []
    generateNumberRange()
  }, 1)
})

const generateNumberRange = () => {
  for (let i = 1; i <= 150; i++) {
    numbers.value.push(randomize(i));
  }
}

const randomize = (number) => {
  return number * Math.floor(Math.random() * 98453679845367)
}

const colors = [
  '#F9FAFB',
  '#F3F4F6',
  '#E5E7EB',
  '#D1D5DB',
  '#9CA3AF',
  '#6B7280',
  '#4B5563',
  '#374151',
  '#1F2937',
  '#111827',
  '#FDF2F2',
  '#FDE8E8',
  '#FBD5D5',
  '#F8B4B4',
  '#F98080',
  '#F05252',
  '#E02424',
  '#C81E1E',
  '#9B1C1C',
  '#771D1D',
  '#FDFDEA',
  '#FDF6B2',
  '#FCE96A',
  '#FACA15',
  '#E3A008',
  '#C27803',
  '#9F580A',
  '#8E4B10',
  '#723B13',
  '#633112',
  '#F3FAF7',
  '#DEF7EC',
  '#BCF0DA',
  '#84E1BC',
  '#31C48D',
  '#0E9F6E',
  '#057A55',
  '#046C4E',
  '#03543F',
  '#014737',
  '#EBF5FF',
  '#E1EFFE',
  '#C3DDFD',
  '#A4CAFE',
  '#76A9FA',
  '#3F83F8',
  '#1C64F2',
  '#1A56DB',
  '#1E429F',
  '#233876',
  '#F0F5FF',
  '#E5EDFF',
  '#CDDBFE',
  '#B4C6FC',
  '#8DA2FB',
  '#6875F5',
  '#5850EC',
  '#5145CD',
  '#42389D',
  '#362F78',
  '#F6F5FF',
  '#EDEBFE',
  '#DCD7FE',
  '#CABFFD',
  '#AC94FA',
  '#9061F9',
  '#7E3AF2',
  '#6C2BD9',
  '#5521B5',
  '#4A1D96',
  '#FDF2F8',
  '#FCE8F3',
  '#FAD1E8',
  '#F8B4D9',
  '#F17EB8',
  '#E74694',
  '#D61F69',
  '#BF125D',
  '#99154B',
  '#751A3D',
]

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}
const getRandomBackgroundClass = () => {
  return `bg-[${getRandomColor()}]`
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-3" scope="col">
          Item A
        </th>
        <th class="px-6 py-3" scope="col">
          Item B
        </th>
        <th class="px-6 py-3" scope="col">
          Item C
        </th>
        <th class="px-6 py-3" scope="col">
          Item D
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="number in numbers" :key="number" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th :style="{ 'color' : getRandomColor() }"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
          {{ randomize(number) }}
        </th>
        <td :style="{ 'color' : getRandomColor() }" class="px-6 py-4">
          {{ randomize(number) }}
        </td>
        <td :style="{ 'color' : getRandomColor() }" class="px-6 py-4">
          {{ randomize(number) }}
        </td>
        <td :style="{ 'color' : getRandomColor() }" class="px-6 py-4">
          {{ randomize(number) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>

</style>