<template>
  <div>
    <div class="bb mb4">
      <div class="mb1">
        <span class="i">{{item.id}} </span>
        <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link> {{item.time | timeSince}} ago</div>
        <div class="f6" v-html="item.text"></div>
        <div class="i f6 gray">
          kids: {{item.kids}}
        </div>

      </div>
      <ul class="ml3">
        <comment v-for="id in item.kids" :key="id" :id="id"></comment>
      </ul>
    </div>
  </template>

<script>
import axios from "~/plugins/axios"
export default {
  name: 'comment',
  data() {
    return {
      item: {}
    }
  },
  props: [
  'id'
  ],
  async beforeMount() {
    const response = await axios.get(`item/${this.id}.json`)
    this.item = response.data
  }
}
</script>